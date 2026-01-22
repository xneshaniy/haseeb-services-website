export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Growth Leder',
    url: 'https://growthleder.com',
    logo: 'https://growthleder.com/logo.svg',
    description: 'Results-driven service-based company specializing in lead generation services, virtual assistance, outreach services, CRM management, and automation workflows.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-304-7775545',
      contactType: 'Customer Service',
      email: 'admin@growthleder.com',
    },
    sameAs: [

      'https://twitter.com/growthleder',
      'https://facebook.com/growthleder',
      'https://linkedin.com/company/growthleder',
      'https://youtube.com/@growthleder',
      'https://tiktok.com/@growthleder',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ service }: { service: { name: string; description: string } }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Growth Leder',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function TestimonialSchema({ testimonials }: { testimonials: Array<{ clientName: string; reviewText: string; rating: number }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Growth Leder',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: testimonials.length.toString(),
    },
    review: testimonials.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.clientName,
      },
      reviewBody: testimonial.reviewText,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating.toString(),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ label: string; href: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://growthleder.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
