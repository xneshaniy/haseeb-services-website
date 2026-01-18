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
      <section className="bg-gradient-to-br from-primary to-[#003366] text-white text-center py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            {getIcon(service.icon)}
          </div>
          <h1 className="text-white mb-6">{service.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">About This Service</h2>
            <p className="text-lg text-dark leading-relaxed mb-8">
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
      <section className="bg-light py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-4">Sample Project</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary to-secondary">
                <Image
                  src={service.sampleProject.image}
                  alt={`${service.sampleProject.title} - ${service.title} project example showcasing lead generation services and virtual assistant support`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.sampleProject.title}</h3>
                    <p className="text-lg opacity-90">{service.sampleProject.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-bold text-primary mb-4">Results Achieved:</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {service.sampleProject.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-secondary font-bold mt-1">✓</span>
                      <span>{result}</span>
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
      <section className="bg-light py-20">
        <div className="container">
          <h2 className="text-center mb-12">Related Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-primary/5"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-white mb-4">
                    {getIcon(relatedService.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{relatedService.title}</h3>
                  <p className="text-dark text-sm">{relatedService.shortDescription}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-secondary to-[#218838] text-white text-center py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-secondary px-10 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
