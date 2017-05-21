const config = require('config');
const request = require('request-promise');
const { Router } = require('express');

const router = Router();

router.get('/redirect', (req, res) => {
  const code = req.query.code;
  request({
    url: `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${config.get('wechat.appId')}&secret=${config.get('wechat.appSecret')}&code=${code}&grant_type=authorization_code`,
    json: true
  }).then((body) => {
    if (body.errcode) {
      console.error(body.errcode);
      res.status(500).send(`Internal Error: ${JSON.stringify(body.errcode)}`);
    } else {
      const accessToken = body.access_token;
      const openId = body.openid;
      request({
        url: `https://api.weixin.qq.com/sns/userinfo?access_token=${accessToken}&openid=${openId}&lang=zh_CN`,
        json: true
      }).then((user) => {
        req.session.wechat = {
          openId,
          accessToken,
          user
        };
        console.info(req.session.wechat);
        res.redirect('/');
      }, (err) => {
        console.error(err);
        res.status(500).send(`Internal Error: 102`);
      });
    }
  }, (err) => {
    console.error(err);
    res.status(500).send(`Internal Error: 101`);
  });
});

module.exports = router;
