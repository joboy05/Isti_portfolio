import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import profileImg from '../assets/images/profile1.png';

const roles = [
  "Social Media Manager",
  "Product Designer",
  "Stratège Digitale",
  "Créatrice de Contenu"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-light dark:bg-brand-dark transition-colors duration-500">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px] dark:opacity-20" 
        />
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-coral/10 rounded-full blur-[120px] dark:opacity-20" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Interaction Layer (Image behind text) */}
        <div className="order-2 md:order-2 w-full md:w-1/2 relative flex justify-center items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-0 group"
          >
            {/* Parallax Image Wrapper */}
            <motion.div 
              style={{ y: useTransform(scrollY, [0, 500], [0, 50]) }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src={profileImg} 
                alt="Isti - Créatrice de Contenu" 
                className="w-full max-w-[600px] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_40px_80px_rgba(139,92,246,0.1)] transition-all duration-700"
              />
              
              {/* Floating Status Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] -right-10 bg-white dark:bg-brand-dark p-6 shadow-2xl rounded-2xl border border-slate-50 dark:border-white/10 hidden xl:block z-20 backdrop-blur-xl bg-white/80"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Disponible</p>
                </div>
                <p className="text-xl font-black mt-2 dark:text-white tracking-tighter">Nouvelle Mission</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Text Content (Positioned to interact with arm) */}
        <div className="order-1 md:order-1 w-full md:w-1/2 z-10 md:-mr-40 lg:-mr-60">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-purple font-black tracking-[0.4em] uppercase text-xs mb-8 block bg-brand-purple/5 w-fit px-4 py-1.5 rounded-full">
              Digital Curator & Storyteller
            </span>
            
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] mb-10 leading-[0.8] font-display font-black tracking-tighter dark:text-white mix-blend-multiply dark:mix-blend-normal">
              JE SUIS <br />
              <span className="text-brand-purple inline-block relative overflow-hidden h-[1.1em]">
                ISTI
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-0 left-0 w-full h-[15%] bg-gradient-to-r from-transparent via-brand-coral/30 to-transparent -skew-x-12"
                />
              </span>
              <span className="text-brand-coral">.</span>
            </h1>

            <div className="flex items-center gap-8 mb-16">
              <div className="h-px w-20 bg-brand-purple/20" />
              <div className="h-10 overflow-hidden relative w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 text-2xl md:text-4xl text-slate-400 dark:text-slate-500 italic font-medium tracking-tight"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 items-center">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio" 
                className="btn-primary !px-12 !py-5 text-lg"
              >
                Découvrir mon univers
              </motion.a>
              <div className="flex space-x-6">
                {[FaInstagram, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    whileHover={{ y: -5, scale: 1.2, color: '#8b5cf6' }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-slate-400 dark:text-slate-600 hover:text-brand-purple dark:hover:text-brand-purple transition-all"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Hero Interaction: Arm Position Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-px h-12 bg-gradient-to-t from-brand-purple to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] font-black">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
