import React, {Component} from 'react';
import Key from './Key';
import '../css/keyboard.css';

class Keyboard extends Component {

  render() {
    return (
      <div className='keyboard'>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
        <Key/>
      </div>
    );
  }

}

export default Keyboard;