const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round', function() {

  it('should have a \'turns\' property', function() {
    const round = new Round();

    expect(round).to.have.a.key('turns');
    expect(round.turns).to.equal(0);
  });

});