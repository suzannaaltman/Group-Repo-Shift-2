var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lollipopGuild = new Schema ({
  personName: String,
  personAge: Number,
  personLocation: String,
  personBirthplace: String,
  personTwitter: String,
});

var Person = mongoose.model('Person', lollipopGuild);

module.exports = Person;
