const form = document.querySelector(".start-container");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const player1Name = document.querySelector("#player1-name");
  const player2Name = document.querySelector("#player2-name");

  // Start the game
  DisplayController.displayGamePage(player1Name.value, player2Name.value);
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

  let playerName1, playerName2;

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

  const displayGamePage = (player1Name, player2Name) => {
    playerName1 = player1Name;
    playerName2 = player2Name;

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

    GameController.startGame(player1Name, player2Name, cells);
  };

  const updateGameBoard = (cellValue, cellNum, plName) => {
    if (cells[cellNum].textContent === "") {
      cells[cellNum].textContent = cellValue;
      if (plName === playerName1) {
        playerName.textContent = playerName2;
        playerSym.textContent = 'O';
      } else {
        playerName.textContent = playerName1;
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
      GameController.finishGame();
    } else {
      playerTurn.textContent = "TIE!";
      GameController.finishGame();
    }
  };

  return {displayGamePage, updateGameBoard, checkGameBoard, printResult};
})();

const GameController = (function () {
  let playerTurn;
  let numTurns = 0;
  let player1Name, player2Name;

  let cells = null;
  let binders = [];

  const startGame = (p1Name, p2Name, cs) => {
    playerTurn = p1Name;
    player1Name = p1Name;
    player2Name = p2Name;
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
})();