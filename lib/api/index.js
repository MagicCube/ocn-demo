const request = require('request-promise');
const { Router } = require('express');
const router = Router();

const movieClusters = require('../../data/clusters-25.json');
const { movies, getMovie } = require('../data/movies');
const { getRecommendations } = require('../model/CFModel');

router.get('/movie/cluster', (req, res) => {
  const results = [];
  if (!req.session.wechat.user.favs) {
    req.session.wechat.user.favs = [];
  }
  const favs = req.session.wechat.user.favs.map(id => {
    const m = getMovie(id);
    return {
      id: m.id,
      img: m.images.large
    }
  });
  results.push({
    _tags: ['我的最爱'],
    movies: favs
  });

  const recommendations = getRecommendations(req.session.wechat.user.favs);
  results.push({
    _tags: ['我的专属推荐'],
    movies: recommendations
  });

  for (let i = 0; i < 5; i++) {
    results.push(movieClusters[i]);
  }
  res.send(results);
});

router.get('/movie', (req, res) => {
  const results = [];
  for (let i = 0; i < 100; i++) {
    const m = movies[i];
    results.push({
      id: m.id,
      img: m.images.large
    });
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
  const user = req.session.wechat.user;
  console.info(`[${user.nickname}]成功绑定了[${user.ocnId}]设备。`);
  res.send('ok');
});

router.post('/user/favs', (req, res) => {
  req.session.wechat.user.favs = req.body;
  res.send(req.session.wechat.user.favs);
});

router.post('/purchase', (req, res) => {
  const user = req.session.wechat.user;
  const movie = getMovie(req.body.movieId);
  console.info(`[${user.nickname}]购买了[${movie.title}]。即将被推送到[${user.ocnId}]设备上。`);
  res.send('ok');
});

module.exports = router;
