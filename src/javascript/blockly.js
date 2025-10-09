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

// Dit zijn de custom blocks voor de robot. Je kan hier meer blocks toevoegen als je wilt.
// Je kan gewoon eentje kopiëren en plakken en dan de naam en de velden aanpassen. Hier kan je documentatie vinden:
// https://developers.google.com/blockly/guides/create-custom-blocks/overview?hl=en

Blockly.Blocks['robot_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move Forward ")
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
            .appendField("cm");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Move the robot forward");
    }
};

Blockly.Blocks['robot_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move Left ")
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
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
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
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
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
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
        this.setColour(160);
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

Blockly.Blocks['robot_detects_bottle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Robot detects bottle");
        this.setOutput(true, "Boolean");
        this.setColour(50);
        this.setTooltip("Returns true if the robot detects a bottle");
    }
};

Blockly.Blocks['wait'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Wait ")
            .appendField(new Blockly.FieldNumber(1, 0), "VALUE")
            .appendField("Seconds ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Wait for specified seconds");
    }
};

Blockly.Blocks['turn_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Turn Left ")
            .appendField(new Blockly.FieldAngle(90), "ANGLE")
            .appendField("degrees");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Turn the robot left by specified degrees");
    }
};

Blockly.Blocks['turn_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Turn Right ")
            .appendField(new Blockly.FieldAngle(90), "ANGLE")
            .appendField("degrees");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Turn the robot right by specified degrees");
    }
}

Blockly.Blocks['activate_led'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Stel LED ")
            .appendField(new Blockly.FieldNumber(1, 0), "VALUE")
            .appendField("op kleur ")
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOR")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("Activate a specific led");
    }
}

Blockly.Blocks['activate_all_leds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Stel alle LEDS op kleur ")
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOR")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("Activate all leds");
    }
}

Blockly.Blocks['deactivate_led'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Zet LED ")
            .appendField(new Blockly.FieldNumber(1, 0), "VALUE")
            .appendField("uit ")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("Deactivate a specific led");
    }
}

Blockly.Blocks['deactivate_all_leds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Zet alle LEDs uit")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip("Deactivate all LEDS");
    }
}

Blockly.Blocks['camera_detects_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When camera detects")
            .appendField(new Blockly.FieldTextInput("object"), "OBJECT");
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Triggered when the camera sees the specified object");
    }
};

Blockly.Blocks['camera_gesture'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When hand camera gesture =")
            .appendField(new Blockly.FieldDropdown([
                ["Up", "UP"],
                ["Left", "LEFT"],
                ["Right", "RIGHT"]
            ]), "GESTURE");
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Triggered when camera detects a specific gesture");
    }
};

Blockly.Blocks['camera_ml_label'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Camera last ML label");
        this.setOutput(true, "String");
        this.setColour(120);
        this.setTooltip("Returns the last label predicted by the camera ML model");
    }
};

Blockly.Blocks['microphone_sound'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When sound =")
            .appendField(new Blockly.FieldDropdown([
                ["Yes", "YES"],
                ["No", "NO"],
                ["Up", "UP"],
                ["Down", "DOWN"],
                ["Left", "LEFT"],
                ["Right", "RIGHT"],
                ["On", "ON"],
                ["Off", "OFF"],
                ["Stop", "STOP"],
                ["Go", "GO"],
                ["Silence", "SILENCE"],
                ["Unknown", "UNKNOWN"]
            ]), "SPEECH_DETECTION");
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Triggered when the microphone detects a specific keyword");
    }
};

Blockly.Blocks['microphone_ml_label'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Microphone last ML label ");
        this.setOutput(true, "String");
        this.setColour(60);
        this.setTooltip("Returns the last label predicted by the audio ML model");
    }
};

Blockly.Blocks['distance_sensor_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Distance (cm)");
        this.setOutput(true, "Number");
        this.setColour(180);
        this.setTooltip("Returns distance measured by the sensor in cm");
    }
};

Blockly.Blocks['distance_sensor_less_than'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When distance <")
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
            .appendField("cm");
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Triggered when the distance sensor reads less than the specified value");
    }
};

Blockly.Blocks['on_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When robot starts");
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Triggered when the robot starts");
    }
};

Blockly.Blocks['button_pressed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When button")
            .appendField(new Blockly.FieldDropdown([
                ["A", "A"],
                ["B", "B"]
            ]), "BUTTON")
            .appendField("pressed");
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Triggered when a specific button is pressed");
    }
};

Blockly.Blocks['obstacle_distance'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("At obstacle distance")
            .appendField(new Blockly.FieldDropdown([
                ["<", "<"],
                [">", ">"]
            ]), "BUTTON")
            .appendField(new Blockly.FieldNumber(1, 0), "VALUE")
            .appendField("cm");
        this.setColour(60);
        this.setNextStatement(true, null);
        this.setTooltip("True when obstacle distance matches condition");
    }
};

Blockly.Blocks['sound_intensity'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When sound intensity ")
            .appendField(new Blockly.FieldDropdown([
                ["<", "<"],
                [">", ">"]
            ]), "BUTTON")
            .appendField(new Blockly.FieldNumber(1, 50), "VALUE")
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Triggered when the distance sensor reads less than the specified value");
    }
};

Blockly.Blocks['random_number'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Random number from")
            .appendField(new Blockly.FieldNumber(1, 0), "MIN")
            .appendField("to")
            .appendField(new Blockly.FieldNumber(10, 0), "MAX");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("Returns a random number between two values");
    }
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

    document.getElementById('runBtn').addEventListener('click', () => {
        const jsonData = workspaceToJson(workspace);
        if (jsonData.commands.length === 0) {
            textArea.value = 'Niks gestuurd, voeg blocks toe!';
            setTimeout(() => {
                showCustomAlert("Geen code om te sturen!", "Waarschuwing");
            }, 0.1);
        } else {
            textArea.value = JSON.stringify(jsonData, null, 2);
            setTimeout(() => {
                showCustomAlert("Jouw code is naar de robot gestuurd!", "Success");
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

    document.getElementById('loadBlocksBtn').addEventListener('click', () =>
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
                    showCustomAlert("Workspace is leeggemaakt.", "Succes");}}, "Bevestiging");
    });
});