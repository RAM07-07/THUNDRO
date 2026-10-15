import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard business website typically takes 2 to 4 weeks to complete, depending on the complexity, number of pages, and how quickly we receive content and feedback from you.'
  },
  {
    question: 'Can you build a website for my type of business?',
    answer: 'Yes, we build websites for a wide range of industries including fitness, travel, hospitality, real estate, e-commerce, and professional services.'
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'Absolutely. We follow a mobile-first approach ensuring your website looks and functions perfectly on smartphones, tablets, and desktops.'
  },
  {
    question: 'Can I request changes to the design?',
    answer: 'Yes, our process includes a design approval phase where you can review the layout and request reasonable adjustments before we begin development.'
  },
  {
    question: 'Can you connect my domain?',
    answer: 'Yes, we assist with connecting your existing domain to the new website or help you purchase and set up a new one.'
  },
  {
    question: 'Will my website include a WhatsApp button?',
    answer: 'Yes, all our packages include a functional WhatsApp button to make it easy for customers to contact you directly.'
  },
  {
    question: 'Do you offer maintenance?',
    answer: 'Yes, we offer ongoing maintenance packages for content updates, bug fixes, and performance improvements to keep your site running smoothly.'
  },
  {
    question: 'What information do you need to start?',
    answer: 'We typically need details about your business goals, target audience, brand assets (logo, colors), existing content, and examples of websites you like.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 relative bg-transparent border-t border-black/10 scroll-mt-20 sm:scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-brand-text"
            >
              Frequently Asked <span className="text-brand-accent">Questions.</span>
            </motion.h2>
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border border-black/10 rounded-xl sm:rounded-2xl bg-white shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left focus:outline-none min-h-[52px] sm:min-h-[60px]"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-semibold text-sm sm:text-base pr-3 sm:pr-4 leading-snug text-brand-text">{faq.question}</span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === idx ? 'bg-brand-accent text-white' : 'bg-brand-bg-sec text-brand-text-sec'}`}>
                    {openIndex === idx ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm md:text-base text-brand-text-sec leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
