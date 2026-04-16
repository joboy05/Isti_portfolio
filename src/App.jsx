import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PortfolioGrid from './components/PortfolioGrid';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark'; // Still respects saved preference, but default is light if not set
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <main className="antialiased text-slate-900 dark:text-slate-100 overflow-x-hidden min-h-screen transition-colors duration-1000 bg-brand-light dark:bg-brand-dark">
      <GlobalBackground darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Services />
      <PortfolioGrid />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
