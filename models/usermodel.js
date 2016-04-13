var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  age: Number,
  birthplace: String,
  location: String,
  name: String,
  twitter: String
});

var User = mongoose.model("User", userSchema);

module.exports = User;
