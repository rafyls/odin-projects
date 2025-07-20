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

let humanSelection = "";
let computerSelection = "";
let numberRounds = 1;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  let container = document.querySelector("#container-result");

  let roundResult = document.createElement("p");
  roundResult.style.fontWeight = "bold";

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      roundResult.textContent = "You win this round! Rock beats scissors."
      humanScore += 1;
    } else if (computerChoice === "paper") {
      roundResult.textContent = "You lose this round! Paper beats rock.";
      computerScore += 1;
    } else {
      roundResult.textContent = "It's a tie, try again!";
    }
  }

  if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      roundResult.textContent = "You win this round! Paper beats rock.";
      humanScore += 1;
    } else if (computerChoice === "scissors") {
      roundResult.textContent = "You lose this round! Scissors beat paper.";
      computerScore += 1;
    } else {
      roundResult.textContent = "It's a tie, try again!";
    }
  }

  if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      roundResult.textContent = "You win this round! Scissors beat paper.";
      humanScore += 1;
    } else if (computerChoice === "rock") {
      roundResult.textContent = "You lose this round! Rock beats scissors.";
      computerScore += 1;
    } else {
      roundResult.textContent = "It's a tie, try again!";
    }
  }

  container.appendChild(roundResult);

}

function printRoundInfo(humanChoice, computerChoice, roundNumber) {
  let container = document.querySelector("#container-result");
  
  let roundNum = document.createElement("h2");
  roundNum.textContent = "ROUND " + roundNumber;
  container.appendChild(roundNum);

  let humanPick = document.createElement("p");
  humanPick.textContent = "Your choice for this round is: " + humanChoice;
  container.appendChild(humanPick);

  let computerPick = document.createElement("p");
  computerPick.textContent = "The computer choice is: " + computerChoice;
  container.appendChild(computerPick);
}

function printRunningScore() {
  let container = document.querySelector("#container-result");
  
  let humanScoreElement = document.createElement("p");
  humanScoreElement.textContent = "Your current score: " + humanScore;
  container.appendChild(humanScoreElement);

  let computerScoreElement = document.createElement("p");
  computerScoreElement.textContent = "Current computer score: " + computerScore;
  container.appendChild(computerScoreElement);
}

function displayWinnerInfo(result) {
  let container = document.querySelector("#container-result");

  let finalScore = document.createElement("h2");
  finalScore.textContent = "Final Score";
  container.appendChild(finalScore);

  let finalResult = document.createElement("p");

  if (result === "human") {
    finalResult.textContent = "You won the game. Final score: " + humanScore;
  } else if (result === "computer") {
    finalResult.textContent = "Computer won the game. Final score: " + computerScore
  } else {
    finalResult.textContent = "It's a tie score. Final score: " + humanScore
  }

   container.appendChild(finalResult);
}

function playGame(humanSelection, computerSelection, numberRounds) {
  printRoundInfo(humanSelection, computerSelection, numberRounds);

  playRound(humanSelection, computerSelection);

  printRunningScore();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (numberRounds === 6) {
      let container = document.querySelector("#container-result");

      let message = document.createElement("h2");
      message.textContent = "Maximum number of rounds reached, reload the page to play again.";
      container.appendChild(message);
    } else {
      switch (button.id) {
        case 'rock':
          computerSelection = getComputerChoice();
          playGame('rock', computerSelection, numberRounds);
          numberRounds++;
          break;
        case 'paper':
          computerSelection = getComputerChoice();
          playGame('paper', computerSelection, numberRounds);
          numberRounds++;
          break;
        case 'scissors':
          computerSelection = getComputerChoice();
          playGame('scissors', computerSelection, numberRounds);
          numberRounds++;
          break;
      }

      if (numberRounds === 6) {
        if (computerScore < humanScore) {
          displayWinnerInfo("human");
        } else if (humanScore < computerScore) {
          displayWinnerInfo("computer");
        } else {
          displayWinnerInfo("none");
        }
      }
    }
  })
});