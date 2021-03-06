var express = require('express');
var router = express.Router();

var contacts = require("../models/Contact");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET contacts */
router.get('/contacts/list', function(req, res, next) {
  var listPromise = contacts.getAll();
  listPromise.then(function(list) {
    var filteredList = list.filter(is_valid);
    res.setHeader('Content-Type', 'application/json');
    res.json(filteredList);
  });
});

/* POST add a contact to the database */
router.post('/addContact', function(req, res, next) {
  if (is_valid(req.body)) {
    if (contacts.addContact(req.body)) {
      res.status(200).send("success");
    } else {
      res.status(500).send("error");
    }
  } else {
    res.status(400).send("error");
  }
});

function is_valid(c) {
  if (c.name === "" || (c.phone === "" && c.address === "")) {
    return false;
  }
  return true;
}

router.post('/delete/contact', function(req, res, next) {
  console.log("This is the request Body for the: " + req.body);
  if (contacts.removeContact(req.body.contactId)) {
    res.status(200).send("success");
  } else {
    res.status(500).send("error");
  }
});

module.exports = router;
