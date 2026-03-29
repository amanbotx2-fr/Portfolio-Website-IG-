export function Skills() {
  const categories = [
    { name: "Languages", skills: ["JavaScript", "Python", "C++", "Swift (basic)", "Go (basic)", "Dart (basic)"] },
    { name: "Frontend", skills: ["HTML/CSS", "JavaScript", "Responsive Design", "UI/UX"] },
    { name: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
    { name: "AI / Data", skills: ["YOLOv8", "OpenCV", "Pandas", "Data Analysis", "Prompt Engineering"] },
    { name: "Tools", skills: ["Git / GitHub", "VS Code", "Xcode", "Railway", "Vercel", "Figma"] }
  ];

  return (
    <section className="relative w-full bg-[#121212] py-16 px-6 lg:px-12 z-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-12">
          Technical Arsenal
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h4 className="text-xl font-mono tracking-widest text-[#a1a1a1] uppercase mb-6 border-b border-white/10 pb-4">
                {cat.name}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <li 
                    key={j} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 pointer-events-none"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
