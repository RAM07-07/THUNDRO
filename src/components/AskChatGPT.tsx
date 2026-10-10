import { motion } from 'framer-motion';
import { ArrowRight, Bot, Sparkles } from 'lucide-react';

export default function AskChatGPT() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px]">
        {/* Main Banner Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full border border-white/20 bg-black/40 backdrop-blur-xl overflow-hidden group"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 p-10 lg:p-16 gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
                Can't decide if <span className="text-brand-accent">Webora</span><br />
                is right for your business?
              </h2>
              <p className="text-brand-text-sec text-lg mb-10 max-w-xl leading-relaxed">
                You don't have to figure it out alone. Let ChatGPT walk you through exactly why businesses choose us for their premium web experiences.
              </p>
              
              <a 
                href="https://chatgpt.com/?q=Why+should+I+choose+Webora+web+development+agency+for+my+premium+business+website%3F" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-black pl-6 pr-2 py-2 rounded-sm font-bold tracking-widest text-sm hover:bg-white/90 transition-all group/btn"
              >
                ASK CHATGPT
                <span className="ml-6 bg-brand-accent/20 text-[#25D366] p-2 rounded-sm group-hover/btn:bg-brand-accent group-hover/btn:text-black transition-colors">
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>

            {/* Right Content / Illustration */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end relative">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-brand-accent/10 blur-[50px] rounded-full" />
                <motion.div 
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-[#050706] border border-white/20 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(183,255,69,0.15)] group-hover:border-brand-accent/50 transition-colors duration-500"
                >
                  <Bot size={64} className="text-brand-accent" />
                  <Sparkles size={24} className="text-white absolute -top-4 -right-4 animate-pulse" />
                  <Sparkles size={16} className="text-brand-accent absolute -bottom-2 -left-4 animate-bounce" />
                </motion.div>
                
                {/* Floating chat bubbles */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 bg-[#050706] border border-white/20 p-3 rounded-lg shadow-lg"
                >
                  <div className="w-12 h-2 bg-white/20 rounded-full mb-2" />
                  <div className="w-8 h-2 bg-brand-accent/40 rounded-full" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 left-0 bg-brand-accent border border-brand-accent p-3 rounded-lg shadow-lg"
                >
                  <div className="w-10 h-2 bg-black/40 rounded-full mb-2" />
                  <div className="w-6 h-2 bg-black/20 rounded-full" />
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
