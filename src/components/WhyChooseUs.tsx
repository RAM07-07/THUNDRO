import { motion } from 'framer-motion';
import { Monitor, Smartphone, Zap, MessageSquare, CreditCard, LifeBuoy } from 'lucide-react';

const reasons = [
  {
    title: 'Modern, custom design.',
    icon: Monitor
  },
  {
    title: 'Responsive across devices.',
    icon: Smartphone
  },
  {
    title: 'Performance-conscious development.',
    icon: Zap
  },
  {
    title: 'Clear project communication.',
    icon: MessageSquare
  },
  {
    title: 'Transparent pricing.',
    icon: CreditCard
  },
  {
    title: 'Support after launch.',
    icon: LifeBuoy
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold leading-tight mb-6"
            >
              Why Partner With <span className="text-brand-accent">Webora?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-text-sec text-lg leading-relaxed"
            >
              At Webora, we go beyond generic templates to create custom websites tailored to your brand and business goals. We combine modern design, seamless functionality, and performance-focused development to deliver digital experiences that capture attention and turn visitors into customers. More than just a web development studio, we’re your dedicated partner in building a stronger online presence and growing your business.
            </motion.p>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-bg-sec/50 border border-brand-border/20 hover:border-brand-accent/30 hover:bg-brand-bg-sec transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-bg border border-brand-border/50 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:border-brand-accent/50 transition-all shadow-[0_0_10px_rgba(183,255,69,0.05)]">
                    <reason.icon size={20} />
                  </div>
                  <span className="font-semibold text-brand-text">{reason.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
