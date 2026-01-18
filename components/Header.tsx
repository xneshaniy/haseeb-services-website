'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { MenuIcon } from './icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 text-white text-xl md:text-2xl font-bold hover:scale-105 transition-transform">
              <Image src="/logo-white.svg" alt="Growth Leder Logo" width={45} height={45} />
              Growth Leder
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden border-2 border-white/30 text-white p-2 rounded-md hover:border-accent hover:bg-accent/10 transition-all"
              aria-label="Toggle menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-accent font-medium transition-colors hover:text-white ${pathname === link.href ? 'underline' : ''
                    }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />
                  )}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="hidden md:inline-block bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#218838] hover:-translate-y-0.5 hover:shadow-md transition-all"
            >
              Book Free Call
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-72 bg-primary z-[70] p-8 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <ul className="flex flex-col gap-6 mt-16">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className={`text-accent text-lg font-medium block py-3 border-b border-white/10 hover:text-white transition-colors ${pathname === link.href ? 'font-bold' : ''
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#218838] transition-colors"
            >
              Book Free Call
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
