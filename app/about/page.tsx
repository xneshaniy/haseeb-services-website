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
      <section className="text-white text-center py-24 md:py-32 relative overflow-hidden" style={{ background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)' }}>
        <div className="stars-container">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-white mb-6 uppercase tracking-wider">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 text-slate-200 font-medium">
            Growth Leder is a results-driven service-based company dedicated to helping businesses grow, scale, and operate more efficiently.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-bg-darker to-primary opacity-50 pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-12">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
              <Image
                src="/laptop.png"
                alt="Growth Leder team providing professional lead generation services, virtual assistant support, and CRM automation solutions"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div>
              <h2 className="mb-6 text-white text-3xl font-bold">About Us – Growth Leder</h2>
              <p className="mb-4 text-lg text-slate-300">
                Growth Leder is a results-driven service-based company dedicated to helping businesses grow, scale, and operate more efficiently. We specialize in lead generation, virtual assistance, automation, and digital outreach solutions that drive real business results.
              </p>
              <p className="mb-6 text-slate-400">
                Our team works closely with startups, entrepreneurs, and growing companies to deliver reliable, scalable, and customized support. At Growth Leder, we believe in transparency, efficiency, and long-term partnerships.
              </p>
              <p className="mb-8 font-bold text-accent text-xl italic">
                &quot;We don't just support businesses — we help lead their growth.&quot;
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm self-start">
              <h3 className="mb-6 text-white">Join Our Mission</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Ready to take your business to the next level? Our specialized teams are standing by to help you streamline operations and skyrocket your growth.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/services"
                  className="inline-block border-2 border-accent text-accent px-8 py-3 rounded-xl font-bold hover:bg-accent hover:text-white transition-all shadow-lg shadow-accent/10"
                >
                  View Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-[#e66a00] hover:scale-105 transition-all shadow-xl shadow-accent/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
              <h3 className="mb-8 text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full"></span>
                What We Do
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-accent mb-2 uppercase tracking-wide text-sm">Lead Generation</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We provide high-quality, targeted leads to help businesses grow faster and improve conversion rates.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-accent mb-2 uppercase tracking-wide text-sm">Admin Support</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We handle daily administrative tasks including data entry, email management, scheduling, and documentation.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-accent mb-2 uppercase tracking-wide text-sm">Outreach Services</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We manage cold email campaigns and LinkedIn outreach to connect with prospects and build relationships.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-accent mb-2 uppercase tracking-wide text-sm">Automation</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We automate repetitive tasks and build smart workflows that keep ops moving efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#1e7e34] text-white text-center py-24 relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4 text-3xl md:text-5xl font-bold uppercase tracking-wide">Let's Work Together</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-slate-100 italic font-medium">
            &quot;Your growth is our mission. Let's build something great together.&quot;
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-12 py-4 rounded-xl text-xl font-bold hover:bg-slate-100 hover:-translate-y-1 hover:shadow-2xl transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
