console.log("🚀 Gallery script active!");

document.addEventListener("nav", () => {
  console.log("📸 Re-scanning for gallery images...");
  const images = document.querySelectorAll(".image-gallery img");
  
  images.forEach(img => {
    img.onclick = (e) => {
      e.preventDefault();
      const modal = document.createElement("div");
      modal.style = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:10000;display:flex;align-items:center;justify-content:center;cursor:zoom-out;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);";
      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      fullImg.style = "max-width:95%;max-height:95%;border-radius:10px;object-fit:contain;box-shadow:0 0 50px rgba(0,0,0,0.5);";
      modal.appendChild(fullImg);
      modal.onclick = () => modal.remove();
      document.body.appendChild(modal);
    };
  });
});
