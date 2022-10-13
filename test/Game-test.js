const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const { prototype } = require('mocha');


describe('Round', function() {
  it('should have a place to keep track of the current round', function() {
    const game = new Game();

    expect(game).to.have.a.key('currentRound');
  });
  
  it('should be able to start everything', function() {
    const game = new Game();

    expect(game.start).to.be.a('function');
  });

  it.skip('once it starts, it needs to start a new Round', function() {
    const game = new Game();

    function testStart() {

    }
    game.testStart();

    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it.skip('should create cards when it starts', function() { 
    const game = new Game();
    
    game.start();
     
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
    expect(game.currentRound.deck.cards[0]).to.deep.equal(prototypeQuestions[0]);
  });

  it.skip('should put these cards in a deck when it starts', function() { // how test this??
    const game = new Game();
    
    game.start();
     
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
    expect(game.currentRound.deck.cards).to.deep.equal(prototypeQuestions);
  });
});