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
    Contact.find(function(err, contactList) {
      if (err) {
        console.log(err);
      }
      return contactList || [];
    });
  },
  /**
   * Inserts a contact into the contacts collection
   * a contact has a name, phone, email, photo, address
   */
  addContact: function(contact) {
    var contact = new Contact(contact);
    contact.save(function(err) {
      if (err) {
        console.log("Could not save contact");
        return false;
      } else {
        console.log("Contact Saved.");
        return true;
      }
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