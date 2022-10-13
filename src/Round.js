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

// calculatePercentCorrect
//  - calculates + returns percentage of correct guesses
//  - HOW?? incorrectGuesses.length / turns?

// endRound
//  - consolelogs string Round over etc, interpolate percentCorrect()