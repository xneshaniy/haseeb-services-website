import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'About Us | Growth Leder - Service-Based Company',
  description: 'Learn about Growth Leder, a results-driven service-based company dedicated to helping businesses grow, scale, and operate more efficiently through lead generation, virtual assistance, and automation.',
  keywords: 'about Growth Leder, business growth services, lead generation company, virtual assistance company, CRM management services',
};

export default function About() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#003366] text-white text-center py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-white mb-6">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Growth Leder is a results-driven service-based company dedicated to helping businesses grow, scale, and operate more efficiently.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-12">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/laptop.png"
                alt="Growth Leder team providing professional lead generation services, virtual assistant support, and CRM automation solutions"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6">About Us – Growth Leder</h2>
              <p className="mb-4 text-lg">
                Growth Leder is a results-driven service-based company dedicated to helping businesses grow, scale, and operate more efficiently. We specialize in lead generation, virtual assistance, automation, and digital outreach solutions that drive real business results.
              </p>
              <p className="mb-6">
                Our team works closely with startups, entrepreneurs, and growing companies to deliver reliable, scalable, and customized support. At Growth Leder, we believe in transparency, efficiency, and long-term partnerships.
              </p>
              <p className="mb-8 font-semibold text-primary text-lg">
                We don't just support businesses — we help lead their growth.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/services"
                  className="inline-block border-2 border-primary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  View Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e66a00] hover:-translate-y-0.5 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/10 p-8 rounded-xl border border-secondary/20 hover:shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="mb-6">What We Can Do For You</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Lead Generation</h4>
                  <p className="text-sm text-dark">
                    We provide high-quality, targeted leads to help businesses grow faster and improve conversion rates.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Admin Support</h4>
                  <p className="text-sm text-dark">
                    We handle daily administrative tasks including data entry, email management, scheduling, and documentation—so you can focus on growth.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">General Virtual Assistance</h4>
                  <p className="text-sm text-dark">
                    We offer flexible virtual assistance for research, task management, and ongoing business operations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Outreach Services (Social + Cold Outreach)</h4>
                  <p className="text-sm text-dark">
                    We manage cold email campaigns and LinkedIn outreach to connect with prospects, follow up with leads, and build strong business relationships.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Social Media Management & Ads</h4>
                  <p className="text-sm text-dark">
                    We manage social media accounts, schedule content, engage audiences, run ad campaigns, and improve brand visibility.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">CRM Management</h4>
                  <p className="text-sm text-dark">
                    We set up and manage CRM systems, track leads, maintain pipelines, automate workflows, and generate detailed reports.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Automation & Workflows</h4>
                  <p className="text-sm text-dark">
                    We automate repetitive tasks, connect tools, and build smart workflows that keep leads and operations moving efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#218838] text-white text-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4">Let's Work Together</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Send a message with your needs and your preferred contact method.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
