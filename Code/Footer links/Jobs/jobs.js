const intro = document.getElementById("intro");
const hero = document.getElementById("hero");
const title = document.querySelector(".hero-title");
const subtitle = document.querySelector(".hero-subtitle");

setTimeout(() => {
  intro.style.opacity = "0";
  intro.style.visibility = "hidden";


  hero.classList.add("active");

  setTimeout(() => {
    title.classList.add("active");
  }, 500);
  setTimeout(() => {
    subtitle.classList.add("active");
  }, 1000);

}, 3500);


const scrollSection = document.querySelector(".scroll-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollSection.classList.add("active");
    }
  });
}, {
  threshold: 0.5
});

observer.observe(scrollSection);

