// Randomly generates rock, paper, scissors
function getComputerChoice() {
  let kamay = Math.floor(Math.random() * 3); // I used Math.random * 3 to generate numbers between 0 to 2
  
  if (kamay == 0) {         // I converted the number to strings (rock, paper, scissors)
    return "rock";
  } else if (kamay == 1) {
    return "paper";
  } else {
    return "scissors";
  }

}


// Get input from user
function getHumanChoice() {
    let pili = prompt("Pick rock, paper, or scissors"); //used prompt to get input from user
    return pili.toLowerCase(); // Stored the value in pili variable
}



//The logic for the game
function playRound(humanChoice, computerChoice) {
    // I compared the value of the strings
   if (humanChoice > computerChoice) {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
   } else if (humanChoice < computerChoice) {
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
   } else {
        return `Draw!`;
   }
}
// Assigned getHumanChoice() and getComputerChoice() as arguments
console.log(playRound(getHumanChoice(), getComputerChoice()));

   





