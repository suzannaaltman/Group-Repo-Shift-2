var birthplace = require("./birthplace");
var locations = require("./locations");
var names = require("./names");
var twitter = require("./twitterHandles");
var age = require("./age");
var User = require("../../models/usermodel");

var newUser = new User ({
  birthplace : birthplace(),
  location : locations(),
  name : names(),
  twitter : twitter(),
  age : age()
});

// save to database here:


module.exports = newUser;
