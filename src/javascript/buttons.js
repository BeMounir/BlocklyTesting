let port;
document.getElementById("connectBtn").onclick = async () => {
    port = await navigator.serial.requestPort();
    await port.open({baudRate: 115200});
    showCustomAlert("De robot is geconnect!", "Connected");
};

function uploadWorkspace(workspace, file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const xmlText = e.target.result.trim();
            console.log("Loaded XML text:", xmlText);
            const xml = Blockly.Xml.textToDom ? Blockly.Xml.textToDom(xmlText) : Blockly.Xml.convertTextToDom(xmlText);
            Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
            setTimeout(() => {
                showCustomAlert("Het laden van jouw file is gelukt!", "Success");
            }, 0.1);
        } catch (err) {
            console.error("Error loading blocks:", err);
            showCustomAlert("Geen goede Blockly XML file!", "Waarschuwing");
        }
    };
    reader.readAsText(file);
}

window.addEventListener('DOMContentLoaded', () => {
    const workspace = Blockly.inject('blocklyDiv', defaultOptions);
    const textArea = document.getElementById('text');

    document.getElementById("runBtn").addEventListener("click", async () => {
        if (!port) {
            showCustomAlert("Niet verbonden met de robot!", "Fout");
            return;
        }
        const jsonData = workspaceToJson(workspace);
        if (!jsonData.commands || jsonData.commands.length === 0) {
            textArea.value = 'Niks gestuurd, voeg blocks toe!';
            setTimeout(() => {
                showCustomAlert("Geen code om te sturen!", "Waarschuwing");
            }, 100);
            return;
        }
        textArea.value = JSON.stringify(jsonData, null, 2) + "\n";
        try {
            const encoder = new TextEncoder();
            const writer = port.writable.getWriter();
            await writer.write(encoder.encode(JSON.stringify(jsonData)));
            writer.releaseLock();
            console.log("JSON sent to serial port:", jsonData);
        } catch (err) {
            console.error("Serial write error:", err);
            showCustomAlert("Fout bij verzenden naar robot!", "Fout");
            return;
        }
        try {
            const response = await fetch("http://localhost:3000/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(jsonData),
            });
            const msg = await response.text();
            console.log("Server response:", msg);
        } catch (err) {
            console.error("Error sending to server:", err);
        }

        showCustomAlert("Jouw code is naar de robot gestuurd en opgeslagen!", "Success");
    });

    const savedXml = localStorage.getItem('blocklyWorkspace');
    if (savedXml) {
        try {
            const xml = Blockly.Xml.textToDom(savedXml);
            Blockly.Xml.domToWorkspace(xml, workspace);
            console.log("Workspace restored from localStorage.");
        } catch (e) {
            console.warn("Failed to load saved workspace:", e);
        }
    }

    workspace.addChangeListener(() => {
        const xml = Blockly.Xml.workspaceToDom(workspace);
        const xmlText = Blockly.Xml.domToText(xml);
        localStorage.setItem('blocklyWorkspace', xmlText);
    });

    document.getElementById('saveBlocksHeader').addEventListener('click', () => {
        if (workspace.getAllBlocks().length === 0) {
            showCustomAlert("Er is niks om op te slaan!", "Waarschuwing");
            return;
        }

        showCustomPrompt("Voer een projectnaam in:", "MijnProject","Opslaan" , (projectName) => {
            if (!projectName) return;

            const safeName = projectName.replace(/[^a-z0-9_\-]/gi, '_');
            const xml = Blockly.Xml.workspaceToDom(workspace);
            const xmlText = Blockly.Xml.domToPrettyText(xml);
            const blob = new Blob([xmlText], {type: "text/xml"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${safeName}.xml`;
            a.click();
            URL.revokeObjectURL(url);
        });
    });

    document.getElementById('loadBlocksHeader').addEventListener('click', () =>
        document.getElementById('loadBlocks').click()
    );

    document.getElementById('loadBlocks').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) uploadWorkspace(workspace, file);
        event.target.value = "";
    });

    document.getElementById('newBtn').addEventListener('click', () => {
        showCustomConfirm("Weet u zeker dat u uw workspace wilt leegmaken? Dit kan niet ongedaan worden gemaakt.", (confirmed) => {
            if (confirmed) {
                workspace.clear();
                textArea.value = '';
                showCustomAlert("Workspace is leeggemaakt.", "Succes");}}, "Bevestiging");
    });

    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLanguage = e.target.value;

        const xml = Blockly.Xml.workspaceToDom(workspace);
        workspace.clear();
        Blockly.Xml.domToWorkspace(xml, workspace);
    });
});