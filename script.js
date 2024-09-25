document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function () {
  slide.style.transform = "translateX(0%)"; // Show the first image
  btn1.classList.add("active");
  btn2.classList.remove("active");
};

btn2.onclick = function () {
  slide.style.transform = "translateX(-50%)"; // Show the second image
  btn1.classList.remove("active");
  btn2.classList.add("active");
};
