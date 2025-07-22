const container = document.querySelector("#container");

const INITIAL_NUM_SQUARES = 16;
const INITIAL_GRID_SIZE = 256

for (let i = 1; i <= INITIAL_GRID_SIZE; i++) {
  const divItem = document.createElement("div");
  divItem.classList.add("div-item");
  
  if (((i % 16) === 1) && (i != 1)) {
    const divItemInvisible = document.createElement("div");

    divItemInvisible.classList.add("div-item-invisible");

    divItemInvisible.style.width = "100%";
    divItemInvisible.style.height = "0";

    container.appendChild(divItemInvisible);
  }

  const widthContainer = (container.offsetWidth) / INITIAL_NUM_SQUARES;
  const heightContainer = (container.offsetHeight) / INITIAL_NUM_SQUARES;

  divItem.style.width = widthContainer.toString() + "px";
  divItem.style.height = heightContainer.toString() + "px";

  divItem.style.backgroundColor = "rgb(255, 255, 255)";

  container.appendChild(divItem);
}

const divItems = document.querySelectorAll("#container .div-item");
divItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const colors = randomizeRGBColor();
    const backgroundColor = "rgb("+ colors[0].toString() + "," + colors[1].toString() + "," + colors[2].toString() + ")";
    item.style.backgroundColor = backgroundColor;
  });
});

function deleteGrid() {
  const divItems = document.querySelectorAll("#container .div-item");
  divItems.forEach((item) => {
    container.removeChild(item);
  });

  const divItemsInvisible = document.querySelectorAll("#container .div-item-invisible");
  divItemsInvisible.forEach((item) => {
    container.removeChild(item);
  });
}

function generateGrid(numSquares) {

  const gridSize = numSquares * numSquares;

  const widthContainer = (container.offsetWidth) / numSquares;
  const heightContainer = (container.offsetHeight) / numSquares;

  for (let i = 1; i <= gridSize; i++) {
    const divItem = document.createElement("div");
    divItem.classList.add("div-item");
    
    if (((i % gridSize) === 1) && (i != 1)) {
      const divItemInvisible = document.createElement("div");

      divItemInvisible.classList.add("div-item-invisible");

      divItemInvisible.style.width = "100%";
      divItemInvisible.style.height = "0";

      container.appendChild(divItemInvisible);
    }

      divItem.style.width = widthContainer.toString() + "px";
      divItem.style.height = heightContainer.toString() + "px";

      divItem.style.backgroundColor = "rgb(255, 255, 255)";
    container.appendChild(divItem);
  }
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

function randomizeRGBColor() {
  const redColor = getRandomIntInclusive(0, 255);
  const greenColor = getRandomIntInclusive(0, 255);
  const blueColor = getRandomIntInclusive(0, 255);

  const result = [redColor, greenColor, blueColor];
  return result;
}

const btn = document.querySelector("#new-grid-btn");
btn.addEventListener("click", () => {
  
  let userInput;
  do {
    userInput = prompt("Enter the number of squares per side for the new grid (max. 100 squares)");
  } while (userInput > 100);

  deleteGrid();

  generateGrid(userInput);

  const divItems = document.querySelectorAll("#container .div-item");
  divItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const colors = randomizeRGBColor();
      const backgroundColor = "rgb("+ colors[0].toString() + "," + colors[1].toString() + "," + colors[2].toString() + ")";
      item.style.backgroundColor = backgroundColor;
    });
  });
});

function resetGrid() {
  const divItems = document.querySelectorAll("#container .div-item");
  divItems.forEach((item) => {
    item.style.backgroundColor = "rgb(255, 255, 255)";
  });
}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
  resetGrid();
});