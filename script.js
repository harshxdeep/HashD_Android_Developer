document.addEventListener("DOMContentLoaded", function () {

/* ============================= */
/* TYPING EFFECT */
/* ============================= */

const phrases = [
  "Android Apps",
  "Kotlin Projects",
  "Enterprise Telecom Solutions",
  "Mobile Experiences",
  "Scalable Applications"
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
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();

/* ============================= */
/* MOBILE MENU TOGGLE */
/* ============================= */

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

/* ============================= */
/* SCROLL ANIMATIONS */
/* ============================= */

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

document.querySelectorAll(".timeline-item, .skill, .project-card")
  .forEach(el => observer.observe(el));

/* ============================= */
/* BACK TO TOP BUTTON */
/* ============================= */

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* ============================= */
/* SMOOTH SCROLL FOR NAV LINKS */
/* ============================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* ============================= */
/* ADD ANIMATION ON SCROLL */
/* ============================= */

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  animateOnScroll.observe(section);
});

});
