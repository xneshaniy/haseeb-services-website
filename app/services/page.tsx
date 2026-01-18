import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { services } from '@/lib/services';
import {
  TargetIcon,
  ClipboardIcon,
  BriefcaseIcon,
  MailIcon,
  MobileIcon,
  ChartIcon,
  CogIcon,
  CalculatorIcon,
} from '@/components/icons';

const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    target: <TargetIcon className="w-8 h-8" />,
    clipboard: <ClipboardIcon className="w-8 h-8" />,
    briefcase: <BriefcaseIcon className="w-8 h-8" />,
    mail: <MailIcon className="w-8 h-8" />,
    mobile: <MobileIcon className="w-8 h-8" />,
    chart: <ChartIcon className="w-8 h-8" />,
    cog: <CogIcon className="w-8 h-8" />,
    calculator: <CalculatorIcon className="w-8 h-8" />,
  };
  return iconMap[iconName] || <BriefcaseIcon className="w-8 h-8" />;
};

export const metadata = {
  title: 'Services | Growth Leder - Lead Generation • Virtual Assistance • Outreach • CRM Management',
  description: 'Comprehensive business services including lead generation services, virtual assistant support, outreach services, CRM management, automation workflows, and social media management. Expert solutions for business growth.',
  keywords: 'lead generation services, virtual assistant support, CRM automation, outreach services, social media management, business automation, virtual assistance',
};

export default function Services() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
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
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-white mb-6">Our Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Reliable support, outreach, and growth systems to help your business scale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-bg-darker to-primary opacity-50 pointer-events-none" />
        <div className="container relative z-10">
          <h2 className="text-center mb-4 text-white">What We Can Do For You</h2>
          <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
            Explore our comprehensive range of services designed to help your business grow, scale, and operate more efficiently.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-accent/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">{service.shortDescription}</p>
                <span className="text-accent font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#1e7e34] text-white text-center py-24 relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4">Want Help With Any of These?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Send your requirements and we'll share a clear plan and next steps.
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
