var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if(!req.session.views) {
    req.session.views = 0;
  }
  req.session.views++;
  res.render('index', {
    title: 'Express',
    user: req.user,
    views: req.session.views
  });
});

module.exports = router;
