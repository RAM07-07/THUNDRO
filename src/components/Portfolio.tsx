import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';

interface Project {
  id: number;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  tech: string[];
  image: string;
  urlSlug: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'FitZone',
    category: 'Fitness',
    badge: 'Fitness Studio Website — Demo Project',
    tagline: 'High-energy digital platform for modern fitness studios',
    description: 'A gym and fitness studio website concept featuring interactive membership tier comparisons, certified trainer showcases, responsive class schedules, and a seamless one-click WhatsApp trial booking flow.',
    tech: ['React', 'Responsive Grid', 'WhatsApp Booking'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    urlSlug: 'fitzone-fitness'
  },
  {
    id: 2,
    title: 'WanderWay',
    category: 'Travel',
    badge: 'Travel Agency Website — Demo Project',
    tagline: 'Boutique tour and curated travel experience portal',
    description: 'Designed for independent travel agencies and tour operators. Features rich visual destination highlights, seasonal tour package breakdowns, interactive itineraries, and direct enquiry workflows.',
    tech: ['React', 'Interactive Itinerary', 'Enquiry API'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    urlSlug: 'wanderway-travel'
  },
  {
    id: 3,
    title: 'UrbanBites',
    category: 'Restaurant',
    badge: 'Restaurant & Culinary Website — Demo Project',
    tagline: 'Gastronomy showcase with online reservation flow',
    description: 'A culinary web experience highlighting chef specials, structured categorized food menus, high-resolution food photography, table reservation enquiry flows, and embedded location map details.',
    tech: ['React', 'Menu UI', 'Reservation Flow'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    urlSlug: 'urbanbites-dining'
  },
  {
    id: 4,
    title: 'GlowStudio',
    category: 'Salon & Wellness',
    badge: 'Salon & Wellness Website — Demo Project',
    tagline: 'Luxury aesthetic beauty and salon experience',
    description: 'Engineered for luxury salons, spas, and wellness clinics. Features an elegant treatment service menu, transparent price indicators, customer consultation requests, and mobile-first WhatsApp booking triggers.',
    tech: ['React', 'Service Catalogue', 'Appointment CTA'],
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop',
    urlSlug: 'glowstudio-wellness'
  },
  {
    id: 5,
    title: 'NovaStore',
    category: 'E-commerce',
    badge: 'E-commerce Storefront — Demo Project',
    tagline: 'Minimalist retail storefront with cart integration',
    description: 'A modern e-commerce concept focusing on fast product discovery, multi-angle product galleries, responsive shopping cart drawer, and frictionless checkout interface styling.',
    tech: ['React', 'Cart State', 'Filter Engine'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    urlSlug: 'novastore-shop'
  },
  {
    id: 6,
    title: 'EstatePro',
    category: 'Business',
    badge: 'Business Website — Demo Project',
    tagline: 'Architectural real estate and property platform',
    description: 'Created for real estate agencies and independent developers. Features clean architectural property cards, amenity specification tables, and schedule-a-viewing lead capture forms.',
    tech: ['React', 'Property Filter', 'Lead Capture'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    urlSlug: 'estatepro-properties'
  }
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Detect responsive breakpoint for 3D translation & rotation tuning
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const total = projects.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation when user is focused on the carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setTouchStartX(null);
  };

  // Helper to compute circular distance in [-total/2, total/2]
  const getDiff = (idx: number) => {
    let diff = idx - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const activeProject = projects[activeIndex];

  return (
    <section 
      id="portfolio" 
      className="py-16 sm:py-24 md:py-32 relative bg-white text-[#111827] border-t border-[#E5E7EB] scroll-mt-20 sm:scroll-mt-24 overflow-hidden"
    >
      {/* Anchor alias for #work */}
      <span id="work" className="absolute -top-24 pointer-events-none" />

      {/* Subtle Architectural Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-5">
        <div className="w-[1px] h-full bg-[#111827]" />
        <div className="w-[1px] h-full bg-[#111827]" />
        <div className="w-[1px] h-full bg-[#111827] hidden md:block" />
        <div className="w-[1px] h-full bg-[#111827]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px] relative z-10">
        
        {/* Scroll-triggered Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#22C55E] uppercase mb-3 sm:mb-4 font-mono"
          >
            03 / SELECTED WORK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] uppercase text-[#111827] tracking-tight"
          >
            Selected Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-xl"
          >
            Digital experiences designed to help businesses stand out.
          </motion.p>
        </motion.div>

        {/* 3D Cover Flow Viewport */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          ref={containerRef}
          tabIndex={0}
          role="region"
          aria-label="3D Selected Work Cover Flow Carousel"
          aria-roledescription="carousel"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-[1400px] mx-auto h-[320px] sm:h-[420px] md:h-[480px] lg:h-[530px] flex items-center justify-center select-none overflow-x-clip outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] rounded-3xl"
          style={{ perspective: '1200px' }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="absolute left-2 sm:left-4 md:left-8 z-40 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-lg hover:shadow-xl hover:border-[#22C55E] hover:text-[#22C55E] text-[#111827] flex items-center justify-center transition-all duration-300 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] cursor-pointer"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next project"
            className="absolute right-2 sm:right-4 md:right-8 z-40 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-lg hover:shadow-xl hover:border-[#22C55E] hover:text-[#22C55E] text-[#111827] flex items-center justify-center transition-all duration-300 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] cursor-pointer"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Cards Track */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {projects.map((project, idx) => {
              const diff = getDiff(idx);
              const isActive = diff === 0;

              // 3D positioning calculation based on relative offset
              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 30;
              let pointerEvents = 'auto';

              if (isActive) {
                translateX = 0;
                translateZ = 0;
                rotateY = 0;
                scale = 1;
                opacity = 1;
                zIndex = 30;
              } else if (diff === 1) {
                translateX = isMobile ? 55 : 64;
                translateZ = isMobile ? -90 : -160;
                rotateY = prefersReducedMotion ? 0 : (isMobile ? -14 : -28);
                scale = isMobile ? 0.88 : 0.85;
                opacity = 0.85;
                zIndex = 20;
              } else if (diff === -1) {
                translateX = isMobile ? -55 : -64;
                translateZ = isMobile ? -90 : -160;
                rotateY = prefersReducedMotion ? 0 : (isMobile ? 14 : 28);
                scale = isMobile ? 0.88 : 0.85;
                opacity = 0.85;
                zIndex = 20;
              } else if (diff === 2) {
                translateX = isMobile ? 95 : 110;
                translateZ = isMobile ? -170 : -280;
                rotateY = prefersReducedMotion ? 0 : (isMobile ? -20 : -38);
                scale = 0.72;
                opacity = 0.4;
                zIndex = 10;
              } else if (diff === -2) {
                translateX = isMobile ? -95 : -110;
                translateZ = isMobile ? -170 : -280;
                rotateY = prefersReducedMotion ? 0 : (isMobile ? 20 : 38);
                scale = 0.72;
                opacity = 0.4;
                zIndex = 10;
              } else {
                // Distant cards outside viewport
                translateX = diff > 0 ? 140 : -140;
                translateZ = -400;
                rotateY = prefersReducedMotion ? 0 : (diff > 0 ? -45 : 45);
                scale = 0.6;
                opacity = 0;
                zIndex = 0;
                pointerEvents = 'none';
              }

              return (
                <motion.div
                  key={project.id}
                  onClick={() => {
                    if (!isActive) setActiveIndex(idx);
                  }}
                  animate={{
                    x: `${translateX}%`,
                    z: translateZ,
                    rotateY,
                    scale,
                    opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 28,
                    mass: 0.8,
                  }}
                  style={{
                    zIndex,
                    pointerEvents: pointerEvents as any,
                    transformStyle: 'preserve-3d',
                  }}
                  className={`absolute w-[80vw] sm:w-[480px] md:w-[580px] lg:w-[680px] aspect-[16/10] cursor-pointer ${
                    isActive ? 'cursor-default' : 'hover:opacity-95'
                  }`}
                >
                  {/* Browser Window Mockup Card */}
                  <div className="w-full h-full rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12),0_10px_20px_-5px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group relative">
                    
                    {/* Browser Chrome Header */}
                    <div className="h-7 sm:h-9 bg-[#F9FAFB] border-b border-[#E5E7EB] px-3 sm:px-4 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                      </div>

                      {/* Mockup URL Pill */}
                      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-[#E5E7EB] text-[10px] sm:text-[11px] font-mono text-gray-500 max-w-[200px] sm:max-w-[260px] truncate">
                        <Lock size={10} className="text-[#22C55E] shrink-0" />
                        <span className="truncate">thundro.design/work/{project.urlSlug}</span>
                      </div>

                      <div className="w-10 sm:w-12 text-right">
                        <span className="text-[9px] font-mono uppercase text-gray-400 font-semibold hidden sm:inline">
                          0{project.id}
                        </span>
                      </div>
                    </div>

                    {/* Preview Image with Depth Glow */}
                    <div className="relative w-full flex-grow overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.badge}`}
                        loading={isActive ? 'eager' : 'lazy'}
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      
                      {/* Depth reflection overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 pointer-events-none" />

                      {/* Semi-transparent tint for non-active cards to emphasize depth */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] transition-opacity duration-300" />
                      )}

                      {/* Floating Category Tag inside preview */}
                      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-wider uppercase border border-white/20 shadow-md">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <div 
          className="flex items-center justify-center gap-2 mt-4 sm:mt-6 mb-8 sm:mb-12"
          role="tablist"
          aria-label="Project pagination"
        >
          {projects.map((proj, idx) => {
            const isDotActive = idx === activeIndex;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveIndex(idx)}
                role="tab"
                aria-selected={isDotActive}
                aria-label={`Show ${proj.title}`}
                className="p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] rounded-full cursor-pointer"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    isDotActive 
                      ? 'w-8 bg-[#22C55E]' 
                      : 'w-2 bg-[#E5E7EB] hover:bg-gray-400'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Active Project Details Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#F9FAFB] border border-[#E5E7EB] shadow-xl text-center flex flex-col items-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#15803D] uppercase px-3 py-1 rounded-full border border-[#22C55E]/40 bg-[#22C55E]/10 font-mono">
                  {activeProject.badge}
                </span>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider hidden sm:inline">
                  • {activeProject.category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#111827] uppercase tracking-tight mb-2">
                {activeProject.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#15803D] uppercase tracking-wider mb-4">
                {activeProject.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mb-6 font-normal">
                {activeProject.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {activeProject.tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-gray-600 bg-white border border-[#E5E7EB] px-3 py-1 rounded-full shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                <a
                  href={
                    siteConfig?.contact?.whatsapp 
                      ? `https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20Thundro,%20I'm%20interested%20in%20a%20website%20similar%20to%20the%20${activeProject.title}%20(${activeProject.badge})` 
                      : '#contact'
                  }
                  target={siteConfig?.contact?.whatsapp ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#111827] text-white hover:bg-[#22C55E] hover:text-black font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto group active:scale-95 cursor-pointer"
                >
                  <span>Request Similar Build</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#E5E7EB] bg-white hover:bg-gray-50 text-[#111827] hover:border-[#111827] font-bold text-xs tracking-widest uppercase transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow active:scale-95 cursor-pointer"
                >
                  <span>Explore Full Portfolio</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
