import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { cn } from '../utils/cn';
import { siteConfig } from '../config';
import { scrollToSection } from '../utils/scroll';

const navLinks = [
  { name: 'ABOUT', href: '#about', isRoute: false },
  { name: 'SERVICES', href: '#services', isRoute: false },
  { name: 'PORTFOLIO', href: '/portfolio', isRoute: true },
  { name: 'PROCESS', href: '#process', isRoute: false },
  { name: 'PRICING', href: '#pricing', isRoute: false },
  { name: 'CONTACT', href: '#contact', isRoute: false },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute?: boolean) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (isRoute) {
      navigate(href);
      return;
    }

    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }

    setTimeout(() => {
      scrollToSection(href);
    }, 60);
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-3 sm:py-4 shadow-sm shadow-black/5" 
          : "bg-transparent py-4 sm:py-6 md:py-8"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              scrollToSection('home');
            }
          }}
          className="flex items-center group shrink-0"
          aria-label="Thundro Homepage"
        >
          <img 
            src="/logo-dark.png" 
            alt="Thundro — Web Design & Development Agency" 
            className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Nav & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                className="text-xs font-semibold tracking-widest text-brand-text-sec hover:text-brand-text transition-colors px-3 lg:px-4 py-2 rounded-full hover:bg-black/5 cursor-pointer"
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
            className="group flex items-center gap-2 px-5 lg:px-6 py-2.5 bg-brand-text hover:bg-brand-accent text-white hover:shadow-[0_4px_20px_rgba(21,128,61,0.25)] rounded-md text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            <span>Let's Talk</span> 
            <ArrowUpRight size={16} className="text-brand-sec group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
            className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-brand-text hover:bg-brand-accent rounded-md text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} className="text-brand-sec group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="text-brand-text p-2 rounded-lg bg-black/5 border border-black/10 hover:bg-black/10 transition-colors flex items-center justify-center min-w-[40px] min-h-[40px]"
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
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-2xl border-b border-black/10 shadow-xl"
          >
            <div className="container mx-auto px-5 py-6 flex flex-col gap-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 mb-2 border-b border-black/10">
                <img 
                  src="/logo-dark.png" 
                  alt="Thundro Web Studio" 
                  className="h-7 sm:h-8 w-auto object-contain" 
                />
                <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold">Web Agency</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                  className="text-brand-text hover:text-brand-accent text-sm tracking-widest py-3 px-3 rounded-lg hover:bg-black/5 border-b border-black/5 last:border-0 uppercase font-semibold flex items-center justify-between transition-colors min-h-[44px] cursor-pointer"
                >
                  <span>{link.name}</span>
                  <span className="text-brand-accent/50 text-xs">→</span>
                </a>
              ))}

              {/* Service Subpages in Mobile Menu */}
              <div className="pt-3 pb-1 border-t border-black/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-text-sec px-3 block mb-2 font-semibold">
                  Specialized Solutions
                </span>
                <Link
                  to="/services/business-websites"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs text-brand-text-sec hover:text-brand-accent py-2 px-3 block rounded hover:bg-black/5 font-medium"
                >
                  Business Websites →
                </Link>
                <Link
                  to="/services/gym-fitness-websites"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs text-brand-text-sec hover:text-brand-accent py-2 px-3 block rounded hover:bg-black/5 font-medium"
                >
                  Gym &amp; Fitness Design →
                </Link>
                <Link
                  to="/services/small-business-websites"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs text-brand-text-sec hover:text-brand-accent py-2 px-3 block rounded hover:bg-black/5 font-medium"
                >
                  Small Business Websites →
                </Link>
              </div>

              <div className="pt-4 mt-2 border-t border-black/10 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-accent text-white font-bold text-xs tracking-widest uppercase shadow-[0_4px_15px_rgba(21,128,61,0.25)] transition-transform active:scale-95"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-brand-text-sec tracking-wider uppercase pt-1 font-mono">
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
