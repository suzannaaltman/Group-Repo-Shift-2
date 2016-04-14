var random = function getRandomInt(min, max) {
 return Math.floor(Math.random() * (max - min)) + min;
}

randomAge = random(2, 635);

module.exports = randomAge;
