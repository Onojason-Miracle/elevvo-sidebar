const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");
const navLinks = document.getElementById("nav-links");

// Sidebar toggle
toggleBtn.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    sidebar.classList.toggle("closed");
  } else {
    sidebar.classList.toggle("open");
  }
});

// Content change on nav click
const mainHeading = document.getElementById("main-heading");
const mainParagraph = document.getElementById("main-paragraph");

document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Get "Home", "Profile", and the rest navlinks
    const linkText = link.querySelector("span").textContent;

    // Updating main content
    mainHeading.textContent = linkText;
    mainParagraph.textContent = `This is the ${linkText} area`;

    // close menu on mobile after click
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("open");
    }
  });
});
