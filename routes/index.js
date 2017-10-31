var express = require('express');
var router = express.Router();
var db = require('../services/connection');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
