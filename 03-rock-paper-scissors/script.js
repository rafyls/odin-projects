function getComputerChoice() {
  let num = Math.random();
  num = num * 30;
  if ((num >= 0) && (num < 10)) {
    return "rock";
  } else if (((num >= 10) && (num < 20))) {
    return "paper";
  } else {
    // num in this case is greater than or equal to 20 and less than 30
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice:");
  return choice; // Assumption: the user choice is always correct
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats scissors.");
      humanScore += 1;
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats rock.");
      computerScore += 1;
    } else {
      console.log("It's a tie, try again!");
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats rock.");
      humanScore += 1;
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beat paper.");
      computerScore += 1;
    } else {
      console.log("It's a tie, try again!");
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beat paper.");
      humanScore += 1;
    } else if (computerChoice === "rock") {
      console.log("You lose! Rock beats scissors.");
      computerScore += 1;
    } else {
      console.log("It's a tie, try again!");
    }
  }
}

function playGame() {
  for (let i = 1; i < 6; i++) {
    console.log("ROUND " + i);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("Your choice for this round is: " + humanSelection);

    console.log("The computer choice is: " + computerSelection);

    playRound(humanSelection, computerSelection);
  }

  if (computerScore < humanScore) {
    return "human";
  } else if (humanScore < computerScore) {
    return "computer";
  } else {
    return "none";
  }
}

result = playGame();

if (result === "human") {
  console.log("You won the game. Final score: " + humanScore);
} else if (result === "computer") {
  console.log("Computer won the game. Final score: " + computerScore);
} else {
  console.log("It's a tie score. Final score: " + humanScore);
}