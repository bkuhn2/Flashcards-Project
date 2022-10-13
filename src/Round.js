const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.turns = 0;
    this.incorrectGuesses = [];
    this.deck = deck;
    this.discardPile = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess) {
    this.turns ++;

    const currentTurn = new Turn(guess, this.returnCurrentCard());

    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentTurn.card.id)
    };
    
    this.discardPile.push(this.deck.cards.shift());
    
    return currentTurn.giveFeedback()
  }
  calculatePercentCorrect() {
    const correctGuesses = this.turns - this.incorrectGuesses.length;
    const winningPercentage = correctGuesses / this.turns;
    return parseFloat(winningPercentage * 100).toFixed(2)+"%";
  }
  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
    return `**Round over!** You answered ${this.calculatePercentCorrect()} of the questions correctly!`
  }
}

module.exports = Round;

// returnCurrentCard✅
//  - returns current card being played
//    ・ this card is the first card in the Deck (array of cards)

// takeTurn
//  - updates turns count above regardless of correct ✅
//  - makes new Turn instance✅
//  - the next card in the deck becomes the current card ✅
//  - evaluates guesses: method of Turn
//    ・ incorrect guesses will be stored VIA THE ID in an array above✅
//  - returns feedback: method of Turn✅

// calculatePercentCorrect✅

// endRound✅
//  - consolelogs string Round over etc, interpolate percentCorrect()