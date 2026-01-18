'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  clientName: string;
  clientPhoto: string;
  reviewText: string;
  projectName: string;
  serviceRendered: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  showAll?: boolean;
}

export default function Testimonials({ testimonials, autoPlay = true, showAll = false }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlaying || showAll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, showAll]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (showAll) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden">
                {testimonial.clientPhoto ? (
                  <Image
                    src={testimonial.clientPhoto}
                    alt={testimonial.clientName}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                ) : (
                  <span className="text-white text-xl font-bold">
                    {testimonial.clientName.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h4 className="font-bold text-white">{testimonial.clientName}</h4>
                <p className="text-sm text-slate-400">{testimonial.serviceRendered}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">{renderStars(testimonial.rating)}</div>
            <p className="text-slate-200 mb-2 italic">&ldquo;{testimonial.reviewText}&rdquo;</p>
            <p className="text-sm text-secondary font-semibold">{testimonial.projectName}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="bg-white/5 p-8 md:p-12 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center overflow-hidden mb-6">
                    {testimonial.clientPhoto ? (
                      <Image
                        src={testimonial.clientPhoto}
                        alt={testimonial.clientName}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-white text-2xl font-bold">
                        {testimonial.clientName.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1 mb-4">{renderStars(testimonial.rating)}</div>
                  <p className="text-lg md:text-xl text-slate-200 mb-6 italic max-w-2xl">
                    &ldquo;{testimonial.reviewText}&rdquo;
                  </p>
                  <h4 className="font-bold text-white text-xl mb-2">{testimonial.clientName}</h4>
                  <p className="text-secondary font-semibold mb-1">{testimonial.projectName}</p>
                  <p className="text-sm text-slate-400">{testimonial.serviceRendered}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/10 text-white rounded-full p-3 backdrop-blur-md border border-white/20 hover:bg-accent hover:border-accent transition-all hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/10 text-white rounded-full p-3 backdrop-blur-md border border-white/20 hover:bg-accent hover:border-accent transition-all hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${index === currentIndex
                  ? 'w-8 bg-accent'
                  : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
