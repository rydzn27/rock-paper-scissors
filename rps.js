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

  

// Score variables are declared outside of the playGame function to maintin its value across multiple function calls
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;



//The logic for the game
function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    roundsPlayed++;

   if (humanChoice === computerChoice) {
        console.log(`It's a draw! Both picked ${humanChoice}`);;
   } else if (
     (humanChoice === "paper" && computerChoice === "rock") ||
     (humanChoice === "rock" && computerChoice === "scissors") ||
     (humanChoice === "scissors" && computerChoice === "paper")
     ) {
          console.log(`You win! ${humanChoice} beats ${computerChoice}`);
          humanScore++; // Returns +1 score for human as value
     } else if (
     (humanChoice !== "rock") &&
     (humanChoice !== "paper") &&
     (humanChoice !== "scissors")) {
          console.log("Invalid hand"); //Returns Invalid hand if user does not input the correct hand.
     } else {
          console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++; // Returns +1 score for computer as value
     }

     // Displays scores
     const results = document.querySelector("#results");
     const round = document.createElement("p");
     round.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
     results.append(round);

     console.log("You: " + humanScore);
     console.log("Computer: " + computerScore);

     // Displays winner
     const winner = document.createElement("p");

     if (humanScore === 5) {
          winner.textContent = `You win! Perfect!`;
          console.log("You win! Perfect!");
     }

     if (humanScore > computerScore) {
          winner.textContent = `You win!`;
          console.log("You win!");
     } else if  (computerScore > humanScore) {
          winner.textContent = `Computer wins!`;
          console.log("Computer wins!");
     } else {
          winner.textContent = `Its a draw!`;
          console.log("Its a draw!");
     }
     results.append(winner);

     // Disables the buttons after 5 rounds
     if(roundsPlayed === 5) {
          btnRock.disabled = true;
          btnPaper.disabled = true;
          btnScissors.disabled = true;
     }

}
     
     const btnRock = document.querySelector("#rock");
     const btnPaper = document.querySelector("#paper");
     const btnScissors = document.querySelector("#scissors");

     // Added event listeners for each button and called playRound
     btnRock.addEventListener("click", () => playRound("rock"));
     btnPaper.addEventListener("click", () => playRound("paper"));
     btnScissors.addEventListener("click",() => playRound("scissors"));


// Assigned getHumanChoice() and getComputerChoice() as arguments for the playRound parameters






// Calls playGame function 5 times






