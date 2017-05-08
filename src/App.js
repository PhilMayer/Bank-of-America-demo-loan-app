import React, { Component } from 'react';
import ProgressBar from './progress-bar.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ProgressBar} alt="progress bar" />
        </div>
      </div>
    );
  }
}

export default App;
