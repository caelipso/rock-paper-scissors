//box user choice
let userChoice = prompt("Do you choose rock, paper or scissors?");

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let computerPlay = Math.random();
if (computerPlay < 0.34) {
  computerPlay = "rock";
} else if (computerPlay <= 0.67) {
  computerPlay = "paper";
} else {
  computerPlay = "scissors";
}

console.log(computerPlay);

//compare results between user and computer
let compare = function (userChoice, computerPlaypay) {
  if (userChoice === computerPlaypay) {
    return "The result is a tie!";
  } else if (userChoice === "rock") {
    if (computerPlaypay === "scissors") {
      return "rock wins";
    } else if (computerPlaypay === "paper") {
      return "paper wins";
    }
  } else if (userChoice === "paper") {
    if (computerPlaypay === "scissors") {
      return "scissors win";
    } else if (computerPlaypay === "rock") {
      return "paper wins";
    }
  } else if (userChoice === "scissors") {
    if (computerPlaypay === "paper") {
      return "scissors win";
    } else if (computerPlaypay === "rock") {
      return "rock wins";
    }
  }
};
