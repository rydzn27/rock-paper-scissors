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

    const results = document.querySelector("#results");
    const round = document.createElement("p");
    results.append(round);

    const score = document.createElement("p");
    results.append(score);



   if (humanChoice === computerChoice) {
          round.textContent = `It's a draw! Both picked ${humanChoice}`;
          console.log(`It's a draw! Both picked ${humanChoice}`);;
   } else if (
     (humanChoice === "paper" && computerChoice === "rock") ||
     (humanChoice === "rock" && computerChoice === "scissors") ||
     (humanChoice === "scissors" && computerChoice === "paper")
     ) {
          round.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
          console.log(`You win! ${humanChoice} beats ${computerChoice}`);
          humanScore++; // Returns +1 score for human as value
     } else if (
     (humanChoice !== "rock") &&
     (humanChoice !== "paper") &&
     (humanChoice !== "scissors")) {
          round.textContent = "Invalid hand";
          console.log("Invalid hand"); //Returns Invalid hand if user does not input the correct hand.
     } else {
          round.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
          console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
          computerScore++; // Returns +1 score for computer as value
     }
     // Displays scores
     score.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
      // Displays winner
     const winner = document.createElement("p");

     // Function to disable buttons
    function endGame() {
          btnRock.disabled = true;
          btnPaper.disabled = true;
          btnScissors.disabled = true;
    };

    // Display winner after if player or computer scores 3 after 3 rounds
     if(roundsPlayed === 3) {
          if(humanScore === 3) {
               winner.textContent = `You win! Final Score: You: ${humanScore}, Computer: ${computerScore}`;
               endGame();
          } else if (computerScore === 3) {
               winner.textContent = `Computer wins! Final Score: You: ${humanScore}, Computer: ${computerScore}`;
               endGame();
          } else {};
     }

     
     // Disables the buttons after 5 rounds
     if(roundsPlayed === 5) {
          endGame();
          if(humanScore > computerScore) {
               winner.textContent = `You win! Final Score: You: ${humanScore}, Computer: ${computerScore}`
          } else if (computerScore > humanScore) {
               winner.textContent = `Computer wins! Final Score: You: ${humanScore}, Computer: ${computerScore}`;
          } else {
               winner.textContent = `Its a draw! Final Score: You: ${humanScore}, Computer: ${computerScore}`;
          };
     }
     results.append(winner);

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






