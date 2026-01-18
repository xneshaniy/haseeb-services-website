'use client';

import { useState, useEffect } from 'react';
import {
  TargetIcon,
  ClipboardIcon,
  BriefcaseIcon,
  MailIcon,
  MobileIcon,
  ChartIcon,
  CogIcon,
} from './icons';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <TargetIcon className="w-8 h-8" />,
    title: 'Lead Generation',
    description: 'We provide high-quality, targeted leads to help businesses grow faster and improve conversion rates.',
  },
  {
    icon: <ClipboardIcon className="w-8 h-8" />,
    title: 'Admin Support',
    description: 'We handle daily administrative tasks including data entry, email management, scheduling, and documentation—so you can focus on growth.',
  },
  {
    icon: <BriefcaseIcon className="w-8 h-8" />,
    title: 'General Virtual Assistance',
    description: 'We offer flexible virtual assistance for research, task management, and ongoing business operations.',
  },
  {
    icon: <MailIcon className="w-8 h-8" />,
    title: 'Outreach Services (Social + Cold Outreach)',
    description: 'We manage cold email campaigns and LinkedIn outreach to connect with prospects, follow up with leads, and build strong business relationships.',
  },
  {
    icon: <MobileIcon className="w-8 h-8" />,
    title: 'Social Media Management & Ads',
    description: 'We manage social media accounts, schedule content, engage audiences, run ad campaigns, and improve brand visibility.',
  },
  {
    icon: <ChartIcon className="w-8 h-8" />,
    title: 'CRM Management',
    description: 'We set up and manage CRM systems, track leads, maintain pipelines, automate workflows, and generate detailed reports.',
  },
  {
    icon: <CogIcon className="w-8 h-8" />,
    title: 'Automation & Workflows',
    description: 'We automate repetitive tasks, connect tools, and build smart workflows that keep leads and operations moving efficiently.',
  },
];

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-full px-4"
            >
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-primary/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-md hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-dark max-w-2xl mx-auto leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-accent hover:text-white transition-all hover:scale-110 z-10"
        aria-label="Previous service"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-accent hover:text-white transition-all hover:scale-110 z-10"
        aria-label="Next service"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-accent'
                : 'w-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
