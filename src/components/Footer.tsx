import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { scrollToSection } from '../utils/scroll';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    scrollToSection(target);
  };

  return (
    <footer className="bg-transparent pt-16 sm:pt-24 pb-8 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 mb-12 sm:mb-16 lg:mb-20">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3.5 mb-4 group">
              <img 
                src="/logo-icon.png" 
                alt="Thundro Web Agency Emblem" 
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain transition-transform group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-display font-bold tracking-[0.2em] uppercase text-white">THUNDRO</span>
                <span className="text-[10px] sm:text-xs text-brand-accent tracking-widest uppercase font-mono">Web Design &amp; Development</span>
              </div>
            </Link>
            <p className="text-brand-text-sec text-xs sm:text-sm leading-relaxed max-w-sm mb-4 font-normal">
              Thundro is an independent web design and development agency based in Coimbatore, Tamil Nadu. We build modern, responsive, high-speed websites for businesses, gyms, salons, and growing brands across India.
            </p>
            <p className="text-[11px] font-mono text-brand-accent/90 uppercase tracking-wider">
              {siteConfig.contact.location}
            </p>
          </div>

          {/* Dedicated Services Links (Search Engine Crawl Pathway) */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-text-sec mb-4 sm:mb-6 font-mono">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link
                  to="/services/business-websites"
                  className="text-xs sm:text-sm font-medium text-white/90 hover:text-brand-accent transition-colors py-1 inline-block"
                >
                  Business Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/gym-fitness-websites"
                  className="text-xs sm:text-sm font-medium text-white/90 hover:text-brand-accent transition-colors py-1 inline-block"
                >
                  Gym &amp; Fitness Website Design
                </Link>
              </li>
              <li>
                <Link
                  to="/services/small-business-websites"
                  className="text-xs sm:text-sm font-medium text-white/90 hover:text-brand-accent transition-colors py-1 inline-block"
                >
                  Website Design for Small Businesses
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-xs sm:text-sm font-medium text-white/90 hover:text-brand-accent transition-colors py-1 inline-block"
                >
                  Portfolio &amp; Concept Demos
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-text-sec mb-4 sm:mb-6 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { name: 'Home', target: 'home' },
                { name: 'About', target: 'about' },
                { name: 'Services', target: 'services' },
                { name: 'Process', target: 'process' },
                { name: 'Pricing', target: 'pricing' },
                { name: 'FAQ', target: 'faq' },
                { name: 'Contact', target: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.target}`} 
                    onClick={(e) => handleNavClick(e, item.target)}
                    className="text-xs sm:text-sm uppercase font-semibold tracking-wider text-brand-text-sec hover:text-brand-accent transition-colors py-0.5 inline-block cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Verification Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-text-sec mb-4 sm:mb-6 font-mono">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <a 
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-semibold uppercase tracking-wider text-white hover:text-brand-accent transition-colors inline-block"
                >
                  WhatsApp Us
                </a>
                <span className="block text-[11px] text-brand-text-sec font-mono mt-0.5">+91 86675 36503</span>
              </li>
              <li>
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="font-semibold uppercase tracking-wider text-white hover:text-brand-accent transition-colors inline-block"
                >
                  Email Us
                </a>
                <span className="block text-[11px] text-brand-text-sec font-mono mt-0.5">{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-brand-text-sec font-semibold text-center sm:text-left">
          <div className="flex items-center gap-2">
            <img src="/logo-icon.png" alt="Thundro" className="w-3.5 h-3.5 object-contain opacity-80" />
            <p>© {currentYear} THUNDRO. ALL RIGHTS RESERVED. WEB DESIGN &amp; DEVELOPMENT AGENCY — COIMBATORE, TAMIL NADU, INDIA.</p>
          </div>
          <div className="flex gap-6 sm:gap-8 font-mono">
            <span>COIMBATORE, TN</span>
            <span>INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
