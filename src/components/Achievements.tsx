"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star } from "lucide-react";

export function Achievements() {
  const events = [
    {
      title: "Top 4 Finalist – Bug Bounty, Innov8 Tech Fest 2025",
      category: "Hackathon",
      date: "2025",
      icon: <Trophy size={20} className="text-yellow-400" />
    },
    {
      title: "IBM Python for Data Science, AI & Development",
      category: "Certification",
      date: "Recent",
      icon: <Medal size={20} className="text-blue-400" />
    },
    {
      title: "Data Science Course – CodeWithHarry",
      category: "Certification",
      date: "Past",
      icon: <Star size={20} className="text-purple-400" />
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      category: "Experience",
      date: "Past",
      icon: <Medal size={20} className="text-indigo-400" />
    },
    {
      title: "Participant – Hack Arya Verse 2.0 Hackathon",
      category: "Hackathon",
      date: "Past",
      icon: <Trophy size={20} className="text-emerald-400" />
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 100 } as any }
  };

  return (
    <section className="relative w-full bg-[#121212] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 z-20 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-24 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 uppercase"
          >
            Progress So Far.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl font-light"
          >
            Building, competing, and evolving with every project I take on.
          </motion.p>
        </div>

        <div className="relative border-l border-white/10 ml-4 sm:ml-6 md:ml-12 pl-6 sm:pl-10 md:pl-16 space-y-8 sm:space-y-16 py-8">
          
          {/* Animated timeline fill track */}
          <motion.div 
            className="absolute top-0 left-[-1px] w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />

          {events.map((event, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ x: 10 }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer"
            >
              {/* Timeline Node Point element */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i * 0.1) + 0.5, type: "spring" }}
                className="absolute -left-[29px] sm:-left-[45px] md:-left-[69px] top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#121212] border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300" 
              />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[#161616] border border-white/5 hover:border-white/10 hover:bg-[#1A1A1A] transition-colors shadow-2xl shadow-black/50">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="p-2 rounded-lg bg-white/5 border border-white/5">
                      {event.icon}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
                      {event.category}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-xl md:text-2xl font-bold text-gray-200 leading-tight">
                    {event.title}
                  </h4>
                </div>
                <div className="text-sm font-light text-gray-500 tracking-wider">
                  {event.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
