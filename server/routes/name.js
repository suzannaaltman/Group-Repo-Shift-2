var names = ['Anakin Skywalker', 'Obi-Wan Kenobi', 'R2-D2', 'JarJar Binks', 'Kylo Ren', 'BB-8', 'Rey', 'Lando Calrissian', 'Finn', 'Poe Dameron',
'Yoda', 'Luke', 'Mace Windu', 'Count Dooku', 'Han Solo', 'Chewbacca', 'Boba Fett', 'Leia Organa', 'Jean-Luc Picard', 'Bob', 'Dana', 'Crusher', 'Captain Janeway', 'Zoey', 'Kailee'];

var randomName = function() {
  return names[Math.floor(Math.random() * names.length)];
};

module.exports = randomName;
