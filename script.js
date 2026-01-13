const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuList");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".upazila-menu")) {
    menu.classList.remove("active");
  }
});

// ===========================================
// 🔗 Close menu when clicking on links
// ===========================================
document.querySelectorAll('.upazila-link').forEach(link => {
  link.addEventListener('click', () => {
    // New tab will open, close the menu
    menu.classList.remove("active");
  });
});