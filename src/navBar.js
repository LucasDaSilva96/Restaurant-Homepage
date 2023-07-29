export function createNavBar() {
  const nav = document.createElement("nav");
  nav.classList.add("navBar");

  nav.innerHTML = `
  <div class="h1-box">
  <h1>Restaurant C'est La Vie</h1>
  </div>

  
  <div class="list-div">
  <ul>
  <li class="nav-li" id="home" data-active="true">Home</li>
  <li class="nav-li" id="menu" data-active="false">Menu</li>
  <li class="nav-li" id="gallery" data-active="false">Gallery</li>
  <li class="nav-li" id="review" data-active="false">Review</li>
  <li class="nav-li" id="contact" data-active="false">Contact</li>
  </ul>
  </div>
  `;

  return nav;
}
