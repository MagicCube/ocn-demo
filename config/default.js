const appId = process.env.APP_ID;
const appSecret = process.env.APP_SECRET;

module.exports = {
  wechat: {
    appId: appId || 'wxcd1ad2cfb81d38ef',
    appSecret: appSecret || '9b8ec7388c37dc02ff1d6d66587882af',
    redirectUrl: 'http://ocn.daoapp.io/oauth/wechat/redirect'
  },
  security: {
    allowAnonymous: ['/oauth/wechat/redirect', '/detail.html']
  }
};
