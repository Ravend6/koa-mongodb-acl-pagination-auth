'use strict';

var Router = require('koa-router');
var router = new Router();
var passport = require('koa-passport');
var localStrategy = require('../lib/passport/local-strategy');
var config = require('../config');
var authMdw = require('../middleware/auth');


router.get('login', '/login', function * (next) {
  yield this.render('auth/login');
});

router.post('/login', function * (next) {
  if (this.request.body.rememberMe) {
    this.session.maxAge = config.cookieMaxAge;
  }
  yield next;
}, localStrategy.login);

router.get('logout', '/logout', authMdw.loggedIn(), function * (next) {
  this.logout();
  this.session = null;
  this.redirect('/');
});


// Local
router.get('register', '/register', function * (next) {
  if (this.isAuthenticated()) {
    this.setFlash('info', 'Регистрация доступная только для гостей.');
    return this.redirect('/');
  }
  yield next;
}, function * (next) {
  yield this.render('auth/register');
});

router.post('/register', localStrategy.register);

module.exports = router;


// router.get('/login', function (req, res, next) {
//   res.render('auth/login', { title: 'Вход', notify: req.flash('notify') });
// });

// router.post('/login', function (req, res, next) {
//   if (req.body.rememberMe) {
//     req.session.cookie.maxAge = config.cookieMaxAge;
//   }
//   next();
// }, authLocal.login);

// router.get('/logout', authMdw.loggedIn, function (req, res) {
//   req.logout();
//   req.session.destroy();
//   res.redirect('/');
// });

// Local
// router.get('/register', function (req, res, next) {
//   res.render('auth/register', { title: 'Register', notify: req.flash('notify') });
// });

// router.post('/register', authMdw.registerValidation, authLocal.register);