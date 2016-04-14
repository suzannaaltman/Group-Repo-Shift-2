var birthPlace = ["Mordor", "The Shire", "Rivendell", "Isengard", "Minias Tirith",
"Bree", "Rohan", "Carn Dum", "Moria", "The Lonley Mountain", "Norgod", "Minas Morgul",
"Mount Doom", "Weathertop", "Gondor", "Osgiliath", "Fangor", "Helms Deep", "Dunharrow", "St. Paul"];

var randomBirthPlace = birthPlace[Math.floor(Math.random() * birthPlace.length)];
console.log(randomBirthPlace);

module.exports = randomBirthPlace;
