const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error");
  }
};
function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
function determineWinner(getUserChoice, getComputerChoice) {
  if (getUserChoice === getComputerChoice) {
    return "This game is a tie!";
  } else if (getUserChoice === "rock") {
    if (getComputerChoice === "paper") {
      return "The computer has beaten the user!";
    } else {
      return "The user has beaten the computer!";
    }
  } else if (getUserChoice === "paper") {
    if (getComputerChoice === "scissors") {
      return "The computer has beaten the user!";
    } else {
      return "The user has beaten the computer!";
    }
  } else if (getUserChoice === "scissors") {
    if (getComputerChoice === "rock") {
      return "The computer has beaten the user!";
    } else {
      return "The user has beaten the computer!";
    }
  }
}
function playGame() {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log(
    "User has chosen " +
      userChoice +
      ". Computer has chosen " +
      computerChoice +
      "."
  );
  console.log(determineWinner(userChoice, computerChoice));
}
addEventListener
