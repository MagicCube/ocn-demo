const config = require('config');
const request = require('request-promise');
const { Router } = require('express');
const sha1 = require('sha1');

const app = require('../app');

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
        console.info(`来自${user.city}的${user.sex === 1 ? '男' : '女'}性客户[${user.nickname}]已成功注册系统。`);
        res.redirect('/');
      }, (err) => {
        console.error(err);
        res.status(500).send('Internal Error: 102');
      });
    }
  }, (err) => {
    console.error(err);
    res.status(500).send('Internal Error: 101');
  });
});

router.get('/signature', (req, res) => {
  const { timestamp, noncestr } = req.query;
  let url = req.header('referer');
  let hashIndex = url.lastIndexOf('#');
  if (hashIndex !== -1) {
    url = url.substr(0, hashIndex);
  }
  const accessToken = app.get('wechat.accessToken');

  request({
    url: `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${accessToken}&type=jsapi`,
    json: true
  }).then((result) => {
    if (result.errcode) {
      console.error(result);
      res.send(result);
    } else {
      const ticket = result.ticket;
      const code = sha1(`jsapi_ticket=${ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`);
      res.send({
        errcode: 0,
        appId: config.get('wechat.appId'),
        code
      });
    }
  });
});

module.exports = router;
