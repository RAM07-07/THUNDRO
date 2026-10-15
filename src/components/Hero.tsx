import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-transparent py-16 sm:py-0 scroll-mt-20 sm:scroll-mt-24">
      {/* Architectural Grid Lines (Subtle in Light Mode) */}
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-5">
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, ease: "circOut" }} className="w-[1px] h-full bg-black origin-top" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }} className="w-[1px] h-full bg-black origin-top" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }} className="w-[1px] h-full bg-black origin-top hidden md:block" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }} className="w-[1px] h-full bg-black origin-top" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center text-center mt-6 sm:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-brand-accent uppercase mb-4 sm:mb-8 font-mono bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20"
        >
          THUNDRO • WEB DESIGN &amp; DEVELOPMENT AGENCY
        </motion.div>
        
        <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[9vw] leading-[0.92] sm:leading-[0.88] tracking-tighter uppercase flex flex-col items-center text-brand-text">
          <span className="sr-only">Thundro — Web Design &amp; Development Agency: </span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            WE BUILD YOUR
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-accent drop-shadow-[0_4px_25px_rgba(21,128,61,0.2)] relative"
          >
            DIGITAL
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            FUTURE.
          </motion.span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 sm:mt-8 max-w-2xl text-xs sm:text-base text-brand-text-sec font-medium leading-relaxed px-4"
        >
          We design and build modern, responsive business websites, landing pages, and digital experiences that help businesses attract customers and grow online. Based in Coimbatore, Tamil Nadu, serving clients across India.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
        >
          <a 
            href="#contact" 
            aria-label="Contact Thundro to start your website project"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-brand-text text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase hover:bg-brand-accent transition-all duration-300 shadow-lg hover:shadow-[0_4px_20px_rgba(21,128,61,0.25)] cursor-pointer w-full sm:w-auto"
          >
            LET'S TALK
          </a>
          <Link
            to="/portfolio"
            className="px-8 py-3.5 sm:px-8 sm:py-4 rounded-full border border-black/15 hover:border-black text-brand-text text-[11px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 inline-flex items-center gap-2 group w-full sm:w-auto justify-center bg-white/80 shadow-sm"
          >
            <span>VIEW WORK</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-accent" />
          </Link>
        </motion.div>
      </div>

      {/* Floating Labels */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-6 lg:left-12 z-20 hidden md:block"
      >
        <p className="text-[10px] font-bold tracking-[0.2em] text-brand-text-sec/60 uppercase rotate-[-90deg] origin-bottom-left whitespace-nowrap font-mono">
          WEB DESIGN &amp; DEVELOPMENT
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 right-6 lg:right-12 z-20 hidden md:block"
      >
        <p className="text-[10px] font-bold tracking-[0.2em] text-brand-text-sec/60 uppercase rotate-[90deg] origin-bottom-right whitespace-nowrap font-mono">
          COIMBATORE • TAMIL NADU
        </p>
      </motion.div>
    </section>
  );
}
