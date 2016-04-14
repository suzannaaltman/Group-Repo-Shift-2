var location = ["Mordor", "The Shire", "Rivendell", "Isengard", "Minias Tirith",
"Bree", "Rohan", "Carn Dum", "Moria", "The Lonley Mountain", "Norgod", "Minas Morgul",
"Mount Doom", "Weathertop", "Gondor", "Osgiliath", "Fangor", "Helms Deep", "Dunharrow", "St. Paul"];

var randomLocation = location[Math.floor(Math.random() * location.length)];
console.log(randomLocation);

module.exports = randomLocation;
