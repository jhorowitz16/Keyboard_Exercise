import React, {Component} from 'react';
import Key from './Key';
import '../css/keyboard.css';

class Keyboard extends Component {

  render() {
    return (
      <div className='keyboard'>
        <Key note={'C'}/>
        <Key note={'D'}/>
        <Key note={'E'}/>
        <Key note={'F'}/>
        <Key note={'G'}/>
        <Key note={'A'}/>
        <Key note={'B'}/>
      </div>
    );
  }
}

export default Keyboard;