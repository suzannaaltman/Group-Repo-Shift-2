var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  age: Number,
  location: String,
  birth: String,
  twitter: String,

})

var User = mongoose.model('People', userSchema);

module.exports = User;
