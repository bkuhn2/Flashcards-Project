class Card {
  constructor(ID, question, possibleAnswers, correctAnswer) {
    this.id = ID;
    this.question = question;
    this.answers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  }
}

//change params to be ONE object with all those, and keys accordingly (see data.js)

module.exports = Card;