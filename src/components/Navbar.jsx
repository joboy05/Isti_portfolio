import React, { useState, useEffect } from 'react';
import { MdOutlineChat, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect pt-4 pb-4' : 'bg-transparent pt-6 pb-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo_transparent.png" alt="ISTI Logo" className="h-10 w-auto dark:invert transition-all" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium dark:text-slate-300">
          <a href="#accueil" className="hover:text-brand-purple dark:hover:text-white transition-colors">Accueil</a>
          <a href="#services" className="hover:text-brand-purple dark:hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-brand-purple dark:hover:text-white transition-colors">Portfolio</a>
          <a href="#propos" className="hover:text-brand-purple dark:hover:text-white transition-colors">À propos</a>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-white hover:scale-110 transition-transform cursor-pointer"
          >
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>

          <a href="#contact" className="hover:text-brand-purple transition-colors text-brand-purple border border-brand-purple/20 px-4 py-2 rounded-full hover:bg-brand-purple/5 transition-all">Contact</a>
        </div>

        {/* CTA Button */}
        <button className="btn-primary flex items-center gap-2 text-sm scale-90 md:scale-100">
          <MdOutlineChat className="text-lg" />
          <span>Discutons</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
