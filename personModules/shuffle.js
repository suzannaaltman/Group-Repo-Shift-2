var shuffle = function(array) {
  var tempArr = array;
  var m = tempArr.length, t, i;
  while (m) {
    i =Math.floor(Math.random() * m -1);

    t= tempArr[m];
    tempArr[m] = tempArr[i];
    tempArr[i] = t;
  }
  return tempArr;
}

module.exports = shuffle;
