import React from 'react';
import { render } from 'react-dom';

import App from '../../app/DetailApp';

import './detail.html';
import '../../res/detail.less';


render(
  <App />,
  document.getElementById('ocn-detail')
);
