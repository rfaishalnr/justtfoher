document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("photo-modal");
    const modalImage = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close");
    const clickMeFooter = document.getElementById("click-me");
  
    // Get all images
    const images = document.querySelectorAll(".photo-card img");
  
    images.forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = img.src;
        captionText.innerText = img.alt;
      });
    });
  
    // Close modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside the image
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Show "Made for You" image when footer is clicked
    clickMeFooter.addEventListener("click", () => {
      modal.style.display = "block";
      modalImage.src = "made-for-you.jpg"; // Ganti dengan foto Anda
      captionText.innerText = "Made for You ❤️";
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("photo-modal");
    const modalImage = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close");
    const clickMeFooter = document.getElementById("click-me");
  
    // Get all images
    const images = document.querySelectorAll(".photo-card img");
  
    images.forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = img.src;
        captionText.innerText = img.alt;
      });
    });
  
    // Close modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside the image
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    // Show "12.jpeg" image when footer is clicked
    clickMeFooter.addEventListener("click", () => {
      modal.style.display = "block";
      modalImage.src = "12.jpeg"; // Nama file gambar
      captionText.innerText = "Made for You ❤️"; // Teks keterangan
    });
  });
  