import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-light dark:bg-brand-dark pt-32 pb-16 transition-colors duration-500 border-t border-slate-100 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <img src="/logo_transparent.png" alt="ISTI Logo" className="h-12 w-auto mb-8 dark:invert" />
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-sm mb-10 leading-relaxed font-light">
              Donner une âme à votre présence digitale à travers un design intentionnel et une stratégie humaine.
            </p>
            <div className="flex space-x-6">
              {[FaInstagram, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -5, color: '#8b5cf6' }}
                  className="text-2xl text-slate-400 dark:text-slate-600 transition-all"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 mb-10">Navigation</h4>
            <ul className="space-y-6">
              {['Accueil', 'Services', 'Portfolio', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`} 
                    className="text-lg font-bold text-slate-700 dark:text-slate-200 hover:text-brand-purple transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 mb-10">Lançons un projet</h4>
            <p className="text-xl font-bold mb-4 dark:text-white">hello@isti.pro</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Basée à Lyon.<br />
              Disponible dans le monde entier en version remote.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-slate-100 dark:border-white/5">
          <p className="text-slate-400 text-xs font-medium mb-8 md:mb-0">
            © {new Date().getFullYear()} ISTI Creative Studio. Tous droits réservés.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: '#8b5cf6', color: '#fff' }}
            className="w-14 h-14 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 transition-all shadow-xl"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
