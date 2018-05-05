import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/key.css';

class Key extends Component {

  static propTypes = {
    note: PropTypes.string,
    onClick: PropTypes.func
  };

  render() {
    const {note, onClick} = this.props;

    return (
      <div className='key' onClick={ onClick }>
        <div className='key__note'> { note } </div>
      </div>
    );
  }
}

export default Key;
