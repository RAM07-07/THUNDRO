import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 50;

function currentFrame(index: number) {
  // frames are named frame_001.jpg to frame_050.jpg
  const paddedIndex = (index + 1).toString().padStart(3, '0');
  return `/frames/frame_${paddedIndex}.jpg`;
}

const renderFrame = (ctx: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
  if (!ctx || !img) return;
  
  // Set canvas dimensions to match window for perfect sharpness
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Simulate background-size: cover
  const hRatio = canvas.width / img.width;
  const vRatio = canvas.height / img.height;
  const ratio = Math.max(hRatio, vRatio);
  const centerShift_x = (canvas.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.height - img.height * ratio) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img, 
    0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
  );
};

export default function ScrollSequenceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          // Draw first frame immediately when all loaded
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            renderFrame(ctx, canvasRef.current, loadedImages[0]);
          }
        }
      };
      loadedImages.push(img);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0 || !canvasRef.current) return;
    
    // map latest (0 to 1) to frame index (0 to 49)
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    
    const ctx = canvasRef.current.getContext('2d');
    renderFrame(ctx, canvasRef.current, images[frameIndex]);
  });

  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0 && canvasRef.current) {
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollYProgress.get() * FRAME_COUNT)
        );
        const ctx = canvasRef.current.getContext('2d');
        renderFrame(ctx, canvasRef.current, images[frameIndex]);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.1] saturate-[1.2]"
    />
  );
}
