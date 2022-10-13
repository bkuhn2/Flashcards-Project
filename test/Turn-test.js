const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card, turn, turn2;
  
  beforeEach('define variables', function() {
    card = new Card({
      "id":1, 
      "question": 'What allows you to define a set of related information using key-value pairs?',
      "answers": ['object', 'array', 'function'],
      'correctAnswer': 'object'
    });
    turn = new Turn('object', card);
    turn2 = new Turn('array', card);
  });

  it('should be a function', function() {
    
    expect(Turn).to.be.a('function');
  });

  it('should take a guess', function() {
    
    expect(turn.guess).to.equal('object');
  });

  it('should take a Card', function() {

    expect(turn.card).to.deep.equal(card);
  });

  it('should return the user\'s guess', function() {

    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the current card in play', function() {

    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should evaluate the user\'s guess', function() {

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give user feedback on their guess', function() {

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});