import { useRef } from 'react';
import { scrollToSection } from '../utils/scroll';

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="pricing" ref={ref} className="py-16 sm:py-24 md:py-32 relative bg-transparent border-t border-white/10 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl mx-auto">
        <div className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-brand-text-sec uppercase mb-4 sm:mb-8">
          04 / INVESTMENT
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] uppercase mb-8 sm:mb-12">
          FOR PRICING DETAILS<br/><span className="text-brand-accent">CONTACT US</span>
        </h2>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          className="inline-flex items-center justify-center gap-4 px-8 py-4 sm:px-12 sm:py-5 border border-white/30 hover:border-brand-accent text-white hover:text-brand-accent hover:bg-brand-accent/5 transition-all text-xs font-bold tracking-widest uppercase group w-full sm:w-auto cursor-pointer"
        >
          GET A QUOTE <span className="group-hover:translate-x-2 transition-transform font-sans">→</span>
        </a>
      </div>
    </section>
  );
}
