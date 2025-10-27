function Player(name, id) {
  return {name, id};
}

const GameBoard = (function () {
  let cells = [];
  cells[0] = null;

  let cellsBoard = 0;

  const initGameBoard = (gridSize) => {
    cellsBoard = gridSize * gridSize;
    for (let i = 1; i <= cellsBoard; i++) {
      cells[i] = Cell();
    }
  };

  const updateGameBoard = (cellNum, cellValue) => {
    if (cells[cellNum].value === "") {
      cells[cellNum].value = cellValue;
      return true;
    } else {
      console.log("The cell " + cellNum + " is already marked!");
      return false;
    }
  };

  const checkGameState = (lastPlayer, lastCellNumMarked) => {
    switch (lastCellNumMarked) {
      case 1:
        if ((cells[1].value === cells[2].value) && 
        (cells[1].value === cells[3].value)) {
            return lastPlayer.id;
        } else if ((cells[1].value === cells[4].value) && 
        (cells[1].value === cells[7].value)) {
            return lastPlayer.id;
        } else if ((cells[1].value === cells[5].value) && 
        (cells[1].value === cells[9].value)) {
            return lastPlayer.id;
        }
      break;

      case 2:
        if ((cells[2].value === cells[1].value) && 
        (cells[2].value === cells[3].value)) {
            return lastPlayer.id;
        } else if ((cells[2].value === cells[5].value) && 
        (cells[2].value === cells[8].value)) {
            return lastPlayer.id;
        }
      break;

      case 3:
        if ((cells[3].value === cells[2].value) && 
        (cells[3].value === cells[1].value)) {
            return lastPlayer.id;
        } else if ((cells[3].value === cells[6].value) && 
        (cells[3].value === cells[9].value)) {
            return lastPlayer.id;
        } else if ((cells[3].value === cells[5].value) && 
        (cells[3].value === cells[7].value)) {
            return lastPlayer.id;
        }
      break;

      case 4:
        if ((cells[4].value === cells[5].value) && 
        (cells[4].value === cells[6].value)) {
            return lastPlayer.id;
        } else if ((cells[4].value === cells[1].value) && 
        (cells[4].value === cells[7].value)) {
            return lastPlayer.id;
        }
      break;

      case 5:
        if ((cells[5].value === cells[4].value) && 
        (cells[5].value === cells[6].value)) {
            return lastPlayer.id;
        } else if ((cells[5].value === cells[2].value) && 
        (cells[5].value === cells[8].value)) {
            return lastPlayer.id;
        } else if ((cells[5].value === cells[1].value) && 
        (cells[5].value === cells[9].value)) {
            return lastPlayer.id;
        }
      break;

      case 6:
        if ((cells[6].value === cells[5].value) && 
        (cells[6].value === cells[4].value)) {
            return lastPlayer.id;
        } else if ((cells[6].value === cells[3].value) && 
        (cells[6].value === cells[9].value)) {
            return lastPlayer.id;
        }
      break;

      case 7:
        if ((cells[7].value === cells[1].value) && 
        (cells[7].value === cells[4].value)) {
            return lastPlayer.id;
        } else if ((cells[7].value === cells[8].value) && 
        (cells[7].value === cells[9].value)) {
            return lastPlayer.id;
        } else if ((cells[7].value === cells[5].value) && 
        (cells[7].value === cells[3].value)) {
            return lastPlayer.id;
        }
      break;

      case 8:
        if ((cells[8].value === cells[7].value) && 
        (cells[8].value === cells[9].value)) {
            return lastPlayer.id;
        } else if ((cells[8].value === cells[5].value) && 
        (cells[8].value === cells[2].value)) {
            return lastPlayer.id;
        }
      break;

      case 9:
        if ((cells[9].value === cells[7].value) && 
        (cells[9].value === cells[8].value)) {
            return lastPlayer.id;
        } else if ((cells[9].value === cells[3].value) && 
        (cells[9].value === cells[6].value)) {
            return lastPlayer.id;
        } else if ((cells[9].value === cells[1].value) && 
        (cells[9].value === cells[5].value)) {
            return lastPlayer.id;
        }
      break;
    }

    return false;
  }

  const printBoard = () => {
    let line = "";
    let cellNum = 1;
    console.log("--------------");
    for (let i = 1; i <= 5; i++) {
      if ((i % 2) === 0) {
        line = "---|---|---";
        cellNum += 3;
      } else {
        line = ` ${cells[cellNum].value} |  ${cells[cellNum+1].value} | ${cells[cellNum+2].value} `;
      }
      console.log(line);
    }
    console.log("--------------");
  };

  return {initGameBoard, updateGameBoard, checkGameState, printBoard};
})();

function Cell() {
  let value = "";

  return {value};
}

const GameController = (function () {
  let player1 = null;
  let player2 = null;

  const startGame = () => {
    const player1Name = prompt("Player1 ('X'): Enter your name:");
    const player2Name = prompt("Player2 ('O'): Enter your name:");

    player1 = Player(player1Name);
    player2 = Player(player2Name);

    player1.id = 1;
    player2.id = 2;

    const gridSize = 3; // 3 x 3 grid

    GameBoard.initGameBoard(gridSize);

    let numTurns = 0;

    let result = null;

    while (true) {
      let pl1Choice = prompt(player1.name + ": " +
      "Enter the cell number to place X: ");

      let player1Choice = parseInt(pl1Choice);
      
      let update = GameBoard.updateGameBoard(player1Choice, 'X');
      numTurns += 1;

      while (!update) {
        pl1Choice = prompt(player1.name + ": " +
        "Re-enter the cell number to place X: ");

        player1Choice = parseInt(pl1Choice);
        
        update = GameBoard.updateGameBoard(player1Choice, 'X');
      }

      GameBoard.printBoard();

      state = GameBoard.checkGameState(player1, player1Choice)
      
      if (state === player1.id) {
        result = player1.name;
        break;
      } else if (state === player2.id) {
        result = player2.name;
        break;
      } else if (numTurns === 9) {
        break;
      }

      let pl2Choice = prompt(player2.name + ": " +
      "Enter the cell number to place O: ");

      let player2Choice = parseInt(pl2Choice);
      
      update = GameBoard.updateGameBoard(player2Choice, 'O');
      numTurns += 1;

      while (!update) {
        pl2Choice = prompt(player2.name + ": " +
        "Re-enter the cell number to place O: ");

        player2Choice = parseInt(pl2Choice);
      
        update = GameBoard.updateGameBoard(player2Choice, 'O');
      }

      GameBoard.printBoard();
    
      state = GameBoard.checkGameState(player2, player2Choice)
      
      if (state === player1.id) {
        result = player1.name;
        break;
      } else if (state === player2.id) {
        result = player2.name;
        break;
      } else if (numTurns === 9) {
        break;
      }
    }

    if (result) {
      console.log(result + " won the game!");
    } else {
      console.log("TIE!");
    }
  };

  return {startGame};
})();

GameController.startGame();