//call on name, age, birthplace, location, twitter handle, and creates individual user. Then sends to the database.
var Person = require('../../Person');
// var express=require('express');
// var router=express.Router();
var name=require('./name');
var age=require('./age');
var birthplace=require('./birthplace');
var location=require('./location');
var twitter=require('./twitter');
// var app = express();

var makeNewPerson = function() {
  var newPerson = new Person({
    personAge: age(1, 150),
    personName: name(),
    personLocation: location(),
    personBirthplace: birthplace(),
    personTwitter: twitter()
  });

  newPerson.save(function(err){
    if(err){
      console.log('Error on save! Danger!');
    } else {
      console.log("saved successfully");
    }
  });
  return newPerson;
};

module.exports = makeNewPerson;
