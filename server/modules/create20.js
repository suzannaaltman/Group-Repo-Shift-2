var create = require('./create');

var playGod = function() {
  var random = [];
  for (var i = 0; i < 20; i++) {
    random.push(create());
    console.log(random);
  }
}


module.exports = playGod;
