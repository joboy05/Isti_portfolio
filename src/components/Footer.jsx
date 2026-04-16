import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-light dark:bg-brand-dark pt-40 pb-16 transition-colors duration-1000 border-t border-slate-100 dark:border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
      
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <img src="/logo_transparent.png" alt="ISTI Logo" className="h-24 md:h-32 w-auto mb-10 dark:invert transition-all duration-700 drop-shadow-sm dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
            <p className="text-2xl text-slate-500 dark:text-gray-400 max-w-sm mb-12 leading-relaxed font-light tracking-tight">
              Donner une âme à votre présence digitale à travers un design intentionnel et une stratégie humaine.
            </p>
            <div className="flex space-x-8">
              {[FaInstagram, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -8, scale: 1.2, color: '#6C4CF1' }}
                  className="text-3xl text-slate-400 dark:text-gray-600 transition-all"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 mb-12">L'essentiel</h4>
            <ul className="space-y-8">
              {['Accueil', 'Services', 'Portfolio', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '')}`} 
                    className="text-lg font-bold text-slate-700 dark:text-gray-200 hover:text-brand-purple transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400 mb-12">Lançons un projet</h4>
            <p className="text-2xl font-black mb-6 dark:text-white tracking-tighter">istidjabatouy@gmail.com</p>
            <p className="text-xl text-slate-500 dark:text-gray-400 leading-relaxed font-light mb-8">
              WhatsApp: +229 95 64 32 71<br />
              Remote & International
            </p>
            <div className="w-16 h-1 bg-brand-purple rounded-full" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-slate-100 dark:border-white/5">
          <p className="text-slate-400 dark:text-gray-600 text-xs font-medium mb-12 md:mb-0 uppercase tracking-widest">
            © {new Date().getFullYear()} ISTI Creative Studio. Tous droits réservés.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: '#6C4CF1', border: 'none' }}
            className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-gray-500 hover:text-white transition-all shadow-xl dark:shadow-none"
          >
            <FaArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
