function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  
  body.classList.toggle("dark-mode");
  
  // Update the icon
  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
}

// Load theme preference on page load
document.addEventListener("DOMContentLoaded", function() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }
});
