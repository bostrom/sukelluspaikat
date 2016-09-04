var browserify = require('browserify-middleware');
var express = require('express');
var router = express.Router();

router.get('/bundle.js', browserify('./public/javascripts/application.js', {
  cache: true,
  precompile: true
}));

router.get('*', function(req, res, next) {
  res.sendfile('../public/index.html');
});

module.exports = router;
