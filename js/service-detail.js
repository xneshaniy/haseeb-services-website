// Render Service Detail Page
function renderServiceDetail() {
  // Get service slug from page filename (e.g., service-lead-generation.html -> lead-generation)
  const currentPage = window.location.pathname.split('/').pop() || '';
  const slug = currentPage.replace('service-', '').replace('.html', '');
  
  if (!slug || typeof services === 'undefined') return;
  
  const service = getServiceBySlug(slug);
  if (!service) {
    // Service not found, redirect to services page
    window.location.href = 'services.html';
    return;
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

  // Update page title
  document.title = `${service.title} | Growth Leder - Professional ${service.title} Services`;

  // Render breadcrumbs
  const breadcrumbsContainer = document.querySelector('.breadcrumbs');
  if (breadcrumbsContainer) {
    breadcrumbsContainer.innerHTML = `
      <nav aria-label="Breadcrumb">
        <ol style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; font-size: 0.9rem;">
          <li style="display: flex; align-items: center; gap: 0.5rem;"><a href="index.html" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s;">Home</a></li>
          <li style="display: flex; align-items: center;"><svg style="width: 16px; height: 16px; color: rgba(255,255,255,0.4);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></li>
          <li style="display: flex; align-items: center; gap: 0.5rem;"><a href="services.html" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.3s;">Services</a></li>
          <li style="display: flex; align-items: center;"><svg style="width: 16px; height: 16px; color: rgba(255,255,255,0.4);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></li>
          <li style="color: rgba(255,255,255,0.95); font-weight: 600;">${service.title}</li>
        </ol>
      </nav>
    `;
  }

  // Render hero icon
  const heroIcon = document.querySelector('.service-hero-icon');
  if (heroIcon) {
    heroIcon.innerHTML = iconMap[service.icon] || '';
  }

  // Render service title
  const serviceTitle = document.querySelector('.service-title');
  if (serviceTitle) {
    serviceTitle.textContent = service.title;
  }

  // Render short description
  const shortDesc = document.querySelector('.service-short-desc');
  if (shortDesc) {
    shortDesc.textContent = service.shortDescription;
  }

  // Render full description
  const fullDesc = document.querySelector('.service-full-desc');
  if (fullDesc) {
    fullDesc.textContent = service.fullDescription;
  }

  // Render features
  const featuresList = document.querySelector('.service-features');
  if (featuresList) {
    featuresList.innerHTML = service.features.map(feature => `
      <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span style="color: var(--secondary); font-weight: 700; font-size: 1.25rem; margin-top: 0.25rem;">✓</span>
        <span>${feature}</span>
      </li>
    `).join('');
  }

  // Render typical work
  const typicalWorkList = document.querySelector('.service-typical-work');
  if (typicalWorkList) {
    typicalWorkList.innerHTML = service.typicalWork.map(work => `
      <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span style="color: var(--accent); font-weight: 700; font-size: 1.25rem; margin-top: 0.25rem;">•</span>
        <span>${work}</span>
      </li>
    `).join('');
  }

  // Render sample project
  const sampleProjectTitle = document.querySelector('.sample-project-title');
  if (sampleProjectTitle) {
    sampleProjectTitle.textContent = service.sampleProject.title;
  }

  const sampleProjectDesc = document.querySelector('.sample-project-desc');
  if (sampleProjectDesc) {
    sampleProjectDesc.textContent = service.sampleProject.description;
  }

  const sampleProjectResults = document.querySelector('.sample-project-results');
  if (sampleProjectResults) {
    sampleProjectResults.innerHTML = service.sampleProject.results.map(result => `
      <li style="display: flex; align-items: start; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span style="color: var(--secondary); font-weight: 700; margin-top: 0.25rem;">✓</span>
        <span>${result}</span>
      </li>
    `).join('');
  }

  // Render testimonials
  const serviceTestimonials = getTestimonialsByService(service.title);
  const testimonialsContainer = document.querySelector('.service-testimonials');
  if (testimonialsContainer) {
    if (serviceTestimonials.length > 0) {
      testimonialsContainer.innerHTML = `
        <h2 style="text-align: center; margin-bottom: 3rem;">What Our Clients Say</h2>
        <div class="testimonials-grid">
          ${serviceTestimonials.map(testimonial => `
            <div class="testimonial-card">
              <div class="testimonial-avatar">
                ${testimonial.clientPhoto 
                  ? `<img src="${testimonial.clientPhoto}" alt="${testimonial.clientName}">`
                  : `<span>${testimonial.clientName.charAt(0)}</span>`
                }
              </div>
              <div class="testimonial-stars">
                ${Array.from({ length: 5 }).map((_, i) => `
                  <svg class="star ${i < testimonial.rating ? 'filled' : ''}" fill="currentColor" viewBox="0 0 20 20" style="width: 20px; height: 20px; color: ${i < testimonial.rating ? '#fbbf24' : '#d1d5db'};">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                `).join('')}
              </div>
              <p class="testimonial-text">"${testimonial.reviewText}"</p>
              <h4 class="testimonial-author-name">${testimonial.clientName}</h4>
              <p class="testimonial-project">${testimonial.projectName}</p>
              <p class="testimonial-service">${testimonial.serviceRendered}</p>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      testimonialsContainer.innerHTML = '';
    }
  }

  // Render related services
  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 3);
  const relatedServicesContainer = document.querySelector('.related-services');
  if (relatedServicesContainer) {
    relatedServicesContainer.innerHTML = `
      <h2 style="text-align: center; margin-bottom: 3rem;">Related Services</h2>
      <div class="services-grid">
        ${relatedServices.map(relatedService => `
          <a href="service-${relatedService.slug}.html" class="service-card" style="text-decoration: none; color: inherit;">
            <div class="service-icon">${iconMap[relatedService.icon] || ''}</div>
            <h3>${relatedService.title}</h3>
            <p>${relatedService.shortDescription}</p>
          </a>
        `).join('')}
      </div>
    `;
  }

  // Update CTA text
  const ctaText = document.querySelector('.service-cta-text');
  if (ctaText) {
    ctaText.textContent = `Let's discuss how our ${service.title.toLowerCase()} services can help your business grow.`;
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderServiceDetail);
} else {
  renderServiceDetail();
}
