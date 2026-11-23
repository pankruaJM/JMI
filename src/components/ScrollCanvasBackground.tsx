import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 240;
const LERP_FACTOR = 0.08; // Smooth interpolation factor

function getFrameUrl(index: number): string {
  // index is 1-based (001 to 240)
  const frameNum = Math.min(Math.max(index, 1), TOTAL_FRAMES);
  return `/bg-frames/ezgif-frame-${String(frameNum).padStart(3, '0')}.png`;
}

interface ScrollCanvasBackgroundProps {
  /** Optional custom overlay opacity or styling */
  overlayClassName?: string;
}

export const ScrollCanvasBackground: React.FC<ScrollCanvasBackgroundProps> = ({
  overlayClassName = 'bg-gradient-to-b from-black/60 via-black/35 to-black/75',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES + 1).fill(null));
  const loadedSetRef = useRef<Set<number>>(new Set());
  const targetFrameRef = useRef<number>(1);
  const currentFrameRef = useRef<number>(1);
  const lastDrawnFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);
  const isRunningRef = useRef<boolean>(false);
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isInitialLoaded, setIsInitialLoaded] = useState<boolean>(false);

  // Helper to draw a frame onto canvas with cover sizing
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Find nearest loaded frame if current frame is not ready
    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find closest loaded frame
      let closest = -1;
      let minDiff = Infinity;
      loadedSetRef.current.forEach((idx) => {
        const diff = Math.abs(idx - frameIndex);
        if (diff < minDiff) {
          minDiff = diff;
          closest = idx;
        }
      });
      if (closest > 0) {
        img = imagesRef.current[closest];
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) {
      return;
    }

    const { width, height } = canvas;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Cover logic
    const scale = Math.max(width / imgWidth, height / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (width - drawWidth) / 2;
    const offsetY = (height - drawHeight) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    lastDrawnFrameRef.current = frameIndex;
  };

  // Resize canvas to match window with devicePixelRatio for crispness
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = Math.floor(displayWidth * dpr);
      canvas.height = Math.floor(displayHeight * dpr);
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(1, 1);
      }
      drawFrame(Math.round(currentFrameRef.current));
    }
  };

  // Update target frame from window scroll position
  const updateTargetFromScroll = () => {
    const docElem = document.documentElement;
    const maxScroll = docElem.scrollHeight - window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
    targetFrameRef.current = 1 + progress * (TOTAL_FRAMES - 1);

    // Ensure animation loop is running
    startLoop();
  };

  // Animation loop with Lerp easing
  const startLoop = () => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;

    const animate = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current = current + diff * LERP_FACTOR;
        const renderIndex = Math.min(Math.max(Math.round(currentFrameRef.current), 1), TOTAL_FRAMES);
        drawFrame(renderIndex);
        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        // Snapped to target
        currentFrameRef.current = target;
        const renderIndex = Math.min(Math.max(Math.round(target), 1), TOTAL_FRAMES);
        drawFrame(renderIndex);
        isRunningRef.current = false;
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  };

  // Preloading frames progressively
  useEffect(() => {
    let isCancelled = false;

    // 1. Immediately load frame 1 for instant display
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[1] = firstImg;
      loadedSetRef.current.add(1);
      setIsInitialLoaded(true);
      resizeCanvas();
      drawFrame(1);
    };

    // 2. Load sparse keyframes first (every 8 frames) for immediate responsive scrubbing
    const keyframes: number[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i += 8) {
      if (i !== 1) keyframes.push(i);
    }
    if (keyframes[keyframes.length - 1] !== TOTAL_FRAMES) {
      keyframes.push(TOTAL_FRAMES);
    }

    const remainingFrames: number[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      if (i !== 1 && !keyframes.includes(i)) {
        remainingFrames.push(i);
      }
    }

    let loadedCount = 1;

    const loadSingleFrame = (frameIndex: number): Promise<void> => {
      return new Promise((resolve) => {
        if (imagesRef.current[frameIndex]) {
          resolve();
          return;
        }
        const img = new Image();
        img.src = getFrameUrl(frameIndex);
        img.onload = () => {
          if (isCancelled) {
            resolve();
            return;
          }
          imagesRef.current[frameIndex] = img;
          loadedSetRef.current.add(frameIndex);
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

          // If current viewing frame is close to this, redraw
          const curr = Math.round(currentFrameRef.current);
          if (Math.abs(curr - frameIndex) <= 2) {
            drawFrame(curr);
          }
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
      });
    };

    // Load keyframes in parallel batches of 6
    const loadBatch = async (list: number[], concurrency: number) => {
      for (let i = 0; i < list.length; i += concurrency) {
        if (isCancelled) break;
        const slice = list.slice(i, i + concurrency);
        await Promise.all(slice.map((idx) => loadSingleFrame(idx)));
      }
    };

    const runPreload = async () => {
      // Phase 1: Keyframes
      await loadBatch(keyframes, 8);
      // Phase 2: All remaining frames
      await loadBatch(remainingFrames, 10);
    };

    runPreload();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Window scroll and resize listeners
  useEffect(() => {
    resizeCanvas();
    updateTargetFromScroll();

    const handleScroll = () => {
      updateTargetFromScroll();
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Fixed Fullscreen Canvas Background */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 w-full h-full pointer-events-none z-0 object-cover"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Subtle Dark Contrast Overlay & Vignette for Readability */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none z-0 ${overlayClassName} transition-opacity duration-700`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
          boxShadow: 'inset 0 0 120px rgba(0,0,0,0.65)',
        }}
      />

      {/* Sleek Minimalist Loading Pill (Disappears once initial keyframes are ready) */}
      {!isInitialLoaded && (
        <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] text-white/80 font-mono shadow-lg transition-all animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9232E] animate-ping" />
          <span>กำลังโหลดแอนิเมชัน...</span>
        </div>
      )}
    </>
  );
};
