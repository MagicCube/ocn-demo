const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const config = require('config');
const connectMongo = require('connect-mongo');
//const mongoose = require('mongoose');
const request = require('request-promise');
const session = require('express-session');

const devMode = process.env.NODE_ENV !== 'production';
console.log(`Running in ${devMode ? 'DEV' : 'PRODUCTION'} mode.`);

// Setup Mongoose.
//require('../db/mongoose/setup');
//const url = process.env.MONGODB_CONNECTION ? `mongodb://${process.env.MONGODB_CONNECTION}` : 'mongodb://localhost/ocn';
//mongoose.connect(url);

// Instantialize express.
const app = express();
module.exports = app;

// Add HTTP body parsers.
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add cookie and session support.
app.use(cookieParser());
//const MongoStore = connectMongo(session);
app.use(session({
  secret: 'i$love%ocn!',
  resave: true,
  saveUninitialized: true
}));



// Wechat
function updateAccessToken() {
  request({
    url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${config.get('wechat.appId')}&secret=${config.get('wechat.appSecret')}`,
    json: true
  }).then((result) => {
    app.set('wechat.accessToken', result.access_token);
    //console.info(`Access token has been updated to ${result.access_token}.`);
    setTimeout(updateAccessToken, 60 * 1000);
  });
}
updateAccessToken();


app.use((req, res, next) => {
  if (!req.session.wechat && config.get('security.allowAnonymous').indexOf(req.path) === -1) {
    if (req.method.toLocaleLowerCase() === 'get') {
      res.redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.get('wechat.appId')}&redirect_uri=${encodeURIComponent(config.get('wechat.redirectUrl'))}&response_type=code&scope=snsapi_userinfo&state=login#wechat_redirect`);
    } else {
      res.status(403).end();
    }
  } else {
    next();
  }
});

app.use('/oauth/wechat', require('../oauth/wechat'));



// Webpack
if (devMode) {
  // Add Webpack
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, webpackConfig.devServer));
} else {
  app.use(express.static('public'));
}

app.use('/api', require('../api'));
