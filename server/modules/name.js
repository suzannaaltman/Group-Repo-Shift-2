//  Name Modules

var firstNames = ["Amy", "Russ", "Sasha", "Jessica", "Kyle", "Peter", "Jen", "Libby", "Courtney", "Travis", "Taylor", "Chris"];
var lastNames = ["Jennings", "Pipal", "Kramer", "Oakes", "Johnson", "London", "Lilja-Sheeley", "Gives", "Ingram", "Tuttle"];

var name = function() {
  var lastNameIndex = Math.floor(Math.random() * (lastNames.length));
  var firstNameIndex = Math.floor(Math.random() * (firstNames.length));
  var fullName = firstNames[firstNameIndex] + " " + lastNames[lastNameIndex];
  return fullName;
};

module.exports = name;
