// Parallax Effect on Scroll
window.addEventListener("scroll", () => {
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach((element) => {
    let scrollPosition = window.pageYOffset;
    let speed = element.getAttribute("data-speed") || 0.5;
    element.style.backgroundPositionY = scrollPosition * speed + "px";
  });
});
