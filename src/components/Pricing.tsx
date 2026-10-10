import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="pricing" ref={ref} className="py-32 relative bg-transparent border-t border-white/10 overflow-hidden flex flex-col items-center justify-center text-center min-h-[50vh]">
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-brand-text-sec uppercase mb-8">
          04 / INVESTMENT
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] uppercase mb-12">
          FOR PRICING DETAILS<br/><span className="text-brand-accent">CONTACT US</span>
        </h2>
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center gap-4 px-12 py-5 border border-white/30 hover:border-brand-accent text-white hover:text-brand-accent hover:bg-brand-accent/5 transition-all text-xs font-bold tracking-widest uppercase group"
        >
          GET A QUOTE <span className="group-hover:translate-x-2 transition-transform font-sans">→</span>
        </a>
      </div>
    </section>
  );
}
