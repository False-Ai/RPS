let playerScore = 0;
let compScore = 0;
let roundCount = 0;
const maxRounds = 5;

function getCompChoice(){
  let num = Math.random() * 100;
  if (num < 33) {
    return "rock";
  } else if (num < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function displayScore(playerScore, compScore){
  console.log(`Player: ${playerScore} Matrix: ${compScore}`);
}

function playRound(humanChoice, compChoice){
  if (humanChoice === compChoice) {
    console.log("Tie");
  } else if (
    (humanChoice === "rock" && compChoice === "scissors") ||
    (humanChoice === "paper" && compChoice === "rock") ||
    (humanChoice === "scissors" && compChoice === "paper")
  ) {
    console.log("You Win!!");
    playerScore++;
  } else {
    console.log("You lose");
    compScore++;
  }

  displayScore(playerScore, compScore);
  console.log(`Computer Played: ${compChoice}`);
  console.log('----------------------');
}

let moves = document.querySelector('#moves');

moves.addEventListener('click', (e) => {
  if (roundCount >= maxRounds) {
    console.log("Game over! No more rounds allowed.");
    console.log("Final Score:");
    displayScore(playerScore, compScore);
    return;
  }

  let target = e.target;

  if (target.classList.contains('rock')) {
    handlePlayerMove('rock');
  } else if (target.classList.contains('paper')) {
    handlePlayerMove('paper');
  } else if (target.classList.contains('scissors')) {
    handlePlayerMove('scissors');
  }
});

function handlePlayerMove(humanChoice){
  if (roundCount < maxRounds) {
    const compChoice = getCompChoice();
    playRound(humanChoice, compChoice);
    roundCount++;

    if (roundCount === maxRounds) {
      console.log("Game Over!");
      console.log("Final Score:");
      displayScore(playerScore, compScore);
    }
  }
}
