import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-transparent py-16 sm:py-0 scroll-mt-20 sm:scroll-mt-24">
      {/* Architectural Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-20">
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, ease: "circOut" }} className="w-[1px] h-full bg-white origin-top" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }} className="w-[1px] h-full bg-white origin-top" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }} className="w-[1px] h-full bg-white origin-top hidden md:block" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }} className="w-[1px] h-full bg-white origin-top" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center text-center mt-6 sm:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-brand-accent uppercase mb-4 sm:mb-8 font-mono"
        >
          THUNDRO • WEBSITE DESIGN &amp; DEVELOPMENT STUDIO
        </motion.div>
        
        <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[9vw] leading-[0.92] sm:leading-[0.88] tracking-tighter uppercase flex flex-col items-center">
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
            className="text-brand-accent drop-shadow-[0_0_30px_rgba(183,255,69,0.3)] relative"
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
          className="mt-6 sm:mt-8 max-w-2xl text-xs sm:text-base text-brand-text-sec font-normal leading-relaxed px-4"
        >
          We design and build modern, responsive business websites, landing pages, and web experiences for gyms, salons, travel agencies, and growing enterprises in Coimbatore, Tamil Nadu, and across India.
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          href="#contact" 
          aria-label="Contact Thundro to start your website project"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
          className="mt-8 sm:mt-10 md:mt-12 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[11px] sm:text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-brand-accent/50 hover:text-brand-accent transition-all duration-300 group shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          LET'S TALK
        </motion.a>
      </div>

      {/* Floating Labels */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-6 lg:left-12 z-20 hidden md:block"
      >
        <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-text-sec uppercase rotate-[-90deg] origin-bottom-left whitespace-nowrap">
          CREATIVE WEB STUDIO
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 right-6 lg:right-12 z-20 hidden md:block"
      >
        <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-text-sec uppercase rotate-[90deg] origin-bottom-right whitespace-nowrap">
          DESIGNED TO MAKE AN IMPACT
        </p>
      </motion.div>
    </section>
  );
}
