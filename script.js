document.addEventListener("DOMContentLoaded", () => {

  /* ============================= */
  /* TYPING EFFECT (SMOOTHER) */
  /* ============================= */

  const phrases = [
    "iOS & Android Apps",
    "Swift & Kotlin Projects",
    "Cross-Platform Solutions",
    "Enterprise Mobile Apps",
    "Native Mobile Experiences"
  ];

  const typedText = document.querySelector(".typed-text");
  if (typedText) {
    let i = 0;
    let currentText = "";
    let isDeleting = false;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 1500;

    function typeEffect() {
      const fullText = phrases[i];

      currentText = isDeleting
        ? fullText.slice(0, currentText.length - 1)
        : fullText.slice(0, currentText.length + 1);

      typedText.textContent = currentText;

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && currentText === fullText) {
        speed = pauseTime;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        speed = 400;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  }

  /* ============================= */
  /* MOBILE MENU */
  /* ============================= */

  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !navMenu.contains(e.target)) {
        mobileMenu.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }

  /* ============================= */
  /* SCROLL ANIMATIONS (OPTIMIZED) */
  /* ============================= */

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        const bar = entry.target.querySelector(".bar span");
        if (bar && bar.dataset.width) {
          bar.style.width = bar.dataset.width;
        }

        obs.unobserve(entry.target); // improves performance
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".timeline-item, .skill, .project-card")
    .forEach(el => observer.observe(el));

  /* ============================= */
  /* BACK TO TOP (THROTTLED) */
  /* ============================= */

  const backToTopBtn = document.getElementById("back-to-top");

  function throttle(fn, limit) {
    let lastCall = 0;
    return function () {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        fn();
      }
    };
  }

  if (backToTopBtn) {
    const handleScroll = throttle(() => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ============================= */
  /* SMOOTH SCROLL */
  /* ============================= */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  /* ============================= */
  /* SECTION FADE-IN ANIMATION */
  /* ============================= */

  const sectionObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll("section").forEach(section => {
    section.classList.add("fade-init");
    sectionObserver.observe(section);
  });

});
