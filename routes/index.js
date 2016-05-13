var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

 // if(err) return next(err);

  if(!req.session.views) {
    req.session.views = 0;
  }
  req.session.views++;
  res.render('index', {
    title: 'Contacts',
    user: req.user,
    views: req.session.views
  });
});

router.use(function(err, req, res, next){
    next();
})

module.exports = router;
