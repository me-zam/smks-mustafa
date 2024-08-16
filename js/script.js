// Toggle Class Active

const navbarNav = document.querySelector(".navbar-nav");
// Ketika Menu Di Click
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik Diluar Sidebar untuk Menghilangkan Nav

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});
