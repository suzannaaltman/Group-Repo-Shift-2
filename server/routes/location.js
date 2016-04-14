var location = ["Mordor", "The Shire", "Rivendell", "Isengard", "Minias Tirith",
"Bree", "Rohan", "Carn Dum", "Moria", "The Lonley Mountain", "Norgod", "Minas Morgul",
"Mount Doom", "Weathertop", "Gondor", "Osgiliath", "Fangor", "Helms Deep", "Dunharrow", "St. Paul"];

var randomLocation = function() {
  return location[Math.floor(Math.random() * location.length)];
};

module.exports = randomLocation;
