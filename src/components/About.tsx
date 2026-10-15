import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const yImage = useTransform(smoothProgress, [0, 1], [-40, 40]);
  const yText = useTransform(smoothProgress, [0, 1], [20, -20]);

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 md:py-32 relative bg-transparent border-t border-white/10 scroll-mt-20 sm:scroll-mt-24">
      {/* Background Architectural Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-24">
          
          <motion.div style={{ y: yText }} className="w-full lg:w-1/2">
            <div className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-brand-text-sec uppercase mb-4 sm:mb-8 font-mono">
              01 / ABOUT THUNDRO
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 sm:mb-8 uppercase">
              WE TURN IDEAS INTO <span className="text-brand-accent">DIGITAL EXPERIENCES.</span>
            </h2>
            
            <div className="space-y-4 text-brand-text-sec text-sm sm:text-base leading-relaxed max-w-lg font-normal mb-8 sm:mb-10">
              <p>
                Based in <strong className="text-white font-medium">Coimbatore, Tamil Nadu</strong>, <strong className="text-white font-medium">Thundro</strong> is an independent web design and development agency. We build modern, mobile-first websites tailored for small businesses, gyms, salons, travel planners, and growing brands across India.
              </p>
              <p>
                From fast-loading marketing landing pages to full multi-page business websites and booking workflows, we combine clean design with modern front-end technologies like React, clean semantic HTML, and responsive CSS to help businesses turn visitors into clients.
              </p>
            </div>

            {/* Internal links to deep-dive service pages */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/services/business-websites"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-accent hover:text-white transition-colors"
              >
                Business Websites <ArrowRight size={13} />
              </Link>
              <Link
                to="/services/small-business-websites"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-text-sec hover:text-white transition-colors"
              >
                Small Business Sites <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[650px] overflow-hidden rounded-2xl group flex items-center justify-center">
            <motion.div style={{ y: yImage }} className="absolute inset-0 -inset-y-8 sm:-inset-y-16 lg:-inset-y-24">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050706] via-transparent to-[#050706] pointer-events-none opacity-50" />
                
                <img 
                  src="/about_agency_workspace.jpg" 
                  alt="Thundro Web Design & Development Agency Studio" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter saturate-[0.8] contrast-125 group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                
                <div className="absolute inset-0 z-20 border border-white/20 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
