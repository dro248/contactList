var dao = require('../models/DAO');

var contactSchema = dao.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    photo: String
  },
  {collection: 'contacts'});

var Recipe = dao.model('Contact', contactSchema);

// Recipe database access methods go here
exports = {
  getAll: function() {
    return "Test. Contact array should be returned.";
  },
  /**
   * Returns a recipe by it's name
   */
  findByName: function(name) {
    return "findByName not implemented.";
  }
}