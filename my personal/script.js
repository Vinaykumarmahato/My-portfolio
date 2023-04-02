// Get the button element
const darkModeBtn = document.getElementById("dark-icon");

// Get the body element
const body = document.querySelector("body");

// add a click event listener to the function
darkModeBtn.addEventListener("click", function () {
  // toggle the dark-theme class on the body element
  body.classList.toggle("dark-theme");
});

if(body.classList.contains('dark-theme')) {
  darkModeBtn.style.content = "\f185";
}

// ..........togle menu button.........
const menuBtn = document.querySelector('#bars');
const menu = document.querySelector('.menu');

menuBtn.addEventListener("click", () => {
  menu.classList.toggle('menu-toggle');
})


// ..............loading animation..............................
const loader = document.getElementById("loading-section");

window.addEventListener("load", function() {
  loader.style.display = "none";
});