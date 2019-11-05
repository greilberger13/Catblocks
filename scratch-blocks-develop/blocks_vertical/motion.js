/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.motion');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['PlaceAtBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_PLACEATXY,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 100
        },
        {
          "type": "field_number",
          "name": "ARG2",
          "value": 200
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


Blockly.Blocks['SetXBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SETXTO,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 100
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['SetYBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SETYTO,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 200
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['ChangeXByNBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_CHANGEXBY,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 100
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['ChangeYByNBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_CHANGEYBY,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 200
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['GoToBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_GOTO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ARG1",
          "options": [
            ["touch position", "TOUCH"]
          ]
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['IfOnEdgeBounceBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_IFONEDGEBOUNCE,
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['MoveNStepsBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_MOVESTEPS,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 10
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['TurnRightBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_TURNRIGHTDEGREES,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 15
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['TurnLeftBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_TURNLEFTDEGREES,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 15
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


Blockly.Blocks['PointInDirectionBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_POINTINDIRECTIONDEGREES,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 0
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['PointToBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_POINTTOWARDS,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ARG1",
          "options": [
            ["new...", "NEW"]
          ]
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['SetRotationStyleBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SETROTATIONSTYLE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ARG1",
          "options": [
            ["left-right only", "RIGHTLEFT"]
          ]
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


Blockly.Blocks['GlideToBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_GLIDESECONDTOXY,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 1
        },
        {
          "type": "field_number",
          "name": "ARG2",
          "value": 100
        },
        {
          "type": "field_number",
          "name": "ARG3",
          "value": 200
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


Blockly.Blocks['GoNStepsBackBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_GOBACKLAYER,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 1
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


Blockly.Blocks['ComeToFrontBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_GOTOFRONT,
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['VibrationBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_VIBRATEFORSECOND,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 1
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['SetPhysicsObjectTypeBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SETYOURMOTIONTYPETO,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ARG1",
          "options": [
            ["moving and bounce", "TOIT"]
          ]
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};



Blockly.Blocks['SetVelocityBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SETVELOCITYTO,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 0
        },
        {
          "type": "field_number",
          "name": "ARG2",
          "value": 0
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['TurnLeftSpeedBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SPINLEFTDEGREESSECOND,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 15
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['TurnRightSpeedBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SPINRIGHTDEGREESSECOND,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 15
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


Blockly.Blocks['SetGravityBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SETGRAVITYFORALLACTORSANDOBJECTSTO,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 0
        },
        {
          "type": "field_number",
          "name": "ARG2",
          "value": 0
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};


Blockly.Blocks['SetMassBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SETMASSTOKILOGRAM,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 1
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['SetBounceBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SETBOUNCEFACTORTO,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 80
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['SetFrictionBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MOTION_SETFRICTIONTO,
      "args0": [
        {
          "type": "field_number",
          "name": "ARG1",
          "value": 80
        }
      ],
      "category": Blockly.Categories.motion,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};
