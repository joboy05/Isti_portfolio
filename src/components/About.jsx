import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutImg from '../assets/images/profile.jpeg';

const skills = [
  'Stratégie Social Media', 'Branding & Identité', 'Content Design', 'Direction Artistique',
  'Copywriting', 'SEO & Analytics', 'Meta Business Suite', 'IA Créative'
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section id="propos" className="py-40 bg-white dark:bg-brand-dark overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
          
          {/* Friendly Image Side (Natural/Relaxed) */}
          <motion.div 
            style={{ scale, opacity }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Split Reveal Animation Wrapper */}
            <div className="relative group">
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] perspective-1000"
              >
                <img 
                  src={aboutImg} 
                  alt="Isti - Moment naturel" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
              
              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-purple/10 rounded-[3.5rem] -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-700" />
              
              {/* Floating Caption */}
              <div className="absolute -bottom-8 left-12 bg-white dark:bg-brand-dark px-8 py-4 rounded-2xl shadow-2xl border border-slate-50 dark:border-white/10 hidden md:block z-20">
                <p className="text-sm italic font-medium text-slate-500">"L'authenticité est le socle de toute stratégie."</p>
              </div>
            </div>
          </motion.div>

          {/* Storytelling Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-2 bg-brand-purple/5 rounded-full mb-8">
              <span className="text-brand-purple font-black tracking-[0.3em] uppercase text-[10px]">L'Âme derrière le métier</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl mb-12 leading-[0.9] font-black tracking-tighter dark:text-white">
              CULTIVER <br />
              <span className="text-brand-purple italic">L'ENGAGEMENT.</span>
            </h2>
            
            <div className="space-y-8 text-slate-500 dark:text-slate-400 text-xl md:text-2xl leading-relaxed mb-16 font-light">
              <p>
                Ma mission est simple : transformer des présences numériques en véritables histoires qui résonnent.
              </p>
              <p className="font-medium text-slate-800 dark:text-slate-200">
                Spécialisée dans l'accompagnement des marques créatrices et des entrepreneurs audacieux, j'allie rigueur analytique et sensibilité esthétique pour élever chaque prise de parole.
              </p>
            </div>

            {/* Micro-Interaction Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  whileHover={{ y: -5, backgroundColor: '#8b5cf6', color: '#fff' }}
                  className="px-4 py-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl text-[10px] font-black tracking-widest uppercase flex items-center justify-center text-center cursor-default transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
