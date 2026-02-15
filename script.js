// Typing Effect for Hero Section
const phrases = ["Android Apps", "Kotlin Projects", "React Interfaces"];
let i = 0, currentText = "", isDeleting = false;
const typedText = document.querySelector(".typed-text");

function type() {
  if (!typedText) return;
  const fullText = phrases[i];
  currentText = isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1);
  typedText.textContent = currentText;
  let speed = isDeleting ? 50 : 150;
  if (!isDeleting && currentText === fullText) { speed = 1000; isDeleting = true; }
  else if (isDeleting && currentText === "") { isDeleting = false; i = (i + 1) % phrases.length; speed = 500; }
  setTimeout(type, speed);
}
type();

// Animate timeline on scroll
const timelineItems = document.querySelectorAll(".timeline-item");
window.addEventListener("scroll", () => {
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) item.classList.add("visible");
  });
});

// Animate skill bars on scroll
const skillSpans = document.querySelectorAll(".skill-bar span");
window.addEventListener("scroll", () => {
  skillSpans.forEach(span => {
    span.style.width = span.style.width || span.parentElement.getAttribute("data-width");
  });
});
