"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Overlay() {
  const { scrollY } = useScroll();

  // Assuming container height is 500vh, we map scroll pixel distances to phases.
  // 100vh = window.innerHeight. 
  // We'll use viewport heights (vh) via calculations for responsive mapping.
  
  // Custom hook to transform based on viewport heights
  const useVhTransform = (vhArray: number[], outputArray: any[]) => {
    // In SSR we don't have window, fallback to 1000 for server
    const vh = typeof window !== "undefined" ? window.innerHeight : 1000;
    return useTransform(scrollY, vhArray.map((v) => vh * v), outputArray);
  };

  // Section 1: 0% scroll (fades out by 100vh, moves up)
  const opacity1 = useVhTransform([0, 1], [1, 0]);
  const y1 = useVhTransform([0, 1], [0, -150]);

  // Section 2: 30% scroll (fades in slightly before, peaks at ~30% (150vh), fades out by 250vh)
  const opacity2 = useVhTransform([1, 1.5, 2.5], [0, 1, 0]);
  const y2 = useVhTransform([1, 2.5], [100, -100]);

  // Section 3: 60% scroll (peaks at ~300vh, fades out by 400vh)
  const opacity3 = useVhTransform([2.5, 3, 4], [0, 1, 0]);
  const y3 = useVhTransform([2.5, 4], [100, -100]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          Aman Kumar.
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-400 font-light tracking-wide">
          Full Stack Developer | AI Enthusiast
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col justify-center items-start text-left"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-lg leading-tight">
          I build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            real systems,
          </span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col justify-center items-end text-right"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-lg leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            not just projects.
          </span>
        </h2>
      </motion.div>
    </div>
  );
}
