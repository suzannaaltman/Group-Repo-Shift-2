//  Twitter Module

var twitters = ["@surlychoc", "@windingspiral", "@rainbowninja", "@lambdicorn", "@sneakyhamsters", "@roguevegan", "@prancingpony", "@bob", "@whiteboard", "@eraser", "@coffeecup", "@greenleprechauns"];

var twitterhandler = function() {
  var indexNum = Math.floor(Math.random() * (twitters.length));
  var extraNum = Math.floor(Math.random() * (1000));
  return twitters[indexNum] + extraNum.toString();
};

module.exports = twitterhandler;
