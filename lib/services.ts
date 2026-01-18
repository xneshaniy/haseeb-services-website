export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  typicalWork: string[];
  sampleProject: {
    title: string;
    description: string;
    image: string;
    results: string[];
  };
}

export const services: Service[] = [
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'We provide high-quality, targeted leads to help businesses grow faster and improve conversion rates.',
    fullDescription: 'Our lead generation services help businesses identify, attract, and convert high-quality prospects. We use advanced targeting techniques, data analysis, and proven outreach strategies to deliver qualified leads that convert. Whether you need B2B leads, consumer leads, or industry-specific prospects, we create customized campaigns that align with your business goals.',
    icon: 'target',
    features: [
      'Advanced lead research and qualification',
      'Multi-channel lead sourcing',
      'Lead scoring and prioritization',
      'Regular lead delivery and reporting',
      'CRM integration and tracking',
    ],
    typicalWork: [
      'Research and identify target prospects using industry databases and tools',
      'Qualify leads based on your specific criteria (budget, authority, need, timeline)',
      'Set up automated lead capture systems and forms',
      'Integrate leads into your CRM with proper tagging and categorization',
      'Provide weekly reports with lead quality metrics and conversion tracking',
    ],
    sampleProject: {
      title: 'B2B SaaS Lead Generation Campaign',
      description: 'Generated 500+ qualified leads for a SaaS company targeting mid-market businesses in the technology sector.',
      image: '/projects/lead-generation-project.jpg', // Add project image at /public/projects/lead-generation-project.jpg
      results: [
        '500+ qualified leads delivered over 3 months',
        '35% conversion rate from lead to demo',
        '45% increase in sales pipeline value',
        'Automated lead scoring system implemented',
      ],
    },
  },
  {
    slug: 'admin-support',
    title: 'Admin Support',
    shortDescription: 'We handle daily administrative tasks including data entry, email management, scheduling, and documentation—so you can focus on growth.',
    fullDescription: 'Our admin support services take care of your day-to-day administrative tasks, freeing up your time to focus on strategic business growth. From email management and calendar scheduling to data entry and document organization, we provide reliable, efficient support that keeps your operations running smoothly.',
    icon: 'clipboard',
    features: [
      'Email management and filtering',
      'Calendar scheduling and coordination',
      'Data entry and database management',
      'Document organization and filing',
      'Travel arrangements and expense tracking',
    ],
    typicalWork: [
      'Manage and organize email inboxes with priority filtering',
      'Schedule meetings and coordinate calendars across time zones',
      'Enter and maintain data in spreadsheets, databases, and CRM systems',
      'Organize and file documents in cloud storage systems',
      'Handle travel bookings, expense reports, and vendor communications',
    ],
    sampleProject: {
      title: 'Executive Admin Support Package',
      description: 'Provided comprehensive administrative support for a busy executive team, managing calendars, emails, and documentation.',
      image: '/projects/admin-support-project.jpg', // Add project image at /public/projects/admin-support-project.jpg
      results: [
        '20+ hours saved per week for executive team',
        '100% email response rate within 2 hours',
        'Organized 500+ documents into searchable system',
        'Streamlined scheduling reduced meeting conflicts by 60%',
      ],
    },
  },
  {
    slug: 'virtual-assistance',
    title: 'General Virtual Assistance',
    shortDescription: 'We offer flexible virtual assistance for research, task management, and ongoing business operations.',
    fullDescription: 'Our general virtual assistance services provide flexible, scalable support for various business needs. Whether you need research assistance, project management, customer support, or ongoing operational tasks, our virtual assistants adapt to your requirements and deliver consistent, high-quality results.',
    icon: 'briefcase',
    features: [
      'Research and data collection',
      'Project and task management',
      'Customer support and communication',
      'Content creation and editing',
      'Ongoing operational support',
    ],
    typicalWork: [
      'Conduct market research and competitive analysis',
      'Manage project timelines and coordinate team tasks',
      'Handle customer inquiries and support tickets',
      'Create and edit documents, presentations, and content',
      'Provide ongoing support for daily business operations',
    ],
    sampleProject: {
      title: 'Research & Operations Support',
      description: 'Provided comprehensive research and operational support for a growing consulting firm.',
      image: '/projects/virtual-assistance-project.jpg', // Add project image at /public/projects/virtual-assistance-project.jpg
      results: [
        'Completed 50+ research projects in first quarter',
        'Reduced research time by 70% for consulting team',
        'Managed 200+ customer support tickets',
        'Created 30+ professional documents and presentations',
      ],
    },
  },
  {
    slug: 'outreach-services',
    title: 'Outreach Services (Social + Cold Outreach)',
    shortDescription: 'We manage cold email campaigns and LinkedIn outreach to connect with prospects, follow up with leads, and build strong business relationships.',
    fullDescription: 'Our outreach services combine cold email campaigns and LinkedIn strategies to connect with prospects, nurture leads, and build meaningful business relationships. We craft personalized messages, manage follow-up sequences, and track engagement to maximize response rates and conversions.',
    icon: 'mail',
    features: [
      'Cold email campaign setup and management',
      'LinkedIn outreach and connection strategies',
      'Personalized message writing',
      'Follow-up sequence automation',
      'Response tracking and optimization',
    ],
    typicalWork: [
      'Research and build targeted prospect lists',
      'Write personalized cold email templates',
      'Set up automated email sequences with A/B testing',
      'Manage LinkedIn outreach campaigns and connection requests',
      'Track responses, schedule follow-ups, and optimize campaigns',
    ],
    sampleProject: {
      title: 'Multi-Channel Outreach Campaign',
      description: 'Launched integrated cold email and LinkedIn outreach campaign for a B2B service provider.',
      image: '/projects/outreach-project.jpg', // Add project image at /public/projects/outreach-project.jpg
      results: [
        '25% email open rate (industry average: 18%)',
        '12% response rate with 8% conversion to meetings',
        '500+ LinkedIn connections made',
        'Generated 40+ qualified sales opportunities',
      ],
    },
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management & Ads',
    shortDescription: 'We manage social media accounts, schedule content, engage audiences, run ad campaigns, and improve brand visibility.',
    fullDescription: 'Our social media management and advertising services help businesses build their online presence, engage with audiences, and drive results through strategic content and paid campaigns. We handle everything from content creation and scheduling to community management and performance optimization.',
    icon: 'mobile',
    features: [
      'Content creation and scheduling',
      'Community engagement and moderation',
      'Social media advertising campaigns',
      'Analytics and performance reporting',
      'Brand voice and strategy development',
    ],
    typicalWork: [
      'Create and schedule social media content across platforms',
      'Engage with followers, respond to comments and messages',
      'Set up and manage paid advertising campaigns',
      'Monitor analytics and optimize content performance',
      'Develop brand voice guidelines and content strategies',
    ],
    sampleProject: {
      title: 'Social Media Growth Campaign',
      description: 'Managed social media presence and ad campaigns for an e-commerce brand, significantly increasing engagement and sales.',
      image: '/projects/social-media-project.jpg', // Add project image at /public/projects/social-media-project.jpg
      results: [
        '300% increase in social media followers',
        '250% increase in engagement rate',
        'ROAS of 4.5x on ad spend',
        'Generated 1,000+ website visits from social media',
      ],
    },
  },
  {
    slug: 'crm-management',
    title: 'CRM Management',
    shortDescription: 'We set up and manage CRM systems, track leads, maintain pipelines, automate workflows, and generate detailed reports.',
    fullDescription: 'Our CRM management services help businesses organize, track, and optimize their customer relationships. We set up CRM systems, configure pipelines, automate workflows, and provide ongoing management to ensure your sales and marketing teams have the tools and data they need to succeed.',
    icon: 'chart',
    features: [
      'CRM setup and configuration',
      'Pipeline and stage management',
      'Workflow automation',
      'Data migration and cleanup',
      'Reporting and analytics',
    ],
    typicalWork: [
      'Set up and configure CRM systems (HubSpot, Salesforce, Zoho, etc.)',
      'Design and implement sales pipelines and stages',
      'Create automated workflows for lead nurturing and follow-ups',
      'Migrate data from spreadsheets or other systems',
      'Generate custom reports and dashboards for insights',
    ],
    sampleProject: {
      title: 'CRM Implementation & Automation',
      description: 'Implemented and configured HubSpot CRM for a growing SaaS company, including pipeline setup and workflow automation.',
      image: '/projects/crm-project.jpg', // Add project image at /public/projects/crm-project.jpg
      results: [
        'Complete CRM setup completed in 2 weeks',
        'Automated 15+ workflows saving 10+ hours/week',
        'Migrated 2,000+ contacts with 100% data accuracy',
        'Increased pipeline visibility by 100%',
      ],
    },
  },
  {
    slug: 'automation-workflows',
    title: 'Automation & Workflows',
    shortDescription: 'We automate repetitive tasks, connect tools, and build smart workflows that keep leads and operations moving efficiently.',
    fullDescription: 'Our automation and workflow services eliminate manual, repetitive tasks by connecting your tools and creating intelligent workflows. We use platforms like Zapier, Make, and native CRM automations to streamline processes, reduce errors, and free up time for high-value work.',
    icon: 'cog',
    features: [
      'Workflow design and implementation',
      'Tool integrations and connections',
      'Lead capture automation',
      'Notification and alert systems',
      'Process optimization and refinement',
    ],
    typicalWork: [
      'Design and build automated workflows using Zapier, Make, or native tools',
      'Connect CRM, email, calendar, and other business tools',
      'Automate lead capture from forms, ads, and landing pages',
      'Set up notification systems for important events',
      'Optimize existing workflows for better performance',
    ],
    sampleProject: {
      title: 'End-to-End Lead Automation System',
      description: 'Built comprehensive automation system connecting website forms, CRM, email, and calendar for seamless lead management.',
      image: '/projects/automation-project.jpg', // Add project image at /public/projects/automation-project.jpg
      results: [
        'Automated 20+ manual processes',
        'Reduced lead response time from 24 hours to 5 minutes',
        'Eliminated 15+ hours of manual work per week',
        'Increased lead conversion rate by 30%',
      ],
    },
  },
  {
    slug: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    shortDescription: 'We handle your financial records, manage accounts payable and receivable, reconcile bank statements, and prepare financial reports.',
    fullDescription: 'Our accounting and bookkeeping services provide comprehensive financial management to keep your business organized and compliant. We handle day-to-day bookkeeping tasks, manage accounts payable and receivable, reconcile bank statements, prepare financial reports, and ensure your records are accurate and up-to-date for tax season and business decisions.',
    icon: 'calculator',
    features: [
      'Accounts payable and receivable management',
      'Bank reconciliation and statement preparation',
      'Financial reporting and analysis',
      'Expense tracking and categorization',
      'Tax preparation support and documentation',
    ],
    typicalWork: [
      'Record and categorize all business transactions',
      'Manage accounts payable and process vendor payments',
      'Track accounts receivable and send invoices',
      'Reconcile bank and credit card statements monthly',
      'Prepare financial reports (P&L, balance sheets, cash flow)',
      'Organize documents for tax preparation',
    ],
    sampleProject: {
      title: 'Complete Bookkeeping System Setup',
      description: 'Established comprehensive bookkeeping system for a growing e-commerce business, including accounts management and financial reporting.',
      image: '/projects/accounting-project.jpg', // Add project image at /public/projects/accounting-project.jpg
      results: [
        'Organized 12 months of backlogged transactions',
        'Reduced bookkeeping time by 80%',
        'Improved financial reporting accuracy to 100%',
        'Prepared all documents for tax filing ahead of deadline',
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
