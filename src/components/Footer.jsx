import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Big Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tighter mb-4">
              PRÊT À <span className="text-brand-purple italic">BRILLER ?</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl">
              Donnons vie à votre prochain grand projet.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-brand-purple hover:border-brand-purple transition-all duration-500"
          >
            <FaArrowUp />
          </motion.button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 border-t border-white/5 pt-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-3xl font-display font-bold text-white tracking-tighter">
              ISTI<span className="text-brand-coral">.</span>
            </div>
            <p className="text-slate-500 leading-relaxed max-w-xs">
              Créatrice de contenus digitaux & graphiste passionnée par les marques qui osent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-purple hover:text-white transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-purple hover:text-white transition-all">
                <FaLinkedinIn />
              </a>
              <a href="https://facebook.com/IstiYR" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-purple hover:text-white transition-all">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#accueil" className="hover:text-brand-purple transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-brand-purple transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-purple transition-colors">Portfolio</a></li>
              <li><a href="#propos" className="hover:text-brand-purple transition-colors">À propos</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Services</h4>
            <ul className="space-y-4 text-slate-500">
              <li>Social Media Management</li>
              <li>Identité Visuelle</li>
              <li>Création de Contenu</li>
              <li>Stratégie Digitale</li>
            </ul>
          </div>

          {/* Contact Fast */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8">Contact</h4>
            <div className="space-y-4 text-slate-500">
              <p>hello@isti-creative.com</p>
              <p>Lyon, France</p>
              <p className="pt-4 text-brand-purple font-bold italic">Ouvert aux projets remote.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-slate-600 text-xs uppercase tracking-widest font-medium">
          <p>© {new Date().getFullYear()} Isti Creative Studio. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
