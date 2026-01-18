import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { OrganizationSchema } from '@/components/SchemaMarkup';

const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
});

const openSans = Open_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Growth Leder | Lead Generation • Virtual Assistance • Outreach Services • CRM Management',
  description: 'Growth Leder is a results-driven service-based company specializing in lead generation services, virtual assistance, outreach services, CRM management, and automation workflows. We help businesses grow, scale, and operate more efficiently.',
  keywords: 'lead generation services, virtual assistance, outreach services, CRM management, automation workflows, business growth, digital outreach, lead generation, virtual support, CRM setup, workflow automation',
  openGraph: {
    title: 'Growth Leder | Lead Generation • Virtual Assistance • Outreach Services',
    description: 'Results-driven service-based company helping businesses grow, scale, and operate more efficiently.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body>
        <OrganizationSchema />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
