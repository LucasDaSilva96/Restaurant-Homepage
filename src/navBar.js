export function createNavBar() {
  const nav = document.createElement("nav");
  nav.classList.add("navBar");

  nav.innerHTML = `
  <div class="h1-box">
  <h1>Restaurant C'est La Vie</h1>
  </div>

  
  <div class="list-div">
  <ul>
  <li id="home">Home</li>
  <li id="menu">Menu</li>
  <li id="gallery">Gallery</li>
  <li id="review">Review</li>
  <li id="contact">Contact</li>
  </ul>
  </div>
  `;

  return nav;
}
