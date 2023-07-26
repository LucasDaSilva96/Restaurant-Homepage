export function createMenuSection() {
  const menuSection = document.createElement("section");
  menuSection.id = "menu-section";

  menuSection.innerHTML = `
  <h2 class="menu-h2">Menu</h2>
  
  <div class="menu-container">
  
  <div class="menu-box">
  <h3 class="menu-title">Crêpes à la Buttermilk (Buttermilk Crêpes)</h3>
  <p class="menu-description">
  Delicate buttermilk crêpes served with a drizzle of luscious molasses and topped with our signature 
  sassafras-infused whipped cream. For an extra touch of freshness, 
  add a side of seasonal fruits.
  </p>
  </div>

  <div class="menu-box">
  <h3 class="menu-title">Sandwich de Poitrine de Bœuf Braisé (Braised Beef Brisket Sandwich)</h3>
  <p class="menu-description">
  Slow-smoked beef brisket, thinly sliced, accompanied by pickled okra, tomatoes, and wild onions, 
  all between slices of black bread.
  Served with your choice of a side salad or crispy fried potatoes.
  </p>
  </div>

  <div class="menu-box">
  <h3 class="menu-title">Galettes aux Salsifis Doux et Saucisse (Sweet Fennel Pork Sausage & Buckwheat Cakes)</h3>
  <p class="menu-description">
  Galettes aux Salsifis Doux et Saucisse (Sweet Fennel Pork Sausage & Buckwheat Cakes) Cornmeal and molasses hotcakes infused 
  with sweet fennel pork sausage. 
  A delightful marriage of flavors that will leave you craving for more.
  </p>
  </div>

  <div class="menu-box">
  <h3 class="menu-title">Épaule de Sanglier Saisie à la Poêle (Pan-Seared Wild Boar Shoulder)</h3>
  <p class="menu-description">
  Succulent wild boar shoulder seasoned with cracked peppercorns and a rich red wine glaze. 
  Served alongside hot corn cakes and a side salad, 
  creating an exceptional medley of taste and texture.
  </p>
  </div>

  <div class="menu-box">
  <h3 class="menu-title">Crêpes à la Buttermilk</h3>
  <p class="menu-description">
  Delicate buttermilk crêpes served with a drizzle of luscious molasses and topped with our signature 
  sassafras-infused whipped cream. For an extra touch of freshness, 
  add a side of seasonal fruits.
  </p>
  </div>

  <div class="menu-box">
  <h3 class="menu-title">Ragoût d'Agneau aux Carottes (Lamb Stew with Carrots)</h3>
  <p class="menu-description">
  Tenderized mutton stewed to perfection with carrots, celery, onions, and fragrant rosemary, enhanced by a 
  hint of black pepper. 
  Accompanied by two delectable sourdough biscuits.
  </p>
  </div>

  <div class="menu-box">
  <h3 class="menu-title">Caille Rôtie aux Herbes (Roasted Quails with Herbs)</h3>
  <p class="menu-description">
  A culinary masterpiece featuring two whole roasted quails, expertly stuffed with oregano and garlic. 
  Served alongside a medley of roasted beets, leeks, and potatoes.
  </p>
  </div>

  <div class="menu-box">
  <h3 class="menu-title">Sandwich au Jambon de Bœuf Salé (Corned Beef Sandwich)</h3>
  <p class="menu-description">
  Savory clove-rubbed corned beef accompanied by coleslaw, all embraced by delectable cowboy fry bread. 
  Served with your choice of a side salad or crispy fried potatoes.
  </p>
  </div>

  <div class="menu-box">
  <h3 class="menu-title">Club de Dinde Sauvage (Wild Turkey Club)</h3>
  <p class="menu-description">
  Thick cuts of succulent roasted wild turkey, topped with wild onions, lettuce, tomato, and a touch of mayo, 
  nestled between slices of artisanal black bread.
  </p>
  </div>

  <div class="menu-box big">
  <h3 class="menu-title big-h3"> Bon appétit!</h3>
  </div>
  
  
  </div>
  
  
  
  `;

  return menuSection;
}
