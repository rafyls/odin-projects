import "./style.css";
import { loadHomepage } from "./homepage";
import { loadMenupage } from "./menupage";

const divContent = document.body.querySelector("#content");

//loadHomepage(divContent);
loadMenupage(divContent);