export function createGallerySection() {
  const gallerySection = document.createElement("div");
  gallerySection.classList.add("gallery-container");

  gallerySection.innerHTML = `
  <h2 class="gallery-h2">Gallery</h2>
  <div class="mediaScroll">
  <div class="img img-1"> </div>
  <div class="img img-2"> </div>
  <div class="img img-3"> </div>
  <div class="img img-4"> </div>
  <div class="img img-5"> </div>
  <div class="img img-6"> </div>
  <div class="img img-7"> </div>
  <div class="img img-8"> </div>
  </div>
  `;
  return gallerySection;
}
