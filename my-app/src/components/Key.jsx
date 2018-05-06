import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/key.css';

class Key extends Component {

  static propTypes = {
    note: PropTypes.string,
    isHighlighted: PropTypes.bool,
    onClick: PropTypes.func
  };

  render() {
    const { note, isHighlighted, onClick } = this.props;
    const styles = 'key ' + (isHighlighted ? 'key--highlighted' : '');

    return (
      <div className={ styles } onClick={ onClick }>
        <div className='key__note'> { note } </div>
      </div>
    );
  }
}

export default Key;
