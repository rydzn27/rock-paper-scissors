// Randomly generates rock, paper, scissors
function getComputerChoice() {
  let kamay = Math.floor(Math.random() * 3); // I used Math.random * 3 to generate numbers between 0 to 2
  
  if (kamay === 0) {         // I converted the number to strings (rock, paper, scissors)
    return "rock";
  } else if (kamay === 1) {
    return "paper";
  } else {
    return "scissors";
  }

}


// Get input from user
function getHumanChoice() {
    const pili = prompt("Pick rock, paper, or scissors"); //used prompt to get input from user and store it in pili variable
     return pili.toLowerCase();
}



// Score variables are declared outside of the playGame function to maintin its value across multiple function calls
let humanScore = 0;
let computerScore = 0;

function playGame() {

//The logic for the game
function playRound(humanChoice, computerChoice) {
    // I compared the value of the strings


   if (humanChoice === computerChoice) {
        console.log(`Its a draw! Both picked ${humanChoice}`);;
   } else if (
     (humanChoice === "paper" && computerChoice === "rock") ||
     (humanChoice === "rock" && computerChoice === "scissors") ||
     (humanChoice === "scissors" && computerChoice === "paper")
     ) {
          console.log(`You win! ${humanChoice} beats ${computerChoice}`);
          humanScore++; // Returns +1 score for human as value
     } else if (
     (humanChoice != "rock") ||
     (humanChoice != "paper") ||
     (humanChoice != "scissors")) {
          console.log("Invalid hand"); //Returns Invalid hand if user does not input the correct hand.
     } else {
          console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++; // Returns +1 score for computer as value
     }
}

// Assigned getHumanChoice() and getComputerChoice() as arguments for the playRound parameters
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

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
if (humanScore === 5) {
     console.log("You win! Perfect!");
}

if (humanScore > computerScore) {
     console.log("You win!");
} else if  (computerScore > humanScore) {
     console.log("Computer wins!");
} else {
     console.log("Its a draw!");
}



