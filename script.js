// Header scroll effects (glass effect + shadow)
(function () {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }

  // Throttle scroll events
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial check
  handleScroll();
})();

// Active nav link detection based on current page
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a, .mobile-menu a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// Mobile menu functionality
(function () {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-menu-overlay');
  const menuLinks = document.querySelectorAll('.mobile-menu a');

  if (!toggleBtn || !mobileMenu || !overlay) return;

  function openMenu() {
    toggleBtn.classList.add('active');
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggleBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (mobileMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  // Close on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
})();

// Smooth scroll for anchor links
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
})();

// Scroll reveal animations using IntersectionObserver
(function () {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Reveal all elements immediately if reduced motion is preferred
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Optionally unobserve after revealing to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with .reveal class
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // Also observe service cards, portfolio items, etc.
  document.querySelectorAll('.service-card, .portfolio-item, .about-card, .client-logo, .testimonial-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();

// Back to top button
(function () {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  function toggleButton() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', function () {
    if (!window.requestAnimationFrame) {
      toggleButton();
    } else {
      window.requestAnimationFrame(toggleButton);
    }
  });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();

// Form validation and submission handling
(function () {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    const submitBtn = form.querySelector('button[type="submit"]');
    let messageEl = form.querySelector('.form-message');

    // Create message element if it doesn't exist
    if (!messageEl) {
      messageEl = document.createElement('div');
      messageEl.className = 'form-message';
      form.appendChild(messageEl);
    }

    // Real-time validation
    inputs.forEach(input => {
      input.addEventListener('blur', function () {
        validateField(input);
      });

      input.addEventListener('input', function () {
        // Clear error state on input
        if (input.classList.contains('error')) {
          input.classList.remove('error');
          messageEl.classList.remove('error');
          messageEl.style.display = 'none';
        }
      });
    });

    function validateField(field) {
      const value = field.value.trim();
      let isValid = true;

      if (field.hasAttribute('required') && !value) {
        isValid = false;
      }

      if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
        }
      }

      if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) {
          isValid = false;
        }
      }

      if (!isValid) {
        field.classList.add('error');
        field.style.borderColor = 'rgba(220, 53, 69, 0.8)';
      } else {
        field.classList.remove('error');
        field.style.borderColor = '';
      }

      return isValid;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate all fields
      let isFormValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) {
          isFormValid = false;
        }
      });

      if (!isFormValid) {
        showMessage(form, 'Please fill in all required fields correctly.', 'error');
        return;
      }

      // Disable submit button
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      // Get form action (Formspree or other)
      const formAction = form.getAttribute('action');
      const formData = new FormData(form);

      // Submit form
      fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (response.ok) {
            showMessage(form, 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.', 'success');
            form.reset();
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(error => {
          showMessage(form, 'Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
        })
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitBtn.getAttribute('data-original-text') || 'Send Message';
          }
        });
    });

    function showMessage(form, message, type) {
      const messageEl = form.querySelector('.form-message');
      if (messageEl) {
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;
        messageEl.style.display = 'block';

        // Scroll to message
        messageEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide after 5 seconds for success messages
        if (type === 'success') {
          setTimeout(() => {
            messageEl.style.display = 'none';
          }, 5000);
        }
      }
    }

    // Store original button text
    if (submitBtn) {
      submitBtn.setAttribute('data-original-text', submitBtn.textContent);
    }
  });
})();

// Cookie Consent Banner
(function () {
  const cookieBanner = document.createElement('div');
  cookieBanner.className = 'cookie-banner';
  cookieBanner.innerHTML = `
    <div class="cookie-content">
      <p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. <a href="privacy.html">Learn more</a></p>
    </div>
    <div class="cookie-buttons">
      <button class="btn-cookie-decline">Decline</button>
      <button class="btn-cookie-accept">Accept</button>
    </div>
  `;

  document.body.appendChild(cookieBanner);

  const acceptBtn = cookieBanner.querySelector('.btn-cookie-accept');
  const declineBtn = cookieBanner.querySelector('.btn-cookie-decline');

  // Check if user has already made a choice
  const cookieChoice = localStorage.getItem('cookieConsent');

  if (!cookieChoice) {
    // Show banner after a short delay
    setTimeout(() => {
      cookieBanner.classList.add('visible');
    }, 1000);
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.remove('visible');
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieBanner.classList.remove('visible');
  });
})();

// Initialize on DOM ready
(function () {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      // All initialization is handled by the IIFEs above
    });
  }
})();
