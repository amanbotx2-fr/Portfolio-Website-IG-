"use client";

import { motion } from "framer-motion";

export function Contact() {
  const socials = [
    { 
      label: "GitHub", 
      url: "https://github.com/amanbotx2-fr", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5 5 0 0 0-.1 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
          <path d="M9 18c-4.5 1.5-5-2-7-2"></path>
        </svg>
      ) 
    },
    { 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/amankr06", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ) 
    },
    { 
      label: "X (Twitter)", 
      url: "https://x.com/amankumar_2006", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ) 
    },
    { 
      label: "Instagram", 
      url: "https://www.instagram.com/amxn_.exe", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="4" ry="4"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ) 
    },
  ];

  return (
    <section className="relative w-full bg-[#121212] py-20 sm:py-28 md:py-40 z-20 border-t border-white/5 overflow-hidden">
      
      {/* Abstract radial burst footer effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/20 rounded-t-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col items-center px-6 lg:px-12 relative z-10 text-center"
      >
        <h3 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-6 sm:mb-8">
          Got an idea? Let's build it.
        </h3>
        <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-light max-w-2xl mb-12 sm:mb-20 leading-relaxed">
          From concept to working system — I focus on making things actually work.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {socials.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#161616] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-indigo-500/50 hover:bg-[#1A1A1A] transition-colors focus:outline-none"
              title={link.label}
            >
              {/* Internal abstract hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-gray-400 group-hover:text-white transition-colors relative z-10 drop-shadow-2xl">
                {link.icon}
              </div>
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-16 sm:mt-32 text-gray-500 text-xs sm:text-sm font-mono tracking-widest uppercase flex items-center gap-4">
          <span className="w-8 h-[1px] bg-gray-600" />
          Aman Kumar ⸺ Portfolio Codebase
          <span className="w-8 h-[1px] bg-gray-600" />
        </div>
      </motion.div>
    </section>
  );
}
