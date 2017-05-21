import React from 'react';

import LoMoCover from './LoMo';

import '../res/lo-lo-mo.less';


export default class LoLoMo extends React.Component {
  handleMoClick(movie) {
    if (typeof this.props.onMoClick === 'function') {
      this.props.onMoClick(movie);
    }
  }

  render() {
    return (
      <ul className="ocn-lo-lo-mo">
        {this.props.data.map((cluster, i) => (
          <li key={`cluster-${i}`}>
            <div className="title">{cluster._tags.join(', ')}</div>
            <LoMoCover data={cluster.movies} displayCheck={this.props.displayCheck} onMoClick={movie => this.handleMoClick(movie)} />
          </li>
        ))}
      </ul>
    );
  }
}
