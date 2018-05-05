import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Key from './Key';
import '../css/keyboard.css';
import '../css/partial.css';
import Display from "./Display";

class Keyboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleKeyPress(note) {
    console.log(note);
    const oldText = this.state.text;
    this.setState({
      text: oldText + note + ' '
    });
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
          keys  = notes.map(note => this.renderKey(note));

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
      </div>
    );
  }
}

export default Keyboard;