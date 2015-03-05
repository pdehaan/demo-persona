var express = require('express');
var verify = require('browserid-verify')();

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/images', function(req, res, next) {
  res.render('/public/images');
});

router.post('/auth/login', function(req, res, next) {
  console.log('assertion: %s', req.body.assertion);
  verify(req.body.assertion, 'localhost:5000', function(err, email, response) {
    if (err) {
      // make sure no session is created
      return console.log('There was an error : ' + err);
    }

    // If email is set, then the assertion was ok and response contains the full response.
    // Set up your session and cookie as normal.

    // If email is not set, then the request was fine but the assertion didn't check out.
    // Do not set up the session and cookie. Instead provide a message to your users.

    console.log('The asserted email address is : ' + email);
    console.log('The entire reponse is :', response);
  });

  res.render('auth/login', { title: 'Login' });
});

router.post('/auth/logout', function(req, res, next) {
  res.render('auth/logout', { title: 'Logout' });
});

module.exports = router;
