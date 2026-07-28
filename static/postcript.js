// We use a function so we can call it whenever the page changes
const setupGallery = () => {
  const images = document.querySelectorAll(".image-gallery img");
  
  images.forEach(img => {
    // Remove any existing click listener to avoid duplicates
    img.onclick = (e) => {
      e.preventDefault();
      
      const modal = document.createElement("div");
      modal.id = "gallery-modal";
      modal.style = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); z-index: 10000;
        display: flex; align-items: center; justify-content: center;
        cursor: zoom-out; backdrop-filter: blur(8px);
        transition: opacity 0.3s ease;
      `;
      
      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      fullImg.style = "max-width: 90%; max-height: 90%; border-radius: 4px; box-shadow: 0 0 30px rgba(0,0,0,0.5);";
      
      modal.appendChild(fullImg);
      modal.onclick = () => {
        modal.style.opacity = "0";
        setTimeout(() => modal.remove(), 300);
      };
      
      document.body.appendChild(modal);
    };
  });
};

// Quartz-specific event that fires on every page load/navigation
document.addEventListener("nav", setupGallery);

// Also run it once on initial load just in case
setupGallery();

console.log("🚀 Gallery Script Active");

document.addEventListener("click", (e) => {
  // 1. Find if the clicked element is an image inside a gallery
  const galleryImg = e.target.closest('.image-gallery img');
  
  if (galleryImg) {
    console.log("📸 Zooming in on:", galleryImg.src);
    
    // 2. Create the overlay
    const modal = document.createElement("div");
    modal.style = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.92); z-index: 10000;
      display: flex; align-items: center; justify-content: center;
      cursor: zoom-out; backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    `;
    
    // 3. Create the expanded image
    const fullImg = document.createElement("img");
    fullImg.src = galleryImg.src;
    fullImg.style = "max-width: 95%; max-height: 95%; border-radius: 4px; object-fit: contain; box-shadow: 0 0 50px rgba(0,0,0,0.5);";
    
    modal.appendChild(fullImg);
    
    // 4. Click anywhere to close
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
  }
});


