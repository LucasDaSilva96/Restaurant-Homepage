import "./style.css";
export function createHeroSection() {
  const heroSection = document.createElement("section");
  heroSection.id = "hero-section";

  heroSection.innerHTML = `
  <div class="hero-container">

  <div class="hero-image-box"></div>

  <div class="hero-text-box">
  <p class="hero-text">Welcome to Restaurant C'est La Vie, where the essence of France comes alive on your plate! 
  Step into a world of culinary delight as we take you on a gastronomic journey inspired by the rich and diverse 
  flavors of French cuisine.</p>
  </div>

  <div class="welcome-txt-box">
  <span>Bienvenue</span>
  </div>

  </div>
  <div class="hero-footer">
  <p>All right reserved || LucasDaSilva96</p>
  </div>

  `;

  return heroSection;
}
