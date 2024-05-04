import Experience from "./experience/Experience";
import HeroSection from "./herosection/HeroSection";
import Expertise from "./expertise/Expertise";

export default function Home() {
  return (
    <main className="text-white max-w-[70%] m-auto">
      <HeroSection />
      <Expertise />
      <Experience />
    </main>
  );
}
