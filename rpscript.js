function getCompChoice(){
  let num = Math.random()*100;
  if (num<33){
    return "rock";
  }
  else if (num<66){
    return "paper";
  }
  else{
    return "scissors";
  }
}
function getHumanChoice(){
  let humanChoice = "";
  let tester = "";
  while (humanChoice==""){
    tester = (prompt("Enter your Move")).toLowerCase();
    if (tester == "rock" ||tester == "paper" || tester =="scissors"){
      humanChoice=tester;
    }
  }
  return humanChoice
}
function displayScore(playerScore,compScore){
  console.log(`Player:${playerScore} Matrix:${compScore}`);
}
function playGame(){

function playRound(humanChoice,compChoice){
  if(humanChoice == 'rock'){
    if (compChoice == 'paper'){
      console.log("You lose");
      compScore+=1;
    }
    else if (compChoice == 'rock'){
      console.log("Tie");
    }
    else{
      console.log("You Win!!");
      playerScore+=1;
    }
  }
  else if(humanChoice == 'paper'){
    if (compChoice == 'scissors'){
      console.log("You lose");
      compScore+=1;
    }
    else if (compChoice == 'paper'){
      console.log("Tie");
    }
    else{
      console.log("You Win!!");
      playerScore+=1;
    }
  }
  else if(humanChoice == 'scissors'){
    if (compChoice == 'rock'){
      console.log("You lose");
      compScore+=1;
    }
    else if (compChoice == 'scissors'){
      console.log("Tie");
    }
    else{
      console.log("You Win!!");
      playerScore+=1;
    }
  }
  console.log(`Computer Played: ${compChoice}`);
}
let playerScore = 0;
let compScore = 0;

for(i=0;i<5;i++){
compChoice=getCompChoice();
humanChoice=getHumanChoice();
playRound(humanChoice,compChoice);
displayScore(playerScore,compScore);
}
if(playerScore>compScore){
  console.log("You are the CHAMPION");
}
else if(compScore>playerScore){
  console.log("You are the ULTIMATE LOSER");
}
else{
  console.log("Y'all are EQUALLY RETARDED");
}

}

playGame();