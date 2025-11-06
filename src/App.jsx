import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_50%)]"
        aria-hidden
      />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Alex — Full‑Stack Developer. Built with React and love.</p>
      </footer>
    </div>
  );
}

export default App;
