// Smooth scrolling for navigation links using JavaScript
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior
      const targetId = this.getAttribute("href"); // Get target section ID
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Scroll smoothly to the target section
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust for header height if needed
          behavior: "smooth", // Smooth scrolling effect
        });
        // Add click event to toggle the circle effect
        document
          .getElementById("navbar")
          .addEventListener("click", function () {
            this.classList.toggle("clicked");
          });
      }
    });
  });