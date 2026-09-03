import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

export default function App() {
  const [theme] = useState('dark');

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="bg-transparent text-white min-h-screen transition-colors duration-150">
        <Navbar theme={theme} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Achievements />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
