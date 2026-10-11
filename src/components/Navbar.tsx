import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { cn } from '../utils/cn';
import { siteConfig } from '../config';
import { scrollToSection } from '../utils/scroll';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PORTFOLIO', href: '#portfolio' },
  { name: 'PROCESS', href: '#process' },
  { name: 'PRICING', href: '#pricing' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
    
    // Allow the mobile drawer transition/DOM lock to release before scrolling
    setTimeout(() => {
      scrollToSection(href);
    }, 60);
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#050706]/95 backdrop-blur-xl border-b border-brand-border py-3 sm:py-4 shadow-lg shadow-black/40" 
          : "bg-transparent py-4 sm:py-6 md:py-8"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center group shrink-0"
        >
          <img 
            src="/logo.png" 
            alt="THUNDRO" 
            className="h-10 sm:h-11 md:h-12 lg:h-[52px] w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* Desktop Nav & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold tracking-widest text-brand-text-sec hover:text-brand-text transition-colors px-3 lg:px-4 py-2 rounded-full hover:bg-white/5 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <a 
            href={siteConfig?.contact?.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp}` : "#contact"}
            target={siteConfig?.contact?.whatsapp ? "_blank" : "_self"}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!siteConfig?.contact?.whatsapp) {
                handleNavClick(e, '#contact');
              }
            }}
            className="group flex items-center gap-2 px-5 lg:px-6 py-2.5 bg-transparent border border-white/20 hover:border-brand-accent hover:bg-brand-accent/10 hover:shadow-[0_0_25px_rgba(183,255,69,0.35)] rounded-md text-xs font-bold tracking-widest uppercase text-white hover:text-brand-accent transition-all duration-300"
          >
            Let's Talk 
            <ArrowUpRight size={16} className="text-brand-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <a 
            href={siteConfig?.contact?.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp}` : "#contact"}
            target={siteConfig?.contact?.whatsapp ? "_blank" : "_self"}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!siteConfig?.contact?.whatsapp) {
                handleNavClick(e, '#contact');
              }
            }}
            className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent border border-white/20 hover:border-brand-accent hover:bg-brand-accent/10 rounded-md text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white hover:text-brand-accent transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} className="text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="text-brand-text p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center min-w-[40px] min-h-[40px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#050706]/98 backdrop-blur-2xl border-b border-brand-border shadow-2xl"
          >
            <div className="container mx-auto px-5 py-6 flex flex-col gap-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 mb-2 border-b border-white/10">
                <img 
                  src="/logo.png" 
                  alt="THUNDRO" 
                  className="h-8 sm:h-9 w-auto object-contain" 
                />
                <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase">Brand Studio</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-brand-text hover:text-brand-accent text-sm tracking-widest py-3.5 px-3 rounded-lg hover:bg-white/5 border-b border-white/5 last:border-0 uppercase font-semibold flex items-center justify-between transition-colors min-h-[48px] cursor-pointer"
                >
                  <span>{link.name}</span>
                  <span className="text-brand-accent/50 text-xs">→</span>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-accent text-[#050706] font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(183,255,69,0.3)] transition-transform active:scale-95"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-brand-text-sec tracking-wider uppercase pt-1">
                  {siteConfig.contact.location}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
