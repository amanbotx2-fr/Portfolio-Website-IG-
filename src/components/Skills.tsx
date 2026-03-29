"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import {
  SiJavascript, SiPython, SiCplusplus, SiSwift, SiGo, SiDart,
  SiHtml5, SiReact, SiNextdotjs, SiFramer, SiTailwindcss,
  SiNodedotjs, SiExpress,
  SiOpencv, SiPandas,
  SiGit, SiRailway, SiVercel, SiLinux, SiDocker
} from "react-icons/si";
import { TbApi, TbBrandSocketIo } from "react-icons/tb";
import { VscRobot } from "react-icons/vsc";
import { BsBraces, BsClock } from "react-icons/bs";

const iconMap: Record<string, ReactNode> = {
  // Languages
  "JavaScript":       <SiJavascript className="text-yellow-400/80" />,
  "Python":           <SiPython className="text-blue-400/80" />,
  "C++":              <SiCplusplus className="text-blue-300/80" />,
  "Swift":            <SiSwift className="text-orange-400/80" />,
  "Go":               <SiGo className="text-cyan-400/80" />,
  "Dart":             <SiDart className="text-sky-400/80" />,
  // Frontend
  "HTML/CSS":         <SiHtml5 className="text-orange-400/80" />,
  "React":            <SiReact className="text-cyan-400/80" />,
  "Next.js":          <SiNextdotjs className="text-gray-300/80" />,
  "Framer Motion":    <SiFramer className="text-gray-300/80" />,
  "Tailwind":         <SiTailwindcss className="text-cyan-400/80" />,
  // Backend
  "Node.js":          <SiNodedotjs className="text-green-400/80" />,
  "Express.js":       <SiExpress className="text-gray-300/80" />,
  "REST APIs":        <TbApi className="text-gray-300/80" />,
  "WebSocket":        <TbBrandSocketIo className="text-gray-300/80" />,
  // AI & Data
  "YOLOv8":           <VscRobot className="text-purple-400/80" />,
  "OpenCV":           <SiOpencv className="text-green-400/80" />,
  "Pandas":           <SiPandas className="text-blue-300/80" />,
  "LLM APIs":         <VscRobot className="text-indigo-400/80" />,
  "Python Ecosystem": <BsBraces className="text-yellow-300/80" />,
  // DevOps / Tools
  "Git":              <SiGit className="text-orange-400/80" />,
  "Railway":          <SiRailway className="text-gray-300/80" />,
  "Vercel":           <SiVercel className="text-gray-300/80" />,
  "Linux":            <SiLinux className="text-yellow-300/80" />,
  "cron":             <BsClock className="text-gray-300/80" />,
  "Docker":           <SiDocker className="text-blue-400/80" />,
};

export function Skills() {
  const categories = [
    { name: "Languages", skills: ["JavaScript", "Python", "C++", "Swift", "Go", "Dart"] },
    { name: "Frontend", skills: ["HTML/CSS", "React", "Next.js", "Framer Motion", "Tailwind"] },
    { name: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "WebSocket"] },
    { name: "AI & Data", skills: ["YOLOv8", "OpenCV", "Pandas", "LLM APIs", "Python Ecosystem"] },
    { name: "DevOps / Tools", skills: ["Git", "Railway", "Vercel", "Linux", "cron", "Docker"] }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, duration: 0.5 } 
    }
  };

  const pillVars = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } as any }
  };

  return (
    <section className="relative w-full bg-[#121212] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white mb-4 sm:mb-6 uppercase"
          >
            What I Work With
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 font-light max-w-2xl mx-auto text-base sm:text-lg md:text-xl"
          >
            A stack shaped by building, breaking, and fixing real projects
          </motion.p>
        </div>
        
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-16">
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#161616] border border-white/5 backdrop-blur-xl group hover:shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)] transition-shadow duration-700"
            >
              <h4 className="text-sm font-black tracking-[0.2em] text-gray-500 uppercase mb-5 sm:mb-8 border-l-2 border-indigo-500 pl-4 py-1">
                {cat.name}
              </h4>
              
              <motion.div 
                variants={containerVars}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-3"
              >
                {cat.skills.map((skill, j) => (
                  <motion.div
                    key={j} 
                    variants={pillVars}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)", zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="cursor-pointer px-3 sm:px-5 py-2 sm:py-3 bg-[#1A1A1A] border border-white/10 rounded-xl text-xs sm:text-sm font-medium text-gray-300 shadow-xl shadow-black/40 hover:text-white flex items-center gap-2"
                  >
                    {iconMap[skill] && <span className="text-base shrink-0">{iconMap[skill]}</span>}
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
