export function About() {
  return (
    <section className="relative w-full bg-[#121212] py-16 px-6 lg:px-12 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 md:p-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            About
          </h3>
          <p className="text-gray-300 text-xl font-light leading-relaxed mb-6">
            I’m a first-year Computer Science student focused on building real-world applications.
          </p>
          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-4xl">
            I have experience in full stack development, AI-based systems, and data analysis. I enjoy building projects that solve real problems and go beyond tutorials, bridging the gap between theoretical computer science and production-ready engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
