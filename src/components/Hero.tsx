import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-10 bg-[#050706]/40 pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050706]/60 via-transparent to-[#050706]/60 pointer-events-none" />

      {/* Architectural Grid Lines */}
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-between px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-20">
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, ease: "circOut" }} className="w-[1px] h-full bg-white origin-top" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }} className="w-[1px] h-full bg-white origin-top" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }} className="w-[1px] h-full bg-white origin-top hidden md:block" />
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }} className="w-[1px] h-full bg-white origin-top" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-brand-text-sec uppercase mb-8"
        >
          DIGITAL DESIGN & DEVELOPMENT
        </motion.div>
        
        <h1 className="font-display font-bold text-[9vw] leading-[0.85] tracking-tighter uppercase flex flex-col items-center">
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
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          href="#contact" 
          className="mt-16 px-10 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:border-brand-accent/50 hover:text-brand-accent transition-all duration-300 group"
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
