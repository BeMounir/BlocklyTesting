const presets = [
    {
        id: 1,
        name: "Hand Gesture",
        tags: ["ai"],
        xml: `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="controls_repeat_ext" x="20" y="20">
    <value name="TIMES">
      <shadow type="math_number">
        <field name="NUM">10</field>
      </shadow>
    </value>
  </block>
</xml>
    `,
        image: "src/image/presets/1.jpeg"
    },
    {
        id: 2,
        name: "Obstacle Avoidance",
        tags: ["sensors", "navigation"],
        xml: `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="start_robot" x="-195" y="-75">
    <next>
      <block type="wait">
        <field name="VALUE">5</field>
        <next>
          <block type="stop_robot"></block>
        </next>
      </block>
    </next>
  </block>
</xml>
    `,
        image: "src/image/presets/2.jpeg"
    },
    {
        id: 3,
        name: "Line Follower",
        tags: ["navigation"],
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
        image: "src/image/presets/2.jpeg"
    },
    {
        id: 4,
        name: "Bottle Detection",
        tags: ["ai", "camera"],
        xml: `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="start_robot" id="vL-l$@UStk(a6HjIEx!+" x="-195" y="-285">
    <next>
      <block type="wait" id="6je1\`v#LNKb)U*u4Y|x^">
        <field name="VALUE">3</field>
        <next>
          <block type="stop_robot" id="Q)wu.[UvwGy1[g:M;;)x">
            <next>
              <block type="wait" id=")V9f1ibI9U.LD96rd2!*">
                <field name="VALUE">3</field>
                <next>
                  <block type="start_robot" id="1qdxxKC|m!K~wwJGx~=z">
                    <next>
                      <block type="wait" id="v9Xc~]09tl7E3?0sf@TO">
                        <field name="VALUE">3</field>
                        <next>
                          <block type="stop_robot" id="{!_V/\`Q%B\`LQqPrK[dA=">
                            <next>
                              <block type="wait" id="$()*aSNT3@GJzSwne+)?">
                                <field name="VALUE">3</field>
                                <next>
                                  <block type="start_robot" id="ff/-8pbdqs]AMub@FMh6">
                                    <next>
                                      <block type="wait" id="!VqGbd^#VTu?\`2l_mn3j">
                                        <field name="VALUE">3</field>
                                        <next>
                                          <block type="stop_robot" id="eU\`x61m-aeit?vHucr%Q">
                                            <next>
                                              <block type="wait" id="fKC%;uK(-1j\`:2JUvsgC">
                                                <field name="VALUE">3</field>
                                                <next>
                                                  <block type="start_robot" id=",WHXzBA7F8gzKeQz^Um.">
                                                    <next>
                                                      <block type="wait" id="yp:6vt#:Kl\`6CQj]^+sS">
                                                        <field name="VALUE">3</field>
                                                        <next>
                                                          <block type="stop_robot" id="K^iP9LxdtJ4?2T(WFZho">
                                                            <next>
                                                              <block type="wait" id="qw)|%tR@wWrZaqCF#5-l">
                                                                <field name="VALUE">3</field>
                                                                <next>
                                                                  <block type="start_robot" id="]Yd)qK@3b)R$tx?ZsmUy">
                                                                    <next>
                                                                      <block type="wait" id="Po4Wc?QLL8MkUj-G|qsw">
                                                                        <field name="VALUE">3</field>
                                                                        <next>
                                                                          <block type="stop_robot" id="oV|7W[I8IUl4rA5rO;o_"></block>
                                                                        </next>
                                                                      </block>
                                                                    </next>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
    `,
        image: "src/image/presets/2.jpeg"
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
        image: "src/image/presets/2.jpeg"
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
        image: "src/image/presets/2.jpeg"
    },
];

