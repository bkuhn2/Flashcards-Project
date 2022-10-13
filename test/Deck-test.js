const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  
  let card1, card2, cards, deck1;
  
  beforeEach('define variables', function() {
    card1 = new Card({
      "id": 1,
      "question": 'what time is it',
      "answers": ['1:00', '6:00'],
      "correctAnswer": '6:00'
    });
    card2 = new Card({
      "id": 2,
      "question": 'is it warm out',
      "answers": ['yes', 'no'],
      "correctAnswer": 'no'
    });
    cards = [card1, card2];
    deck1 = new Deck(cards);
  });

  it('should be initialized with an array of Card objects', function() {
    expect(deck1.cards[1]).to.be.an.instanceof(Card);
    expect(deck1.cards).to.equal(cards);
  });

  it('should should know how many cards in the deck', function() {
    deck1.countCards();

    expect(deck1.countCards()).to.equal(2);
  });

});