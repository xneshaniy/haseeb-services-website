import Link from 'next/link';
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
} from './icons';

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-12">
      <div className="container">
        <p className="mb-2">© {new Date().getFullYear()} Growth Leder. All rights reserved.</p>
        <p className="mb-6 text-gray-300">Accounting • Lead Generation • SEO • LinkedIn & Web Outreach</p>
        
        <div className="flex flex-col items-center gap-4 my-6">
          <div className="flex items-center gap-2">
            <MailIcon className="w-5 h-5" />
            <a href="mailto:admin@growthleder.com" className="text-accent hover:text-white transition-colors">
              admin@growthleder.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5" />
            <a href="tel:+923137123964" className="text-accent hover:text-white transition-colors">
              +92 313 7123964
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ChatIcon className="w-5 h-5" />
            <a
              href="https://wa.me/923137123964"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors"
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
    </footer>
  );
}
