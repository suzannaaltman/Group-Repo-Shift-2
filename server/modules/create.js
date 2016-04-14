var mongoose = require('mongoose');

var User = require('../../models/user.js');

var age = require('./age');
var birth = require('./birth');
var location = require('./location');
var name = require('./name');
var twitter = require('./twitter');


var createPerson = function() {
  var person = new User({
    name: name[Math.floor(Math.random() * name.length)],
    age: age[Math.floor(Math.random() * age.length)],
    birth: birth[Math.floor(Math.random() * birth.length)],
    location: location[Math.floor(Math.random() * location.length)],
    twitter: twitter[Math.floor(Math.random() * twitter.length)]

  });
//It is exporting but not being returned yet
  person.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('Person saved!');
    }
  });
  //to do: make return statement!!!!!!!!  :)  LOL!
}

module.exports = createPerson;
