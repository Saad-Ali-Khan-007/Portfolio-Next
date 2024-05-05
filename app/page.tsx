import Experience from "./experience/Experience";
import HeroSection from "./herosection/HeroSection";
import Expertise from "./expertise/Expertise";
import Projects from "./projects/Projects";

export default function Home() {
  return (
    <main className="text-white max-w-[90%] lg:max-w-[70%] m-auto">
      <HeroSection />
      <Expertise />
      <Projects />
      <Experience />
    </main>
  );
}
