var twitterArray = ['OnlineOnlyAtom', 'SciFiTauntaun', 'LikeableHipster', 'DreamyRobot', 'MacCompatibleMagic', 'MandibularAstronaut', 'UnixBasedTriceratops','SuperZenElement','CringyParty','BetaHero','RagingEnigma','HyperTimeTraveler','DefaultCohort','InstantCPU','PossiblyIllegalTechnician','FunkyGiant','RagingNode','ExtraStrengthHipster','PrairieDebugger','LegitNarwhal'];

var randomTwit = function() {
  return '@' + twitterArray[Math.floor(Math.random() * twitterArray.length)];
};

module.exports = randomTwit;
