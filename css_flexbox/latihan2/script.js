const openNav = document.querySelector(".menu-toggle input[type='checkbox']");
const ul = document.querySelector("nav ul");
openNav.addEventListener("click", function (e) {
  ul.classList.toggle("slide");
});
