import { Trophy, Medal } from "lucide-react";

export function Achievements() {
  const certifications = [
    "IBM Python for Data Science, AI & Development",
    "Data Science Course – CodeWithHarry",
    "Deloitte Data Analytics Job Simulation"
  ];

  const achievements = [
    "Top 4 Finalist – Bug Bounty, Innov8 Tech Fest 2025",
    "Participant – Hack Arya Verse 2.0 Hackathon"
  ];

  return (
    <section className="relative w-full bg-[#121212] py-16 px-6 lg:px-12 z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Certifications Block */}
        <div className="p-8 md:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <h4 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white mb-8 border-b border-white/10 pb-4">
            <Medal size={28} className="text-gray-400" /> Certifications
          </h4>
          <ul className="space-y-6">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 w-2 h-2 rounded-full bg-gray-500 block shrink-0" />
                <span className="text-gray-300 text-lg leading-relaxed">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements Block */}
        <div className="p-8 md:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <h4 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white mb-8 border-b border-white/10 pb-4">
            <Trophy size={28} className="text-gray-400" /> Achievements
          </h4>
          <ul className="space-y-6">
            {achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 w-2 h-2 rounded-full bg-gray-500 block shrink-0" />
                <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}
