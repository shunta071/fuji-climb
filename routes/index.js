'use strict';
const jade = require('jade');
var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST */
router.post('/', function(req, res, next) {
  res.render('result');
});


module.exports = router;
