//box user choice
let playerSelection = prompt("Do you choose rock, paper or scissors?");

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let computerSelection = Math.random();
let results = function computerResult() {
  if (computerSelection < 0.34) {
    return "rock";
  } else if (computerSelection <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
  console.log(computerResult());
};

//compare results between user and computer
function compare(playerSelection, results) {
  if (playerSelection === results) {
    return "The result is a tie!";
  } else if (playerSelection === "rock") {
    if (results === "scissors") {
      return "You won rock beats scissors";
    } else if (results === "paper") {
      return "You lose paper beats rock";
    }
  } else if (playerSelection === "paper") {
    if (results === "scissors") {
      return "You lose scissors beats paper";
    } else if (results === "rock") {
      return "You won paper beats rock";
    }
  } else if (playerSelection === "scissors") {
    if (results === "paper") {
      return "You won scissors beats paper";
    } else if (results === "rock") {
      return "You lose rock beats scissors";
    }
  }
}
