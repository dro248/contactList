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

module.exports = {
  /**
   * Get all of the contacts from the contacts collection
   */
  getAll: function() {
    return new Promise(function(resolve, reject) {
      Contact.find(function(err, contactList) {
        if (err) {
          console.log(err);
          reject(err);
        }
        console.log(contactList);
        resolve(contactList);
      });
    });
  },
  /**
   * Inserts a contact into the contacts collection
   * a contact has a name, phone, email, photo, address
   */
  addContact: function(contact) {
    return new Promise(function(resolve) {
      var c = new Contact(contact);
      c.save(function(err, obj) {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  },
  /**
   *  Delete a contact from the database based on the _id field
   */
  removeContact: function(contactId) {
    contact.findOne({_id: contactId}, function(err, contact) {
      console.log("delete contact");
      console.log(contact);
      contact.remove(function(err) {
        if (err) {
          return false;
        } else {
          return true;
        }
      });
    });
  }
};