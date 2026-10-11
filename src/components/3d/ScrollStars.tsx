import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Create a high-quality radial star sprite with a glowing halo
function createStarTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    // Pure white center, bright halo, transitioning to soft transparent glow
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.15, 'rgba(255, 255, 255, 0.9)');
    gradient.addColorStop(0.4, 'rgba(215, 255, 160, 0.45)');
    gradient.addColorStop(0.7, 'rgba(183, 255, 69, 0.15)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function ScrollStars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    // --- WebGL Renderer ---
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- Stars System ---
    const STAR_COUNT = 1800;
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3);
    const colors = new Float32Array(STAR_COUNT * 3);

    // Palette: white diamond, neon lime green (#B7FF45), and cosmic cyan (#38BDF8)
    const colorWhite = new THREE.Color(0xffffff);
    const colorLime = new THREE.Color(0xB7FF45);
    const colorCyan = new THREE.Color(0x38BDF8);

    for (let i = 0; i < STAR_COUNT; i++) {
      const i3 = i * 3;
      // Spread across a wide 3D space with deep Z volume
      positions[i3] = (Math.random() - 0.5) * 80;     // X
      positions[i3 + 1] = (Math.random() - 0.5) * 60; // Y
      positions[i3 + 2] = -120 + Math.random() * 130; // Z

      // Color distribution: 72% white, 20% lime green, 8% soft cyan
      const randType = Math.random();
      let chosenColor: THREE.Color;
      if (randType < 0.72) {
        chosenColor = colorWhite.clone().lerp(new THREE.Color(0xf0fdf4), Math.random() * 0.4);
      } else if (randType < 0.92) {
        chosenColor = colorLime.clone().lerp(colorWhite, Math.random() * 0.3);
      } else {
        chosenColor = colorCyan.clone().lerp(colorWhite, Math.random() * 0.3);
      }

      colors[i3] = chosenColor.r;
      colors[i3 + 1] = chosenColor.g;
      colors[i3 + 2] = chosenColor.b;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starTexture = createStarTexture();

    const starMaterial = new THREE.PointsMaterial({
      size: 1.35,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.9
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // --- Shooting Star / Meteor Streak ---
    const meteorTailLength = 16;
    const meteorGeom = new THREE.BufferGeometry();
    const meteorPositions = new Float32Array(meteorTailLength * 3);
    const meteorColors = new Float32Array(meteorTailLength * 3);

    for (let j = 0; j < meteorTailLength; j++) {
      const t = j / meteorTailLength;
      const alpha = 1.0 - t;
      const j3 = j * 3;
      meteorColors[j3] = colorLime.r * alpha;
      meteorColors[j3 + 1] = colorLime.g * alpha;
      meteorColors[j3 + 2] = colorLime.b * alpha;
    }

    meteorGeom.setAttribute('position', new THREE.BufferAttribute(meteorPositions, 3));
    meteorGeom.setAttribute('color', new THREE.BufferAttribute(meteorColors, 3));

    const meteorMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      linewidth: 2,
      opacity: 0
    });

    const meteor = new THREE.Line(meteorGeom, meteorMat);
    scene.add(meteor);

    // Meteor state
    let meteorActive = false;
    const meteorPos = new THREE.Vector3();
    const meteorDir = new THREE.Vector3();
    let meteorSpeed = 1.8;
    let meteorLife = 0;
    let nextMeteorTimer = 2.0;

    function spawnMeteor() {
      meteorActive = true;
      meteorLife = 1.0;
      meteorMat.opacity = 0.95;
      meteorPos.set(
        (Math.random() - 0.5) * 45,
        18 + Math.random() * 10,
        -10 + Math.random() * 20
      );
      meteorDir.set(
        (Math.random() > 0.5 ? 1 : -1) * (0.8 + Math.random() * 0.6),
        -(1.0 + Math.random() * 0.5),
        -(0.3 + Math.random() * 0.4)
      ).normalize();
      meteorSpeed = 1.6 + Math.random() * 1.2;
    }

    // --- Interactive Mouse & Scroll Tracking ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      scrollVelocity += delta * 0.055;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Animation Loop ---
    let animationFrameId: number;
    let lastTime = performance.now();
    const clock = new THREE.Clock();

    const render = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const elapsed = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX = THREE.MathUtils.lerp(mouseX, targetMouseX, 0.05);
      mouseY = THREE.MathUtils.lerp(mouseY, targetMouseY, 0.05);

      // Camera parallax tilt based on cursor
      camera.position.x = mouseX * 2.2;
      camera.position.y = mouseY * 1.8;
      camera.lookAt(0, 0, 0);

      // Subtle slow rotation of celestial sphere
      starField.rotation.z = elapsed * 0.012;
      starField.rotation.y = elapsed * 0.006;

      // Decay scroll velocity smoothly
      scrollVelocity *= 0.92;
      const cruiseSpeed = 0.07;
      const currentSpeed = cruiseSpeed + scrollVelocity;

      // Update 3D Stars positions
      const posAttr = starGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      // Warp stretch: scale points slightly when scrolling fast
      const warpFactor = Math.min(2.2, 1 + Math.abs(scrollVelocity) * 0.12);
      starMaterial.size = 1.35 * warpFactor;

      const Z_FAR = -120;
      const Z_NEAR = 12;
      const Z_RANGE = Z_NEAR - Z_FAR;

      for (let i = 0; i < STAR_COUNT; i++) {
        const i3 = i * 3;

        // Move star forward along Z
        posArray[i3 + 2] += currentSpeed;

        // Infinite wrapping
        if (posArray[i3 + 2] > Z_NEAR) {
          posArray[i3 + 2] -= Z_RANGE;
          posArray[i3] = (Math.random() - 0.5) * 80;
          posArray[i3 + 1] = (Math.random() - 0.5) * 60;
        } else if (posArray[i3 + 2] < Z_FAR) {
          posArray[i3 + 2] += Z_RANGE;
          posArray[i3] = (Math.random() - 0.5) * 80;
          posArray[i3 + 1] = (Math.random() - 0.5) * 60;
        }
      }
      posAttr.needsUpdate = true;

      // --- Meteor Logic ---
      if (!meteorActive) {
        nextMeteorTimer -= dt;
        if (nextMeteorTimer <= 0) {
          spawnMeteor();
          nextMeteorTimer = 4.0 + Math.random() * 5.0;
        }
      } else {
        meteorLife -= dt * 1.2;
        if (meteorLife <= 0) {
          meteorActive = false;
          meteorMat.opacity = 0;
        } else {
          meteorMat.opacity = Math.max(0, meteorLife * 0.95);
          meteorPos.addScaledVector(meteorDir, meteorSpeed);

          const mPosAttr = meteorGeom.attributes.position as THREE.BufferAttribute;
          const mArray = mPosAttr.array as Float32Array;

          mArray[0] = meteorPos.x;
          mArray[1] = meteorPos.y;
          mArray[2] = meteorPos.z;

          for (let k = 1; k < meteorTailLength; k++) {
            const dist = k * 0.35;
            mArray[k * 3] = meteorPos.x - meteorDir.x * dist;
            mArray[k * 3 + 1] = meteorPos.y - meteorDir.y * dist;
            mArray[k * 3 + 2] = meteorPos.z - meteorDir.z * dist;
          }
          mPosAttr.needsUpdate = true;
        }
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // --- Resize Handler ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      starGeometry.dispose();
      starMaterial.dispose();
      starTexture.dispose();
      meteorGeom.dispose();
      meteorMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none overflow-hidden z-[1]" 
      aria-hidden="true"
    />
  );
}
