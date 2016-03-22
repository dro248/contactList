var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var dao = require("../models/DAO");
  var hardCoded = [
    {
      name: "santi",
      phone: "9737273220",
      email: "santiago.verdu.01@gmail.com",
      photo: "google.com",
      address: "186 Lake Shore Drive"
    }
  ]
  res.render('index', { contacts: hardCoded });
});

module.exports = router;
