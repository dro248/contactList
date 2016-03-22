var dao = require('../models/DAO');

var contactSchema = dao.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    photo: String
  },
  {collection: 'contacts'});

var Contact = dao.model('Contact', contactSchema);

// Contact database access methods go here
module.exports = {
  /**
   * Get all of the contacts from the contacts collection
   */
  getAll: function() {

    Contact.find(function(err, contactList) {
      console.log(contactList);
    });

    var hardCoded = [
      {
        name: "santi",
        phone: "9737273220",
        email: "santiago.verdu.01@gmail.com",
        photo: "google.com",
        address: "186 Lake Shore Drive"
      }
    ];
    return hardCoded;
  },
  /**
   * Inserts a contact into the contacts collection
   * a contact has a name, phone, email, photo, address
   */
  addContact: function(contact) {
    Contact.insert(contact);
  }
}