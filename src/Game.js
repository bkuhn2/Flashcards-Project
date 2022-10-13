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
  start() { // refactor so some of these are broken out
    const cardDeck = data.prototypeData.map(dataSet => {
      const card = new Card(dataSet);
      return card;
    });
    
    const currentDeck = new Deck(cardDeck);
    
    const currentRound = new Round(currentDeck);
     
    this.currentRound = currentRound;
    
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;