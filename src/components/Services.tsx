import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import * as THREE from 'three';
import { scrollToSection } from '../utils/scroll';

const services = [
  { 
    id: 'business', 
    title: 'Business Websites', 
    description: 'Custom multi-page responsive websites tailored for small businesses, gyms, salons, and agencies.', 
    shape: 'browser',
    link: '/services/business-websites',
    isRoute: true 
  },
  { 
    id: 'landing', 
    title: 'Landing Pages', 
    description: 'High-converting single-page websites engineered for marketing campaigns, lead generation, and product launches.', 
    shape: 'layers',
    link: '#contact',
    isRoute: false 
  },
  { 
    id: 'ecommerce', 
    title: 'E-commerce Websites', 
    description: 'Digital storefronts with product catalogues, shopping carts, and secure payment gateway integrations.', 
    shape: 'bag',
    link: '/portfolio',
    isRoute: true 
  },
  { 
    id: 'booking', 
    title: 'Booking Systems', 
    description: 'Appointment scheduling, booking workflows, and customer enquiry forms for service businesses.', 
    shape: 'clock',
    link: '#contact',
    isRoute: false 
  },
  { 
    id: 'redesign', 
    title: 'Website Redesign', 
    description: 'Transforming legacy or slow websites into modern, mobile-first digital experiences with improved conversion.', 
    shape: 'transform',
    link: '/services/small-business-websites',
    isRoute: true 
  },
  { 
    id: 'maintenance', 
    title: 'Website Maintenance', 
    description: 'Ongoing website updates, bug fixes, performance monitoring, and security enhancements.', 
    shape: 'shield',
    link: '#contact',
    isRoute: false 
  }
];

function InnerIcon3D({ type, progress }: { type: string, progress: MotionValue<number> }) {
  const yOffset = useTransform(progress, [0, 1], [-1, 0]);
  const rotY = useTransform(progress, [0, 1], [-Math.PI / 2, 0]);
  const assembleX1 = useTransform(progress, [0, 1], [-1.5, 0]);
  const assembleX2 = useTransform(progress, [0, 1], [1.5, 0.2]);
  const scaleIn = useTransform(progress, [0, 1], [0.1, 1]);
  const rotZ = useTransform(progress, [0, 1], [-Math.PI, 0]);
  
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const group1 = useRef<THREE.Group>(null);
  const orbitGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (type === 'browser' && mesh1.current) {
      mesh1.current.position.y = yOffset.get();
      mesh1.current.rotation.y = rotY.get();
    }
    if (type === 'layers' && group1.current && mesh1.current && mesh2.current) {
      group1.current.rotation.y = rotY.get();
      mesh1.current.position.x = assembleX1.get();
      mesh2.current.position.x = assembleX2.get();
    }
    if (type === 'bag' && group1.current && orbitGroup.current) {
      group1.current.scale.setScalar(scaleIn.get());
      orbitGroup.current.rotation.y = state.clock.elapsedTime * 1.5;
    }
    if (type === 'clock' && mesh1.current) {
      mesh1.current.rotation.z = rotZ.get();
      mesh1.current.scale.setScalar(scaleIn.get());
    }
    if (type === 'transform' && mesh1.current) {
      mesh1.current.rotation.x = rotY.get();
      mesh1.current.rotation.y = rotY.get();
      mesh1.current.scale.setScalar(scaleIn.get());
    }
    if (type === 'shield' && mesh1.current) {
      mesh1.current.rotation.y = rotY.get();
      mesh1.current.scale.setScalar(scaleIn.get());
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} color="#16A34A" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {type === 'browser' && (
          <mesh ref={mesh1}>
            <boxGeometry args={[1.5, 1, 0.2]} />
            <meshStandardMaterial color="#16A34A" roughness={0.2} metalness={0.6} />
          </mesh>
        )}
        {type === 'layers' && (
          <group ref={group1}>
            <mesh ref={mesh1} position-y={0.2} position-z={0.2}>
              <planeGeometry args={[1.2, 0.8]} />
              <meshStandardMaterial color="#15803D" roughness={0.1} />
            </mesh>
            <mesh ref={mesh2} position-y={-0.2} position-z={-0.2}>
              <planeGeometry args={[1.2, 0.8]} />
              <meshStandardMaterial color="#22C55E" roughness={0.5} />
            </mesh>
          </group>
        )}
        {type === 'bag' && (
          <group ref={group1}>
            <mesh>
              <torusGeometry args={[0.4, 0.15, 16, 32]} />
              <MeshDistortMaterial color="#15803D" distort={0.2} speed={2} />
            </mesh>
            <group ref={orbitGroup}>
              <mesh position={[0.8, 0, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="#16A34A" />
              </mesh>
            </group>
          </group>
        )}
        {type === 'clock' && (
          <mesh ref={mesh1}>
            <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
            <meshStandardMaterial color="#16A34A" metalness={0.6} roughness={0.2} />
          </mesh>
        )}
        {type === 'transform' && (
          <mesh ref={mesh1}>
            <octahedronGeometry args={[0.7]} />
            <MeshTransmissionMaterial color="#15803D" transmission={0.8} thickness={0.5} />
          </mesh>
        )}
        {type === 'shield' && (
          <mesh ref={mesh1}>
            <coneGeometry args={[0.6, 1, 4]} />
            <meshStandardMaterial color="#16A34A" metalness={0.5} roughness={0.2} />
          </mesh>
        )}
      </Float>
    </>
  );
}

function ServiceRow({ service, idx }: { service: any, idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "0.5 0.8"] });
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (service.isRoute) {
      navigate(service.link);
    } else {
      scrollToSection(service.link);
    }
  };

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity: smoothProgress, x: useTransform(smoothProgress, [0, 1], [-20, 0]) }} 
      className="group relative border-b border-black/10 py-6 sm:py-10 lg:py-14 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 cursor-pointer hover:bg-black/[0.015] transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
      
      <div className="flex items-start md:items-center gap-4 sm:gap-6 lg:gap-12 relative z-10 w-full md:w-auto">
        <span className="text-xs sm:text-base md:text-lg font-display text-brand-accent sm:text-brand-text-sec group-hover:text-brand-accent transition-colors duration-300 w-6 sm:w-8 shrink-0 mt-1 md:mt-0 font-mono font-bold">
          0{idx + 1}
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight break-words text-brand-text group-hover:translate-x-2 sm:group-hover:translate-x-4 transition-transform duration-500 ease-out flex items-center gap-3">
          <span>{service.title}</span>
          <ArrowUpRight size={22} className="opacity-0 group-hover:opacity-100 text-brand-accent transition-all duration-300 hidden sm:inline-block" />
        </h3>
      </div>
      
      <div className="flex items-center justify-between w-full md:w-auto gap-4 sm:gap-12 relative z-10 pl-10 sm:pl-14 md:pl-0">
        <p className="text-brand-text-sec text-xs sm:text-sm md:text-base max-w-md md:max-w-xs md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium">
          {service.description}
        </p>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="w-16 h-16 md:w-24 md:h-24 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out absolute right-24 md:static pointer-events-none">
            {isHovered && (
              <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                <InnerIcon3D type={service.shape} progress={smoothProgress} />
              </Canvas>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-transparent scroll-mt-20 sm:scroll-mt-24">
      {/* Background Architectural Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-5">
        <div className="w-[1px] h-full bg-black" />
        <div className="w-[1px] h-full bg-black" />
        <div className="w-[1px] h-full bg-black hidden md:block" />
        <div className="w-[1px] h-full bg-black" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1600px] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-24 gap-6 sm:gap-8">
          <div>
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-brand-accent uppercase mb-4 sm:mb-8 font-mono">
              02 / WHAT WE DO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] uppercase max-w-2xl text-brand-text">
              DESIGNED WITH PURPOSE.<br/>
              <span className="text-brand-text-sec">BUILT TO PERFORM.</span>
            </h2>
          </div>
        </div>
        
        <div className="flex flex-col border-t border-black/10 mb-12 sm:mb-16">
          {services.map((service, idx) => (
            <ServiceRow key={service.id} service={service} idx={idx} />
          ))}
        </div>

        {/* Dedicated Solutions Deep-Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <Link
            to="/services/business-websites"
            className="p-6 rounded-2xl bg-white border border-black/10 hover:border-brand-accent/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block mb-2 font-bold">Dedicated Service</span>
              <h3 className="text-lg font-display font-bold text-brand-text uppercase group-hover:text-brand-accent transition-colors mb-2">
                Business Website Development
              </h3>
              <p className="text-xs text-brand-text-sec leading-relaxed font-normal">
                Custom multi-page responsive websites tailored for professional businesses and service providers.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-brand-accent font-bold mt-4 font-mono">
              Read Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/services/gym-fitness-websites"
            className="p-6 rounded-2xl bg-white border border-black/10 hover:border-brand-accent/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block mb-2 font-bold">Specialized Vertical</span>
              <h3 className="text-lg font-display font-bold text-brand-text uppercase group-hover:text-brand-accent transition-colors mb-2">
                Gym &amp; Fitness Website Design
              </h3>
              <p className="text-xs text-brand-text-sec leading-relaxed font-normal">
                High-energy websites featuring membership pricing tables, trainer showcases, and class schedules.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-brand-accent font-bold mt-4 font-mono">
              Read Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/services/small-business-websites"
            className="p-6 rounded-2xl bg-white border border-black/10 hover:border-brand-accent/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block mb-2 font-bold">Local &amp; Small Business</span>
              <h3 className="text-lg font-display font-bold text-brand-text uppercase group-hover:text-brand-accent transition-colors mb-2">
                Small Business Websites
              </h3>
              <p className="text-xs text-brand-text-sec leading-relaxed font-normal">
                Fast-loading, mobile-friendly websites with transparent pricing and direct WhatsApp customer contact.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-brand-accent font-bold mt-4 font-mono">
              Read Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
