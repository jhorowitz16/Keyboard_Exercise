import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/key.css';

class Key extends Component {

  static propTypes = {
    note: PropTypes.string
  };

  render() {
    console.log(this.props.note);
    return (
      <div className='key'>
        <div className='key__note'>
          { this.props.note }
        </div>
      </div>
    );
  }

}

export default Key;
