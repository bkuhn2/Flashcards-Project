const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
const data = require('../src/data');


describe('Round', function() {
  it('should have a place to keep track of the current round', function() {
    const game = new Game();

    expect(game).to.have.a.key('currentRound');
  });
  //need another test to make sure it actually IS the current round (check other tests for similar issues)

  it('should be able to start everything', function() {
    const game = new Game();

    expect(game.start).to.be.a('function');
  });

  it('should create cards', function() {
    // console.log('array of data: ', data.prototypeData);
    const game = new Game();
    game.start();
    
  });

});