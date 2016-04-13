var create = require('./create');

var playGod = function() {
  for (var i = 0; i < 20; i++) {
    create();
  }
}


module.exports = playGod();
