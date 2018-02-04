var Letter = require('./letter.js');

// Start of Word constructor
function Word (word) {
  // console.log('In Word');
  this.word = word;
  this.letterGuess = [];
  this.createWord = function () {
    console.log('In createWord');
    letter = new Letter(letter);
    console.log(letter);
    // A bit confused how these two files connect
  }
  createWord();

}
Word();
// End of Word constructor

// Pseudocoing of whats left to do
// A bit confused on how to use Letter within this file


// var test = new Letter('a', true)
// console.log(test);

// module.export = Word;
