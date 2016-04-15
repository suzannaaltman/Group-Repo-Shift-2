var person = require("./person");

var makePeople = function(){
  var persons = [];
  for (var it = 0; it < 20; it++) {
    persons.push(person());
  }
  console.log(persons);
  return persons;
}

module.exports = makePeople;
