document.addEventListener("DOMContentLoaded", function () {

/* Typing Effect */
const phrases = [
  "Android Apps",
  "Kotlin Projects",
  "Enterprise Telecom Solutions"
];

let i = 0, currentText = "", isDeleting = false;
const typedText = document.querySelector(".typed-text");

function type() {
  const fullText = phrases[i];
  currentText = isDeleting
    ? fullText.substring(0, currentText.length - 1)
    : fullText.substring(0, currentText.length + 1);

  typedText.textContent = currentText;

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && currentText === fullText) {
    speed = 1000;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(type, speed);
}

type();

/* Scroll Animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      const bar = entry.target.querySelector(".bar span");
      if (bar) {
        bar.style.width = bar.dataset.width;
      }
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".timeline-item, .skill")
  .forEach(el => observer.observe(el));

});
