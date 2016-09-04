var express = require('express');
var router = express.Router();
var Location = require('../models/location');

/* GET locations listing. */
router.get('/', function (req, res, next) {
  Location.find().then(function (list) {
    res.json(list);
  }).catch(function (err) {
    res.send(err);
  });
});

// create todo and send back all todos after creation
router.post('/', function (req, res) {
  // create a todo, information comes from AJAX request from Angular
  Location.create({
    name: req.body.name,
    description: req.body.description,
    pos: [req.body.lon, req.body.lat]
  }).then(function (doc) {
    res.json(doc);
  }).catch(function (err) {
    res.send(err);
  });
});


router.delete('/:location_id', function (req, res) {
  Location.remove({
    _id: req.params.location_id
  }).then(function (todo) {
    res.send(200);
  }).catch(function (err) {
    res.send(err);
  });
});

module.exports = router;
