import React, { Component } from 'react';
import Keyboard from './components/Keyboard'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Keyboard onClick={ this.handleKeyPress }/>

      </div>
    );
  }
}

export default App;
