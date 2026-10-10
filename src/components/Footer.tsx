import { siteConfig } from '../config';
import { scrollToSection } from '../utils/scroll';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-transparent pt-16 sm:pt-24 pb-8 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 lg:mb-24 gap-8 sm:gap-12">
          
          <div className="flex-grow">
            <div className="flex items-center gap-3.5 mb-4 sm:mb-6">
              <img 
                src="/logo-icon.png" 
                alt="Webora Emblem" 
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain" 
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-display font-bold tracking-[0.2em] uppercase text-white">Webora</span>
                <span className="text-[10px] sm:text-xs text-brand-accent tracking-widest uppercase font-mono">Digital Design &amp; Development</span>
              </div>
            </div>
            <h2 className="text-[18vw] sm:text-[15vw] leading-[0.8] font-display font-bold tracking-tighter uppercase mb-3 sm:mb-4 text-white">
              WEBORA
            </h2>
            <p className="text-brand-text-sec max-w-sm text-xs sm:text-sm font-medium">
              We Build Your Digital Future.
            </p>
          </div>

          <div className="flex flex-row gap-12 sm:gap-16 lg:gap-24 lg:pb-4 w-full sm:w-auto justify-between sm:justify-start border-t border-white/5 sm:border-0 pt-6 sm:pt-0">
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-text-sec mb-4 sm:mb-6">Explore</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {['Home', 'Services', 'Work', 'About', 'Pricing'].map(link => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.toLowerCase());
                      }}
                      className="text-xs sm:text-sm uppercase font-bold tracking-wider text-white hover:text-brand-accent transition-colors py-1 inline-block cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-text-sec mb-4 sm:mb-6">Connect</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li>
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm uppercase font-bold tracking-wider text-white hover:text-brand-accent transition-colors py-1 inline-block">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-xs sm:text-sm uppercase font-bold tracking-wider text-white hover:text-brand-accent transition-colors py-1 inline-block">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-brand-text-sec font-semibold text-center sm:text-left">
          <div className="flex items-center gap-2">
            <img src="/logo-icon.png" alt="Webora" className="w-3.5 h-3.5 object-contain opacity-80" />
            <p>© {currentYear} WEBORA. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="hover:text-brand-accent transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-brand-accent transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
