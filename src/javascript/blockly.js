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
    grid: false,
    css: true,
};

let currentLanguage = 'en';

const translations = {
    en: {
        robot_forward: "Move Forward ",
        robot_forward_tooltip: "Move the robot forward",
        robot_stop: "Stop Moving",
        robot_stop_tooltip: "Stop the robot",
    },
    nl: {
        robot_forward: "Ga Vooruit",
        robot_forward_tooltip: "Laat de robot vooruit bewegen",
        robot_stop: "Stoppen",
        robot_stop_tooltip: "Laat de robot stoppen",
    }
};

function getText(blockName) {
    return translations[currentLanguage][blockName] || blockName;
}

// Dit zijn de custom blocks voor de robot. Je kan hier meer blocks toevoegen als je wilt.
// Je kan gewoon eentje kopiëren en plakken en dan de naam en de velden aanpassen. Hier kan je documentatie vinden:
// https://developers.google.com/blockly/guides/create-custom-blocks/overview?hl=en

Blockly.Blocks['start_robot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("start robot");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip(getText("robot_forward_tooltip"));
    }
};

Blockly.Blocks['stop_robot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("stop robot");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip(getText("robot_forward_tooltip"));
    }
};

Blockly.Blocks['robot_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("robot_forward"))
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
            .appendField("cm");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip(getText("robot_forward_tooltip"));
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