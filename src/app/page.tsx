import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Overlay } from "@/components/Overlay";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen selection:bg-white/20">
      <ScrollyCanvas />
      <Overlay />
      
      {/* Post-scroll static layout flow */}
      <Projects />
      <About />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}
