import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-background font-gilroy">
      <div className="flex max-w-[64rem] w-full mx-auto flex-col items-center px-4 md:px-0">
        <Navbar />
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
