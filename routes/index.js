var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var dao = require("../models/DAO");
  res.render('index', { contacts: [] });
});

module.exports = router;
