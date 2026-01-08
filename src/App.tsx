import React from 'react';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SkillsAndEducation } from './components/SkillsAndEducation';
import { MouseEffect } from './components/MouseEffect';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <main className="bg-background text-white min-h-screen selection:bg-primary/30 relative overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="bg-grid-tech" />
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="tech-particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 10 + 10}s`
          }}
        />
      ))}
      <MouseEffect />
      <BackToTop />
      
      <Navbar />

      <Hero />
      <Advantages />
      <Experience />
      <Projects />
      <SkillsAndEducation />
      
      <footer className="py-8 bg-black text-center text-gray-600 text-sm border-t border-white/5 relative z-10">
        <p>© {new Date().getFullYear()} 彭志谭 Resume Portfolio. Built with React & Tailwind & Framer Motion.</p>
      </footer>
    </main>
  );
}

export default App;
