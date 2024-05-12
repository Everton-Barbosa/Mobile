const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Company = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone_number: {
    type: Number
  },
  picture: {
    type: String
  },
  address: {
    type: String
  },
  password: {
    type: String
  },
  cnpj: {
    type: String
  },
  area: {
    type: String
  },
},{
    collection: 'Company'
});

module.exports = mongoose.model('Company', Company);