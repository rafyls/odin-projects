const form = document.querySelector(".start-container");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const player1Name = document.querySelector("#player1-name");
  const player2Name = document.querySelector("#player2-name");

  // Start the game
  DisplayController.displayGamePage(player1Name.value);
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

  const displayGamePage = (player1Name) => {
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
  };

  return {displayGamePage};
})();