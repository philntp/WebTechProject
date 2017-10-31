var express = require('express');
var router = express.Router();
var userService = require('../services/users-services');
/* GET users listing. */
router.post('/create', (req, res, next) => {
  userService.createUser(req.body)
  res.json(req.body)
});

module.exports = router;
