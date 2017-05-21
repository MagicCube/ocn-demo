import React from 'react';

import '../res/mo-cover.less';


export default class MoCover extends React.PureComponent {
  render() {
    return (
      <div className="ocn-mo-cover" style={{ backgroundImage: `url(${this.props.data.img})` }}></div>
    );
  }
}
