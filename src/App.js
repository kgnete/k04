import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { greatCircle, point } from '@turf/turf';

console.log(greatCircle([0, 0], [100, 10]));
console.log(point([100, 0]));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.ssddddxxss
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
