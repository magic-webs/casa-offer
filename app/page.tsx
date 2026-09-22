import Navbar from "./components/Navbar";
import FrameHero from "./components/FrameHero";
import Features from "./components/Features";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-amber-400 selection:text-stone-950">
        <Navbar />
        <FrameHero />
        <Features />
      </main>
    </SmoothScrollProvider>
  );
}
