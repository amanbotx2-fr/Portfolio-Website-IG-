import { ArrowUpRight, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.3 6-1.5 6-6.76a5.2 5.2 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5 5 0 0 0-.1 3.7 5.2 5.2 0 0 0-1.5 3.8c0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
    <path d="M9 18c-4.5 1.5-5-2-7-2"></path>
  </svg>
);

export function Projects() {
  const featuredProject = {
    title: "Hacknex",
    role: "Featured Project",
    desc: "Real-time Discord bot tracking hackathons from Devfolio, Unstop, MLH. Built with Node.js and discord.js using cron jobs and deployed on Railway. Includes data normalization and deduplication system, running live in real Discord servers.",
    github: "https://github.com/amanbotx2-fr/Hacknex-Bot",
    live: "https://hacknex-discord-bot.vercel.app/"
  };

  const projects = [
    {
      title: "Habit Tracker",
      role: "Full Stack",
      desc: "Full-stack web application for tracking daily habits. Built with Node.js, Express, JavaScript, including authentication and CRUD operations.",
      github: "https://github.com/amanbotx2-fr/habit-tracker-fullStack-Project",
    },
    {
      title: "Smart Parking AI",
      role: "AI / Data",
      desc: "AI-based parking system using YOLOv8 and OpenCV. Real-time vehicle detection, parking slot mapping, dashboard, and booking logic built during a hackathon.",
      github: "https://github.com/amanbotx2-fr",
    },
    {
      title: "Pomodoro Timer",
      role: "iOS App",
      desc: "Built with SwiftUI. Custom timer engine with state management, featuring notifications and modular UI components.",
      github: "https://github.com/amanbotx2-fr/Pomodoro-App",
    },
    {
      title: "IPL Data Analysis",
      role: "Data Science",
      desc: "Data analysis project using Python. Performed EDA on IPL datasets and extracted insights on team and player performance.",
      github: "https://github.com/amanbotx2-fr/IPL-Data-Analysis-Match-Insights",
    },
    {
      title: "AI Chatbot",
      role: "Python",
      desc: "Built a conversational AI chatbot handling user input and generating responses using underlying NLP concepts.",
      github: "https://github.com/amanbotx2-fr/AI-ChatBotpy",
    },
    {
      title: "Pokémon Weather App",
      role: "Frontend",
      desc: "Weather-based app with dynamic Pokémon UI. Uses a weather API for real-time data with responsive design and conditional rendering.",
      github: "https://github.com/amanbotx2-fr/Pokemon-Weather-app",
    },
  ];

  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 lg:px-12 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Transforming Ideas into Real Systems
          </h3>
          <p className="text-gray-400 text-lg max-w-xl">
            A collection of production-ready applications, AI models, and real-world solutions I've built.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-8 group relative flex flex-col md:flex-row justify-between p-8 md:p-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5">
          <div className="mb-8 md:mb-0 md:max-w-2xl">
            <span className="text-sm font-mono tracking-widest text-[#a1a1a1] uppercase">
              {featuredProject.role}
            </span>
            <h4 className="text-3xl md:text-5xl font-semibold text-white mt-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
              {featuredProject.title}
            </h4>
            <p className="text-gray-300 font-light leading-relaxed mt-6 text-lg">
              {featuredProject.desc}
            </p>
            <div className="flex gap-4 mt-8 relative z-20 pointer-events-auto">
              <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer p-2 -ml-2 rounded hover:bg-white/5">
                <GithubIcon size={20} /> Source Code
              </a>
              <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer p-2 rounded hover:bg-white/5">
                <ExternalLink size={20} /> Live Preview
              </a>
            </div>
          </div>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <ArrowUpRight className="text-white w-6 h-6" />
              </div>
              <div className="mb-12 z-10">
                <span className="text-sm font-mono tracking-widest text-[#a1a1a1] uppercase">
                  {p.role}
                </span>
                <h4 className="text-2xl font-semibold text-white mt-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                  {p.title}
                </h4>
              </div>
              <p className="text-gray-400 font-light leading-relaxed z-10">
                {p.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
