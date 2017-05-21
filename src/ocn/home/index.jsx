import React from 'react';
import { render } from 'react-dom';

import App from '../app/HomeApp';

import './index.html';
import '../res/home.less';

import { config as configWechat } from '../wechat';

configWechat(() => {
  render(
    <App />,
    document.getElementById('ocn-home')
  );
});
