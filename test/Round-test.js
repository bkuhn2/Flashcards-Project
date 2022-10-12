const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round', function() {

  it('should have a turns property', function() {
    const round = new Round();

    expect(round).to.have.any.key('turns');
    expect(round.turns).to.equal(0);
  });

  it('should have an incorrect guess property', function() {
    const round = new Round();

    expect(round).to.have.any.key('incorrectGuesses');
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should return the current card', function() {
    const card1 = new Card(1, 'what day is it?', ['Tuesday', 'Wednesday'], 'Wednesday');
    const card2 = new Card(2, 'what time is it?', ['4:00', '5:00'], '4:00')
    const deck  = new Deck([card1, card2])

    const round = new Round();
    
    expect(round.returnCurrentCard(deck)).to.equal(card1);
  });

  it('should')

});