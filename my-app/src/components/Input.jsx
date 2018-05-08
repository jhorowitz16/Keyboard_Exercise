import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/input.css';

class Input extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  };

  render() {
    return (
      <div className='input' >
        <textarea
          className='input__textarea'
          cols="5"
          onChange={ this.props.onChange }
          rows="1"
        />

        <button className='input__button' onClick={ this.props.onSubmit }>
          Play
        </button>
      </div>
    );
  }
}

export default Input;
