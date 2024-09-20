const modal = document.getElementById("projectModal");
const span = document.getElementsByClassName("close")[0];
const viewButtons = document.getElementsByClassName("view-project");
const achievementItems = document.getElementsByClassName("achievement-item");

function openModal(project) {
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");

  switch (project) {
    case "project1":
      modalTitle.textContent = "Edymax Banner";
      modalImage.src = "assets/banners/banner1.png";
      modalDescription.textContent =
        "This promotional banner for Edymax features a bold and eye-catching layout designed to capture attention at events and trade shows. The vibrant colors and modern typography effectively showcase Edymax's educational services, appealing to potential students and partners.";
      break;
    case "project2":
    case "project3":
      modalTitle.textContent = "Eulogy Page";
      modalImage.src =
        project === "project2"
          ? "assets/Eulogy/eulogypg1.png"
          : "assets/Eulogy/eulogypg2.png";
      modalDescription.textContent =
        "This eulogy page was crafted with utmost care and respect, incorporating elegant typography and a somber color palette. The design aims to honor the deceased while providing comfort to loved ones. The layout allows for a dignified presentation of the departed's life story, achievements, and cherished memories.";
      break;
    case "project4":
    case "project5":
    case "project6":
      modalTitle.textContent = "Business Cards";
      modalImage.src =
        project === "project6"
          ? "assets/bscards/bscard1.jpeg"
          : "assets/bscards/bscard0.jpeg";
      modalDescription.textContent =
        "These business cards were meticulously designed to make a lasting impression. They feature a clean, professional layout with a touch of creativity to stand out. The designs range from sleek and minimalistic for modern professionals to vibrant and dynamic for creative industries, ensuring each card effectively represents the brand identity of its owner.";
      break;
    case "project7":
      modalTitle.textContent = "Company Profile";
      modalImage.src = "assets/company-profiles/c-profile1.jpeg";
      modalDescription.textContent =
        "This comprehensive company profile for Fortuvest Reliant was designed to showcase the company's strengths, values, and services. The layout is professional and informative, using brand colors and strategic visuals to reinforce the company's identity. Each page is carefully crafted to highlight different aspects of the business, from core values and leadership to key statistics and growth strategies, effectively communicating Fortuvest Reliant's unique position in the market.";
      break;
    case "project8":
      modalTitle.textContent = "Company Profile";
      modalImage.src = "assets/company-profiles/c-profile2.jpeg";
      modalDescription.textContent = "";
      break;
    case "project9":
      modalTitle.textContent = "Company Profile";
      modalImage.src = "assets/company-profiles/c-profile3.jpeg";
      modalDescription.textContent = "";
      break;
    case "project10":
      modalTitle.textContent = "Company Profile";
      modalImage.src = "assets/company-profiles/c-profile4.jpeg";
      modalDescription.textContent = "";
      break;
    case "project11":
      modalTitle.textContent = "Company Profile";
      modalImage.src = "assets/company-profiles/c-profile5.jpeg";
      modalDescription.textContent = "";
      break;
    case "project12":
      modalTitle.textContent = "Fortuvest Reliant Company Profile";
      modalImage.src = `assets/company-profiles/c-profile${project.slice(
        -1
      )}.jpeg`;
      modalDescription.textContent =
        "This comprehensive company profile for Fortuvest Reliant was designed to showcase the company's strengths, values, and services. The layout is professional and informative, using brand colors and strategic visuals to reinforce the company's identity. Each page is carefully crafted to highlight different aspects of the business, from core values and leadership to key statistics and growth strategies, effectively communicating Fortuvest Reliant's unique position in the market.";
      break;
    case "project13":
      modalTitle.textContent = "Logo Design";
      modalImage.src = `assets/logos/logo1.jpeg`;
      modalDescription.textContent =
        "The logo for Vaso East Africa Limited is a clean and professional representation of the brand's identity. It features a modern design that conveys trust, reliability, and innovation. The use of bold colors and a minimalistic style reflects the company's focus on efficiency and forward-thinking solutions in the East African market. The logo is versatile and easily recognizable, making it ideal for various branding applications, from business cards to corporate signage.";
      break;
    case "project14":
      modalTitle.textContent = "Logo Design";
      modalImage.src = `assets/logos/logo2.jpeg`;
      modalDescription.textContent =
        "This logo embodies the dynamic and progressive nature of Vaso East Africa Limited. With its sleek typography and distinct emblem, the design conveys a sense of professionalism and innovation. The logo’s color scheme and modern aesthetic are carefully chosen to represent the company's commitment to excellence and growth in the East African region. It is designed to be impactful and versatile, suitable for both digital and print media, effectively capturing the essence of the brand.";
      break;
    case "project15":
      modalTitle.textContent = "Logo Design";
      modalImage.src = `assets/logos/logo3.jpeg`;
      modalDescription.textContent =
        "The logo for Tik-Tank East Africa Limited combines modern aesthetics with a professional touch. Featuring a dynamic blend of colors and typography, it reflects the brand's innovative and forward-thinking approach. The design encapsulates the essence of the company's mission to drive digital transformation and creativity across the region.";
      break;
    case "project16":
      modalTitle.textContent = "Logo Design";
      modalImage.src = `assets/logos/logo4.jpeg`;
      modalDescription.textContent =
        "A modern and professional logo created for AstrazenDrix Global, symbolizing innovation and global reach. The design incorporates sleek typography and a dynamic globe motif, reflecting the company's commitment to advancing healthcare solutions worldwide. The color palette features a combination of blue and green, representing trust and growth, making it an ideal visual identity for the brand.";
      break;
    case "project17":
      modalTitle.textContent = "KNA Logo Design";
      modalImage.src = `assets/logos/logo5.jpeg`;
      modalDescription.textContent =
        "The Kenya National Alliance logo is a symbol of unity and strength, representing a collective vision for a better future. The design features vibrant colors inspired by the Kenyan flag, with elements that signify harmony, progress, and leadership. This logo embodies the alliance's commitment to fostering national unity and driving positive change across the country.";
      break;
    case "project18":
      modalTitle.textContent = "Text Logo Design";
      modalImage.src = `assets/logos/logo6.jpeg`;
      modalDescription.textContent =
        "This logo was meticulously designed to capture the essence of the brand. It combines unique typography with a memorable symbol to create a strong visual identity. The design process involved careful consideration of color psychology, scalability, and versatility to ensure the logo effectively represents the brand across various mediums and applications.";
      break;
    case "project19":
      modalTitle.textContent = "Spicy Logo Design";
      modalImage.src = "assets/logos/spicylogo.png";
      modalDescription.textContent =
        "This spicy logo design incorporates elements that suggest heat and flavor, perfect for a food-related brand. The vibrant colors and dynamic shape create an eye-catching visual identity. The design cleverly integrates the concept of spiciness with modern typography, resulting in a logo that's both appetizing and memorable for fast-food or culinary businesses.";
      break;
    case "project20":
      // modalTitle.textContent = "Poster Design";
      // modalImage.src = `assets/Posters/poster1.jpeg`;
      // modalDescription.textContent = "";
      // break;
    case "project22":
      modalTitle.textContent = "Poster Design";
      modalImage.src = `assets/Posters/poster${
        project === "project20" ? "1" : "3"
      }.jpeg`;
      modalDescription.textContent =
        "This poster was designed to capture attention and convey information effectively. It uses a combination of striking visuals and clear typography to communicate its message. Whether for an event promotion or advertising campaign, the design ensures high visibility and brand recall. The layout, color scheme, and imagery were carefully chosen to resonate with the target audience and convey the essence of the subject matter.";
      break;
    default:
      modalTitle.textContent = "Project Details";
      modalImage.src = "";
      modalDescription.textContent = "Project description not available.";
  }

  modal.style.display = "block";
}

function openImageModal(imageSrc) {
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  modalImage.src = imageSrc;
  modalTitle.textContent = "Achievement Image";
  modalDescription.textContent = ""; // Clear the description for image-only view

  adjustModalForImage();
  modal.style.display = "block";
}

for (let i = 0; i < viewButtons.length; i++) {
  viewButtons[i].onclick = function () {
    const project =
      this.closest(".portfolio-item").getAttribute("data-project");
    openModal(project);
  };
}

for (let i = 0; i < achievementItems.length; i++) {
  achievementItems[i].onclick = function () {
    const imageSrc = this.querySelector("img").src;
    openImageModal(imageSrc);
  };
}

span.onclick = function () {
  modal.style.display = "none";
  resetModalStyles();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    resetModalStyles();
  }
};

function resetModalStyles() {
  const modalContent = document.querySelector(".modal-content");
  modalContent.style.width = "80%";
  modalContent.style.maxWidth = "600px";
  modalContent.style.height = "auto";
  modalContent.style.maxHeight = "none";

  const modalImage = document.getElementById("modalImage");
  modalImage.style.width = "100%";
  modalImage.style.height = "auto";
  modalImage.style.maxHeight = "none";
  modalImage.style.objectFit = "cover";
}

function adjustModalForImage() {
  const modalContent = document.querySelector(".modal-content");
  modalContent.style.width = "auto";
  modalContent.style.maxWidth = "90%";
  modalContent.style.height = "auto";
  modalContent.style.maxHeight = "90vh";

  const modalImage = document.getElementById("modalImage");
  modalImage.style.width = "100%";
  modalImage.style.height = "auto";
  modalImage.style.maxHeight = "80vh";
  modalImage.style.objectFit = "contain";
}
