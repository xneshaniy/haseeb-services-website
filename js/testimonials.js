// Modern Animated Testimonial Slider
function initTestimonialsCarousel() {
  const testimonialWrapper = document.querySelector('.testimonial-wrapper');
  if (!testimonialWrapper) return;

  const testimonials = typeof allTestimonials !== 'undefined' ? allTestimonials : [];
  if (testimonials.length === 0) return;

  const carousel = testimonialWrapper.querySelector('.testimonial-carousel');
  const dotsContainer = testimonialWrapper.querySelector('.testimonial-dots');
  
  if (!carousel || !dotsContainer) return;

  let current = 0;
  let autoPlayInterval;

  // Render stars helper
  function renderStars(rating) {
    return '⭐'.repeat(rating) + ` ${rating}/5`;
  }

  // Create slides from testimonial data
  carousel.innerHTML = testimonials.map((testimonial, index) => `
    <div class="slide ${index === 0 ? 'active' : ''}">
      <h3>${testimonial.clientName}</h3>
      <span>${testimonial.serviceRendered}</span>
      <p>"${testimonial.reviewText}"</p>
      <div class="stars">${renderStars(testimonial.rating)}</div>
    </div>
  `).join('');

  const slides = carousel.querySelectorAll('.slide');

  // Create dots
  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('span');

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = index;

    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  // Initialize
  goToSlide(0);
  
  // Auto-play
  autoPlayInterval = setInterval(nextSlide, 5000);

  // Pause on hover
  testimonialWrapper.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
  });

  testimonialWrapper.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTestimonialsCarousel);
} else {
  initTestimonialsCarousel();
}
