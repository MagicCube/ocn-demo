import React from 'react';

import { purchase } from '../api';

import '../res/mo-detail.less';


export default class MoDetail extends React.PureComponent {
  render() {
    const { movie } = this.props;
    return (
      <div className="ocn-mo-detail" style={{ backgroundImage: `url(${movie.images.large})` }}>
        <div className="bottom">
          <div className="content">
            <h1>{movie.title}</h1>
            <div className="info">
              <span className="rating">{movie.rating.average}分</span>
              <span className="duration">{movie.durations[0]}</span>
              <span className="year">{movie.year}年</span>
            </div>
            <button className="primary button" onClick={() => purchase(movie.id)}>¥5 购买并推送至我的电视</button>
          </div>
        </div>
      </div>
    );
  }
}
