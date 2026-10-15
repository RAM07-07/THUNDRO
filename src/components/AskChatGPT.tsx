import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';

export default function AskChatGPT() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px]">
        {/* Main Banner Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full border border-black/10 bg-white/90 backdrop-blur-xl overflow-hidden group rounded-2xl shadow-xl"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-60" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 p-6 sm:p-10 lg:p-16 gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-3/5 text-center sm:text-left">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight text-brand-text">
                Can't decide if <span className="text-brand-accent">THUNDRO</span>{' '}
                <br className="hidden sm:inline" />
                is right for your business?
              </h2>
              <p className="text-brand-text-sec text-base sm:text-lg mb-8 sm:mb-10 max-w-xl leading-relaxed mx-auto sm:mx-0 font-normal">
                You don't have to figure it out alone. Let ChatGPT walk you through exactly why businesses choose us for their premium web experiences.
              </p>
              
              <a 
                href="https://chatgpt.com/?q=Why+should+I+choose+THUNDRO+web+development+agency+for+my+premium+business+website%3F" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between sm:justify-start bg-brand-text text-white pl-5 pr-2 py-2 sm:pl-6 rounded-full font-bold tracking-widest text-xs sm:text-sm hover:bg-brand-accent transition-all group/btn w-full sm:w-auto shadow-md hover:shadow-xl"
              >
                <span>ASK CHATGPT</span>
                <span className="ml-4 sm:ml-6 bg-white/20 text-white p-2 rounded-full group-hover/btn:bg-white group-hover/btn:text-black transition-colors shrink-0">
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>

            {/* Right Content / Illustration */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative pt-4 sm:pt-0">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-brand-accent/10 blur-[40px] sm:blur-[50px] rounded-full" />
                <motion.div 
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white border border-black/10 rounded-2xl flex items-center justify-center shadow-xl group-hover:border-brand-accent/50 transition-colors duration-500"
                >
                  <Bot size={48} className="text-brand-accent sm:w-16 sm:h-16" />
                  <Sparkles size={20} className="text-brand-sec absolute -top-3 -right-3 sm:-top-4 sm:-right-4 animate-pulse" />
                  <Sparkles size={14} className="text-brand-accent absolute -bottom-2 -left-3 sm:-bottom-2 sm:-left-4 animate-bounce" />
                </motion.div>
                
                {/* Floating chat bubbles */}
                <motion.div 
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 sm:right-2 bg-white border border-black/10 p-2.5 sm:p-3 rounded-lg shadow-md"
                >
                  <div className="w-10 sm:w-12 h-1.5 sm:h-2 bg-black/10 rounded-full mb-1.5 sm:mb-2" />
                  <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-brand-accent/40 rounded-full" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-2 left-0 sm:left-2 bg-brand-accent border border-brand-accent p-2.5 sm:p-3 rounded-lg shadow-md"
                >
                  <div className="w-8 sm:w-10 h-1.5 sm:h-2 bg-white/70 rounded-full mb-1.5 sm:mb-2" />
                  <div className="w-5 sm:w-6 h-1.5 sm:h-2 bg-white/40 rounded-full" />
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
