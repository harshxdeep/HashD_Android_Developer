/* ===============================
   TYPING EFFECT (HERO SECTION)
================================= */

const phrases = [
  "Android Apps",
  "Kotlin Projects",
  "Enterprise Telecom Solutions",
  "SDK Integrations"
];

let i = 0;
let currentText = "";
let isDeleting = false;
const typedText = document.querySelector(".typed-text");

function typeEffect() {
  if (!typedText) return;

  const fullText = phrases[i];

  currentText = isDeleting
    ? fullText.substring(0, currentText.length - 1)
    : fullText.substring(0, currentText.length + 1);

  typedText.textContent = currentText;

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && currentText === fullText) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


/* ===============================
   SCROLL ANIMATIONS
================================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate skill bars
      if (entry.target.classList.contains("skill")) {
        const bar = entry.target.querySelector(".bar span");
        const width = bar.getAttribute("data-width");
        if (width) {
          bar.style.width = width;
        }
      }
    }
  });
}, { threshold: 0.2 });


// Observe timeline items
document.querySelectorAll(".timeline-item").forEach(item => {
  observer.observe(item);
});

// Observe skills
document.querySelectorAll(".skill").forEach(skill => {
  const span = skill.querySelector(".bar span");

  // Move width into data attribute (cleaner animation)
  const currentWidth = span.style.width;
  span.style.width = "0";
  span.setAttribute("data-width", currentWidth);

  observer.observe(skill);
});
