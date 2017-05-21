import React from 'react';

import '../res/bind-tv-scene.less';


export default class BindTvScene extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBindButtonClick() {
    wx.scanQRCode({
      needResult: 1,
      scanType: ['qrCode', 'barCode'],
      success(res) {

      }
    });
  }

  render() {
    const { user } = this.props;
    return (
      <div className="ocn-bind-tv-scene ocn-scene">
        <div className="bottom">
          <div className="main">
            <h3>终于等到你了，{user.nickname}</h3>
            <div className="hint">打开机顶盒，在东方有线主界面中点击“我的二维码”</div>
            <button className="primary button" onClick={() => this.handleBindButtonClick()}>扫码绑定我的机顶盒</button>
          </div>
        </div>
      </div>
    );
  }
}
