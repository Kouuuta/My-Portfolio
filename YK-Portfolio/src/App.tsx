import React, { useEffect, useState } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ThemeToggle } from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavBar } from './components/NavBar';
import { LoadingScreen } from './components/LoadingScreen';
export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return <ThemeProvider>
      {loading ? <LoadingScreen /> : <div className="relative w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <AnimatedBackground />
          <div className="relative z-10">
            <NavBar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <ThemeToggle />
          </div>
        </div>}
    </ThemeProvider>;
}