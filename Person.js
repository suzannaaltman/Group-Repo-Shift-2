var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  personName: String,
  personAge: Number,
  personBirthplace: String,
  personLocation: String,
  personTwitter: String
})

var Person = mongoose.model('Person', personSchema);

module.exports = Person;
