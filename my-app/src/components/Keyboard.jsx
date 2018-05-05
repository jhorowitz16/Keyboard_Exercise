import React, {Component} from 'react';
import Key from './Key';
import '../css/keyboard.css';
import '../css/partial.css';

class Keyboard extends Component {

  handleKeyPress(note) {
    console.log(note);
    // console.log(note.target);
    // console.log(note.target);
  }

  renderPartialKey(isBlack) {
    const styles = isBlack ? 'partial--black' : 'partial--white';

    return (
      <div className={'partial ' + styles}/>
    );
  }

  renderKey(note) {
    const onClick = this.handleKeyPress.bind(this, note);

    return (
      <Key note={ note } onClick={ onClick }/>
    )
  }

  renderBlackKeys() {
    const gaps = [0, 0, 1,
      1, 0, 1,
      1, 0, 0,
      0, 0, 1,
      1, 0, 1,
      1, 0, 1,
      1, 0, 0];

    const partials = gaps.map(i => this.renderPartialKey(i));

    return (
      <div className='keyboard--black'>
        { partials }
      </div>
    )
  }

  renderWhiteKeys() {

    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    const keys = notes.map(note => this.renderKey(note));

    return (
      <div className='keyboard--white'>
        { keys }
      </div>
    );
  }

  render() {
    return (
      <div className='keyboard'>

      { this.renderWhiteKeys() }

      { this.renderBlackKeys() }

      </div>
    );
  }
}

export default Keyboard;