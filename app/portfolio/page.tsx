import Link from 'next/link';

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
    },
    {
      client: 'NextGen Logistics',
      type: 'Outreach Services',
      title: 'Campaign Setup & Optimization',
      description: 'Describe targeting, messaging, follow-ups, and the results achieved.',
    },
    {
      client: 'Apex Growth Partners',
      type: 'CRM Management',
      title: 'Pipeline & Automation',
      description: 'CRM setup, pipeline stages, workflows, reporting, and team training details.',
    },
    {
      client: 'MedCore Solutions',
      type: 'Admin Support',
      title: 'Operations & Documentation',
      description: 'Describe the tasks handled and time saved for the client.',
    },
    {
      client: 'Summit Estate Group',
      type: 'Social Media + Ads',
      title: 'Content & Campaigns',
      description: 'Describe scheduling, engagement, ads, and measurable results.',
    },
    {
      client: 'TrustGuard Tech',
      type: 'Virtual Assistance',
      title: 'Research & Task Management',
      description: 'Describe the ongoing support scope and the impact on operations.',
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
      <section className="bg-gradient-to-br from-primary to-[#003366] text-white text-center py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h1 className="text-white mb-6">Portfolio</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Recent clients and completed projects — focused on execution, outcomes, and growth.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-light py-20">
        <div className="container">
          <h2 className="text-center mb-4">Recent Clients & Completed Projects</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Replace these sample projects with your real clients/projects anytime.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-primary/5"
              >
                <div className="h-56 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <span className="text-secondary font-semibold text-sm block mb-1">{item.client}</span>
                  <span className="text-gray-500 text-sm block mb-3">{item.type}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-dark leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-4">Recent Clients</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Recent clients we've worked with.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all text-center border border-primary/5"
              >
                <div className="font-bold text-primary text-lg mb-2">{client.name}</div>
                <div className="text-sm text-gray-600 font-semibold">{client.contact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#218838] text-white text-center py-20 relative overflow-hidden">
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
