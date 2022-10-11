class Card {
  constructor(ID, question, possibleAnswers, correctAnswer) {
    this.id = ID;
    this.question = question;
    this.answers = possibleAnswers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;