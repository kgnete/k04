import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pp from './pp.jsx'



import ReactEcharts from 'echarts-for-react';
import { greatCircle, point } from '@turf/turf';
import Map from './map.jsx'


console.log(greatCircle([0, 0], [100, 10]));
console.log(point([100, 0]));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>turf
          </p>
          <a
            className="App-link"
            href="http://turfjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn turf
          </a>
        </header>
      <Map/>
      </div>
    );
  }
}

export default App;


