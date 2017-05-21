const { Router } = require('express');
const router = Router();

const movieClusters = require('../../data/clusters-25.json');

router.get('/movie', (req, res) => {
  res.send(movieClusters);
});

router.get('/user', (req, res) => {
  res.send(req.session.wechat.user);
});

router.post('/user/bind-tv', (req, res) => {
  req.session.wechat.user.ocnId = req.body.id;
  res.send('ok');
});

module.exports = router;
