import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon, FiGlobe } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('FR');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'À propos', href: '#propos' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-purple z-[110] origin-left"
        style={{ scaleX }}
      />
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] px-4 md:px-8 xl:px-16 transition-all duration-500 pointer-events-none ${
          isScrolled ? 'pt-4' : 'pt-6 md:pt-8'
        }`}
      >
        <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto">
          
          {/* 1. Logo Section (Left) */}
          <motion.a 
            href="#accueil"
            whileHover={{ scale: 1.05 }}
            className="pointer-events-auto flex-shrink-0 flex items-center"
          >
            <img 
              src="/logo_transparent.png" 
              alt="ISTI" 
              className="h-10 md:h-14 w-auto transition-all duration-300" 
            />
          </motion.a>

          {/* 2. Center Pill (Navigation Links) */}
          <div className={`hidden md:flex items-center backdrop-blur-2xl border transition-all duration-500 rounded-full px-8 py-3.5 pointer-events-auto ${
            isScrolled 
              ? 'bg-white/80 dark:bg-brand-dark/80 border-slate-200 dark:border-white/10 shadow-lg' 
              : 'bg-white/40 dark:bg-white/5 border-transparent dark:border-white/5 shadow-sm'
          }`}>
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="group relative text-[13px] font-bold text-slate-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-white transition-all duration-300"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Right Controls Section */}
          <div className="flex items-center gap-3 pointer-events-auto">
            
            {/* Controls Pill (Lang & Theme) */}
            <div className="hidden md:flex items-center bg-[#EDF2F7] dark:bg-white/10 backdrop-blur-xl border border-transparent dark:border-white/5 rounded-full px-5 py-3 shadow-sm gap-5">
              
              {/* Language Toggle with Globe Icon */}
              <button 
                onClick={() => setActiveLang(activeLang === 'FR' ? 'EN' : 'FR')}
                className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-white transition-colors text-[13px] font-bold"
              >
                <FiGlobe size={18} />
                <span>{activeLang}</span>
              </button>

              {/* Separator */}
              <div className="w-[1px] h-4 bg-slate-300 dark:bg-white/20"></div>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className="text-slate-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-white transition-colors"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>
            </div>

            {/* CTA Button (Standalone Pill) */}
            <motion.a
              href="https://wa.me/22995643271?text=Bonjour%20Istidjabatou%2C%20je%20souhaite%20discuter%20d'un%20projet%20avec%20vous%20!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex bg-brand-purple hover:bg-brand-purple-light text-white rounded-full px-6 py-3 text-[13px] font-bold shadow-lg shadow-brand-purple/30 transition-all items-center"
            >
              Discutons
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-brand-dark dark:text-white bg-[#EDF2F7] dark:bg-white/10 p-2.5 rounded-full backdrop-blur-xl pointer-events-auto ml-2"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[88px] left-1/2 -translate-x-1/2 w-[92%] bg-white/95 dark:bg-[#0B0F1A]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-2xl z-[90] md:hidden"
          >
            <ul className="space-y-6 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl font-bold text-slate-800 dark:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              
              {/* Mobile Language, Theme & CTA */}
              <li className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex flex-col items-center gap-6">
                <div className="flex items-center gap-8 text-sm font-bold text-slate-500 dark:text-gray-300">
                  <button 
                    onClick={() => { setActiveLang(activeLang === 'FR' ? 'EN' : 'FR'); setIsMenuOpen(false); }}
                    className="flex items-center gap-2 hover:text-brand-purple"
                  >
                    <FiGlobe size={20} />
                    {activeLang}
                  </button>

                  <div className="w-[1px] h-6 bg-slate-200 dark:bg-white/10"></div>

                  <button 
                    onClick={() => { toggleDarkMode(); setIsMenuOpen(false); }}
                    className="flex items-center gap-2 hover:text-brand-purple"
                  >
                    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    {darkMode ? 'Mode Clair' : 'Mode Sombre'}
                  </button>
                </div>
                
                <a 
                  href="https://wa.me/22995643271?text=Bonjour%20Istidjabatou%2C%20je%20souhaite%20discuter%20d'un%20projet%20avec%20vous%20!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block w-full py-4 bg-brand-purple text-white hover:bg-brand-purple-light rounded-full text-center font-bold transition-colors"
                >
                  Discutons
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
