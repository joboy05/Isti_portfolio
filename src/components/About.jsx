import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import aboutImg from '../assets/images/profile.jpeg';
import TextReveal from './TextReveal';

const skills = [
  'Stratégie Social Media', 'Branding & Identité', 'Content Design', 'Direction Artistique',
  'Copywriting', 'SEO & Analytics', 'Meta Business Suite', 'IA Créative'
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section id="propos" className="py-40 bg-white dark:bg-brand-dark overflow-hidden transition-colors duration-1000">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-24 lg:gap-32 pt-12">
          
          {/* Natural Image Side (Friendly/Relaxed) */}
          <motion.div 
            style={{ scale, opacity }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative group">
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: -2, scale: 1.02 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-[4rem] overflow-hidden shadow-premium perspective-1000"
              >
                <img 
                  src={aboutImg} 
                  alt="Istidjabatou Yarou - Moment naturel" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
              
              {/* Floating Signature Detail */}
              <div className="absolute -bottom-10 left-10 bg-white dark:bg-brand-dark/80 backdrop-blur-2xl px-10 py-6 rounded-[2rem] shadow-2xl border border-slate-50 dark:border-white/10 hidden md:block z-20">
                <p className="text-xl italic font-display font-medium text-slate-500 dark:text-brand-purple-light select-none">istidjabatou yarou.</p>
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
              <span className="text-brand-purple dark:text-brand-purple-light font-black tracking-[0.4em] uppercase text-[10px]">Manifeste — ADN</span>
            </div>
            
            <TextReveal 
              text="CULTIVER L'ENGAGEMENT." 
              variant="right"
              className="text-6xl md:text-7xl lg:text-[7rem] mb-12 font-black tracking-tighter dark:text-white leading-[0.85]"
            />
            
            <div className="space-y-10 text-slate-500 dark:text-gray-400 text-2xl leading-relaxed mb-20 font-light">
              <p>
                Je ne crée pas seulement du contenu, je construis des <span className="text-slate-900 dark:text-white font-bold">ponts émotionnels</span> entre votre marque et son audience.
              </p>
              <p>
                Passionnée par la narration visuelle et la stratégie de croissance, j'allie esthétique haut de gamme et rigueur analytique pour transformer chaque interaction en une opportunité de connexion réelle.
              </p>
            </div>

            {/* Premium Skills Cloud */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="flex flex-wrap gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5, backgroundColor: '#9333ea', color: '#fff' }}
                  className="px-6 py-4 bg-slate-50 dark:bg-brand-card border border-slate-100 dark:border-white/5 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase cursor-default transition-all duration-300 dark:text-gray-400 hover:dark:text-white"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
