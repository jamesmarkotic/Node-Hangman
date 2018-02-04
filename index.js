var word = require('./word.js');
var inquirer = require('inquirer');

// Soccer teams
var words = ['juventus', 'barcelona', 'napoli', 'bayern', 'dortmund', 'chelsea']
var attempts = 0;

// Function to start the game
function start () {
  attempts = 15;
  inquirer.prompt([
    {
      name: "input",
      input: "Input",
      message: "Guess a letter"
    }
  ]).then(ans => {

    // console.log(ans.input);
});
}
// End of start Function

// Calling start function to start game
start();

// Pseudocoing of whats left to do
// Got stuck on how letter/word work together and unsure of how to proceed.
