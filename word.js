var Letter = require('./letter.js');

// Start of Word constructor
function Word (word) {
  this.word = word;
  this.letterGuess = [];
  this.createWord = function () {
    letter = new Letter();
  }

}
// End of Word constructor



// var test = new Letter('a', true)
// console.log(test);

module.export = Word;
