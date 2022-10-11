//class Round {

// turns property

// this is the object that takes in responses and records these guesses, and whether
// they are correct or not

// currentCard should be the first Card in the Deck(the array of cards) 
// at the start of the round

// returnCurrentCard - returns current card being played
// takeTurn
//    -- updates turn count, evaluates guesses, gives feedback, stores IDs of incorrect guesses
//    -- probably needs argument of Turn??
//    -- how do guesses have IDs? where stored?

//    -- when a guess is made, new Turn instance created
//    -- the turns count is updated, regardless of correct/incorrect
//    -- next card becomes current card
//    -- guess is evaluated and recorded (where?) incorrect guesses stored via ID
//          in an array of incorrectGuesses
//    -- feedback returned regarding whether guess correct or not

// calculatePercentCorrect: method that calculates and returns the percentage 
//    of correct guesses
// endRound: method that prints the following to the console: 
//    ‘** Round over! ** You answered <>% of the questions correctly!’

// }