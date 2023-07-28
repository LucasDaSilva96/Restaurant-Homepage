export function createReviewSection() {
  const reviewSection = document.createElement("section");
  reviewSection.id = "review-section";

  reviewSection.innerHTML = `
  <div class="review-container">
  
  <div class="review-box">
  <div class"review-heading-div">
  <h3>Review 1</h3>
  </div>
  <div class="review-rating-div"> 
  <span>⭐⭐⭐⭐⭐</span> 
  </div>
  <div class="review-text-div">
  <p>"An enchanting escape to France! My experience at Restaurant C'est La Vie was truly unforgettable. From the moment I stepped in, 
  the ambiance transported me to a cozy bistro in Paris. The menu selection was impressive, and each dish I tried was a masterpiece. 
  The escargot appetizer was delicate and perfectly seasoned, while the coq au vin left me speechless with its tender chicken and rich red wine sauce. 
  And don't even get me started on the crème brûlée - it was pure bliss! The attentive staff and impeccable service added to the overall charm of the evening.
   I highly recommend Restaurant C'est La Vie for anyone seeking an authentic French dining experience. Bravo!" </p>
  </div>
  </div>

  <div class="review-box">
  <div class"review-heading-div">
  <h3>Review 2</h3>
  </div>
  <div class="review-rating-div"> 
  <span>⭐⭐⭐⭐⭐</span> 
  </div>
  <div class="review-text-div">
  <p>"A little piece of France in our neighborhood! Restaurant C'est La Vie is a hidden gem. From the moment I tasted the escargot, 
  I knew I was in for a treat. The mains were equally impressive; the ratatouille had a burst of fresh flavors, and the beef bourguignon was melt-in-your-mouth tender. 
  The wine selection perfectly complemented our meal. The staff was attentive and accommodating, and they made us feel like valued guests throughout the evening. 
  I'm so thrilled to have found this lovely restaurant, and I can't wait to bring more friends to share in this delightful experience!" </p>
  </div>
  </div>

  <div class="review-box">
  <div class"review-heading-div">
  <h3>Review 3</h3>
  </div>
  <div class="review-rating-div"> 
  <span>⭐⭐⭐⭐⭐</span> 
  </div>
  <div class="review-text-div">
  <p>"If you want to feel like you're dining in the heart of France, look no further than Restaurant C'est La Vie! 
  The moment I entered, I was greeted with warm smiles and the alluring aroma of fresh-baked baguettes. 
  The attention to detail in each dish was remarkable. I thoroughly enjoyed the bouillabaisse, bursting with fresh seafood and a delightful saffron-infused broth. 
  The flavors brought back memories of my trip to Marseille. The staff was not only knowledgeable about the menu but also eager to share interesting facts about French cuisine. 
  An exceptional culinary journey that I can't wait to embark on again!" </p>
  </div>
  </div>

  <div class="review-box">
  <div class"review-heading-div">
  <h3>Review 4</h3>
  </div>
  <div class="review-rating-div"> 
  <span>⭐⭐⭐⭐⭐</span> 
  </div>
  <div class="review-text-div">
  <p>"Magical and romantic - that's how I would describe my evening at Restaurant C'est La Vie. As a Francophile, I had high expectations, 
  and I must say, this place exceeded them all! The atmosphere was charming and had the perfect blend of elegance and coziness. 
  The onion soup was a warm hug in a bowl, and the duck confit was cooked to perfection with crispy skin and tender meat. 
  My partner and I couldn't resist sharing a slice of the divine raspberry tart for dessert. The flavors were simply divine. 
  It's evident that the chefs are passionate about their craft, 
  and it truly reflects in every dish. An absolute gem of a restaurant that I'll cherish in my memories forever." </p>
  </div>
  </div>
  
  </div>`;

  return reviewSection;
}
