import { createNavBar } from "./navBar.js";
import { createHeroSection } from "./hero.js";
import { createMenuSection } from "./menu.js";
import { createGallerySection } from "./gallery.js";
import { createReviewSection } from "./review.js";
import { createContactFooterSection } from "./footer.js";

import "./style.css";

function mainFunction() {
  const htmlBody = document.querySelector("body");
  const navDiv = document.createElement("div");
  navDiv.classList.add("nav-div");

  // Homepage
  htmlBody.appendChild(createNavBar());
  htmlBody.appendChild(createHeroSection());

  // All nav <li>
  const nav_li = document.querySelectorAll(".nav-li");

  // Homepage Section
  const homeTab = document.getElementById("home");
  homeTab.addEventListener("click", function () {
    removeSecondChildEl();
    changeActiveAttribute(nav_li, homeTab);
    htmlBody.appendChild(createHeroSection());
  });

  // Menu Section
  const menuTab = document.getElementById("menu");
  menuTab.addEventListener("click", function () {
    removeSecondChildEl();
    changeActiveAttribute(nav_li, menuTab);
    htmlBody.appendChild(createMenuSection());
  });

  // Gallery Section
  const galleryTab = document.getElementById("gallery");
  galleryTab.addEventListener("click", function () {
    removeSecondChildEl();
    changeActiveAttribute(nav_li, galleryTab);
    htmlBody.appendChild(createGallerySection());
  });

  // Review Section
  const reviewTab = document.getElementById("review");
  reviewTab.addEventListener("click", function () {
    removeSecondChildEl();
    changeActiveAttribute(nav_li, reviewTab);
    htmlBody.appendChild(createReviewSection());
  });

  // Footer/Contact Section
  const contactTab = document.getElementById("contact");
  contactTab.addEventListener("click", function () {
    removeSecondChildEl();
    changeActiveAttribute(nav_li, contactTab);
    htmlBody.appendChild(createContactFooterSection());
  });
}

mainFunction();

// This function is for removing the second child of the body, so that
// the program can append a new child/section
function removeSecondChildEl() {
  // Get a reference to the <body> element
  const bodyElement = document.querySelector("body");

  // Check if the body has at least two child elements
  if (bodyElement.children.length >= 2) {
    // Get the second child element (index 1) and remove it from the <body>
    const secondChildElement = bodyElement.children[2];
    bodyElement.removeChild(secondChildElement);
  }
}

// This function is for setting all the navbar <li> data-active to false
// except the wanted one
function changeActiveAttribute(nodeList, node) {
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].dataset.active = "false";
    if (nodeList[i] === node) {
      node.dataset.active = "true";
    }
  }
}
