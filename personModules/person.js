console.log("person file");

var age = require('./age');
var birthplace = require('./birthplace');
var location = require('./location');
var name = require('./name');
var twitter = require('./twitter');
var Person = require('../models/model');

//TO DO: create new Person object
var makeNewUser = function() {
  var aPerson = new Person({
    personName: name(),
    personAge: age(1, 124),
    personLocation: location(),
    personBirthplace: birthplace(),
    personTwitter: twitter()
  });
  aPerson.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("aPerson saved successfully");
    }
  });
  return aPerson;
};

module.exports = makeNewUser;
