var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/images', function(req, res, next) {
  res.render('/public/images');
});

router.post('/auth/login', function(req, res, next) {
  res.render('auth/login', { title: 'Login' });
});

router.post('/auth/logout', function(req, res, next) {
  res.render('auth/logout', { title: 'Logout' });
});

module.exports = router;
