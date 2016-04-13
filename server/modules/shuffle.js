
//Fisher-Yates shuffle
var shuffleArray = function(array) {

  var tempArr = array;
  var m = tempArr.length, t, i;
  //while there remain elements to shuffle...
  while (m) {

    //pick a remaining element...
    i = Math.floor(Math.random() * m--);

    //And swap it with the current element.
    t = tempArr[m];
    tempArr[m] = tempArr[i];
    tempArr[i] = t;
  }
  return tempArr;
}

module.exports = shuffleArray;
