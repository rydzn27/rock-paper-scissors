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

let humanScore = 0;
let computerScore = 0;

//The logic for the game
function playRound(humanChoice, computerChoice) {
    // I compared the value of the strings
   if (humanChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats rock.";
   } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats paper.";
   } else if (humanChoice === "paper" && computerChoice === "paper") {
        return "It's a draw!";
   } else if (humanChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats rock";
   } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats scissors";
   } else if (humanChoice === "rock" && computerChoice === "rock") {
        return "It's a draw!";
   } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beat paper.";
   } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats scissors";
   } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "It's a draw!";
   } else {
        return "Invalid hand";
   }
}

// Assigned getHumanChoice() and getComputerChoice() as arguments for the playRound parameters
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));





   





