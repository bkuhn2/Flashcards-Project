const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should keep track of turns', function() {
    const round = new Round();

    expect(round).to.have.any.key('turns');
    expect(round.turns).to.equal(0);
  });

  it('should have a place to remember questions of incorrect guesses', function() {
    const round = new Round();

    expect(round).to.have.any.key('incorrectGuesses');
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should have a discard pile', function() {
    const round = new Round();

    expect(round.discardPile).to.deep.equal([]);
  });

  it('should receive the deck', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what day is it?',
      "answers": ['Tuesday', 'Wednesday'],
      "correctAnswer": 'Wednesday'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'what time is it?',
      "answers": ['4:00', '5:00'],
      "correctAnswer": '4:00'
    });
    const deck  = new Deck([card1, card2])

    const round = new Round(deck);

    expect(round.deck).to.equal(deck);
  });

  it('should return the current card', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what day is it?',
      "answers": ['Tuesday', 'Wednesday'],
      "correctAnswer": 'Wednesday'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'what time is it?',
      "answers": ['4:00', '5:00'],
      "correctAnswer": '4:00'
    })
    const deck  = new Deck([card1, card2])

    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turns property when a turn is taken', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what day is it?',
      "answers": ['Tuesday', 'Wednesday'],
      "correctAnswer": 'Wednesday'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'what time is it?',
      "answers": ['4:00', '5:00'],
      "correctAnswer": '4:00'
    })
    const deck  = new Deck([card1, card2])

    const round = new Round(deck);

    round.takeTurn('Wednesday');

    expect(round.turns).to.equal(1);

    round.takeTurn('5:00')

    expect(round.turns).to.equal(2);
  });

  // should we test to see if a new Turn is instantiated? Is it possible?

  it('should evaluate the guess and return a response when true', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what day is it?',
      "answers": ['Tuesday', 'Wednesday'],
      "correctAnswer": 'Wednesday'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'what time is it?',
      "answers": ['4:00', '5:00'],
      "correctAnswer": '4:00'
    })
    const deck  = new Deck([card1, card2])

    const round = new Round(deck);

    expect(round.takeTurn('Wednesday')).to.equal('correct!');
  });

  it('should evaluate the guess and return a response when false', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what day is it?',
      "answers": ['Tuesday', 'Wednesday'],
      "correctAnswer": 'Wednesday'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'what time is it?',
      "answers": ['4:00', '5:00'],
      "correctAnswer": '4:00'
    })
    const deck  = new Deck([card1, card2])

    const round = new Round(deck);
  
    expect(round.takeTurn('Tuesday')).to.equal('incorrect!');
  });

  it('should remember the ID of the question when guess is incorrect', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what day is it?',
      "answers": ['Tuesday', 'Wednesday'],
      "correctAnswer": 'Wednesday'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'what time is it?',
      "answers": ['4:00', '5:00'],
      "correctAnswer": '4:00'
    })
    const deck  = new Deck([card1, card2])

    const round = new Round(deck);
    round.takeTurn('Tuesday');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should discard the current card', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what day is it?',
      "answers": ['Tuesday', 'Wednesday'],
      "correctAnswer": 'Wednesday'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'what time is it?',
      "answers": ['4:00', '5:00'],
      "correctAnswer": '4:00'
    })
    const deck  = new Deck([card1, card2])

    const round = new Round(deck);
   
    expect(round.returnCurrentCard()).to.equal(card1);
   
    round.takeTurn('Tuesday');

    expect(round.returnCurrentCard()).to.equal(card2);
    expect(round.discardPile).to.deep.equal([card1]);
  });

  it('should be able to calculate the percentage of correct guesses', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what day is it?',
      "answers": ['Tuesday', 'Wednesday'],
      "correctAnswer": 'Wednesday'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'what time is it?',
      "answers": ['4:00', '5:00'],
      "correctAnswer": '4:00'
    })
    const deck  = new Deck([card1, card2])

    const round = new Round(deck);
      
    round.takeTurn('Tuesday');

    expect(round.calculatePercentCorrect()).to.equal('0.00%');
  });

  it('should tell you when the round ends and your winning %', function() {
    const card1 = new Card({
      "id": 1,
      "question": 'what day is it?',
      "answers": ['Tuesday', 'Wednesday'],
      "correctAnswer": 'Wednesday'
    });
    const card2 = new Card({
      "id": 2,
      "question": 'what time is it?',
      "answers": ['4:00', '5:00'],
      "correctAnswer": '4:00'
    })
    const deck  = new Deck([card1, card2])

    const round = new Round(deck);
      
    round.takeTurn('Tuesday');
    round.takeTurn('4:00');
    
    expect(round.endRound()).to.equal(`**Round over!** You answered 50.00% of the questions correctly!`);

  });
});