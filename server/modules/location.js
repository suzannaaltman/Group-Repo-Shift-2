//  Locations Module
var locations = ["Minneapolis", "St. Paul", "Stillwater", "Wauwatosa", "Seattle", "Edina", "Donghae", "Washington DC", "London", "Sydney", "Dublin", "Rome", "Paris", "Berlin", "Seoul", "Tokyo", "Taipei", "San Francisco", "Vancouver", "New York"];

var location = function() {
  var number = Math.floor(Math.random() * (locations.length));
  return locations[number];
};

module.exports = location;
