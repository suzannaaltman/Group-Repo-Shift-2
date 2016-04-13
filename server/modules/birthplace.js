//  Birthplace Module
var birthplaces = ["Minneapolis", "St. Paul", "Stillwater", "Wauwatosa", "Seattle", "Edina", "Donghae", "Washington DC", "London", "Sydney", "Dublin", "Rome", "Paris", "Berlin", "Seoul", "Tokyo", "Taipei", "San Francisco", "Vancouver", "New York"];

var birthplace = function() {
  var number = Math.floor(Math.random() * (birthplaces.length));
  return birthplaces[number];
};

module.exports = birthplace;
