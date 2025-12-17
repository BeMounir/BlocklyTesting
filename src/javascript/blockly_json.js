const blockHandlers = {
    start_robot: () => ({action: "start_test"}),
    stop_robot: () => ({action: "stop_test"}),
    robot_forward: b => ({action: "moveForward", value: parseInt(b.getFieldValue("VALUE"))}),
    robot_backward: b => ({action: "moveBackward", value: parseInt(b.getFieldValue("VALUE"))}),
    robot_left: b => ({action: "moveLeft", value: parseInt(b.getFieldValue("VALUE"))}),
    robot_right: b => ({action: "moveRight", value: parseInt(b.getFieldValue("VALUE"))}),
    robot_stop: () => ({action: "stop"}),
    wait: b => ({action: "wait", value: parseInt(b.getFieldValue("VALUE"))}),
    robot_detects: () => ({condition: "robotDetectsObstacle"}),
    robot_detects_bottle: () => ({condition: "robotDetectsBottle"}),
    turn_left: b => ({action: "turnLeft", value: parseInt(b.getFieldValue("ANGLE"))}),
    turn_right: b => ({action: "turnRight", value: parseInt(b.getFieldValue("ANGLE"))}),
    on_start: () => ({action: "onStart"}),
    camera_detects_object: () => ({action: "cameraDetectsObject", value: "WIP",}),
    camera_gesture: b => ({action: "cameraGesture", value: b.getFieldValue("GESTURE"),}),
    microphone_sound: b => ({action: "microphoneSound", value: b.getFieldValue("SPEECH_DETECTION"),}),
    button_pressed: b => ({action: "buttonPressed", value: b.getFieldValue("BUTTON"),}),
    activate_led: b => ({action: "activateLed", pin: parseInt(b.getFieldValue("VALUE")), color: b.getFieldValue("COLOR")}),
    activate_all_leds: b => ({action: "activateAllLeds", color: b.getFieldValue("COLOR")}),
    deactivate_led: b => ({action: "deactivateLed", pin: parseInt(b.getFieldValue("VALUE")),}),
    distance_sensor_value: b => ({action: "getDistanceSensorValue", op: b.getFieldValue("BUTTON"),
        value: parseInt(b.getFieldValue("VALUE"))}),
    deactivate_all_leds: () => ({action: "deactivateLed"}),
    obstacle_distance: b => ({
        action: "obstacleDistance",
        op: b.getFieldValue("BUTTON"),
        value: parseInt(b.getFieldValue("VALUE"))
    }),
    sound_intensity: b => ({
        action: "soundIntensity",
        op: b.getFieldValue("BUTTON"),
        value: parseInt(b.getFieldValue("VALUE"))
    }),
    math_number: b => ({type: "number", value: Number(b.getFieldValue("NUM"))}),
    text: b => ({type: "text", value: b.getFieldValue("TEXT")}),

    controls_if: b => {
        // Helper to collect commands from a DO input
        const collectCommands = (inputName) => {
            const commands = [];
            let current = b.getInputTargetBlock(inputName);
            while (current) {
                const cmd = blockToJson(current);
                if (cmd) commands.push(cmd);
                current = current.getNextBlock();
            }
            return commands;
        };

        // Build the root IF
        const rootIf = {
            type: "if",
            condition: blockToJson(b.getInputTargetBlock("IF0")),
            commands: collectCommands("DO0")
        };

        let currentIf = rootIf;
        let i = 1;

        while (b.getInput("IF" + i)) {
            const nextIf = {
                type: "if",
                condition: blockToJson(b.getInputTargetBlock("IF" + i)),
                commands: collectCommands("DO" + i)
            };

            currentIf.else = nextIf;
            currentIf = nextIf;
            i++;
        }

        if (b.getInput("ELSE")) {
            currentIf.else = {
                commands: collectCommands("ELSE")
            };
        }

        return rootIf;
    },


    controls_repeat_ext: b => {
        const timesBlock = b.getInputTargetBlock("TIMES");
        const times = timesBlock ? blockToJson(timesBlock) : parseInt(b.getFieldValue("TIMES"));

        const doBlock = b.getInputTargetBlock("DO");
        const commands = [];
        let current = doBlock;
        while (current) {
            const cmd = blockToJson(current);
            if (cmd) commands.push(cmd);
            current = current.getNextBlock();
        }
        return {type: "repeat", times, commands};
    },

    controls_whileUntil: b => {
        const mode = b.getFieldValue("MODE");
        const condBlock = b.getInputTargetBlock("BOOL");
        const condition = blockToJson(condBlock);

        const doBlock = b.getInputTargetBlock("DO");
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
    },

    math_arithmetic: b => {
        const left = blockToJson(b.getInputTargetBlock("A"));
        const right = blockToJson(b.getInputTargetBlock("B"));
        const op = b.getFieldValue("OP");
        return {type: "mathArithmetic", op, left, right};
    },

    logic_compare: b => {
    const left = blockToJson(b.getInputTargetBlock("A"));
    const right = blockToJson(b.getInputTargetBlock("B"));
    const op = b.getFieldValue("OP");
    return {type: "logicCompare", op, left, right};
},

    text_print: b => {
        const valueBlock = b.getInputTargetBlock("TEXT");
        const value = blockToJson(valueBlock);
        return {type: "print", value};
    },

    event_call: b => {
        const condBlock = b.getInputTargetBlock("COND");
        const doBlock = b.getInputTargetBlock("DO");
        const condition = blockToJson(condBlock);

        const commands = [];
        let current = doBlock;
        while (current) {
            const cmd = blockToJson(current);
            if (cmd) commands.push(cmd);
            current = current.getNextBlock();
        }
        return {type: "if", condition, commands};
    },
    random_number: b => {
        const min = parseInt(b.getFieldValue("MIN"));
        const max = parseInt(b.getFieldValue("MAX"));
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        return {type: "number", value: randomValue};
    },
};

function blockToJson(block) {
    if (!block) return null;
    const handler = blockHandlers[block.type];
    return handler ? handler(block) : null;
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
