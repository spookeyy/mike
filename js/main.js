document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust offset for fixed header
          behavior: "smooth",
        });
      } else {
        window.location.href = this.href;
      }
    });
  });

  // Portfolio Lightbox Functionality
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  portfolioItems.forEach((item) => {
    item.addEventListener("click", () => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = item.querySelector("img").src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // Animate Elements on Scroll
  const animatedElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // Toggle Menu for Mobile View
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Parallax Effect on Scroll
  const parallaxSections = document.querySelectorAll(".parallax");

  window.addEventListener("scroll", () => {
    parallaxSections.forEach((section) => {
      let scrollPosition = window.pageYOffset;
      section.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    });
  });
});
