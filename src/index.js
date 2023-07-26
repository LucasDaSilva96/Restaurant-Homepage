import { createNavBar } from "./navBar.js";
import { createHeroSection } from "./hero.js";
import { createMenuSection } from "./menu.js";

import "./style.css";

function mainFunction() {
  const htmlBody = document.querySelector("body");
  const navDiv = document.createElement("div");
  navDiv.classList.add("nav-div");

  // Homepage
  htmlBody.appendChild(createNavBar());
  htmlBody.appendChild(createHeroSection());
  // ********

  // Menu Section
  const menuTab = document.getElementById("menu");
  menuTab.addEventListener("click", function () {
    removeSecondChildEl();
    htmlBody.appendChild(createMenuSection());
  });
}

mainFunction();

function removeSecondChildEl() {
  // Get a reference to the <body> element
  const bodyElement = document.body;

  // Check if the body has at least two child elements
  if (bodyElement.children.length >= 2) {
    // Get the second child element (index 1) and remove it from the <body>
    const secondChildElement = bodyElement.children[2];
    bodyElement.removeChild(secondChildElement);
  }
}
