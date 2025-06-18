import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MarqueeSection from "./components/MarqueeSection";
import TopBar from "./components/TopBar";
import SmokeBackground from "./components/SmokeBackground";

export function App() {
  return (
    <div className="text-white min-h-screen relative">
      <SmokeBackground />
      <TopBar />
      <Navbar />
      <main className="overflow-hidden relative z-10">
        <Hero />
        <MarqueeSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
