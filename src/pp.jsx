import React, { Component } from 'react'
import turf from '@turf/turf';

export default class pp extends Component {
  render() {
var line = turf.lineString([[-83, 30], [-84, 36], [-78, 41]]);
var options = {units: 'miles'};
var along = turf.along(line, 200, options);

    return (
      <div>
        <h1>hola caracola</h1>
      </div>
    )
  }
}
