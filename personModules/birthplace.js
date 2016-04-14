// var location = require('./location');
var shuffle = require('./shuffle');

// //brings in array from location file
// var array = location.locationArray;
// //shuffles location array
// var shuffleBirthplace = shuffle(array);
//
// //selects one location from the array and sets it as the birthplace. We do not want to pop since we are using the same array for locations and birthplace.
// var birthplace = shuffleBirthplace[0];

var array = ['Madrid, Spain', 'Jackson, Mississippi', 'Reykjavik, Iceland', 'Minneapolis, Minnesota', 'Minneapolis, Kansas', 'Paris, Minnesota', 'Paris, France', 'Paris, Texas', 'Finland, Minnesota', 'Oslo, Norway', 'Narnia', 'Mordor', 'Terabithia', 'Space-Time', 'District 5', 'San Jose, California', 'Whakatane, New Zealand', 'The BatCave', 'bat cave', 'Bear Country', 'Venus', 'Geneva, Switzerland', 'Dar es salaam, Tanzania', 'Galapogos Islands', 'Everest Base Camp', 'Taj Mahal'];

//shuffles array

var shuffleBirthPlace = function() {
  return shuffleArray(array).pop();
};

module.exports = shuffleBirthPlace;
