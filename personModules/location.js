
var array = ['Madrid, Spain', 'Jackson, Mississippi', 'Reykjavik, Iceland', 'Minneapolis, Minnesota', 'Minneapolis, Kansas', 'Paris, Minnesota', 'Paris, France', 'Paris, Texas', 'Finland, Minnesota', 'Oslo, Norway', 'Narnia', 'Mordor', 'Terabithia', 'Space-Time', 'District 5', 'San Jose, California', 'Whakatane, New Zealand', 'The BatCave', 'bat cave', 'Bear Country', 'Venus', 'Geneva, Switzerland', 'Dar es salaam, Tanzania', 'Galapogos Islands', 'Everest Base Camp', 'Taj Mahal'];

//shuffles array

var shuffleLocation = function() {
  return array[Math.floor(Math.random() * array.length)];
};
//selects one location from the array. We do not want to pop since we are using the array in birthplace as well.
// var randomLocation = shuffleLocation[0];
//
// console.log(randomLocation);

// exports.oneLocation = randomLocation;
// exports.locationArray = array;
console.log(shuffleLocation());

module.exports = shuffleLocation;
