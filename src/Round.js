class Round {
  constructor() {
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard(deck) {
    return deck.cards[0]
    //need a currentCard variable at all? It's kind of highlighted in spec
  }
}

module.exports = Round;

// returnCurrentCard✅
//  - returns current card being played
//    ・ this card is the first card in the Deck (array of cards)

// takeTurn
//  - updates turns count: "this", updates property above, regardless of correct or not
//  - makes new Turn instance
//  - the next card in the deck becomes the current card
//    ・ HOW?? is the Deck a global variable? 🤨
//    ・ remove the card at index 0, and push it into array at end?
//  - evaluates guesses: method of Turn
//    ・ incorrect guesses will be stored VIA THE ID 🤨 in an array (above, "this") incorrectGuesses
//  - returns feedback: method of Turn

// calculatePercentCorrect
//  - calculates + returns percentage of correct guesses
//  - HOW?? incorrectGuesses.length / turns?

// endRound
//  - consolelogs string Round over etc, interpolate percentCorrect()