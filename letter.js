

// Letter constructor
function Letter (letter) {

  this.letter = letter;
  this.guessed = false;
  this.uScore = '_';
  this.check = function () {
    // console.log("I'm running");
    if (this.guessed == true) {
      this.uScore = this.letter;
      // console.log(this.guessed);
    }
    return this.uScore;
  };
  // this.check();
  this.correct = function (character) {
    if (character == this.letter) {
      this.guessed = true;
    }
  };

}
// End of Letter constructor
module.exports = Letter;

// Pseudocoing of whats left to do
// Unsure if certain aspects of letter.js work or not.
// Having trouble testing whether is fully works or not.

// Testing     _ _ _ _ z
// var test = new Letter ('z', false);
//
// console.log(test.guessed);
// console.log(test.uScore);
