var express = require('express');
var router = express.Router();

var Contact = require("../models/Contact");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { contacts: Contact.getAll() });
});

router.post('/addContact', function(req, res, next) {
  console.log("This is the request Body: " + req.body);
});

module.exports = router;
