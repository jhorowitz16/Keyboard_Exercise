import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/input.css';

class Input extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  render() {
    return (
      <div className='input' >
        <textarea rows="4" cols="50" onChange={ this.props.onChange }/>

        <button className='input__button'>Play</button>

      </div>
    );
  }
}

export default Input;
