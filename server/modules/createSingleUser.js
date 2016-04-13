var age = require('./age.js');
var birthplace = require('./birthplace.js');
var location = require('./location.js');
var twitter = require('./twitter.js');
var name = require('./name.js');

// require model
var User = require('../../models/userModel.js');

function makeUser(){
  var newUser = new User({
    age: age(),
    birthplace: birthplace(),
    location: location(),
    twitter: twitter(),
    name: name()
  });
  // console.log(newUser);
  newUser.save(function(err){
    if (err){
      console.log(err);
    } else {
      console.log('User saved successfully!');
    }
  });
  return newUser;
}


module.exports = makeUser;
