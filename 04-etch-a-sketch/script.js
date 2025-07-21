const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
  const divItem = document.createElement("div");
  divItem.classList.add("div-item");
  
  if (((i % 16) === 1) && (i != 1)) {
    const divItemInvisible = document.createElement("div");

    divItemInvisible.classList.add("div-item-invisible");

    divItemInvisible.style.width = "100%";
    divItemInvisible.style.height = "0";

    container.appendChild(divItemInvisible);
  }

  container.appendChild(divItem);
}

const divItems = document.querySelectorAll("#container .div-item");
divItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "black";
  });
});