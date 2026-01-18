'use client';

import { useState } from 'react';
import {
  MailIcon,
  PhoneIcon,
  ChatIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedInIcon,
  YouTubeIcon,
  TikTokIcon,
} from '@/components/icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mojjqgpw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent. We'll get back to you within 24 hours.");
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#003366] text-white text-center py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(40, 167, 69, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h1 className="text-white mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            Book your free 15-minute consultation call – no obligation, just honest advice.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-br from-secondary to-[#218838] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' }} />
        <div className="container relative z-10">
          <h2 className="text-white text-center mb-4">Schedule Your Free Strategy Call</h2>
          <p className="text-center text-xl max-w-2xl mx-auto mb-12">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white/15 backdrop-blur-md p-8 rounded-xl border border-white/20"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold">
                Your Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white text-dark focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold">
                Your Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white text-dark focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white text-dark focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block mb-2 font-semibold">
                Select a Service *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white text-dark focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 transition-all"
              >
                <option value="">Choose a service...</option>
                <option value="lead-generation">Lead Generation</option>
                <option value="admin-support">Admin Support</option>
                <option value="virtual-assistance">General Virtual Assistance</option>
                <option value="outreach">Outreach (Cold Email + LinkedIn)</option>
                <option value="social-media">Social Media Management & Ads</option>
                <option value="crm-management">CRM Management</option>
                <option value="automation">Automation & Workflows</option>
                <option value="other">Other / Multiple Services</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-semibold">
                Tell us about your project, goals, or questions *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your needs, timeline, and any specific requirements..."
                className="w-full px-4 py-3 rounded-lg border-2 border-white/30 bg-white text-dark focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/15 transition-all resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <div
                className={`mt-6 p-4 rounded-lg ${
                  submitMessage.includes('Thank you')
                    ? 'bg-green-500/20 border border-green-500/50'
                    : 'bg-red-500/20 border border-red-500/50'
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold mb-6">Or contact us directly:</p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <MailIcon className="w-6 h-6" />
                <a href="mailto:admin@growthleder.com" className="text-white hover:text-accent transition-colors">
                  admin@growthleder.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6" />
                <a href="tel:+923137123964" className="text-white hover:text-accent transition-colors">
                  +92 313 7123964
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ChatIcon className="w-6 h-6" />
                <a
                  href="https://wa.me/923137123964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                >
                  WhatsApp: +92 313 7123964
                </a>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              <a
                href="https://instagram.com/growthleder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 hover:-translate-y-1 transition-all border border-white/20"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/growthleder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 hover:-translate-y-1 transition-all border border-white/20"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/growthleder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 hover:-translate-y-1 transition-all border border-white/20"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/growthleder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 hover:-translate-y-1 transition-all border border-white/20"
              >
                <LinkedInIcon className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@growthleder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 hover:-translate-y-1 transition-all border border-white/20"
              >
                <YouTubeIcon className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com/@growthleder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 hover:-translate-y-1 transition-all border border-white/20"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
