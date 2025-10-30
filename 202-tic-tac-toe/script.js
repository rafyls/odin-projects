let player1Name;
let player2Name;

const form = document.querySelector(".start-container");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const player1NameInput = document.querySelector("#player1-name");
  const player2NameInput = document.querySelector("#player2-name");

  player1Name = player1NameInput.value;
  player2Name = player2NameInput.value;

  // Start the game
  DisplayController.displayGamePage();
});

const DisplayController = (function () {
  let body = null;
  let h1 = null;
  let restartButton = null;
  let playerTurn = null;
  let playerName = null;
  let playerSym = null;
  let gameboard = null;
  let cells = [];
  cells[0] = null;

  let gc = null;

  function displayGameBoard() {
    gameboard = document.createElement("div");
    gameboard.setAttribute("class", "gameboard-container");

    for (let i = 1; i < 10; i++) {
      cells[i] = document.createElement("div");
      cells[i].setAttribute("id", `cell-${i}`);
      cells[i].setAttribute("class", "gameboard-cell");
      gameboard.appendChild(cells[i]);
    }

    return gameboard;
  }

  const displayGamePage = () => {
    body = document.getElementById("site-content");
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    h1 = document.createElement("h1");
    h1.textContent = "Tic Tac Toe";
    body.appendChild(h1);

    restartButton = document.createElement("button");
    restartButton.setAttribute("type", "button");
    restartButton.setAttribute("id", "restart-button");
    restartButton.textContent = "Restart";
    body.appendChild(restartButton);

    restartButton.addEventListener("click", () => {
      // Restart the game
      DisplayController.displayGamePage();
    });

    playerTurn = document.createElement("p");
    playerTurn.setAttribute("class", "player-turn");

    playerName = document.createElement("span");
    playerName.setAttribute("id", "player-name");
    playerName.textContent = player1Name;

    playerSym = document.createElement("span");
    playerSym.setAttribute("id", "player-sym");
    playerSym.textContent = "X";

    const turnText = document.createTextNode(": Your turn!");
    const openParen = document.createTextNode(" (");
    const closeParen = document.createTextNode(")");

    playerTurn.appendChild(playerName);
    playerTurn.appendChild(openParen);
    playerTurn.appendChild(playerSym);
    playerTurn.appendChild(closeParen);
    playerTurn.appendChild(turnText);

    body.appendChild(playerTurn);

    body.appendChild(displayGameBoard());

    gc = GameController();
    gc.startGame(cells);
  };

  const updateGameBoard = (cellValue, cellNum, plName) => {
    if (cells[cellNum].textContent === "") {
      cells[cellNum].textContent = cellValue;
      if (plName === player1Name) {
        playerName.textContent = player2Name;
        playerSym.textContent = 'O';
      } else {
        playerName.textContent = player1Name;
        playerSym.textContent = 'X';
      }
      return true;
    }
    return false;
  };

  const checkGameBoard = (lastCellNumMarked) => {
    switch (lastCellNumMarked) {
      case 1:
        if ((cells[1].textContent === cells[2].textContent) && 
        (cells[1].textContent === cells[3].textContent)) {
            return true;
        } else if ((cells[1].textContent === cells[4].textContent) && 
        (cells[1].textContent === cells[7].textContent)) {
            return true;
        } else if ((cells[1].textContent === cells[5].textContent) && 
        (cells[1].textContent === cells[9].textContent)) {
            return true;
        }
      break;

      case 2:
        if ((cells[2].textContent === cells[1].textContent) && 
        (cells[2].textContent === cells[3].textContent)) {
            return true;
        } else if ((cells[2].textContent === cells[5].textContent) && 
        (cells[2].textContent === cells[8].textContent)) {
            return true;
        }
      break;

      case 3:
        if ((cells[3].textContent === cells[2].textContent) && 
        (cells[3].textContent === cells[1].textContent)) {
            return true;
        } else if ((cells[3].textContent === cells[6].textContent) && 
        (cells[3].textContent === cells[9].textContent)) {
            return true;
        } else if ((cells[3].textContent === cells[5].textContent) && 
        (cells[3].textContent === cells[7].textContent)) {
            return true;
        }
      break;

      case 4:
        if ((cells[4].textContent === cells[5].textContent) && 
        (cells[4].textContent === cells[6].textContent)) {
            return true;
        } else if ((cells[4].textContent === cells[1].textContent) && 
        (cells[4].textContent === cells[7].textContent)) {
            return true;
        }
      break;

      case 5:
        if ((cells[5].textContent === cells[4].textContent) && 
        (cells[5].textContent === cells[6].textContent)) {
            return true;
        } else if ((cells[5].textContent === cells[2].textContent) && 
        (cells[5].textContent === cells[8].textContent)) {
            return true;
        } else if ((cells[5].textContent === cells[1].textContent) && 
        (cells[5].textContent === cells[9].textContent)) {
            return true;
        }
      break;

      case 6:
        if ((cells[6].textContent === cells[5].textContent) && 
        (cells[6].textContent === cells[4].textContent)) {
            return true;
        } else if ((cells[6].textContent === cells[3].textContent) && 
        (cells[6].textContent === cells[9].textContent)) {
            return true;
        }
      break;

      case 7:
        if ((cells[7].textContent === cells[1].textContent) && 
        (cells[7].textContent === cells[4].textContent)) {
            return true;
        } else if ((cells[7].textContent === cells[8].textContent) && 
        (cells[7].textContent === cells[9].textContent)) {
            return true;
        } else if ((cells[7].textContent === cells[5].textContent) && 
        (cells[7].textContent === cells[3].textContent)) {
            return true;
        }
      break;

      case 8:
        if ((cells[8].textContent === cells[7].textContent) && 
        (cells[8].textContent === cells[9].textContent)) {
            return true;
        } else if ((cells[8].textContent === cells[5].textContent) && 
        (cells[8].textContent === cells[2].textContent)) {
            return true;
        }
      break;

      case 9:
        if ((cells[9].textContent === cells[7].textContent) && 
        (cells[9].textContent === cells[8].textContent)) {
            return true;
        } else if ((cells[9].textContent === cells[3].textContent) && 
        (cells[9].textContent === cells[6].textContent)) {
            return true;
        } else if ((cells[9].textContent === cells[1].textContent) && 
        (cells[9].textContent === cells[5].textContent)) {
            return true;
        }
      break;
    }
    return false;
  }

  const printResult = (state, plName) => {
    if (state !== 'TIE') {
      playerTurn.textContent = plName + " won the game!";
      gc.finishGame();
    } else {
      playerTurn.textContent = "TIE!";
      gc.finishGame();
    }
  };

  return {displayGamePage, updateGameBoard, checkGameBoard, printResult};
})();

function GameController() {
  let playerTurn;
  let numTurns = 0;

  let cells = null;
  let binders = [];

  const startGame = (cs) => {
    playerTurn = player1Name;
    cells = cs;

    for (let i = 1; i < 10; i++) {
      binders[i] = runGame.bind(null, i);
      cells[i].addEventListener("click", binders[i]);
    }
  };

  const runGame = (cellNum) => {
    if (playerTurn === player1Name) {
      let update = DisplayController.updateGameBoard("X", cellNum, player1Name);

      if (update) {
        numTurns += 1;

        let state = DisplayController.checkGameBoard(cellNum);

        if (state) {
          DisplayController.printResult(state, player1Name);
        } else if (numTurns === 9) {
          DisplayController.printResult("TIE", player1Name);
        }

        playerTurn = player2Name;
      }

    } else if (playerTurn === player2Name) {
      let update = DisplayController.updateGameBoard("O", cellNum, player2Name);

      if (update) {
        numTurns += 1;

        let state = DisplayController.checkGameBoard(cellNum);

        if (state) {
        DisplayController.printResult(state, player2Name);
        } else if (numTurns === 9) {
          DisplayController.printResult("TIE", player2Name);
        }

        playerTurn = player1Name;
      }
    }
  };

  const finishGame = () => {
    for (let i = 1; i < 10; i++) {
      cells[i].removeEventListener("click", binders[i]);
    }
  }

  return {startGame, finishGame};
}