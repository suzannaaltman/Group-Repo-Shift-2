var birthplace = require("./birthplace");
var locations = require("./locations");
var names = require("./names");
var twitter = require("./twitterHandles");
var age = require("./age");
var User = require("../../models/usermodel");

var createNewUser = function() {
  var newUser = new User ({
    birthplace : birthplace(),
    location : locations(),
    name : names(),
    twitter : twitter(),
    age : age()
  }); //  Create new user object

  newUser.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("User saved successfully!");
    }
  }); //  Save to database
  return newUser;
};

module.exports = createNewUser;
