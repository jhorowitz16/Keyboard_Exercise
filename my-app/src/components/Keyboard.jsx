import React, {Component} from 'react';
import Key from './Key';
import '../css/keyboard.css';
import '../css/partial.css';

class Keyboard extends Component {

  renderPartialKey(isBlack) {
    const styles = isBlack ? 'partial--black' : 'partial--white';

    return (
      <div className={'partial ' + styles}>
      </div>
    );
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

  render() {
    return (
      <div className='keyboard'>
        <div className='keyboard--white'>
          <Key note={'C'}/>
          <Key note={'D'}/>
          <Key note={'E'}/>
          <Key note={'F'}/>
          <Key note={'G'}/>
          <Key note={'A'}/>
          <Key note={'B'}/>
        </div>

      { this.renderBlackKeys() }

      </div>
    );
  }
}

export default Keyboard;