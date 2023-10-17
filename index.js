//this function generates computer value
function getComputerChoice(CompValue) {
  let choiceName = Math.floor(Math.random() * 3);
  if (choiceName == 0) {
    CompValue = "rock"; // return this value to get the out
  } else if (choiceName == 1) {
    CompValue = "paper";
  } else if (choiceName == 2) {
    CompValue = "scissor";
  }
  //   returns the computer generated value
  return choiceName;
}

// function game() {
//   //here i<5 caus 5 rounds of the game.

//   let playerSelection;

//   for (let i = 0; i < 5; i++) {
//     playerSelection = prompt("Rock, Paper or Scissors??").toLowerCase();
//     if (playerSelection == "rock") {
//       playerChoice = 0;
//     } else if (playerSelection == "paper") {
//       playerChoice = 1;
//     } else if (playerSelection == "scissor") {
//       playerChoice = 2;
//     }
//     return playerChoice;
//   }
// }

//this function generates player value
function playerSelection() {
  playerSelectionValue = prompt("Rock, Paper or Scissor??").toLowerCase();
  if (playerSelectionValue == "rock") {
    playerChoice = 0;
  } else if (playerSelectionValue == "paper") {
    playerChoice = 1;
  } else if (playerSelectionValue == "scissor") {
    playerChoice = 2;
  }

  //returns the value from player selection
  return playerChoice;
}

//this function is for the game round
function playRound(getComputerChoice, playerSelection) {
  let matchArray = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0],
  ];
  let result = matchArray[playerSelection][getComputerChoice];
  if (result == 0) {
    console.log("its tie");
  } else if (result == 1) {
    console.log("you won");
  } else if (result == 2) {
    console.log("you lost");
  }
}
//this activate the playRound function
console.log(playRound(getComputerChoice(), playerSelection()));
