"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function Overlay() {
  const { scrollY } = useScroll();

  const useVhTransform = (vhArray: number[], outputArray: any[]) => {
    const vh = typeof window !== "undefined" ? window.innerHeight : 1000;
    return useTransform(scrollY, vhArray.map((v) => vh * v), outputArray);
  };

  const opacity1 = useVhTransform([0, 1], [1, 0]);
  const y1 = useVhTransform([0, 1], [0, -150]);

  const opacity2 = useVhTransform([1, 1.5, 2.5], [0, 1, 0]);
  const y2 = useVhTransform([1, 2.5], [100, -100]);

  const opacity3 = useVhTransform([2.5, 3, 4], [0, 1, 0]);
  const y3 = useVhTransform([2.5, 4], [100, -100]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white">
          Aman Kumar
        </h1>
        <p className="mt-4 text-base sm:text-xl md:text-2xl text-gray-400 font-light tracking-wide">
          Full Stack Developer | AI Enthusiast
        </p>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col justify-center items-start text-left px-4 sm:px-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white max-w-lg leading-tight">
          Just a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            developer,
          </span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col justify-center items-end text-right px-4 sm:px-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white max-w-lg leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            trying to build cool shit.
          </span>
        </h2>
      </motion.div>
    </div>
  );
}
