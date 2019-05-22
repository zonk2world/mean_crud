const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Person
let Person = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  }
},{
    collection: 'person'
});

module.exports = mongoose.model('Person', Person);
