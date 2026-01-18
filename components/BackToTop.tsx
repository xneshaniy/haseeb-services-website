'use client';

import { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#e66a00] hover:-translate-y-1 hover:scale-110 transition-all z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}
