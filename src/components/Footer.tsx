import { siteConfig } from '../config';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-transparent pt-24 pb-8 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          
          <div className="flex-grow">
            <h2 className="text-[15vw] leading-[0.75] font-display font-bold tracking-tighter uppercase mb-4 text-white">
              WEBORA
            </h2>
            <p className="text-brand-text-sec max-w-sm text-sm font-medium">
              We Build Your Digital Future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 lg:gap-24 lg:pb-4">
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-text-sec mb-6">Explore</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Work', 'About', 'Pricing'].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-sm uppercase font-bold tracking-wider text-white hover:text-brand-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-text-sec mb-6">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm uppercase font-bold tracking-wider text-white hover:text-brand-accent transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm uppercase font-bold tracking-wider text-white hover:text-brand-accent transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-brand-text-sec font-semibold">
          <p>© {currentYear} WEBORA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-accent transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-brand-accent transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
