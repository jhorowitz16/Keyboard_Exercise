import React, {Component} from 'react';
import Key from './Key';
import Input from './Input';
import '../css/keyboard.css';
import '../css/partial.css';
import Display from "./Display";
import { sleep } from '../helpers'

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
      clicked: new Array(7).fill(0),
      input: '',
      slow: false,
      text: ''
    };
  }

  shouldComponentUpdate(nextState) {
    if (this.state.slow) {
      sleep(1000);
    }

    return this.state.clicked !== nextState.clicked
      ||  this.state.text !== nextState.text;
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

  handleInputChange(text) {
    const newValue = text.target.value;
    this.setState({
      text: newValue
    });
  }

  handleSubmitInput() {
    const keys = this.state.text;
    const noteArray = keys.split(',').map(c => c.toUpperCase().trim());
    const self = this;
    console.log(keys);
    console.log(noteArray);
    noteArray.push('N'); // end with a reset

    noteArray.forEach(function(note) {
      console.log("here with ", note);
      const newClicked = new Array(7).fill(0);
      debugger;
      if (noteArray.includes(note)) {
        newClicked[Keyboard.noteToIndex[note]] = 1;
      }
      console.log(">>> ", newClicked);

      setTimeout(() => {
        self.setState({
          clicked: newClicked,
          slow: true
        })
      }, 1000);
    });


    this.resetKeyboard();
  }

  resetKeyboard() {
    const newClicked = new Array(7).fill(0);
    this.setState({
      clicked: newClicked,
      slow: false
    });
  }

  renderInput(text) {
    const onChange = this.handleInputChange.bind(this);
    const onSubmit = this.handleSubmitInput.bind(this);

    return (
      <Input
        onChange={ onChange }
        onSubmit={ onSubmit }
      />
    )
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
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
          keys  = [];

    for (var i = 0; i < notes.length; i++) {
      keys.push(this.renderKey(notes[i], this.state.clicked[i] === 1));
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

        { this.renderInput( this.state.text ) }

      </div>
    );
  }
}

export default Keyboard;