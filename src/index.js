import { createNavBar } from "./navBar.js";
import { createHeroSection } from "./hero.js";

import "./style.css";

function mainFunction() {
  const htmlBody = document.querySelector("body");
  const navDiv = document.createElement("div");
  navDiv.classList.add("nav-div");

  htmlBody.appendChild(createNavBar());
  htmlBody.appendChild(createHeroSection());
}

mainFunction();
