// Person Age - This is where we are going to set the age of our person.  Age is how many years they have lived.  On earth.

var personAge = function(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

personAge(1, 124);

module.exports = personAge;
