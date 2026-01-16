let port;
let workspace;

function t(key) {
    return i18next.t(key);
}

function loadPreset(xmlString) {
    if (!xmlString || !workspace) return;

    try {
        const xmlDom = Blockly.utils.xml.textToDom(xmlString);
        workspace.clear();
        Blockly.Xml.domToWorkspace(xmlDom, workspace);
        console.log("Preset loaded.");
    } catch (err) {
        console.error("Error loading preset:", err);
    }
}

document.getElementById("connectBtn").onclick = async () => {
    port = await navigator.serial.requestPort();
    await port.open({baudRate: 115200});
    showCustomAlert(t("robot_connected_msg"), t("connected_title"));
};

async function uploadWorkspace(workspace, file) {
    try {
        const xmlText = await file.text();
        const xmlDom = Blockly.utils.xml.textToDom(xmlText);
        workspace.clear();
        Blockly.Xml.domToWorkspace(xmlDom, workspace);
        setTimeout(() => {
            showCustomAlert(t("load_success_msg"), t("success_title"));
        }, 0);
    } catch (err) {
        console.error("Error loading blocks:", err);
        showCustomAlert(t("load_error_msg"), t("warning_title"));
    }
}

window.addEventListener('DOMContentLoaded', () => {
    workspace = Blockly.inject('blocklyDiv', defaultOptions);
    const textArea = document.getElementById('text');

    let selectedCategory = 'events';

    const categories = {
        events: [
            'sound_intensity',
            'camera_detects_object',
            'camera_gesture',
            'on_start',
            'button_pressed',
            'obstacle_distance',
            'distance_sensor_less_than'
        ],
        movement: [
            'robot_forward',
            'robot_left',
            'robot_right',
            'robot_backward',
            'turn_left',
            'turn_right',
            'robot_stop',
            'wait'
        ],
        toon: [
            'activate_led',
            'activate_all_leds',
            'deactivate_led',
            'deactivate_all_leds'
        ],
        sound: [
        ],
        waarnemen: [
            // empty
        ],
        functions: [
            'math_number',
            'math_arithmetic',
            'logic_compare',
            'random_number'
        ],
        logic: [
            'controls_if',
            'controls_whileUntil',
            'controls_repeat_ext',
            'controls_forever',
            'camera_direction'
        ],
        text: [
            'text',
            'text_print'
        ],
        unsorted: [
            'camera_ml_label',
            'distance_sensor_value',
            'robot_detects',
            'robot_detects_bottle',
            'camera_watch'
        ],
        // variables: 'VARIABLE',
    };

    const flyout = workspace.getFlyout();

    if (flyout) {
        flyout.autoClose = false;
        flyout.setVisible(true);
    }

    workspace.registerButtonCallback('CREATE_VARIABLE', () => {
        Blockly.Variables.createVariable(workspace, (variableId) => {
            if (variableId) {
                if (selectedCategory === 'variables') {
                    refreshVariableFlyout();
                }
            }
        });
    });

    function refreshVariableFlyout() {
        let variableBlocks = Blockly.Variables.flyoutCategory(workspace);

        const xmlCreate = Blockly.utils.xml.createElement('button');
        xmlCreate.setAttribute('text', t('create_variable_btn'));
        xmlCreate.setAttribute('callbackKey', 'CREATE_VARIABLE');

        variableBlocks.unshift(xmlCreate);

        flyout.show(variableBlocks);
    }

    function showCategory(categoryName) {
        selectedCategory = categoryName;

        if (categoryName === 'variables') {
            refreshVariableFlyout();
            return;
        }

        const blockTypes = categories[categoryName] || [];
        const xmlArray = blockTypes.map(type => {
            const xml = Blockly.utils.xml.createElement('block');
            xml.setAttribute('type', type);
            return xml;
        });

        flyout.show(xmlArray);
    }
    document.querySelectorAll('#categoryButtons button').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedCategory = btn.dataset.category;
            showCategory(selectedCategory);
        });
    });

    showCategory(selectedCategory);

    document.getElementById("runBtn").addEventListener("click", async () => {
        if (!port) {
            showCustomAlert(t("not_connected_msg"), t("error_title"));
            return;
        }
        const jsonData = workspaceToJson(workspace);
        if (!jsonData.commands || jsonData.commands.length === 0) {
            textArea.value = t("no_code_msg");
            setTimeout(() => {
                showCustomAlert(t("no_code_msg"), t("warning_title"));
            }, 100);
            return;
        }
        textArea.value = JSON.stringify(jsonData, null, 2);
        try {
            const encoder = new TextEncoder();
            const writer = port.writable.getWriter();
            await writer.write(encoder.encode(JSON.stringify(jsonData)));
            writer.releaseLock();
            console.log("JSON sent to serial port:", jsonData);
        } catch (err) {
            console.error("Serial write error:", err);
            showCustomAlert(t("send_error_msg"), t("error_title"));
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
        showCustomAlert(t("code_sent_msg"), t("success_title"));
    });

    const savedXml = localStorage.getItem('blocklyWorkspace');
    if (savedXml) {
        try {
            const xml = Blockly.utils.xml.textToDom(savedXml);
            workspace.clear();
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
            showCustomAlert(t("workspace_empty_msg"), t("warning_title"));
            return;
        }

        showCustomPrompt(t("SaveProjectMessage"), t("MyProject"), t("SaveProjectTitle"), (projectName) => {
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

    document.getElementById('loadBlocks').addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (file) await uploadWorkspace(workspace, file);
        event.target.value = "";
    });


    document.getElementById('newBtnHeader').addEventListener('click', () => {
        showCustomConfirm(t("confirm_clear_workspace_msg"), (confirmed) => {
            if (confirmed) {
                workspace.clear();
                textArea.value = '';
                showCustomAlert(t("workspace_cleared_msg"), t("success_title"));
            }
        }, t("confirm_title"));
    });

    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLanguage = e.target.value;

        const xml = Blockly.Xml.workspaceToDom(workspace);
        workspace.clear();
        Blockly.Xml.domToWorkspace(xml, workspace);

        showCategory(selectedCategory);
    });

});

document.getElementById("presetBtnHeader").addEventListener("click", () => {
    showPresetPicker((chosenPreset) => {
        if (chosenPreset === null) return;
        const preset = presets.find(p => p.id === chosenPreset);
        if (preset) loadPreset(preset.xml);
        showCustomAlert(t("preset_loaded_msg"), t("success_title"));
    });
});