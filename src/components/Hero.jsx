import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import profileImg from '../assets/images/profile.jpeg';

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

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-purple font-semibold tracking-widest uppercase text-sm mb-4 block">
              Disponible pour de nouveaux projets
            </span>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight dark:text-white">
              Je suis <span className="text-brand-purple font-extrabold uppercase tracking-tighter">Isti</span>, <br />
              <div className="h-[1.2em] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 text-slate-400 dark:text-slate-500 italic font-medium"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              J'accompagne les marques audacieuses dans la création de leur identité et le rayonnement de leur présence digitale.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#portfolio" className="btn-primary">
                Voir mes travaux
              </a>
              <div className="flex space-x-4 ml-4">
                <a href="#" className="p-3 bg-white dark:bg-white/10 shadow-sm hover:shadow-md rounded-full text-slate-600 dark:text-slate-400 hover:text-brand-purple dark:hover:text-white transition-all">
                  <FaInstagram />
                </a>
                <a href="#" className="p-3 bg-white dark:bg-white/10 shadow-sm hover:shadow-md rounded-full text-slate-600 dark:text-slate-400 hover:text-brand-purple dark:hover:text-white transition-all">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="p-3 bg-white dark:bg-white/10 shadow-sm hover:shadow-md rounded-full text-slate-600 dark:text-slate-400 hover:text-brand-purple dark:hover:text-white transition-all">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-brand-purple/20 rounded-2xl -rotate-3 z-0" />
            
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl max-w-[450px]">
              <img 
                src={profileImg} 
                alt="Isti - Créatrice de Contenu" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-brand-dark p-4 shadow-xl rounded-xl z-20 hidden lg:block border border-transparent dark:border-white/10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-1">Expertise</p>
              <p className="text-slate-800 dark:text-white font-display font-bold">Social Media & Design</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
