export function createContactFooterSection() {
  const contactFooterSection = document.createElement("section");

  contactFooterSection.id = "contact-footer-section";

  contactFooterSection.innerHTML = `
  <div class="contact-footer-container"> 
  
  <div class="information-container">
  
  <div class="information-box">
  <div class="location-box">
  <h3>Location</h3>
  <p>Vegen 123</p>
  <p>Norway</p>
  </div
  <div class="hours-box">
  <h3>Hours</h3>
  <p>Tue - Thu, 8 am - 10 pm </p>
  <p>Fri - Sun, 8 am - 11 pm </p>
  <p>Closed Mondays</p>
  </div>
  <div class="contact-box"> 
  <h3>Contact</h3>
  <p>+47 01 01 01 01 01</p>
  <p>CestLaVie@example.com</p>
  </div>
  </div>

  <div class="contact-image-box">
  <div class="img-box"> </div>
  </div>


  </div>
  
  <footer class="footer">
  <p>Facebook</p>
  <p>Instagram</p>
  <p>Twitter</p>
  </footer>
  
  </div>
  `;

  return contactFooterSection;
}
