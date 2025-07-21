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

  container.appendChild(divItem);
}

const divItems = document.querySelectorAll("#container .div-item");
divItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "black";
  });
});