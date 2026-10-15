import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';

const categories = ['All', 'Business', 'Fitness', 'Travel', 'Restaurant', 'E-commerce'];

const projects = [
  {
    id: 1,
    title: 'FitZone',
    category: 'Fitness',
    badge: 'Concept Prototype',
    description: 'Gym and fitness website concept with membership tiers, trainer profiles, and class schedules.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop',
    color: 'from-orange-500/20 to-brand-bg',
    type: 'desktop'
  },
  {
    id: 2,
    title: 'WanderWay',
    category: 'Travel',
    badge: 'Concept Prototype',
    description: 'Travel destinations, curated tour packages, and direct inquiry booking functionality.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=900&auto=format&fit=crop',
    color: 'from-blue-500/20 to-brand-bg',
    type: 'mobile'
  },
  {
    id: 3,
    title: 'UrbanBites',
    category: 'Restaurant',
    badge: 'Concept Prototype',
    description: 'Culinary experience featuring food photography, structured menu, and table booking enquiries.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop',
    color: 'from-red-500/20 to-brand-bg',
    type: 'desktop'
  },
  {
    id: 4,
    title: 'GlowStudio',
    category: 'Business',
    badge: 'Concept Prototype',
    description: 'Elegant beauty aesthetic, service listings, and mobile appointment booking enquiries.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop',
    color: 'from-pink-500/20 to-brand-bg',
    type: 'mobile'
  },
  {
    id: 5,
    title: 'NovaStore',
    category: 'E-commerce',
    badge: 'Concept Prototype',
    description: 'Product catalogue, detailed product views, shopping cart drawer, and modern checkout UI.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop',
    color: 'from-purple-500/20 to-brand-bg',
    type: 'desktop'
  },
  {
    id: 6,
    title: 'EstatePro',
    category: 'Business',
    badge: 'Concept Prototype',
    description: 'Property listings, detailed specification pages, and schedule-a-viewing enquiry forms.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop',
    color: 'from-brand-accent/20 to-brand-bg',
    type: 'desktop'
  }
];

function ProjectRow({ project, idx }: { project: any, idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const yOffset = useTransform(smoothProgress, [0, 1], [100, 0]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const rotateX = useTransform(smoothProgress, [0, 1], [10, 0]);
  
  const isEven = idx % 2 === 0;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ opacity, y: yOffset }}
      className={`flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 items-center mb-16 sm:mb-24 lg:mb-32 ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      <div className="w-full lg:w-5/12 flex flex-col items-start">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-accent uppercase px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 font-mono">
            {project.category}
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] text-white/60 uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono">
            {project.badge}
          </span>
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 sm:mb-6">{project.title}</h3>
        <p className="text-brand-text-sec text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-md">{project.description}</p>
        
        <a 
          href={siteConfig?.contact?.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp}?text=I%20want%20to%20discuss%20a%20website%20similar%20to%20the%20${project.title}%20(${project.category})%20concept` : "#contact"}
          target={siteConfig?.contact?.whatsapp ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-white/20 bg-white/5 hover:bg-brand-accent hover:border-brand-accent text-white hover:text-black rounded-sm text-xs font-bold tracking-widest uppercase transition-all duration-300 group shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(183,255,69,0.2)] w-full sm:w-auto"
        >
          REQUEST SIMILAR BUILD <ShoppingCart size={16} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>

      <div className="w-full lg:w-7/12 relative perspective-[1200px]">
        <motion.div 
          style={{ rotateX, rotateY: isEven ? -4 : 4 }}
          className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group cursor-pointer"
          whileHover={{ scale: 1.02, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[#050706]/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
          
          {project.type === 'desktop' ? (
            <div className="absolute inset-x-3 sm:inset-x-8 bottom-0 top-6 sm:top-12 bg-black rounded-t-xl border-x-2 sm:border-x-4 border-t-2 sm:border-t-4 border-[#222] shadow-2xl overflow-hidden transform translate-y-4 sm:translate-y-8 group-hover:translate-y-2 sm:group-hover:translate-y-4 transition-transform duration-700 ease-out">
              <div className="h-5 sm:h-6 w-full bg-[#111] border-b border-[#333] flex items-center px-3 sm:px-4 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.category} Website Design Concept Demo by Thundro`} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="relative w-full max-w-[170px] sm:max-w-[240px] aspect-[9/19] bg-black rounded-[1.5rem] sm:rounded-[2rem] border-[6px] sm:border-[8px] border-[#222] shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700 ease-out">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} Website Design Concept Demo by Thundro`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-16 sm:py-24 md:py-32 relative bg-transparent border-t border-white/10 scroll-mt-20 sm:scroll-mt-24">
      {/* Anchor alias for #work */}
      <span id="work" className="absolute -top-24 pointer-events-none" />
      {/* Background Architectural Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-24 gap-6 sm:gap-8">
          <div>
            <div className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-brand-text-sec uppercase mb-4 sm:mb-8 font-mono">
              03 / SELECTED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] uppercase max-w-2xl">
              CONCEPT DEMOS &amp;<br/>
              <span className="text-brand-text-sec">INTERACTIVE WORK.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-4 py-2 sm:px-5 sm:py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === category 
                    ? 'bg-brand-accent text-[#050706]' 
                    : 'bg-transparent text-brand-text-sec hover:text-white border border-white/10 hover:border-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectRow key={project.id} project={project} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Portfolio Page Button */}
        <div className="mt-8 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-brand-accent hover:border-brand-accent text-white hover:text-black text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            <span>Explore Complete Portfolio Page</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
