import React from 'react';

import MoCover from './MoCover';

import '../res/lo-mo.less';


export default class LoMo extends React.Component {
  static defaultProps = {
    data: []
  }

  handleMoClick(movie) {
    if (typeof this.props.onMoClick === 'function') {
      this.props.onMoClick(movie);
    }
  }

  render() {
    return (
      <ul className="ocn-lo-mo">
        {
          (this.props.data && this.props.data.length) ?
          (this.props.data.map(movie => (
            <li key={movie.id} onClick={() => this.handleMoClick(movie)}>
              <MoCover data={movie} />
              <div className='check' />
            </li>
          )))
          :
          <li className="empty">(无)</li>
        }
      </ul>
    );
  }
}
