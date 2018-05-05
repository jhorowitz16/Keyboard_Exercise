import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/display.css';

class Display extends Component {

  static propTypes = {
    onClick: PropTypes.func
  };

  render() {
    return (
      <div className='display' >
        <div className='display__text'> { this.props.text } </div>
      </div>
    );
  }
}

export default Display;
