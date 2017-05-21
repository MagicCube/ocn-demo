const { Router } = require('express');
const router = Router();

router.get('/user', (req, res) => {
  res.send(req.session.wechat.user);
});

module.exports = router;
