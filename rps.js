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



// Score variables are declared outside of the playGame function to maintin its value across multiple function calls
let humanScore = 0;
let computerScore = 0;

function playGame() {

//The logic for the game
function playRound(humanChoice, computerChoice) {
    // I compared the value of the strings
   if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        return humanScore++; // Returns +1 score for human as value
   } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.");
        return computerScore++; // Returns +1 score for computer as value
   } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a draw!");
        
   } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock");
        return computerScore++;
   } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors");
        return humanScore++;
   } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a draw!");
        
   } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beat paper.");
        return humanScore++;
   } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors");
        return computerScore++;
   } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a draw!");
        
   } else {
        console.log("Invalid hand");
   }
}

// Assigned getHumanChoice() and getComputerChoice() as arguments for the playRound parameters
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}
// Calls playGame function 5 times
playGame();
playGame();
playGame();
playGame();
playGame();

//Displays scores
console.log("You: " + humanScore);
console.log("Computer: " + computerScore);

// Displays winner
if (humanScore > computerScore) {
     console.log("You win!");
} else {
     console.log("Computer wins!");
}



