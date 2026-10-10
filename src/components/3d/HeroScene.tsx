import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Sparkles, SpotLight, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll, useTransform, useSpring } from 'framer-motion';

function BackgroundImage() {
  const texture = useTexture('/sci-fi-bg.jpg');
  const { viewport, camera } = useThree();
  
  // Calculate size to cover viewport at z=-12 when camera is at z=8 (distance 20)
  const distance = camera.position.z + 12;
  const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180);
  const height = 2 * Math.tan(fov / 2) * distance;
  const width = height * viewport.aspect;
  
  return (
    <mesh position={[0, 0, -12]}>
      {/* Scale by 1.2 to allow for parallax movement without showing edges */}
      <planeGeometry args={[width * 1.2, height * 1.2]} />
      {/* Disable fog so the background isn't obscured by the dark scene fog */}
      <meshBasicMaterial map={texture} depthWrite={false} toneMapped={false} fog={false} />
    </mesh>
  );
}

function CinematicScene() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const sceneRotY = useTransform(smoothProgress, [0, 1], [0, 0.2]);
  const sceneY = useTransform(smoothProgress, [0, 1], [0, 2]);

  const group = useRef<THREE.Group>(null);
  const bgGroup = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    // Parallax for the main 3D foreground group
    if (group.current) {
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, (mouse.x * 0.5), 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (mouse.y * 0.5) + sceneY.get(), 0.05);
      group.current.rotation.y = sceneRotY.get();
    }
    
    // Reverse, slower parallax for the background image to create deep 3D effect
    if (bgGroup.current) {
      bgGroup.current.position.x = THREE.MathUtils.lerp(bgGroup.current.position.x, (mouse.x * -1.5), 0.05);
      bgGroup.current.position.y = THREE.MathUtils.lerp(bgGroup.current.position.y, (mouse.y * -1.5), 0.05);
      // Slight rotation based on mouse for pseudo-3D perspective on the 2D image
      bgGroup.current.rotation.y = THREE.MathUtils.lerp(bgGroup.current.rotation.y, (mouse.x * 0.05), 0.05);
      bgGroup.current.rotation.x = THREE.MathUtils.lerp(bgGroup.current.rotation.x, (mouse.y * -0.05), 0.05);
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      <group ref={bgGroup}>
        <BackgroundImage />
      </group>

      <group ref={group}>


        {/* Architectural ring */}
        <mesh ref={ringRef} position={[0, 0, -4]}>
          <torusGeometry args={[8, 0.02, 16, 128]} />
          <meshBasicMaterial color="#B7FF45" transparent opacity={0.15} />
        </mesh>
      </group>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={["#050706"]} />
        <fog attach="fog" args={["#050706", 5, 20]} />
        
        <ambientLight intensity={0.2} />
        <SpotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={2} color="#B7FF45" distance={20} />
        <SpotLight position={[-10, 0, 10]} angle={0.5} penumbra={1} intensity={1} color="#55E878" distance={20} />
        
        <Suspense fallback={null}>
          <CinematicScene />
        </Suspense>
        
        <Sparkles count={80} scale={20} size={2} speed={0.2} opacity={0.3} color="#B7FF45" />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
