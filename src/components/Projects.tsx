"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Local GithubIcon as requested before
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5 5 0 0 0-.1 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
    <path d="M9 18c-4.5 1.5-5-2-7-2"></path>
  </svg>
);

export function Projects() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, duration: 0.5 } 
    }
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } as any }
  };

  const featuredProject = {
    title: "Hacknex",
    role: "Featured Architecture",
    desc: "Real-time Discord bot tracking hackathons across Devfolio, Unstop, and MLH. Built with Node.js, powered by cron automation, and running live in production. Designed with a custom data pipeline and deduplication system to ensure reliable alerts.",
    github: "https://github.com/amanbotx2-fr/Hacknex-Bot",
    live: "https://hacknex-discord-bot.vercel.app/",
    tech: ["Node.js", "Discord.js", "Cron", "Railway"]
  };
  
  const projects = [
    {
      title: "IPL Data Analysis",
      role: "Data Science",
      desc: "Analyzed IPL datasets to uncover patterns in team and player performance.Focused on extracting meaningful insights from raw data.",
      github: "https://github.com/amanbotx2-fr/IPL-Data-Analysis-Match-Insights",
      tech: ["Python", "Pandas", "EDA"]
    },
    {
      title: "Pomodoro Timer",
      role: "iOS Engineering",
      desc: "A SwiftUI-based focus app built with a custom timer engine and state logic. Designed to handle time, state, and user interaction seamlessly.",
      github: "https://github.com/amanbotx2-fr/Pomodoro-App",
      tech: ["SwiftUI", "State"]
    },
    {
      title: "Pokémon Weather App",
      role: "Frontend",
      desc: "Weather-driven UI that dynamically adapts using real-time API data. Maps conditions to Pokémon types for an interactive experience.",
      github: "https://github.com/amanbotx2-fr/Pokemon-Weather-app",
      tech: ["React", "APIs", "CSS"]
    },
    {
      title: "Smart Parking AI",
      role: "AI / Computing",
      desc: "AI-based parking system using YOLOv8 and OpenCV. Real-time vehicle detection, parking slot mapping, dashboard, and booking logic built during a hackathon.",
      github: "https://github.com/amanbotx2-fr/Smart-Parking-AI",
      tech: ["YOLOv8", "OpenCV", "Python"]
    },
    {
      title: "AI Chatbot",
      role: "NLP / Python",
      desc: "Built a conversational AI chatbot handling user input and generating responses using underlying NLP concepts.",
      github: "https://github.com/amanbotx2-fr/AI-ChatBotpy",
      tech: ["Python", "NLP"]
    },
    {
      title: "Habit Tracker",
      role: "Full Stack",
      desc: "Full-stack web application for tracking daily habits. Built with Node.js, Express, JavaScript, including authentication and CRUD operations.",
      github: "https://github.com/amanbotx2-fr/Habit-Tracker-Full-Stack-Website",
      tech: ["Node.js", "Express", "JS"]
    },
  ];

  return (
    <section className="relative w-full bg-[#121212] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 z-20">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-20">
          <motion.h3 variants={itemVars} className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-4 sm:mb-6">
            Real Systems. Real Work.
          </motion.h3>
          <motion.p variants={itemVars} className="text-gray-400 text-base sm:text-lg md:text-xl font-light max-w-2xl">
            Systems designed, broken, and rebuilt — until they worked.
          </motion.p>
        </div>

        {/* Featured Project: Massive Depth Grid */}
        <motion.div 
          variants={itemVars}
          whileHover={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-12 cursor-pointer group relative flex flex-col md:flex-row justify-between rounded-3xl border border-white/10 bg-[#161616] overflow-hidden transition-all duration-700 hover:shadow-[0_0_80px_-20px_rgba(99,102,241,0.2)] hover:border-indigo-500/30"
        >
          {/* Abstract node background effect replacing placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl" />
          <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block opacity-10 blur-xl group-hover:blur-md transition-all duration-1000 scale-150 group-hover:scale-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 to-transparent pointer-events-none" />

          {/* Featured Content Left */}
          <div className="relative z-10 p-6 sm:p-10 md:p-16 flex flex-col justify-between w-full md:w-3/5">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-indigo-400 uppercase rounded-full px-4 py-1 border border-indigo-500/30 bg-indigo-500/10">
                {featuredProject.role}
              </span>
              <h4 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mt-6 sm:mt-8 tracking-tighter group-hover:text-indigo-50 transition-colors duration-500">
                {featuredProject.title}
              </h4>
              <p className="text-gray-400 font-light leading-relaxed mt-4 sm:mt-6 text-base sm:text-lg md:text-xl">
                {featuredProject.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-8">
                {featuredProject.tech.map((t, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-white/5 border border-white/5 rounded text-gray-400 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-6 mt-12 relative z-20 pointer-events-auto opacity-80 group-hover:opacity-100 transition-opacity">
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-indigo-400 transition-colors">
                <GithubIcon size={24} /> <span className="font-medium">Repository</span>
              </a>
              <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-indigo-400 transition-colors">
                <ExternalLink size={24} /> <span className="font-medium">Live Server</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Standard Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.github}
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVars}
              whileHover={{ y: -10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group flex flex-col justify-between p-5 sm:p-8 rounded-2xl border border-white/5 bg-[#161616] overflow-hidden hover:border-white/20 transition-all duration-500 relative shadow-none hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Bottom glowing border effect on hover */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              
              <div className="mb-12 sm:mb-24 z-10 relative">
                <span className="text-xs font-mono tracking-widest text-gray-500 uppercase">
                  {p.role}
                </span>
                <h4 className="text-2xl font-bold text-white mt-4 tracking-tight transition-transform duration-300 origin-left group-hover:scale-105">
                  {p.title}
                </h4>
              </div>

              <div className="z-10 relative flex flex-col gap-6">
                <p className="text-gray-400 font-light leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {p.tech.map((t, i) => (
                    <span key={i} className="text-xs text-gray-500 border border-white/5 px-2 py-1 rounded bg-[#1A1A1A]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reveal Hover Overlay Box */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
              <div className="absolute top-8 right-8 text-white/0 group-hover:text-white/80 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <GithubIcon size={24} />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
