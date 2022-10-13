class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  countCards() {
    return this.cards.length;
  }
}

//  - should be initialized with an array of Card objects
//       >>>>   param: needs argument of 1 array of Card objects?? us a iterator w/ data.js??
//        >>>>> OR create the cards inside the deck??
//  - should know how many Cards are in the Deck, countCards() method
//  - need a this.cardCount property??

//  where is deck initialized??


module.exports = Deck;