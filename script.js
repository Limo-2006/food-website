const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

// toggle menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  overlay.classList.toggle('show');
});

// click on menu link → close menu
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
     overlay.classList.remove("show");
  });
});

// click outside menu → close
document.addEventListener("click", function (e) {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("show");
    overlay.classList.remove("show");
  }
});

function bookTable() {
  alert("Table booking coming soon!");
}
