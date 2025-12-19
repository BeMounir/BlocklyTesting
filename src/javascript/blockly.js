// Hoi dit is de configuratie voor blockly. Hier is de link voor alle setting opties:
// https://developers.google.com/blockly/guides/configure/web/configuration_struct#the_options_dictionary
const defaultOptions = {
    toolbox: document.getElementById('toolbox'),
    toolboxPosition: 'start',
    flyoutClass: 'permanentFlyout',
    renderer: 'geras',
    collapse: false,
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 1.2,
        minScale: 0.8,
        scaleSpeed: 1.2
    },
    grid: {
        spacing: 30,
        length: 3,
        colour: '#eaeaea',
        snap: true
    },
    move: { drag: true, wheel: true },
    trashcan: true
};

// Dit zijn de custom blocks voor de robot. Je kan hier meer blocks toevoegen als je wilt.
// Je kan gewoon eentje kopiëren en plakken en dan de naam en de velden aanpassen. Hier kan je documentatie vinden:
// https://developers.google.com/blockly/guides/create-custom-blocks/overview?hl=en

Blockly.FieldAngle = Blockly.FieldAngle || window.FieldAngle;
Blockly.FieldColour = Blockly.FieldColour || window.FieldColour;

function getText(blockName) {
    return translations[currentLanguage][blockName] || blockName;
}

Blockly.Blocks['start_robot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("src/image/test-circle.png", 15, 15, "*"))
            .appendField(getText("start_robot"));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#FF5733");
        this.setTooltip(getText("start_robot_tooltip"));
    }
};

Blockly.Blocks['stop_robot'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("stop_robot"));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#FF5733");
        this.setTooltip(getText("stop_robot_tooltip"));
    }
};

Blockly.Blocks['robot_forward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("robot_forward"))
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
            .appendField("cm");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#33C1FF");
        this.setTooltip(getText("robot_forward_tooltip"));
    }
};

Blockly.Blocks['robot_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("robot_left"))
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
            .appendField("cm");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#33C1FF");
        this.setTooltip(getText("robot_left_tooltip"));
    }
};

Blockly.Blocks['robot_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("robot_right"))
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
            .appendField("cm");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#33C1FF");
        this.setTooltip(getText("robot_right_tooltip"));
    }
};

Blockly.Blocks['robot_backward'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("robot_backward"))
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
            .appendField("cm");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#33C1FF");
        this.setTooltip(getText("robot_backward_tooltip"));
    }
};

Blockly.Blocks['robot_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("robot_stop"));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#33C1FF");
        this.setTooltip(getText("robot_stop_tooltip"));
    }
};

Blockly.Blocks['robot_detects'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("robot_detects"));
        this.setOutput(true, "Boolean");
        this.setColour(50);
        this.setTooltip(getText("robot_detects_tooltip"));
    }
};

Blockly.Blocks['robot_detects_bottle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("robot_detects_bottle"));
        this.setOutput(true, "Boolean");
        this.setColour(50);
        this.setTooltip(getText("robot_detects_bottle_tooltip"));
    }
};

Blockly.Blocks['wait'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("wait"))
            .appendField(new Blockly.FieldNumber(1, 0), "VALUE")
            .appendField(getText("seconds"));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#33C1FF");
        this.setTooltip(getText("wait_tooltip"));
    }
};

Blockly.Blocks['turn_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("turn_left"))
            .appendField(new Blockly.FieldAngle(90), "ANGLE")
            .appendField(getText("degrees"));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#33C1FF");
        this.setTooltip(getText("turn_left_tooltip"));
    }
};

Blockly.Blocks['turn_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("turn_right"))
            .appendField(new Blockly.FieldAngle(90), "ANGLE")
            .appendField(getText("degrees"));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#33C1FF");
        this.setTooltip(getText("turn_right_tooltip"));
    }
};

Blockly.Blocks['activate_led'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("activate_led"))
            .appendField(new Blockly.FieldNumber(1, 0), "VALUE")
            .appendField(getText("color"))
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#9B59B6");
        this.setTooltip(getText("activate_led_tooltip"));
    }
};

Blockly.Blocks['activate_all_leds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("activate_all_leds"))
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#9B59B6");
        this.setTooltip(getText("activate_all_leds_tooltip"));
    }
};

Blockly.Blocks['deactivate_led'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("deactivate_led"))
            .appendField(new Blockly.FieldNumber(1, 0), "VALUE");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#9B59B6");
        this.setTooltip(getText("deactivate_led_tooltip"));
    }
};

Blockly.Blocks['deactivate_all_leds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("deactivate_all_leds"));
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour("#9B59B6");
        this.setTooltip(getText("deactivate_all_leds_tooltip"));
    }
};

Blockly.Blocks['camera_detects_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("camera_detects_object"))
            .appendField(new Blockly.FieldTextInput(getText("object")), "OBJECT");
        this.setNextStatement(true);
        this.setColour("#FF5733");
        this.setTooltip(getText("camera_detects_object_tooltip"));
    }
};

Blockly.Blocks['camera_gesture'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("camera_gesture"))
            .appendField(new Blockly.FieldDropdown([
                [getText("up"), "UP"],
                [getText("left"), "LEFT"],
                [getText("right"), "RIGHT"]
            ]), "GESTURE");
        this.setNextStatement(true);
        this.setColour("#FF5733");
        this.setTooltip(getText("camera_gesture_tooltip"));
    }
};

Blockly.Blocks['camera_ml_label'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("camera_ml_label"));
        this.setOutput(true, "String");
        this.setColour(120);
        this.setTooltip(getText("camera_ml_label_tooltip"));
    }
};

Blockly.Blocks['distance_sensor_less_than'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("distance_sensor_less_than"))
            .appendField(new Blockly.FieldNumber(10, 0), "VALUE")
            .appendField("cm");
        this.setNextStatement(true);
        this.setColour("#FF5733");
        this.setTooltip(getText("distance_sensor_less_than_tooltip"));
    }
};

Blockly.Blocks['on_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("on_start"));
        this.setNextStatement(true);
        this.setColour("#FF5733");
        this.setTooltip(getText("on_start_tooltip"));
    }
};

Blockly.Blocks['button_pressed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("button_pressed"))
            .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"]]), "BUTTON")
            .appendField(getText("pressed"));
        this.setNextStatement(true);
        this.setColour("#FF5733");
        this.setTooltip(getText("button_pressed_tooltip"));
    }
};

Blockly.Blocks['obstacle_distance'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("obstacle_distance"))
            .appendField(new Blockly.FieldDropdown([["<", "<"], [">", ">"]]), "BUTTON")
            .appendField(new Blockly.FieldNumber(1, 0), "VALUE")
            .appendField("cm");
        this.setNextStatement(true);
        this.setColour("#FF5733");
        this.setTooltip(getText("obstacle_distance_tooltip"));
    }
};

Blockly.Blocks['distance_sensor_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("distance_sensor_value"))
            .appendField(new Blockly.FieldDropdown([["<", "<"], [">", ">"]]), "BUTTON")
            .appendField(new Blockly.FieldNumber(1, 0), "VALUE")
            .appendField("cm");
        this.setOutput(true, "Boolean");
        this.setColour(60);
        this.setTooltip(getText("distance_sensor_value_tooltip"));
    }
};

Blockly.Blocks['sound_intensity'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("sound_intensity"))
            .appendField(new Blockly.FieldDropdown([["<", "<"], [">", ">"]]), "BUTTON")
            .appendField(new Blockly.FieldNumber(1, 50), "VALUE");
        this.setNextStatement(true);
        this.setColour("#FF5733");
        this.setTooltip(getText("sound_intensity_tooltip"));
    }
};

Blockly.Blocks['random_number'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("random_number"))
            .appendField(new Blockly.FieldNumber(1, 0), "MIN")
            .appendField(getText("to"))
            .appendField(new Blockly.FieldNumber(10, 0), "MAX");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip(getText("random_number_tooltip"));
    }
};

Blockly.Blocks['camera_watch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(getText("camera_watch"));
        this.setOutput(true, "Boolean");
        this.setColour(210);
        this.setTooltip(getText("camera_watch_tooltip"));
    }
};


const customColors = {
    'controls_if': '#E67E22',
    'controls_if_elseif': '#E67E22',
    'controls_if_else': '#E67E22',
    'controls_repeat_ext': '#E67E22',
    'controls_whileUntil': '#E67E22',
    'math_number': '#F1C40F'
};

const originalInit = Blockly.Blocks['controls_if'].init;
Blockly.Blocks['controls_if'].init = function() {
    originalInit.call(this);
    this.setColour('#E67E22');
};


for (const [type, color] of Object.entries(customColors)) {
    if (Blockly.Blocks[type]) {
        const oldInit = Blockly.Blocks[type].init;
        Blockly.Blocks[type].init = function() {
            oldInit.call(this);
            this.setColour(color);
        };
    }
}
