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

/* ============================= */
/* PARTICLES.JS INITIALIZATION */
/* ============================= */

if (typeof particlesJS !== 'undefined') {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#38bdf8'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#38bdf8',
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}

/* ============================= */
/* ENHANCED SCROLL ANIMATIONS */
/* ============================= */

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('.cert-card, .testimonial-card, .github-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  animateOnScroll.observe(el);
});

/* ============================= */
/* SMOOTH REVEAL FOR SECTIONS */
/* ============================= */

const revealSections = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-revealed');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('#github-stats, #certifications, #testimonials').forEach(section => {
  section.classList.add('section-hidden');
  revealSections.observe(section);
});


/* ============================= */
/* LOADING SCREEN */
/* ============================= */

window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      // Remove from DOM after transition
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 800); // Show for at least 800ms
  }
});

/* ============================= */
/* SCROLL PROGRESS INDICATOR */
/* ============================= */

window.addEventListener('scroll', function() {
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress) {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
  }
}, { passive: true });

/* ============================= */
/* LAZY LOAD IMAGES */
/* ============================= */

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

/* ============================= */
/* KEYBOARD NAVIGATION */
/* ============================= */

document.addEventListener('keydown', function(e) {
  // Escape key closes mobile menu
  if (e.key === 'Escape') {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenu && navMenu) {
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  }
});

/* ============================= */
/* PERFORMANCE MONITORING */
/* ============================= */

if ('PerformanceObserver' in window) {
  try {
    const perfObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.loadTime > 3000) {
          console.warn('Slow load detected:', entry.name, entry.loadTime + 'ms');
        }
      });
    });
    perfObserver.observe({ entryTypes: ['resource'] });
  } catch (e) {
    console.log('Performance monitoring not available');
  }
}

console.log('%c👋 Hi there!', 'font-size: 20px; color: #38bdf8; font-weight: bold;');
console.log('%cLooking at the code? I like your style!', 'font-size: 14px; color: #3DDC84;');
console.log('%cLet\'s connect: https://www.linkedin.com/in/harshwalia27', 'font-size: 12px; color: #cbd5e1;');


/* ============================= */
/* CONTACT FORM HANDLING */
/* ============================= */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const statusDiv = document.getElementById('form-status');
      const formData = new FormData(contactForm);
      
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      statusDiv.style.display = 'none';
      
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Success
          statusDiv.className = 'form-status success';
          statusDiv.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.';
          statusDiv.style.display = 'block';
          contactForm.reset();
          
          // Reset button after 2 seconds
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
          }, 2000);
          
        } else {
          throw new Error('Form submission failed');
        }
        
      } catch (error) {
        // Error
        statusDiv.className = 'form-status error';
        statusDiv.innerHTML = '<i class="fas fa-exclamation-circle"></i> Oops! Something went wrong. Please try again or email me directly at harshwalia27@gmail.com';
        statusDiv.style.display = 'block';
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      }
    });
  }
});
