import React, {Component} from 'react';
import Key from './Key';
import '../css/keyboard.css';
import '../css/partial.css';
import Display from "./Display";

class Keyboard extends Component {

  static noteToIndex = {
    'C': 0,
    'D': 1,
    'E': 2,
    'F': 3,
    'G': 4,
    'A': 5,
    'B': 6
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      clicked: new Array(7).fill(0)
    };
  }

  shouldComponentUpdate(nextState) {
    return this.state.clicked !== nextState.clicked
      ||  this.state.text !== nextState.clicked;
  }

  handleKeyPress(note) {
    const idx     = Keyboard.noteToIndex[note],
          oldText = this.state.text,
          newClicked = new Array(7).fill(0);

    // every key but the current pressed one is toggled off
    newClicked[idx] = 1;

    this.setState({
      text: oldText + note + ' ',
      clicked: newClicked
    });
  }

  renderPartialKey(isBlack) {
    const styles = isBlack ? 'partial--black' : 'partial--white';

    return (
      <div className={'partial ' + styles}/>
    );
  }

  renderKey(note, isHighlighted) {
    const onClick = this.handleKeyPress.bind(this, note);

    return (
      <Key
        isHighlighted={ isHighlighted }
        note={ note }
        onClick={ onClick }
      />
    )
  }

  renderBlackKeys() {
    const gaps    = [0, 0, 1,
                     1, 0, 1,
                     1, 0, 0,
                     0, 0, 1,
                     1, 0, 1,
                     1, 0, 1,
                     1, 0, 0],
          partials = gaps.map(i => this.renderPartialKey(i));

    return (
      <div className='keyboard__keys--black'>
        { partials }
      </div>
    )
  }

  renderWhiteKeys() {
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

    const keys = [];
    for (var i = 0; i < notes.length; i++) {
      keys.push(this.renderKey(notes[i], this.state.clicked[i]));
    }

    return (
      <div className='keyboard__keys--white'>
        { keys }
      </div>
    );
  }

  render() {
    return (
      <div className='keyboard'>
        <div className='keyboard__keys'>
          { this.renderWhiteKeys() }

          { this.renderBlackKeys() }
        </div>

        <Display
          text={ this.state.text }
        />

        <textarea rows="4" cols="50">

        </textarea>

        <button></button>

      </div>
    );
  }
}

export default Keyboard;