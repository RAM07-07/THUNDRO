import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState(() => {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const plan = urlParams.get('plan');
    return { 
      name: '', businessName: '', email: '', whatsapp: '', 
      websiteType: 'Business Website', budget: '₹2,999 - ₹5,999', 
      description: plan ? `I am interested in the ${plan} plan.` : '' 
    };
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const generateWhatsAppLink = () => `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi Webora, I'm interested in starting a project.\n\nName: ${formData.name}\nBusiness: ${formData.businessName}\nType: ${formData.websiteType}\nBudget: ${formData.budget}\nDetails: ${formData.description}`)}`;
  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault(); 
    setStatus('loading'); 
    
    const subject = encodeURIComponent(`New Project Enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nBusiness: ${formData.businessName}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}\n\nType: ${formData.websiteType}\nBudget: ${formData.budget}\n\nDetails:\n${formData.description}`);
    
    setTimeout(() => { 
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
      setStatus('success'); 
      setTimeout(() => setStatus('idle'), 3000);
    }, 800); 
  };

  const inputClasses = "w-full bg-transparent border-b border-white/20 py-4 text-white text-lg focus:border-brand-accent focus:outline-none transition-colors rounded-none placeholder:text-white/30";

  return (
    <section id="contact" ref={ref} className="py-32 relative bg-transparent border-t border-white/10">
      {/* Background Architectural Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left Column */}
          <div className="w-full lg:w-5/12">
            <div className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-brand-text-sec uppercase mb-8">
              05 / CONTACT
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-12 uppercase">
              READY TO START<br/>
              <span className="text-brand-accent drop-shadow-[0_0_20px_rgba(183,255,69,0.2)]">YOUR PROJECT?</span>
            </h2>
            
            <p className="text-brand-text-sec text-lg mb-16 leading-relaxed max-w-md font-medium">
              Tell us about your business and what you want to build. We'll discuss the right approach for your project.
            </p>
          </div>
          
          {/* Right Column - Form */}
          <div className="w-full lg:w-7/12">
            <motion.form 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.3 }} 
              onSubmit={handleSubmit} 
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Full Name *" />
                </div>
                <div>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className={inputClasses} placeholder="Business Name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="Email Address *" />
                </div>
                <div>
                  <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={inputClasses} placeholder="WhatsApp Number *" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <select aria-label="Website Type" name="websiteType" value={formData.websiteType} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
                    <option className="bg-[#111] text-white">Business Website</option>
                    <option className="bg-[#111] text-white">Landing Page</option>
                    <option className="bg-[#111] text-white">E-commerce</option>
                    <option className="bg-[#111] text-white">Website Redesign</option>
                    <option className="bg-[#111] text-white">Other</option>
                  </select>
                </div>
                <div className="relative">
                  <select aria-label="Budget" name="budget" value={formData.budget} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
                    <option className="bg-[#111] text-white">₹2,999 - ₹5,999</option>
                    <option className="bg-[#111] text-white">₹5,999 - ₹9,999</option>
                    <option className="bg-[#111] text-white">₹10,000+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className={`${inputClasses} resize-none`} placeholder="Project Description"></textarea>
              </div>
              
              {status === 'error' && (
                <div className="p-6 border border-orange-500/50 bg-orange-500/5 text-orange-200 text-sm mt-8">
                  <p className="mb-4">We are currently updating our backend. Please click below to send your enquiry directly via WhatsApp instead.</p>
                  <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-brand-accent text-[#050706] text-xs font-bold tracking-widest uppercase">
                    SEND ENQUIRY VIA WHATSAPP
                  </a>
                </div>
              )}
              
              {status === 'success' && (
                <div className="p-6 border border-[#25D366]/50 bg-[#25D366]/5 text-[#25D366] text-sm mt-8">
                  <p>Opening your email client... If it didn't open, you can also use the WhatsApp button below.</p>
                </div>
              )}
              
              {status !== 'error' && status !== 'success' && (
                <div className="pt-8 flex flex-col md:flex-row gap-4">
                  <button 
                    type="submit" 
                    disabled={status === 'loading'} 
                    className="group flex items-center justify-between w-full md:w-auto min-w-[240px] px-8 py-5 border border-white/20 hover:border-brand-accent transition-all duration-300 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-3 w-full text-xs font-bold tracking-widest uppercase text-white">
                        <Loader2 className="animate-spin" size={16} /> SENDING...
                      </span>
                    ) : (
                      <>
                        <span className="text-xs font-bold tracking-widest uppercase text-white group-hover:text-brand-accent transition-colors">
                          SEND MESSAGE
                        </span>
                        <Send size={16} className="text-white group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                      </>
                    )}
                  </button>
                  
                  <a 
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center justify-between w-full md:w-auto min-w-[240px] px-8 py-5 border border-white/20 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
                  >
                    <span className="text-xs font-bold tracking-widest uppercase text-white group-hover:text-[#25D366] transition-colors">
                      MESSAGE ON WHATSAPP
                    </span>
                    <MessageCircle size={16} className="text-white group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
