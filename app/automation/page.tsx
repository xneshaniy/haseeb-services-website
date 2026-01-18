import Link from 'next/link';
import { RefreshIcon, BellIcon, ChartIcon, LinkIcon, SparklesIcon, CogIcon } from '@/components/icons';

export const metadata = {
  title: 'Automation Services | Growth Leder - Workflow Automation & Integration',
  description: 'Save time, reduce manual work, and improve consistency with smart automations. Lead capture, follow-ups, pipeline automation, and more.',
};

const automationServices = [
  {
    icon: <RefreshIcon className="w-8 h-8" />,
    title: 'Lead Capture → CRM',
    description: 'Automatically push leads from forms, ads, landing pages, and spreadsheets into your CRM with proper fields, tags, and owners.',
  },
  {
    icon: <BellIcon className="w-8 h-8" />,
    title: 'Follow-ups & Notifications',
    description: 'Auto reminders, WhatsApp/email notifications, task creation, and follow-up sequences so nothing slips through.',
  },
  {
    icon: <ChartIcon className="w-8 h-8" />,
    title: 'Pipeline Automation',
    description: 'Move deals between stages, assign tasks, and trigger actions based on pipeline updates and customer activity.',
  },
  {
    icon: <SparklesIcon className="w-8 h-8" />,
    title: 'Reporting & Dashboards',
    description: 'Automated weekly reporting from CRM, outreach tools, and spreadsheets for visibility on leads, replies, and bookings.',
  },
  {
    icon: <LinkIcon className="w-8 h-8" />,
    title: 'Integrations',
    description: 'Connect your CRM with email tools, calendars, Google Sheets, Slack, and other apps your team uses.',
  },
  {
    icon: <CogIcon className="w-8 h-8" />,
    title: 'Cleanup & Standardization',
    description: 'De-duplicate contacts, normalize fields, and enforce naming conventions so your data stays clean.',
  },
];

export default function Automation() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#003366] text-white text-center py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h1 className="text-white mb-6">Automation & Workflow Systems</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Save time, reduce manual work, and improve consistency with smart automations.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-4">What We Automate</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Built for speed, reliability, and clear reporting — using tools like Zapier, Make, GoHighLevel, and HubSpot workflows.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-primary/5"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-md hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-dark leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#218838] text-white text-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4">Want to Automate Your Workflow?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Tell us your tools (CRM + outreach + forms) and your goal — we'll recommend the best automation flow.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Request Automation Setup
          </Link>
        </div>
      </section>
    </>
  );
}
