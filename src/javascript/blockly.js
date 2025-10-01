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
            .appendField(new Blockly.FieldNumber(10, 0), "DIST")
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
            .appendField(new Blockly.FieldNumber(1, 0), "DIST")
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

Blockly.Blocks['activate_pin'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Activate Pin ")
            .appendField(new Blockly.FieldNumber(1, 0), "DIST")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("Activate a specific pin");
    }
}

Blockly.Blocks['camera_detects_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When camera detects object")
            .appendField(new Blockly.FieldTextInput("object"), "OBJECT");
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("Triggered when the camera sees the specified object");
    }
};

Blockly.Blocks['camera_gesture'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When hand camera gesture =")
            .appendField(new Blockly.FieldDropdown([
                ["Up", "HAND_UP"],
                ["Left", "HAND_LEFT"],
                ["Right", "HAND_RIGHT"]
            ]), "GESTURE");
        this.setNextStatement(true, null);
        this.setColour(120);
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
                ["Yes", "SPEECH_YES"],
                ["No", "SPEECH_NO"],
                ["Up", "SPEECH_UP"],
                ["Down", "SPEECH_DOWN"],
                ["Left", "SPEECH_LEFT"],
                ["Right", "SPEECH_RIGHT"],
                ["On", "SPEECH_ON"],
                ["Off", "SPEECH_OFF"],
                ["Stop", "SPEECH_STOP"],
                ["Go", "SPEECH_GO"],
                ["Silence", "SPEECH_SILENCE"],
                ["Unknown", "SPEECH_UNKNOWN"]
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
            .appendField(new Blockly.FieldNumber(10, 0), "DIST")
            .appendField("cm");
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("Triggered when the distance sensor reads less than the specified value");
    }
};

Blockly.Blocks['on_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When robot starts");
        this.appendStatementInput("DO")
            .appendField("do");
        this.setColour(300);
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
        this.appendStatementInput("DO")
            .appendField("do");
        this.setColour(300);
        this.setTooltip("Triggered when a specific button is pressed");
    }
};

const blockHandlers = {
    robot_forward: b => ({action: "moveForward", value: parseInt(b.getFieldValue("DIST"))}),
    robot_backward: b => ({action: "moveBackward", value: parseInt(b.getFieldValue("DIST"))}),
    robot_left: b => ({action: "moveLeft", value: parseInt(b.getFieldValue("DIST"))}),
    robot_right: b => ({action: "moveRight", value: parseInt(b.getFieldValue("DIST"))}),
    robot_stop: () => ({action: "stop"}),
    wait: b => ({action: "wait", value: parseInt(b.getFieldValue("DIST"))}),
    robot_detects: () => ({condition: "robotDetectsObstacle"}),
    robot_detects_bottle: () => ({condition: "robotDetectsBottle"}),
    turn_left: b => ({action: "turnLeft", value: parseInt(b.getFieldValue("ANGLE"))}),
    turn_right: b => ({action: "turnRight", value: parseInt(b.getFieldValue("ANGLE"))}),
    activate_pin: b => ({action: "activatePin", value: parseInt(b.getFieldValue("DIST"))}),
    math_number: b => ({type: "number", value: Number(b.getFieldValue("NUM"))}),
    text: b => ({type: "text", value: b.getFieldValue("TEXT")})
};

// Dit hier is voor de JSON-bestand aanmaken voor de robot.
function blockToJson(block) {
    if (!block) return null;

    if (blockHandlers[block.type]) {
        return blockHandlers[block.type](block);
    }
    switch (block.type) {
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

        case "controls_whileUntil": {
            const mode = block.getFieldValue("MODE");

            const condBlock = block.getInputTargetBlock("BOOL");
            const condition = blockToJson(condBlock);

            const doBlock = block.getInputTargetBlock("DO");
            const commands = [];
            let current = doBlock;
            while (current) {
                const cmd = blockToJson(current);
                if (cmd) commands.push(cmd);
                current = current.getNextBlock();
            }

            return {
                type: mode === "UNTIL" ? "repeatUntil" : "while",
                condition,
                commands
            };
        }

        case "math_arithmetic": {
            const left = blockToJson(block.getInputTargetBlock("A"));
            const right = blockToJson(block.getInputTargetBlock("B"));
            const op = block.getFieldValue("OP");
            return {type: "math", op, left, right};
        }

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