import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen selection:bg-white/20">
      <Navbar />
      
      <div id="home">
        <ScrollyCanvas />
        <Overlay />
      </div>
      
      {/* Post-scroll static layout flow */}
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
