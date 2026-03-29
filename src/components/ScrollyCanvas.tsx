"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 120;
const FRAME_PATH = (i: number) =>
  `/sequence/frame_${i.toString().padStart(3, "0")}_delay-0.066s.webp`;

export function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Load all frames in background
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          setImagesLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Canvas rendering
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderFrame = (index: number) => {
      if (!images[index]) return;
      const img = images[index];
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      } else {
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(Math.round(frameIndex.get()));
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const unsubscribe = frameIndex.on("change", (latest) => {
      requestAnimationFrame(() => renderFrame(Math.round(latest)));
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
    };
  }, [imagesLoaded, frameIndex, images]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* INSTANT: Show frame 0 as a static image while canvas loads */}
        <img
          src={FRAME_PATH(0)}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: imagesLoaded ? 0 : 1,
            transition: "opacity 0.6s ease-out",
          }}
        />

        {/* Canvas takes over once all frames are ready */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block"
          style={{
            opacity: imagesLoaded ? 1 : 0,
            transition: "opacity 0.6s ease-out",
          }}
        />

        {/* Bottom gradient to hide Veo watermark */}
        <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
}
