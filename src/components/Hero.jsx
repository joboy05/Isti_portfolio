import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import profileImg from '../assets/images/profile1.png';

const roles = [
  "Gestion réseaux sociaux",
  "Identité visuelle",
  "Stratégie digitale",
  "Création de contenu"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-light dark:bg-brand-dark transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-coral/5 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Layer */}
        <div className="w-full md:w-3/5 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-purple font-semibold tracking-widest uppercase text-xs mb-4 block">
              Disponible pour de nouveaux projets
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.9] dark:text-white font-display font-black tracking-tighter">
              JE SUIS <br />
              <span className="text-brand-purple inline-block">ISTI</span>
              <span className="text-brand-purple italic">.</span>
            </h1>

            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-12 bg-brand-purple/30" />
              <div className="h-8 overflow-hidden relative w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 text-xl md:text-2xl text-slate-400 dark:text-slate-500 italic font-medium"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-md mb-8 leading-relaxed font-light">
              L'excellence digitale au service de votre image de marque.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#portfolio" className="btn-primary">
                Mes Travaux
              </a>
              <div className="flex space-x-4 ml-4">
                {[FaInstagram, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    whileHover={{ y: -3, color: '#8b5cf6' }}
                    className="text-xl text-slate-400 hover:text-brand-purple transition-all"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interaction Layer (Image) */}
        <div className="w-full md:w-2/5 relative mt-12 md:mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20 md:absolute md:-left-20 lg:-left-40 bottom-[-5vh] md:bottom-[-10vh] lg:bottom-[-20vh] w-full max-w-[550px] md:w-[150%] lg:w-[180%]"
          >
            {/* The photo of Isti, positioned to "touch" the text on the left */}
            <img 
              src={profileImg} 
              alt="Isti - Créatrice de Contenu" 
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] pointer-events-none"
            />
            
            {/* Floating Detail */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute top-1/2 -right-10 bg-white dark:bg-brand-dark p-4 shadow-xl rounded-2xl border border-slate-50 dark:border-white/10 hidden xl:block z-30 transform -rotate-3"
            >
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1 font-display">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-slate-800 dark:text-white font-bold text-sm">Open for Work</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
