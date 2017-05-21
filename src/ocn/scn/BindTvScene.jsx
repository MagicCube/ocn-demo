import React from 'react';

import { bindTv } from '../api';

import '../res/bind-tv-scene.less';


export default class BindTvScene extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBindButtonClick() {
    wx.scanQRCode({
      needResult: 1,
      scanType: ['qrCode', 'barCode'],
      success: async (res) => {
        const ocnId = res.resultStr;
        await bindTv(ocnId);
        this.props.user.ocnId = ocnId;
        this.forceUpdate();
      }
    });
  }

  handleNextButtonClick() {
    if (this.props.nextStep) {
      this.props.nextStep();
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="ocn-bind-tv-scene ocn-scene">
        <div className="bottom">
          <div className="main">
            {this.renderMain(user)}
          </div>
        </div>
      </div>
    );
  }

  renderMain(user) {
    if (!user.ocnId) {
      return (
        <div className="main">
          <div className="thumbnail" style={{ backgroundImage: `url(${user.headimgurl})` }} ></div>
          <h3>终于等到你了，{user.nickname}</h3>
          <div className="hint">打开机顶盒，在东方有线主界面中点击“我的二维码”</div>
          <button className="primary button" onClick={() => this.handleBindButtonClick()}>扫码绑定我的机顶盒</button>
        </div>
      );
    } else {
      return (
        <div className="main">
          <div className="thumbnail" style={{ backgroundImage: `url(${user.headimgurl})` }} ></div>
          <h3>太棒了，<br/>你已经可以在手机上选片了！</h3>
          <div className="ocn-id">您的机顶盒唯一识别码为 {`{${user.ocnId}}`}</div>
          <button className="success button" onClick={() => this.handleNextButtonClick()}>下一步</button>
        </div>
      );
    }
  }
}
