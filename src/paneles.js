/*
!!!!!!   poner este fichero en el node-module  de echarts  !!!!
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {

    if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
      // CommonJS
      factory(exports, require('echarts'));
    } else {
      // Browser globals
      factory({}, root.echarts);
    }
  }(this, function (exports, echarts) {
    const c = 1
    const f = 1
    var log = function (msg) {
      if (typeof console !== 'undefined') {
        console && console.error && console.error(msg);
      }
    }
    if (!echarts) {
      log('ECharts is not Loaded');
      return;
    }
    if (!echarts.registerMap) {
      log('ECharts Map is not loaded')
      return;
    }
    echarts.registerMap('pk',
  
    // =====================================
  
    {
      "type": "FeatureCollection",
      "features": [
          {
              "type": "Feature",
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [
                    -4.12811279296875,
                    0.5273363048115169
                  ],
                  [
                    1.14532470703125,
                    0.703107352436491
                  ],
                  [
                    1.14532470703125,
                    3.6888551431470478
                  ],
                  [
                    -4.47967529296875,
                    3.8642546157214084
                  ],
                  [
                    -4.12811279296875,
                    0.5273363048115169
                  ]
                ]
              },
              "properties": {}
            },
        //  panel
        {
          "type": "Feature",
          "properties": {
            "name": "NO11"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  0.0, 0.0
                ],
                [
                  1.0, 0.0
                ],
                [
                  1.0, 0.5
                ],
                [0.0, 0.5]
              ]
            ]
          }
        },
  
        //  panel
        {
          "type": "Feature",
          "properties": {
            "name": "NO12"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  0.0 + 1 * c,
                  0.0 + 0 * f
                ],
                [
                  1.0 + 1 * c,
                  0.0
                ],
                [
                  1.0 + 1,
                  0.5
                ],
                [
                  0.0 + 1,
                  0.5
                ]
              ]
            ]
          }
          //  panel
  
        }, {
          "type": "Feature",
          "properties": {
            "name": "NO13"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  0.0 + 2 * c,
                  0.0
                ],
                [
                  1.0 + 2 * c,
                  0.0
                ],
                [
                  1.0 + 2,
                  0.5
                ],
                [
                  0.0 + 2,
                  0.5
                ]
              ]
            ]
          }
        }
      ]
    }
  
    // =======================================
    );
  }));