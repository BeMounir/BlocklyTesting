const presets = [
    {
        id: 1,
        name: "Hand Gesture",
        tags: ["ai"],
        xml: `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="camera_direction" id="p?[3r*e#S.ly%%gwnPg." x="-225" y="-225">
    <field name="GESTURE">UP</field>
    <statement name="DO">
      <block type="activate_all_leds" id="$6x-L%]qAhxPZfBxsB(M">
        <field name="COLOR">#33cc00</field>
        <next>
          <block type="robot_forward" id="m=?p2dG?ig^Rnez)2?+i">
            <field name="VALUE">20</field>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
    `,
        image: "src/image/presets/1.jpeg"
    },
    {
        id: 2,
        name: "The Square",
        tags: ["basic", "navigation"],
        xml: `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="on_start" id="6K!JOB.SSoLo}?,jd8|P" x="-315" y="-195">
    <next>
      <block type="controls_forever" id="M-3M;:)9{OZ5U^TH}O9M">
        <statement name="DO">
          <block type="robot_forward" id="b}Y,Jd68)|#T[J?rdfKv">
            <field name="VALUE">10</field>
            <next>
              <block type="robot_right" id="f3:mt:e=9CCXEx/pXhM1">
                <field name="VALUE">10</field>
                <next>
                  <block type="robot_backward" id=":K/,QafBgisz4l!X?LOI">
                    <field name="VALUE">10</field>
                    <next>
                      <block type="robot_left" id="h6)kMQ7T3[Zo7xH\`v(}i">
                        <field name="VALUE">10</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </next>
  </block>
</xml>
    `,
        image: "src/image/presets/2.jpeg"
    },
    {
        id: 3,
        name: "Obstacle Detector",
        tags: ["navigation"],
        xml: `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="on_start" id=",{7n)PZ0Z_w)z}L^otK{" x="-345" y="-195">
    <next>
      <block type="controls_forever" id="yE4Q7*!+,]WLeW)@-O|:">
        <statement name="DO">
          <block type="controls_if" id="=9g!Tb%#i1xUno=?jdo2">
            <mutation else="1"></mutation>
            <value name="IF0">
              <block type="distance_sensor_value" id="]yV,8U@mT6[/4(aWVI@O">
                <field name="BUTTON">&lt;</field>
                <field name="VALUE">15</field>
              </block>
            </value>
            <statement name="DO0">
              <block type="robot_stop" id="%7;9b=*CCNXd~q/QkdP+">
                <next>
                  <block type="robot_backward" id="z^\`yx:(]7F{Cx^LZML^1">
                    <field name="VALUE">10</field>
                    <next>
                      <block type="turn_left" id="caO=yJ6[n7J]sj7%_r_5">
                        <field name="ANGLE">90</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
            <statement name="ELSE">
              <block type="robot_forward" id="p%$F6Hu-\`4BSw~Ot|g|b">
                <field name="VALUE">10</field>
              </block>
            </statement>
          </block>
        </statement>
      </block>
    </next>
  </block>
</xml>
    `,
        image: "src/image/presets/3.jpeg"
    },
    {
        id: 4,
        name: "Police Sirens",
        tags: ["basic"],
        xml: `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="button_pressed" id="\`i{1gbn@]L#|j.#kFI#F" x="-45" y="-195">
    <field name="BUTTON">A</field>
    <next>
      <block type="controls_forever" id="BL9GKv0cH@S5ML(|9S[d">
        <statement name="DO">
          <block type="activate_all_leds" id="L^eA9n|\`KGxDg%gr-9Q}">
            <field name="COLOR">#ff0000</field>
            <next>
              <block type="wait" id="KTb~V0~GSR{!RwKH)@x_">
                <field name="VALUE">1</field>
                <next>
                  <block type="activate_all_leds" id="+Wm(@MX:WkRm^!U;dyUj">
                    <field name="COLOR">#3333ff</field>
                    <next>
                      <block type="wait" id=")zSlbDX7mjhZk|Ck7G~5">
                        <field name="VALUE">1</field>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </next>
  </block>
</xml>
    `,
        image: "src/image/presets/4.jpeg"
    },
    {
        id: 5,
        name: "Preset 5",
        tags: ["basic"],
        xml: `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="text_print" x="80" y="80">
    <value name="TEXT">
      <shadow type="text">
        <field name="TEXT">test</field>
      </shadow>
    </value>
  </block>
</xml>
    `,
        image: "src/image/presets/5.jpeg"
    },
    {
        id: 6,
        name: "Preset 6",
        tags: ["basic"],
        xml: `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="text_print" x="80" y="80">
    <value name="TEXT">
      <shadow type="text">
        <field name="TEXT">test</field>
      </shadow>
    </value>
  </block>
</xml>
    `,
        image: "src/image/presets/6.jpeg"
    },
];

