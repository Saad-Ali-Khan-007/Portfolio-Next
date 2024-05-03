import Experience from "./experience/Experience";
import HeroSection from "./herosection/HeroSection";

export default function Home() {
  return (
    <main className="text-white max-w-[70%] m-auto">
      <HeroSection />
      <Experience />
    </main>
  );
}
