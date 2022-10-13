const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');


class Game {
  constructor() {
    this.currentRound = {};

  }
  start() {
    const cardDeck = data.prototypeData.map()
      // want to take the data array and loop through
      // each time, want to instantiate a new Card and have it go 
      //    to an arry, so a iterator that creates a new array
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}


// Needs "keep track of currentRound" --> currentRound property
//  - Round object that has been instantiated
//  - Where instantiated? Outside of this?

// start method
// - creates cards
// - puts cards in deck
// - creates a new Round using the deck
// - invokes printMessage and printQuestion
module.exports = Game;