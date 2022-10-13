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


describe('Game', function() {

  let game;

  // function below solely to mimic the start() function in the Game.js
  function testStart(game) {
    const cardDeck = data.prototypeData.map(dataSet => {
      const card = new Card(dataSet);
      return card;
    });
    const currentDeck = new Deck(cardDeck);
    const currentRound = new Round(currentDeck);
    game.currentRound = currentRound;
  }
  //------------------------------------------------------------

  beforeEach('define variables', function() {
    game = new Game();
  });

  it('should have a place to keep track of the current round', function() {

    expect(game).to.have.a.key('currentRound');
  });
  
  it('should be able to start everything', function() {

    expect(game.start).to.be.a('function');
  });

  it('once it starts, it needs to start a new Round', function() {
    
    expect(game.currentRound).to.deep.equal({});

    testStart(game);

    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it('should create cards when it starts', function() { 

    testStart(game);
     
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
    expect(game.currentRound.deck.cards[0]).to.deep.equal(prototypeQuestions[0]);
  });

  it('should put these cards in a deck when it starts', function() { // how test this??

    testStart(game);
     
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
    expect(game.currentRound.deck.cards).to.deep.equal(prototypeQuestions);
  });
});