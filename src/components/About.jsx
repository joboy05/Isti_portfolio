import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Photoshop', 'Illustrator', 'Premiere Pro', 'Canva', 
  'CapCut', 'Notion', 'Meta Business Suite', 'Stratégie Sociale'
];

const About = () => {
  return (
    <section id="propos" className="py-24 bg-white dark:bg-brand-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Visual Placeholder for About */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-purple/5 dark:bg-white/5 rounded-[40px] p-12 aspect-square flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
            <div className="relative text-center">
              <span className="text-8xl font-bold text-brand-purple/20 dark:text-white/10 font-display italic leading-none">Creative</span>
              <p className="text-2xl font-display font-medium text-brand-dark dark:text-white mt-[-20px]">Depuis 2018</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight dark:text-white">
              L'humain au cœur de <span className="text-brand-purple">votre identité digitale</span>
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-12">
              <p>
                Passionnée par l'intersection entre l'art et la communication, j'aide les entrepreneurs et les marques à raconter leur histoire de manière authentique et esthétique.
              </p>
              <p>
                Ma philosophie est simple : chaque pixel et chaque post doit avoir une intention. Mon rôle est de transformer cette intention en résultats concrets, tout en préservant l'ADN de votre marque.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 font-body">Compétences Techniques</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                  <span key={skill} className="px-5 py-2 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-full text-sm font-medium hover:border-brand-purple/30 dark:hover:border-brand-purple/50 hover:text-brand-purple transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
