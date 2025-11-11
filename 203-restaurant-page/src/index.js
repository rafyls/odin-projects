import "./style.css";
import { loadHomepage } from "./homepage";
import { loadMenupage } from "./menupage";
import { loadContactpage } from "./contactpage";

const divContent = document.body.querySelector("#content");

loadHomepage(divContent);

const homeBtn = document.body.querySelector("#home");
const menuBtn = document.body.querySelector("#menu");
const contactBtn = document.body.querySelector("#contact");

homeBtn.style.backgroundColor = "#2a9d8f";

homeBtn.addEventListener("click", () => {
  while (divContent.firstChild) {
    divContent.removeChild(divContent.firstChild);
  }
  menuBtn.style.backgroundColor = "#ff992d";
  contactBtn.style.backgroundColor = "#ff992d";
  homeBtn.style.backgroundColor = "#2a9d8f";
  loadHomepage(divContent);
});

menuBtn.addEventListener("click", () => {
  while (divContent.firstChild) {
    divContent.removeChild(divContent.firstChild);
  }
  contactBtn.style.backgroundColor = "#ff992d";
  homeBtn.style.backgroundColor = "#ff992d";
  menuBtn.style.backgroundColor = "#2a9d8f";
  loadMenupage(divContent);
});

contactBtn.addEventListener("click", () => {
  while (divContent.firstChild) {
    divContent.removeChild(divContent.firstChild);
  }
  menuBtn.style.backgroundColor = "#ff992d";
  homeBtn.style.backgroundColor = "#ff992d";
  contactBtn.style.backgroundColor = "#2a9d8f";
  loadContactpage(divContent);
});