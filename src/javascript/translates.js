let currentLanguage = 'en';

const translations = {
    en: {
        // Movement
        robot_forward: "Move forward",
        robot_forward_tooltip: "Move the robot forward",
        robot_backward: "Move backward",
        robot_backward_tooltip: "Move the robot backward",
        robot_left: "Move left",
        robot_left_tooltip: "Move the robot left",
        robot_right: "Move right",
        robot_right_tooltip: "Move the robot right",
        robot_stop: "Stop moving",
        robot_stop_tooltip: "Stop the robot",
        turn_left: "Turn left",
        turn_left_tooltip: "Turn the robot left",
        turn_right: "Turn right",
        turn_right_tooltip: "Turn the robot right",
        wait: "Wait",
        wait_tooltip: "Wait for a number of seconds",

        // Events
        start_robot: "Start robot",
        start_robot_tooltip: "Start the robot",
        stop_robot: "Stop robot",
        stop_robot_tooltip: "Stop the robot",
        on_start: "When robot starts",
        on_start_tooltip: "Triggered when the robot starts",
        button_pressed: "When button",
        button_pressed_tooltip: "Triggered when a button is pressed",

        // Sensors / logic
        robot_detects: "Robot detects obstacle",
        robot_detects_tooltip: "True if an obstacle is detected",
        robot_detects_bottle: "Robot detects bottle",
        robot_detects_bottle_tooltip: "True if a bottle is detected",
        obstacle_distance: "Obstacle distance",
        obstacle_distance_tooltip: "Checks obstacle distance",
        distance_sensor_value: "Distance sensor value",
        distance_sensor_value_tooltip: "Returns distance sensor value",
        distance_sensor_less_than: "When distance is less than",
        distance_sensor_less_than_tooltip: "Triggered when distance is below value",
        sound_intensity: "When sound intensity",
        sound_intensity_tooltip: "Triggered by sound intensity",

        // Camera
        camera_detects_object: "When camera detects object",
        camera_detects_object_tooltip: "Triggered when camera sees an object",
        camera_gesture: "When camera gesture",
        camera_gesture_tooltip: "Triggered by hand gesture",
        camera_watch: "Camera detects object",
        camera_watch_tooltip: "Returns true if camera detects something",
        camera_ml_label: "Camera ML label",
        camera_ml_label_tooltip: "Last predicted camera label",

        // LEDs
        activate_led: "Set LED color",
        activate_led_tooltip: "Set a specific LED color",
        activate_all_leds: "Set all LEDs color",
        activate_all_leds_tooltip: "Set all LEDs to a color",
        deactivate_led: "Turn off LED",
        deactivate_led_tooltip: "Turn off a specific LED",
        deactivate_all_leds: "Turn off all LEDs",
        deactivate_all_leds_tooltip: "Turn off all LEDs",

        // Utility
        random_number: "Random number",
        random_number_tooltip: "Generate a random number"
    },

    nl: {
        // Movement
        robot_forward: "Ga vooruit",
        robot_forward_tooltip: "Laat de robot vooruit bewegen",
        robot_backward: "Ga achteruit",
        robot_backward_tooltip: "Laat de robot achteruit bewegen",
        robot_left: "Ga naar links",
        robot_left_tooltip: "Laat de robot naar links bewegen",
        robot_right: "Ga naar rechts",
        robot_right_tooltip: "Laat de robot naar rechts bewegen",
        robot_stop: "Stoppen",
        robot_stop_tooltip: "Laat de robot stoppen",
        turn_left: "Draai links",
        turn_left_tooltip: "Draai de robot naar links",
        turn_right: "Draai rechts",
        turn_right_tooltip: "Draai de robot naar rechts",
        wait: "Wacht",
        wait_tooltip: "Wacht een aantal seconden",

        // Events
        start_robot: "Start robot",
        start_robot_tooltip: "Start de robot",
        stop_robot: "Stop robot",
        stop_robot_tooltip: "Stop de robot",
        on_start: "Wanneer robot start",
        on_start_tooltip: "Wordt uitgevoerd bij het starten",
        button_pressed: "Wanneer knop wordt ingedrukt",
        button_pressed_tooltip: "Wordt uitgevoerd bij een knopdruk",

        // Sensors / logic
        robot_detects: "Robot ziet obstakel",
        robot_detects_tooltip: "Waar als er een obstakel is",
        robot_detects_bottle: "Robot ziet fles",
        robot_detects_bottle_tooltip: "Waar als een fles wordt gezien",
        obstacle_distance: "Afstand tot obstakel",
        obstacle_distance_tooltip: "Controleer afstand tot obstakel",
        distance_sensor_value: "Afstandssensor waarde",
        distance_sensor_value_tooltip: "Geeft afstandswaarde terug",
        distance_sensor_less_than: "Wanneer afstand kleiner is dan",
        distance_sensor_less_than_tooltip: "Wordt uitgevoerd bij korte afstand",
        sound_intensity: "Wanneer geluidsniveau",
        sound_intensity_tooltip: "Reageert op geluidssterkte",

        // Camera
        camera_detects_object: "Wanneer camera object ziet",
        camera_detects_object_tooltip: "Camera herkent object",
        camera_gesture: "Wanneer camera gebaar ziet",
        camera_gesture_tooltip: "Herken handgebaar",
        camera_watch: "Camera ziet object",
        camera_watch_tooltip: "Geeft waar terug bij object",
        camera_ml_label: "Camera ML label",
        camera_ml_label_tooltip: "Laatste cameravoorspelling",

        // Microphone
        microphone_sound: "Wanneer microfoon hoort",
        microphone_sound_tooltip: "Herken gesproken woord",
        microphone_ml_label: "Microfoon ML label",
        microphone_ml_label_tooltip: "Laatste audiovoorspelling",

        // LEDs
        activate_led: "Zet LED kleur",
        activate_led_tooltip: "Stel kleur van LED in",
        activate_all_leds: "Zet alle LEDs kleur",
        activate_all_leds_tooltip: "Stel kleur van alle LEDs in",
        deactivate_led: "Zet LED uit",
        deactivate_led_tooltip: "Zet één LED uit",
        deactivate_all_leds: "Zet alle LEDs uit",
        deactivate_all_leds_tooltip: "Zet alle LEDs uit",

        // Utility
        random_number: "Willekeurig getal",
        random_number_tooltip: "Genereer een willekeurig getal"
    }
};


document.addEventListener('DOMContentLoaded', () => {
    i18next.use(i18nextBrowserLanguageDetector).init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    "Workshop": " Workshop",
                    "New Project": " New Project",
                    "Load": " Load",
                    "Save": " Save",
                    "Presets": " Presets",
                    "Events": "Events",
                    "Movement": "Movement",
                    "Toon": "Toon",
                    "Sound": "Sound",
                    "Functions": "Functions",
                    "Logic": "Logic",
                    "Text": "Text",
                    "Variables": "Variables",
                    "Unsorted": "Unsorted",
                    "Connect": "Connect",
                    "Run": "Run",
                    "SaveProjectTitle": "Save Project",
                    "SaveProjectMessage": "Enter a project name:",
                    "OK": "OK",
                    "Cancel": "Cancel",
                    "MyProject": "MyProject"
                }
            },
            nl: {
                translation: {
                    "Workshop": " Workshop",
                    "New Project": " Nieuw Project",
                    "Load": " Laden",
                    "Save": " Opslaan",
                    "Presets": " Voorbeeldprogramma's",
                    "Events": "Evenementen",
                    "Movement": "Beweging",
                    "Toon": "Toon",
                    "Sound": "Geluid",
                    "Functions": "Functies",
                    "Logic": "Logica",
                    "Text": "Tekst",
                    "Variables": "Variabelen",
                    "Unsorted": "Ongeordend",
                    "Connect": "Verbind",
                    "Run": "Start",
                    "SaveProjectTitle": "Opslaan",
                    "SaveProjectMessage": "Voer een projectnaam in:",
                    "OK": "OK",
                    "Cancel": "Annuleren",
                    "MyProject": "MijnProject"
                }
            }
        }
    }, function(err, t) {
        if(err) console.error(err);
        translatePage();
    });

    function translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if(el.tagName === 'INPUT') {
                el.placeholder = i18next.t(key);
            } else {
                el.textContent = i18next.t(key);
            }
        });
        document.querySelectorAll('[title]').forEach(el => {
            const key = el.dataset.i18nTitle;
            if(key) el.title = i18next.t(key);
        });
    }

    document.getElementById('languageSelect').addEventListener('change', e => {
        const newLang = e.target.value;
        i18next.changeLanguage(newLang, translatePage);
    });
});