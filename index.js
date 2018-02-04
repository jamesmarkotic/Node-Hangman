var word = require('./word.js');
var inquirer = require('inquirer');
var words = ['juventus', 'barcelona', 'napoli', 'bayern', 'dortmund', 'chelsea']
var attempts = ;

// Function to start the game
function start () {
  inquirer.prompt([
    {
      name: "input",
      input: "Input",
      message: "Guess a letter"
    }
  ]).then(ans => {
    console.log(ans.input);
});
}
// End of start Function


// Calling start function to start game
start();
