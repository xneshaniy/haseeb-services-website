import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Portfolio | Growth Leder - Recent Clients & Completed Projects',
  description: 'View recent clients and completed projects from Growth Leder. Focused on execution, outcomes, and growth.',
};

export default function Portfolio() {
  const portfolioItems = [
    {
      client: 'Lumina Home Decor',
      type: 'Lead Generation',
      title: 'Project Title',
      description: 'Short description of what we delivered and the result (e.g., leads booked, conversion rate, cost per lead).',
      image: '/projects/lead-gen.png',
    },
    {
      client: 'NextGen Logistics',
      type: 'Outreach Services',
      title: 'Campaign Setup & Optimization',
      description: 'Describe targeting, messaging, follow-ups, and the results achieved.',
      image: '/projects/outreach.png',
    },
    {
      client: 'Apex Growth Partners',
      type: 'CRM Management',
      title: 'Pipeline & Automation',
      description: 'CRM setup, pipeline stages, workflows, reporting, and team training details.',
      image: '/projects/crm.png',
    },
    {
      client: 'MedCore Solutions',
      type: 'Admin Support',
      title: 'Operations & Documentation',
      description: 'Describe the tasks handled and time saved for the client.',
      image: '/projects/admin.png',
    },
    {
      client: 'Summit Estate Group',
      type: 'Social Media + Ads',
      title: 'Content & Campaigns',
      description: 'Describe scheduling, engagement, ads, and measurable results.',
      image: '/projects/social.png',
    },
    {
      client: 'TrustGuard Tech',
      type: 'Virtual Assistance',
      title: 'Research & Task Management',
      description: 'Describe the ongoing support scope and the impact on operations.',
      image: '/projects/va.png',
    },
  ];

  const clients = [
    { name: 'Lumina Home Decor', contact: 'Sarah Henderson' },
    { name: 'NextGen Logistics', contact: 'Gary Gilman' },
    { name: 'Apex Growth Partners', contact: 'Victor Hart' },
    { name: 'MedCore Solutions', contact: 'Kevin Howard' },
    { name: 'Summit Estate Group', contact: 'Deborah Wright' },
    { name: 'TrustGuard Tech', contact: 'Simon Miller' },
    { name: 'Stratton Consulting', contact: 'Philip Stratton' },
    { name: 'AutoTech Dynamics', contact: 'Claire McKinsey' },
    { name: 'AutoTech Dynamics', contact: 'James Brighton' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="text-white text-center py-24 md:py-32 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)' }}>
        <div className="stars-container">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h1 className="text-white mb-6">Portfolio</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Recent clients and completed projects — focused on execution, outcomes, and growth.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-bg-darker py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-bg-darker to-primary opacity-50 pointer-events-none" />
        <div className="container relative z-10">
          <h2 className="text-center mb-4 text-white">Recent Clients & Completed Projects</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            Showcasing our impact across various industries and business functions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-500 backdrop-blur-sm group"
              >
                <div className="h-56 relative bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  ) : (
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-accent font-bold text-sm block mb-1 uppercase tracking-wider">{item.client}</span>
                  <span className="text-slate-400 text-sm block mb-3 font-medium">{item.type}</span>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-slate-200 leading-relaxed text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container relative z-10">
          <h2 className="text-center mb-4 text-white">Our Clients</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            We are proud to partner with businesses focused on growth and efficiency.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent/30 hover:scale-105 transition-all text-center backdrop-blur-sm"
              >
                <div className="font-bold text-white text-lg mb-2">{client.name}</div>
                <div className="text-sm text-slate-400 font-semibold">{client.contact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#1e7e34] text-white text-center py-24 relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4">Want Similar Results?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Tell us what you need and we'll suggest the best approach.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
