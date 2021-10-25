const navMenu = document.querySelector("nav ul");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll("nav ul li a");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    goToSection();
  });
}

function goToSection() {
  navMenu.classList.toggle("show_menu");
  navToggle.firstElementChild.classList.toggle("uil-times");
  navToggle.classList.toggle("nav_close");
}

navLink.forEach((n) => n.addEventListener("click", goToSection));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const progressBars = entry.target.querySelectorAll(".per");

    if (entry.isIntersecting) {
      progressBars.forEach((n) => {
        let per = n.getAttribute("per");
        n.style.width = per + "%";
        n.classList.add("progress-bar");
      });
      return;
    }

    progressBars.forEach((n) => n.classList.remove("progress-bar"));
  });
});

observer.observe(document.querySelector(".skills"));
