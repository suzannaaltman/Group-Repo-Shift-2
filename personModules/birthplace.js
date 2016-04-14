var location = require('./location');
var shuffle = require('./shuffle');

//brings in array from location file
var array = location.locationArray;
//shuffles location array
var shuffleBirthplace = shuffle(array);

//selects one location from the array and sets it as the birthplace. We do not want to pop since we are using the same array for locations and birthplace.
var birthplace = shuffleBirthplace[0];

module.exports = birthplace;
