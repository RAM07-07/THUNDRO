import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import * as THREE from 'three';

const services = [
  { id: 'business', title: 'Business Websites', description: 'Professional multi-page websites for businesses.', shape: 'browser' },
  { id: 'landing', title: 'Landing Pages', description: 'Conversion-focused pages for campaigns, products, and services.', shape: 'layers' },
  { id: 'ecommerce', title: 'E-commerce Websites', description: 'Product catalogues, shopping experiences, and online store integrations.', shape: 'bag' },
  { id: 'booking', title: 'Booking Systems', description: 'Enquiry forms, appointment requests, and booking integrations.', shape: 'clock' },
  { id: 'redesign', title: 'Website Redesign', description: 'Transform outdated websites into modern digital experiences.', shape: 'transform' },
  { id: 'maintenance', title: 'Website Maintenance', description: 'Content updates, bug fixes, performance improvements, and ongoing support.', shape: 'shield' }
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
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} color="#B7FF45" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {type === 'browser' && (
          <mesh ref={mesh1}>
            <boxGeometry args={[1.5, 1, 0.2]} />
            <meshStandardMaterial color="#55E878" roughness={0.2} metalness={0.8} />
          </mesh>
        )}
        {type === 'layers' && (
          <group ref={group1}>
            <mesh ref={mesh1} position-y={0.2} position-z={0.2}>
              <planeGeometry args={[1.2, 0.8]} />
              <meshStandardMaterial color="#B7FF45" roughness={0.1} />
            </mesh>
            <mesh ref={mesh2} position-y={-0.2} position-z={-0.2}>
              <planeGeometry args={[1.2, 0.8]} />
              <meshStandardMaterial color="#55E878" roughness={0.5} />
            </mesh>
          </group>
        )}
        {type === 'bag' && (
          <group ref={group1}>
            <mesh>
              <torusGeometry args={[0.4, 0.15, 16, 32]} />
              <MeshDistortMaterial color="#B7FF45" distort={0.2} speed={2} />
            </mesh>
            <group ref={orbitGroup}>
              <mesh position={[0.8, 0, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="#55E878" />
              </mesh>
            </group>
          </group>
        )}
        {type === 'clock' && (
          <mesh ref={mesh1}>
            <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
            <meshStandardMaterial color="#55E878" metalness={0.8} roughness={0.2} />
          </mesh>
        )}
        {type === 'transform' && (
          <mesh ref={mesh1}>
            <octahedronGeometry args={[0.7]} />
            <MeshTransmissionMaterial color="#B7FF45" transmission={0.9} thickness={0.5} />
          </mesh>
        )}
        {type === 'shield' && (
          <mesh ref={mesh1}>
            <coneGeometry args={[0.6, 1, 4]} />
            <meshStandardMaterial color="#55E878" metalness={0.5} roughness={0.2} />
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

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity: smoothProgress, x: useTransform(smoothProgress, [0, 1], [-20, 0]) }} 
      className="group relative border-b border-white/10 py-10 lg:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
      
      <div className="flex items-start md:items-center gap-6 lg:gap-12 relative z-10 w-full md:w-auto">
        <span className="text-sm md:text-lg font-display text-brand-text-sec group-hover:text-brand-accent transition-colors duration-300 w-8">
          0{idx + 1}
        </span>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500 ease-out">
          {service.title}
        </h3>
      </div>
      
      <div className="flex items-center justify-between w-full md:w-auto gap-12 relative z-10">
        <p className="text-brand-text-sec text-sm md:text-base max-w-xs md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {service.description}
        </p>
        
        <div className="flex items-center gap-6">
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
    <section id="services" className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Architectural Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-10">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-[1600px] relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <div className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-brand-text-sec uppercase mb-8">
              02 / WHAT WE DO
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] uppercase max-w-2xl">
              DESIGNED WITH PURPOSE.<br/>
              <span className="text-brand-text-sec">BUILT TO PERFORM.</span>
            </h2>
          </div>
        </div>
        
        <div className="flex flex-col border-t border-white/10">
          {services.map((service, idx) => (
            <ServiceRow key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
