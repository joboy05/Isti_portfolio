import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';
import * as Icons from 'react-icons/md';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-8 text-center dark:text-white"
          >
            Mes Services <span className="text-brand-purple">Étoilés</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 text-lg"
          >
            De la stratégie à la création pure, je vous aide à briller sur tous les écrans.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = Icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 pb-12 rounded-3xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-brand-purple/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-brand-purple/10 text-brand-purple rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  {IconComponent ? <IconComponent /> : <Icons.MdOutlineAutoAwesome />}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="text-brand-purple font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  En savoir plus <Icons.MdArrowForward />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
