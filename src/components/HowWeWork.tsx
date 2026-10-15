import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discover',
    description: "Understand the client's business, target customers, and objectives.",
    icon: Search
  },
  {
    id: '02',
    title: 'Design',
    description: 'Create a professional visual direction and website layout.',
    icon: PenTool
  },
  {
    id: '03',
    title: 'Develop',
    description: 'Build responsive pages and implement the agreed functionality.',
    icon: Code
  },
  {
    id: '04',
    title: 'Launch',
    description: 'Test, deploy, and connect the website to the client\'s domain.',
    icon: Rocket
  }
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-16 sm:py-24 relative bg-transparent overflow-hidden border-t border-white/10 scroll-mt-20 sm:scroll-mt-24">
      {/* Anchor alias for #how-we-work */}
      <span id="how-we-work" className="absolute -top-24 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/5 text-brand-accent text-xs sm:text-sm font-semibold tracking-wider mb-4 sm:mb-6"
          >
            HOW WE WORK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            A Seamless <span className="text-brand-accent">Process.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-border/30 hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative group"
              >
                <div className="bg-brand-bg-sec p-6 sm:p-8 rounded-2xl border border-brand-border/30 hover:border-brand-accent/50 transition-all relative z-10 hover:-translate-y-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-bg border border-brand-accent/30 flex items-center justify-center mb-5 sm:mb-6 text-brand-accent group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(183,255,69,0.1)]">
                    <step.icon size={26} />
                  </div>
                  
                  <div className="text-5xl sm:text-6xl font-black text-brand-bg-sec absolute top-3 sm:top-4 right-3 sm:right-4 stroke-brand-border opacity-20 select-none" style={{ WebkitTextStroke: '1px var(--color-brand-border)' }}>
                    {step.id}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-brand-text-sec text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
