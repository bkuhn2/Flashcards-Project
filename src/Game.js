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
    const cardDeck = data.prototypeData.map(dataSet => {
      const card = new Card(dataSet);
      return card;
    });
    // console.log('card deck array: ', cardDeck);
    const currentDeck = new Deck(cardDeck);
      // console.log(currentDeck);
    const currentRound = new Round(currentDeck);
      // console.log(currentRound);
    this.currentRound = currentRound;
    // console.log(this.currentRound);
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