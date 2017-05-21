const request = require('request-promise');
const { Router } = require('express');
const router = Router();

const movieClusters = require('../../data/clusters-25.json');

router.get('/movie/cluster', (req, res) => {
  const results = [];
  for (let i = 0; i < 5; i++) {
    results.push(movieClusters[i]);
  }
  res.send(results);
});

router.get('/movie/:id', (req, res) => {
  request({
    url: `http://api.douban.com/v2/movie/subject/${req.params.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`,
    json: true
  }).then(result => {
    res.send(result);
  });
});

router.get('/user', (req, res) => {
  res.send(req.session.wechat.user);
});

router.post('/user/bind-tv', (req, res) => {
  req.session.wechat.user.ocnId = req.body.id;
  res.send('ok');
});

module.exports = router;
