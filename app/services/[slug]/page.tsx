import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getServiceBySlug, services } from '@/lib/services';
import { getTestimonialsByService } from '@/lib/testimonials';
import Breadcrumbs from '@/components/Breadcrumbs';
import Testimonials from '@/components/Testimonials';
import { ServiceSchema, BreadcrumbSchema, TestimonialSchema } from '@/components/SchemaMarkup';
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

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found | Growth Leder',
    };
  }

  return {
    title: `${service.title} | Growth Leder - Professional ${service.title} Services`,
    description: `${service.fullDescription} Get expert ${service.title.toLowerCase()} services with proven results. Contact us for a free consultation.`,
    keywords: `${service.title.toLowerCase()}, ${service.title.toLowerCase()} services, business growth, lead generation services, virtual assistant support, CRM automation`,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const serviceTestimonials = getTestimonialsByService(service.title);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <ServiceSchema service={{ name: service.title, description: service.fullDescription }} />
      <BreadcrumbSchema items={breadcrumbs} />
      {serviceTestimonials.length > 0 && <TestimonialSchema testimonials={serviceTestimonials} />}
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
          <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-white/20">
            {getIcon(service.icon)}
          </div>
          <h1 className="text-white mb-6 uppercase tracking-wider">{service.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-bg-darker to-primary opacity-50 pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-white text-3xl font-bold">About This Service</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-secondary font-bold text-xl mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4">Typical Work</h3>
                <ul className="space-y-3">
                  {service.typicalWork.map((work, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-accent font-bold text-xl mt-1">•</span>
                      <span>{work}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Project */}
      <section className="bg-bg-darker py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 text-white">Featured Project</h2>
            <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md">
              <div className="relative h-72 md:h-[450px] bg-gradient-to-br from-primary to-secondary/30">
                <Image
                  src={service.sampleProject.image}
                  alt={`${service.sampleProject.title} - ${service.title} project example showcasing lead generation services and virtual assistant support`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                  <div className="p-8 md:p-12 w-full text-white">
                    <h3 className="text-2xl md:text-4xl font-bold mb-3">{service.sampleProject.title}</h3>
                    <p className="text-lg md:text-xl text-slate-200 max-w-2xl">{service.sampleProject.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 bg-white/5">
                <h4 className="font-bold text-accent text-xl mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-accent rounded-full"></span>
                  Results Achieved
                </h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {service.sampleProject.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/5">
                      <span className="text-secondary font-bold text-xl mt-0.5">✓</span>
                      <span className="text-slate-200">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {serviceTestimonials.length > 0 && (
        <section className="py-20">
          <div className="container">
            <h2 className="text-center mb-12">What Our Clients Say</h2>
            <Testimonials testimonials={serviceTestimonials} autoPlay={true} showAll={false} />
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="bg-bg-darker py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <h2 className="text-center mb-12 text-white">Related Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-accent/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent/10">
                    {getIcon(relatedService.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{relatedService.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{relatedService.shortDescription}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#1e7e34] text-white text-center py-24 relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-slate-100">
            Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-12 py-4 rounded-xl text-xl font-bold hover:bg-slate-100 hover:-translate-y-1 hover:shadow-2xl transition-all"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
