const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be initialized with an array of Card objects', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what time is it',
      "answers": ['1:00', '6:00'],
      "correctAnswer": '6:00'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'is it warm out',
      "answers": ['yes', 'no'],
      "correctAnswer": 'no'
    });
    const cards = [card1, card2];

    const deck1 = new Deck(cards);

    expect(deck1.cards[1]).to.be.an.instanceof(Card);
    expect(deck1.cards).to.equal(cards);
  });

  it('should should know how many cards in the deck', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what time is it',
      "answers": ['1:00', '6:00'],
      "correctAnswer": '6:00'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'is it warm out',
      "answers": ['yes', 'no'],
      "correctAnswer": 'no'
    });
    const cards = [card1, card2];

    const deck1 = new Deck(cards);
    deck1.countCards();

    expect(deck1.countCards()).to.equal(2);
  });

});