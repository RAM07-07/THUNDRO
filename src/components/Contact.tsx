import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, MessageCircle, ChevronDown, Mail, MapPin, Zap, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState(() => {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const plan = urlParams.get('plan');
    return { 
      name: '', businessName: '', email: '', whatsapp: '', 
      websiteType: 'Business Website', 
      description: plan ? `I am interested in the ${plan} plan.` : '' 
    };
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateWhatsAppLink = () => {
    const details = formData.name 
      ? `Hi THUNDRO, I'd like to discuss a project.\n\n👤 Name: ${formData.name}\n🏢 Business: ${formData.businessName || 'N/A'}\n📱 WhatsApp: ${formData.whatsapp || 'N/A'}\n✉️ Email: ${formData.email || 'N/A'}\n💻 Type: ${formData.websiteType}\n📝 Details: ${formData.description || 'N/A'}`
      : "Hi THUNDRO, I'm interested in starting a project and would like to get a quote.";
    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(details)}`;
  };

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault(); 
    setStatus('loading'); 
    
    const subject = encodeURIComponent(`New Project Enquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nBusiness: ${formData.businessName}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}\n\nType: ${formData.websiteType}\n\nDetails:\n${formData.description}`);
    
    setTimeout(() => { 
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
      setStatus('success'); 
      setTimeout(() => setStatus('idle'), 4000);
    }, 600); 
  };

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24 md:py-32 relative bg-transparent border-t border-white/10 scroll-mt-20 sm:scroll-mt-24">
      {/* Background Architectural Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-20 items-start">
          
          {/* Left Column: Context, Heading, and Quick Contacts */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-brand-text-sec uppercase mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              05 / GET IN TOUCH
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-4 sm:mb-6 uppercase">
              READY TO START<br/>
              <span className="text-brand-accent drop-shadow-[0_0_25px_rgba(183,255,69,0.25)]">YOUR PROJECT?</span>
            </h2>
            
            <p className="text-brand-text-sec text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed font-medium">
              Tell us about your business vision. We'll consult with you, discuss strategies, and provide an accurate quote for your project.
            </p>

            {/* Quick Contact Badges for fast mobile access */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-3.5 mb-8 lg:mb-0">
              <a 
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-semibold text-brand-text-sec uppercase tracking-wider">WhatsApp Us</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#25D366] transition-colors truncate">
                    +91 86675 36503
                  </span>
                </div>
              </a>

              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-accent/40 hover:bg-brand-accent/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform shrink-0">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-semibold text-brand-text-sec uppercase tracking-wider">Email Us</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-accent transition-colors truncate">
                    {siteConfig.contact.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-brand-text-sec">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-brand-text-sec shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-semibold text-brand-text-sec uppercase tracking-wider">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-brand-text truncate">
                    {siteConfig.contact.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-[11px] font-semibold text-brand-accent/90">
                <Zap size={14} className="text-brand-accent animate-pulse shrink-0" />
                <span>Quick Response: We typically reply within 1–2 hours.</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Mobile-Optimized Form Card */}
          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
              className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#080B09]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-wider mb-6 flex items-center gap-2 text-white">
                <span>Send a Project Enquiry</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-bold tracking-wider text-brand-text-sec uppercase mb-1.5">
                      Full Name <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      required 
                      type="text" 
                      id="contact-name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#050706] border border-white/15 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40 text-white text-base rounded-xl px-4 py-3 sm:py-3.5 transition-all outline-none placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-business" className="block text-[11px] font-bold tracking-wider text-brand-text-sec uppercase mb-1.5">
                      Business Name
                    </label>
                    <input 
                      type="text" 
                      id="contact-business"
                      name="businessName" 
                      value={formData.businessName} 
                      onChange={handleChange} 
                      placeholder="e.g. Acme Studio"
                      className="w-full bg-[#050706] border border-white/15 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40 text-white text-base rounded-xl px-4 py-3 sm:py-3.5 transition-all outline-none placeholder:text-white/20"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-bold tracking-wider text-brand-text-sec uppercase mb-1.5">
                      Email Address <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      required 
                      type="email" 
                      id="contact-email"
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="name@company.com"
                      className="w-full bg-[#050706] border border-white/15 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40 text-white text-base rounded-xl px-4 py-3 sm:py-3.5 transition-all outline-none placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-whatsapp" className="block text-[11px] font-bold tracking-wider text-brand-text-sec uppercase mb-1.5">
                      WhatsApp Number <span className="text-brand-accent">*</span>
                    </label>
                    <input 
                      required 
                      type="tel" 
                      id="contact-whatsapp"
                      name="whatsapp" 
                      value={formData.whatsapp} 
                      onChange={handleChange} 
                      placeholder="+91 86675 36503"
                      className="w-full bg-[#050706] border border-white/15 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40 text-white text-base rounded-xl px-4 py-3 sm:py-3.5 transition-all outline-none placeholder:text-white/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-website-type" className="block text-[11px] font-bold tracking-wider text-brand-text-sec uppercase mb-1.5">
                    Website Type
                  </label>
                  <div className="relative">
                    <select 
                      id="contact-website-type"
                      aria-label="Website Type" 
                      name="websiteType" 
                      value={formData.websiteType} 
                      onChange={handleChange} 
                      className="w-full bg-[#050706] border border-white/15 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40 text-white text-base rounded-xl px-4 py-3 sm:py-3.5 pr-10 appearance-none cursor-pointer outline-none transition-all"
                    >
                      <option className="bg-[#111] text-white">Business Website</option>
                      <option className="bg-[#111] text-white">Landing Page</option>
                      <option className="bg-[#111] text-white">E-commerce</option>
                      <option className="bg-[#111] text-white">Website Redesign</option>
                      <option className="bg-[#111] text-white">Other</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-text-sec" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-description" className="block text-[11px] font-bold tracking-wider text-brand-text-sec uppercase mb-1.5">
                    Project Details
                  </label>
                  <textarea 
                    id="contact-description"
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    rows={3} 
                    placeholder="Tell us briefly about your goals, features you need, or reference links..."
                    className="w-full bg-[#050706] border border-white/15 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/40 text-white text-base rounded-xl p-4 transition-all outline-none resize-none placeholder:text-white/20"
                  />
                </div>
                
                {status === 'error' && (
                  <div className="p-4 border border-orange-500/40 bg-orange-500/10 text-orange-200 text-xs sm:text-sm rounded-xl">
                    <p className="mb-3">Email service is busy. Please click below to send your enquiry directly via WhatsApp instead.</p>
                    <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-[#050706] text-xs font-bold tracking-wider uppercase rounded-lg">
                      <MessageCircle size={15} /> Send via WhatsApp
                    </a>
                  </div>
                )}
                
                {status === 'success' && (
                  <div className="p-4 border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] text-xs sm:text-sm rounded-xl flex items-center gap-3">
                    <CheckCircle2 size={20} className="shrink-0" />
                    <p>Opening your email client... If it doesn't launch, you can also send directly via WhatsApp.</p>
                  </div>
                )}
                
                {status !== 'error' && status !== 'success' && (
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    {/* Primary Button */}
                    <button 
                      type="submit" 
                      disabled={status === 'loading'} 
                      className="flex items-center justify-center gap-2.5 w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-brand-accent text-[#050706] hover:bg-brand-accent/90 transition-all font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(183,255,69,0.25)] active:scale-[0.99] disabled:opacity-50 min-h-[50px]"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="animate-spin" size={16} />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MAIL</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                    
                    {/* Direct WhatsApp Action Button */}
                    <a 
                      href={generateWhatsAppLink()} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-2.5 w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(37,211,102,0.15)] active:scale-[0.99] min-h-[50px]"
                    >
                      <MessageCircle size={17} />
                      <span>CHAT ON WHATSAPP</span>
                    </a>
                  </div>
                )}
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
