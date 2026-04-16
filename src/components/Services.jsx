import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';
import * as Icons from 'react-icons/md';
import TextReveal from './TextReveal';

const Services = () => {
  return (
    <section id="services" className="py-40 bg-brand-light dark:bg-brand-dark transition-colors duration-1000 overflow-visible relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-purple dark:text-brand-purple-light font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Expertise — Métiers</span>
            <TextReveal 
              text="MES SERVICES SUR-MESURE."
              variant="left"
              className="text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-black tracking-tighter text-[#1A1A1A] dark:text-white leading-[0.85]"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.4 } }}
                className="premium-card p-12 group transition-all duration-700 hover:shadow-glow-strong"
              >
                <div className="w-20 h-20 bg-brand-purple/5 dark:bg-white/5 text-brand-purple rounded-3xl flex items-center justify-center text-4xl mb-10 group-hover:bg-brand-purple group-hover:text-white transition-all duration-500">
                  {IconComponent ? <IconComponent /> : <Icons.MdOutlineAutoAwesome />}
                </div>
                <h3 className="text-3xl font-black mb-6 text-slate-800 dark:text-white tracking-tighter">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 font-light">
                  {service.description}
                </p>
                <motion.a 
                  href="#contact" 
                  whileHover={{ x: 10 }}
                  className="text-brand-purple dark:text-brand-purple-light font-black text-xs uppercase tracking-widest flex items-center gap-4 group/btn"
                >
                  Démarrer un projet 
                  <Icons.MdArrowForward className="text-xl transition-transform group-hover/btn:translate-x-2" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
