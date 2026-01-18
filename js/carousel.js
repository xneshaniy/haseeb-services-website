// Service Carousel
function initServiceCarousel() {
  const carouselContainer = document.querySelector('.service-carousel');
  if (!carouselContainer) return;

  // Use services from data.js if available, otherwise use fallback
  const serviceData = typeof services !== 'undefined' ? services : [];
  
  if (serviceData.length === 0) {
    // Fallback services if data.js is not loaded
    serviceData.push(
      { icon: 'target', title: 'Lead Generation', description: 'We provide high-quality, targeted leads to help businesses grow faster and improve conversion rates.' },
      { icon: 'clipboard', title: 'Admin Support', description: 'We handle daily administrative tasks including data entry, email management, scheduling, and documentation—so you can focus on growth.' },
      { icon: 'briefcase', title: 'General Virtual Assistance', description: 'We offer flexible virtual assistance for research, task management, and ongoing business operations.' },
      { icon: 'mail', title: 'Outreach Services (Social + Cold Outreach)', description: 'We manage cold email campaigns and LinkedIn outreach to connect with prospects, follow up with leads, and build strong business relationships.' },
      { icon: 'mobile', title: 'Social Media Management & Ads', description: 'We manage social media accounts, schedule content, engage audiences, run ad campaigns, and improve brand visibility.' },
      { icon: 'chart', title: 'CRM Management', description: 'We set up and manage CRM systems, track leads, maintain pipelines, automate workflows, and generate detailed reports.' },
      { icon: 'cog', title: 'Automation & Workflows', description: 'We automate repetitive tasks, connect tools, and build smart workflows that keep leads and operations moving efficiently.' },
      { icon: 'calculator', title: 'Accounting & Bookkeeping', description: 'We handle your financial records, manage accounts payable and receivable, reconcile bank statements, and prepare financial reports.' }
    );
  }

  const iconMap = {
    target: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
    clipboard: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>',
    briefcase: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
    mail: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
    mobile: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>',
    chart: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
    cog: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
    calculator: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>',
  };

  // Use shortDescription from data if available, otherwise use description
  const services = serviceData.map(s => ({
    icon: s.icon,
    title: s.title,
    description: s.shortDescription || s.description || ''
  }));

  let currentIndex = 0;
  let isAutoPlaying = true;
  let autoPlayInterval;

  function renderCarousel() {
    const slidesContainer = carouselContainer.querySelector('.carousel-slides');
    const dotsContainer = carouselContainer.querySelector('.carousel-dots');

    if (!slidesContainer || !dotsContainer) return;

    slidesContainer.innerHTML = services.map((service, index) => `
      <div class="carousel-slide ${index === currentIndex ? 'active' : ''}">
        <div class="service-card">
          <div class="service-icon">${iconMap[service.icon] || ''}</div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
      </div>
    `).join('');

    dotsContainer.innerHTML = services.map((_, index) => `
      <button class="carousel-dot ${index === currentIndex ? 'active' : ''}" 
              data-index="${index}" 
              aria-label="Go to service ${index + 1}"></button>
    `).join('');

    updateCarousel();
  }

  function updateCarousel() {
    const slides = carouselContainer.querySelectorAll('.carousel-slide');
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });

    const dots = carouselContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });

    const slidesContainer = carouselContainer.querySelector('.carousel-slides');
    if (slidesContainer) {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    isAutoPlaying = false;
    clearInterval(autoPlayInterval);
    setTimeout(() => {
      isAutoPlaying = true;
      startAutoPlay();
    }, 10000);
  }

  function goToPrevious() {
    currentIndex = (currentIndex - 1 + services.length) % services.length;
    updateCarousel();
    isAutoPlaying = false;
    clearInterval(autoPlayInterval);
    setTimeout(() => {
      isAutoPlaying = true;
      startAutoPlay();
    }, 10000);
  }

  function goToNext() {
    currentIndex = (currentIndex + 1) % services.length;
    updateCarousel();
    isAutoPlaying = false;
    clearInterval(autoPlayInterval);
    setTimeout(() => {
      isAutoPlaying = true;
      startAutoPlay();
    }, 10000);
  }

  function startAutoPlay() {
    if (!isAutoPlaying) return;
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % services.length;
      updateCarousel();
    }, 5000);
  }

  // Event listeners
  const prevBtn = carouselContainer.querySelector('.carousel-prev');
  const nextBtn = carouselContainer.querySelector('.carousel-next');

  if (prevBtn) prevBtn.addEventListener('click', goToPrevious);
  if (nextBtn) nextBtn.addEventListener('click', goToNext);

  carouselContainer.addEventListener('click', (e) => {
    const dot = e.target.closest('.carousel-dot');
    if (dot) {
      goToSlide(parseInt(dot.dataset.index));
    }
  });

  // Initialize
  renderCarousel();
  startAutoPlay();
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initServiceCarousel);
} else {
  initServiceCarousel();
}
