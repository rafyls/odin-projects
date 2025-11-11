import margheritaImg from "./assets/img/margherita.jpg";
import marinaraImg from "./assets/img/marinara.jpg";
import ortolanaImg from "./assets/img/ortolana.jpg";
import napoletanaImg from "./assets/img/napoletana.jpg";
import tiramisuImg from "./assets/img/tiramisu.jpg";
import cannoliImg from "./assets/img/cannoli.jpg";
import pannaImg from "./assets/img/panna.jpg";

function loadMenupage(content) {
  const divPizza = document.createElement("div");
  divPizza.classList.add("pizza-menu");

  const h1p = document.createElement("h1");
  h1p.textContent = "Our Pizzas";

  const divCardp = [];
  for (let i = 0; i < 4; i++) {
    divCardp[i] = document.createElement("div");
  }

  const h2p = [];
  for (let i = 0; i < 4; i++) {
    h2p[i] = document.createElement("h2");
  }
  h2p[0].textContent = "Margherita";
  h2p[1].textContent = "Marinara";
  h2p[2].textContent = "Ortolana";
  h2p[3].textContent = "Napoletana";

  const imgp = [];
  for (let i = 0; i < 4; i++) {
    imgp[i] = document.createElement("img");
  }
  imgp[0].src = margheritaImg;
  imgp[1].src = marinaraImg;
  imgp[2].src = ortolanaImg;
  imgp[3].src = napoletanaImg;
  imgp[0].alt = "A photo of a Margherita pizza";
  imgp[1].alt = "A photo of a Marinara pizza";
  imgp[2].alt = "A photo of an Ortolana pizza";
  imgp[3].alt = "A photo of a Napoletana pizza";

  const pp = [];
  for (let i = 0; i < 8; i++) {
    pp[i] = document.createElement("p");
  }
  pp[0].textContent = `A simple and classic pizza, with a base of tomato sauce, 
  fresh mozzarella cheese, and basil leaves. It represents the colors of the 
  Italian flag.`;
  pp[1].textContent = `Topped with tomato sauce, garlic, oregano, and olive oil. 
  It's one of the oldest pizza styles, originating in Napoli.`;
  pp[2].textContent = `A fresh and light pizza, topped with roasted seasonal 
  vegetables like zucchini, peppers, eggplant, and mushrooms, often with a 
  drizzle of olive oil.`;
  pp[3].textContent = `A classic from Napoli, typically topped with tomato 
  sauce, mozzarella di bufala, anchovies, and capers.`;

  pp[4].textContent = "6.55€";
  pp[5].textContent = "5.25€";
  pp[6].textContent = "8.99€";
  pp[7].textContent = "7.55€";

  divCardp[0].appendChild(h2p[0]);
  divCardp[0].appendChild(pp[0]);
  divCardp[0].appendChild(imgp[0]);
  divCardp[0].appendChild(pp[4]);

  divCardp[1].appendChild(h2p[1]);
  divCardp[1].appendChild(pp[1]);
  divCardp[1].appendChild(imgp[1]);
  divCardp[1].appendChild(pp[5]);

  divCardp[2].appendChild(h2p[2]);
  divCardp[2].appendChild(pp[2]);
  divCardp[2].appendChild(imgp[2]);
  divCardp[2].appendChild(pp[6]);

  divCardp[3].appendChild(h2p[3]);
  divCardp[3].appendChild(pp[3]);
  divCardp[3].appendChild(imgp[3]);
  divCardp[3].appendChild(pp[7]);

  divPizza.appendChild(h1p);

  for (let i = 0; i < 4; i++) {
    divPizza.appendChild(divCardp[i]);
  }


  const divDessert = document.createElement("div");
  divDessert.classList.add("dessert-menu");

  const h1d = document.createElement("h1");
  h1d.textContent = "Our Desserts";

  const divCardd = [];
  for (let i = 0; i < 3; i++) {
    divCardd[i] = document.createElement("div");
  }

  const h2d = [];
  for (let i = 0; i < 3; i++) {
    h2d[i] = document.createElement("h2");
  }
  h2d[0].textContent = "Tiramisu";
  h2d[1].textContent = "Cannoli";
  h2d[2].textContent = "Panna Cotta";

  const imgd = [];
  for (let i = 0; i < 3; i++) {
    imgd[i] = document.createElement("img");
  }
  imgd[0].src = tiramisuImg;
  imgd[1].src = cannoliImg;
  imgd[2].src = pannaImg;
  imgd[0].alt = "A photo of a Tiramisu dessert";
  imgd[1].alt = "A photo of a Cannoli dessert";
  imgd[2].alt = "A photo of a Panna Cotta dessert";


  const pd = [];
  for (let i = 0; i < 6; i++) {
    pd[i] = document.createElement("p");
  }
  pd[0].textContent = `A rich dessert made with ladyfingers soaked in coffee, 
  mascarpone cheese, cocoa powder, and a touch of coffee. It's light, creamy, 
  and has a perfect balance of sweetness and bitterness.`;
  pd[1].textContent = `A crispy pastry tube filled with a sweetened ricotta 
  cheese mixture. Sometimes they are garnished with chocolate chips, 
  pistachios, or candied fruit at the ends. The shells are crunchy while the 
  filling is smooth and creamy.`;
  pd[2].textContent = `Panna cotta is a silky, creamy dessert made from 
  sweetened cream, milk, and gelatin. It's often served with fruit compote or 
  caramel sauce. Its texture is delicate and smooth, and it has a mild, vanilla 
  flavor.`;

  pd[3].textContent = "6.99€";
  pd[4].textContent = "4.99€";
  pd[5].textContent = "5.99€";

  divCardd[0].appendChild(h2d[0]);
  divCardd[0].appendChild(pd[0]);
  divCardd[0].appendChild(imgd[0]);
  divCardd[0].appendChild(pd[3]);

  divCardd[1].appendChild(h2d[1]);
  divCardd[1].appendChild(pd[1]);
  divCardd[1].appendChild(imgd[1]);
  divCardd[1].appendChild(pd[4]);

  divCardd[2].appendChild(h2d[2]);
  divCardd[2].appendChild(pd[2]);
  divCardd[2].appendChild(imgd[2]);
  divCardd[2].appendChild(pd[5]);

  divDessert.appendChild(h1d);

  for (let i = 0; i < 3; i++) {
    divDessert.appendChild(divCardd[i]);
  }

  content.appendChild(divPizza);
  content.appendChild(divDessert);
}
export { loadMenupage };