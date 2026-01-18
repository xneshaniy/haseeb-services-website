export interface Testimonial {
  id: number;
  clientName: string;
  clientPhoto: string;
  reviewText: string;
  projectName: string;
  serviceRendered: string;
  rating: number;
}

export const allTestimonials: Testimonial[] = [
  {
    id: 1,
    clientName: 'Pick Rodom',
    clientPhoto: '', // Add client photo at /public/testimonials/pick-rodom.jpg
    reviewText: 'Growth Leder increased our lead conversion by 45% in 3 months with their expert outreach and data systems.',
    projectName: 'Lead Generation Campaign',
    serviceRendered: 'Lead Generation & Outreach Services',
    rating: 5,
  },
  {
    id: 2,
    clientName: 'Sarah Johnson',
    clientPhoto: '', // Add client photo at /public/testimonials/sarah-johnson.jpg
    reviewText: 'The CRM management and automation workflows they set up saved us 15+ hours per week. Highly professional and results-driven team.',
    projectName: 'CRM Automation Setup',
    serviceRendered: 'CRM Management & Automation',
    rating: 5,
  },
  {
    id: 3,
    clientName: 'Michael Chen',
    clientPhoto: '', // Add client photo at /public/testimonials/michael-chen.jpg
    reviewText: 'Outstanding virtual assistance support. They handle our admin tasks flawlessly, allowing us to focus on core business growth.',
    projectName: 'Admin Support Package',
    serviceRendered: 'Admin Support & Virtual Assistance',
    rating: 5,
  },
  {
    id: 4,
    clientName: 'Emily Rodriguez',
    clientPhoto: '', // Add client photo at /public/testimonials/emily-rodriguez.jpg
    reviewText: 'Their social media management and ad campaigns tripled our online engagement. Clear reporting and consistent execution.',
    projectName: 'Social Media Campaign',
    serviceRendered: 'Social Media Management & Ads',
    rating: 5,
  },
  {
    id: 5,
    clientName: 'David Thompson',
    clientPhoto: '', // Add client photo at /public/testimonials/david-thompson.jpg
    reviewText: 'The cold outreach campaigns generated 200+ qualified leads in the first quarter. Excellent targeting and follow-up systems.',
    projectName: 'Cold Outreach Campaign',
    serviceRendered: 'Outreach Services',
    rating: 5,
  },
];

export function getTestimonialsByService(serviceName: string): Testimonial[] {
  return allTestimonials.filter((t) =>
    t.serviceRendered.toLowerCase().includes(serviceName.toLowerCase())
  );
}
