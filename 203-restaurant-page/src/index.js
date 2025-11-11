import "./style.css";
import { loadHomepage } from "./homepage";
import { loadMenupage } from "./menupage";
import { loadContactpage } from "./contactpage";

const divContent = document.body.querySelector("#content");

//loadHomepage(divContent);
//loadMenupage(divContent);
loadContactpage(divContent);