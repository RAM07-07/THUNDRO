import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { siteConfig } from '../config';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PORTFOLIO', href: '#work' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-[#050706]/90 backdrop-blur-xl border-b border-brand-border py-4" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-accent group-hover:rotate-90 transition-transform duration-700 ease-out">
            <rect x="2" y="2" width="20" height="20" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
          </svg>
          <span className="text-xl font-display font-bold tracking-[0.2em] uppercase">Webora</span>
        </a>

        {/* Desktop Nav & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest text-brand-text-sec hover:text-brand-text transition-colors px-4 py-2 rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <a 
            href={siteConfig?.contact?.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp}` : "#contact"}
            target={siteConfig?.contact?.whatsapp ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-2.5 bg-transparent border border-white/20 hover:border-brand-accent hover:bg-brand-accent/10 hover:shadow-[0_0_25px_rgba(183,255,69,0.35)] rounded-md text-xs font-bold tracking-widest uppercase text-white hover:text-brand-accent transition-all duration-300"
          >
            Let's Talk 
            <ArrowUpRight size={16} className="text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="flex md:hidden items-center gap-3">
          <a 
            href={siteConfig?.contact?.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp}` : "#contact"}
            target={siteConfig?.contact?.whatsapp ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 px-4 py-2 bg-transparent border border-white/20 hover:border-brand-accent hover:bg-brand-accent/10 hover:shadow-[0_0_20px_rgba(183,255,69,0.35)] rounded-md text-[10px] font-bold tracking-widest uppercase text-white hover:text-brand-accent transition-all duration-300"
          >
            Let's Talk
            <ArrowUpRight size={14} className="text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="text-brand-text p-2 rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#050706] border-b border-brand-border p-6 flex flex-col shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-brand-text-sec hover:text-brand-accent text-sm tracking-widest py-4 border-b border-white/5 last:border-0 uppercase font-semibold"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
