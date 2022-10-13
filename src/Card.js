class Card {
  constructor(cardData) {
    this.id = cardData["id"];
    this.question = cardData["question"];
    this.answers = cardData["answers"];
    this.correctAnswer = cardData["correctAnswer"];
  }
}

//change params to be ONE object with all those, and keys accordingly (see data.js)

module.exports = Card;