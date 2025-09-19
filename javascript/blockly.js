// Hoi dit is de configuratie voor blockly. Hier is de link voor alle setting opties:
// https://developers.google.com/blockly/guides/configure/web/configuration_struct#the_options_dictionary
const defaultOptions = {
    toolbox: document.getElementById('toolbox'),
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    css: true,
};

Blockly.Blocks['robot_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move Forward ")
            .appendField(new Blockly.FieldNumber(10, 0), "DIST")
            .appendField("cm");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Move the robot forward");
    }
};

// Dit zijn de custom blocks voor de robot. Je kan hier meer blocks toevoegen als je wilt.
// Je kan gewoon eentje kopiëren en plakken en dan de naam en de velden aanpassen. Hier kan je documentatie vinden:
// https://developers.google.com/blockly/guides/create-custom-blocks/overview?hl=en

Blockly.Blocks['robot_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move Left ")
            .appendField(new Blockly.FieldNumber(10, 0), "DIST")
            .appendField("cm");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Move the robot left");
    }
};

Blockly.Blocks['robot_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move Right ")
            .appendField(new Blockly.FieldNumber(10, 0), "DIST")
            .appendField("cm");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Move the robot right");
    }
};

Blockly.Blocks['robot_backward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move Backward ")
            .appendField(new Blockly.FieldNumber(10, 0), "DIST")
            .appendField("cm");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Move the robot backward");
    }
};

Blockly.Blocks['robot_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Stop Moving ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(50);
        this.setTooltip("Stop the robot");
    }
};

Blockly.Blocks['event_call'] = {
    init: function () {
        this.appendValueInput("COND")
            .setCheck("Boolean")
            .appendField("If Robot");
        this.appendStatementInput("DO")
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Event handler block");
    }
};

Blockly.Blocks['robot_detects'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Robot detects obstacle");
        this.setOutput(true, "Boolean");
        this.setColour(50);
        this.setTooltip("Returns true if the robot detects an obstacle");
    }
};

Blockly.Blocks['wait'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Wait ")
            .appendField(new Blockly.FieldNumber(1, 0), "DIST")
            .appendField("Seconds ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Wait for specified seconds");
    }
};

// Dit hier is voor de JSON-bestand aanmaken voor de robot.
function blockToJson(block) {
    if (!block) return null;

    switch (block.type) {
        case "robot_forward":
            return {action: "moveForward", value: parseInt(block.getFieldValue("DIST"))};
        case "robot_backward":
            return {action: "moveBackward", value: parseInt(block.getFieldValue("DIST"))};
        case "robot_left":
            return {action: "moveLeft", value: parseInt(block.getFieldValue("DIST"))};
        case "robot_right":
            return {action: "moveRight", value: parseInt(block.getFieldValue("DIST"))};
        case "robot_stop":
            return {action: "stop"};
        case "wait":
            return {action: "wait", value: parseInt(block.getFieldValue("DIST"))};
        case "robot_detects":
            return {condition: "robotDetectsObstacle"};

        case "controls_if": {
            const conditionBlock = block.getInputTargetBlock("IF0");
            const condition = blockToJson(conditionBlock);

            const doBlock = block.getInputTargetBlock("DO0");
            const commands = [];
            let current = doBlock;
            while (current) {
                const cmd = blockToJson(current);
                if (cmd) commands.push(cmd);
                current = current.getNextBlock();
            }
            return {type: "if", condition, commands};
        }

        case "controls_repeat_ext": {
            const timesBlock = block.getInputTargetBlock("TIMES");
            const times = timesBlock ? blockToJson(timesBlock) : parseInt(block.getFieldValue("TIMES"));

            const doBlock = block.getInputTargetBlock("DO");
            const commands = [];
            let current = doBlock;
            while (current) {
                const cmd = blockToJson(current);
                if (cmd) commands.push(cmd);
                current = current.getNextBlock();
            }
            return {type: "repeat", times, commands};
        }

        case "math_number":
            return {type: "number", value: Number(block.getFieldValue("NUM"))};

        case "math_arithmetic": {
            const left = blockToJson(block.getInputTargetBlock("A"));
            const right = blockToJson(block.getInputTargetBlock("B"));
            const op = block.getFieldValue("OP");
            return {type: "math", op, left, right};
        }

        case "text":
            return {type: "text", value: block.getFieldValue("TEXT")};

        case "text_print": {
            const valueBlock = block.getInputTargetBlock("TEXT");
            const value = blockToJson(valueBlock);
            return {type: "print", value};
        }

        case "event_call": {
            const condBlock = block.getInputTargetBlock("COND");
            const doBlock = block.getInputTargetBlock("DO");
            const condition = blockToJson(condBlock);

            const commands = [];
            let current = doBlock;
            while (current) {
                const cmd = blockToJson(current);
                if (cmd) commands.push(cmd);
                current = current.getNextBlock();
            }
            return {type: "if", condition, commands};
        }
    }
    return null;
}

function workspaceToJson(workspace) {
    const blocks = workspace.getTopBlocks(true);
    const commands = [];

    blocks.forEach(block => {
        let current = block;
        while (current) {
            const cmd = blockToJson(current);
            if (cmd) commands.push(cmd);
            current = current.getNextBlock();
        }
    });
    return {commands};
}

function downloadWorkspace(workspace) {
    const xml = Blockly.Xml.workspaceToDom(workspace);
    const xmlText = Blockly.Xml.domToPrettyText(xml);
    const blob = new Blob([xmlText], {type: "text/xml"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blocks.xml";
    a.click();
    URL.revokeObjectURL(url);
}

function uploadWorkspace(workspace, file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const xmlText = e.target.result.trim();
            console.log("Loaded XML text:", xmlText);
            const xml = Blockly.Xml.textToDom ? Blockly.Xml.textToDom(xmlText) : Blockly.Xml.convertTextToDom(xmlText);
            Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
            setTimeout(() => {
                alert("Het laden van jouw file is gelukt!");
            }, 0.1);
        } catch (err) {
            console.error("Error loading blocks:", err);
            alert("Invalid Blockly XML file.");
        }
    };
    reader.readAsText(file);
}

window.addEventListener('DOMContentLoaded', () => {
    const workspace = Blockly.inject('blocklyDiv', defaultOptions);
    const textArea = document.getElementById('text');

    document.getElementById('runBtn').addEventListener('click', () => {
        const jsonData = workspaceToJson(workspace);
        if (jsonData.commands.length === 0) {
            textArea.value = 'Niks gestuurd, voeg code toe!';
            setTimeout(() => {
                alert("Geen code om te sturen!");
            }, 0.1);
        } else {
            textArea.value = JSON.stringify(jsonData, null, 2);
            setTimeout(() => {
                alert("Jouw code is naar de robot gestuurd!");
            }, 0.1);
            // alert(JSON.stringify(jsonData, null, 2));
            fetch("http://localhost:3000/save", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(jsonData),
            })
                .then(res => res.text())
                .then(msg => console.log(msg))
                .catch(err => console.error("Error:", err));
        }
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

    document.getElementById('saveBlocks').addEventListener('click', () => {
            if (workspace.getAllBlocks().length === 0) {
                alert("Er is niks om op te slaan!")
            } else {
                downloadWorkspace(workspace)
            }
        }
    );

    document.getElementById('loadBlocksBtn').addEventListener('click', () =>
        document.getElementById('loadBlocks').click()
    );

    document.getElementById('loadBlocks').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) uploadWorkspace(workspace, file);
        event.target.value = "";
    });
});