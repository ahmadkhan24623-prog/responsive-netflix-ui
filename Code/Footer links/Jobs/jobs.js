// script.js

const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const title = document.querySelector(".hero-title");
const subtitle = document.querySelector(".hero-subtitle");

// hide intro after 3.5 seconds
setTimeout(() => {
  intro.style.opacity = "0";
  intro.style.visibility = "hidden";
}, 3500);

// show hero after intro
setTime