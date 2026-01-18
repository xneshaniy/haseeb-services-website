import Link from 'next/link';
import Image from 'next/image';
import ServiceCarousel from '@/components/ServiceCarousel';
import Testimonials from '@/components/Testimonials';
import { allTestimonials } from '@/lib/testimonials';
import { TargetIcon, ClipboardIcon, BriefcaseIcon, MailIcon, MobileIcon, ChartIcon } from '@/components/icons';

export const metadata = {
  title: 'Home | Growth Leder - Lead Generation • Virtual Assistance • Outreach Services',
  description: 'Grow your business with systems that work. Professional lead generation services, virtual assistant support, CRM automation, and outreach services delivered with consistency and measurable results.',
  keywords: 'lead generation services, virtual assistant support, CRM automation, outreach services, business growth, virtual assistance',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#003366] text-white text-center py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <div className="relative h-64 md:h-96 mb-8 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/home1.jpg"
              alt="Professional business growth services - Lead generation services, virtual assistant support, and CRM automation for growing businesses"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
              <div className="text-center p-8">
                <h1 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
                  Grow Your Business with Systems That Work
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-95">
                  Lead generation, outreach, CRM management, and virtual support — delivered with consistency and measurable results.
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-10 py-4 rounded-lg text-lg md:text-xl font-semibold hover:bg-[#218838] hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Get a Free Strategy Call →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-20">
        <div className="container">
          <h2 className="text-center mb-12">Our Services</h2>
          <ServiceCarousel />
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e66a00] hover:-translate-y-1 hover:shadow-md transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center mb-12">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/laptop.png"
                alt="Professional virtual assistant support and CRM automation services for business growth"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4">About Us</h2>
              <p className="mb-4 text-lg">
                We help businesses build repeatable systems for lead generation, outreach, CRM, and operations. Our goal is to keep work organized, communication clear, and progress measurable.
              </p>
              <p className="mb-6">
                If you need someone reliable to manage daily tasks and growth operations — we're ready to help.
              </p>
              <Link
                href="/about"
                className="inline-block bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#e66a00] hover:-translate-y-0.5 transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Clear weekly updates', 'Organized task tracking', 'Fast communication', 'Consistent execution'].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all text-center border border-primary/5">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <p className="font-semibold text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-20">
        <div className="container">
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Don't just take our word for it. See what our clients have to say about working with Growth Leder.
          </p>
          <Testimonials testimonials={allTestimonials} autoPlay={true} showAll={false} />
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block text-accent font-semibold hover:underline"
            >
              View More Client Success Stories →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#218838] text-white text-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4">Ready to Scale Your Business?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Get a free 15-min consultation – no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-12 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </>
  );
}
