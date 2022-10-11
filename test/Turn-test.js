const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should take a guess', function() {
    const turn = new Turn('object');
    
    expect(turn.guess).to.equal('object');
  });

  it('should take a Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.card).to.deep.equal(card);
  });

  it('should return the user\'s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the current card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should evaluate the user\'s guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const turn2 = new Turn('array', card)

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give user feedback on their guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const turn2 = new Turn('array', card)

    turn.evaluateGuess();
    turn2.evaluateGuess();

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});