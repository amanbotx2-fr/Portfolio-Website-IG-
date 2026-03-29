"use client";

import { motion } from "framer-motion";

export function About() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } as any }
  };

  return (
    <section className="relative w-full bg-[#121212] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 z-20 overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-16 items-center"
      >
        
        {/* Left Side: Visual Text Element */}
        <motion.div variants={itemVars} className="w-full lg:w-1/3 flex justify-start lg:justify-end border-b lg:border-b-0 lg:border-r border-white/10 pb-12 lg:pb-0 lg:pr-16 items-start pt-2">
          <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 tracking-tighter uppercase whitespace-nowrap">
            About.
          </h3>
        </motion.div>

        {/* Right Side: Animated Descriptive Bio */}
        <div className="w-full lg:w-2/3 space-y-8 relative z-10">
          <motion.p variants={itemVars} className="text-xl sm:text-2xl md:text-4xl text-gray-300 font-light leading-tight">
            I'm a developer who learns by <span className="text-white font-medium relative inline-block">
              building
              {/* Highlight underline */}
              <motion.span 
                initial={{ scaleX: 0 }} 
                whileInView={{ scaleX: 1 }} 
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left rounded-full"
              />
            </span>, not just following tutorials.
          </motion.p>
          
          <motion.p variants={itemVars} className="text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
            From <span className="text-gray-200">full-stack apps</span> to <span className="text-gray-200">AI systems</span>, I focus on creating things that solve real problems. A lot of it starts messy — <span className="text-gray-200">debugging, breaking, fixing</span> — until it finally works.
          </motion.p>

          <motion.div variants={itemVars} className="pt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to building & collaborating
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 font-mono tracking-widest uppercase hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
