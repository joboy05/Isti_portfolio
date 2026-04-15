import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import PortfolioCard from './PortfolioCard';

const categories = ['Tous', 'Design', 'Social Media', 'Miniatures/Affiches'];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = activeCategory === 'Tous' 
    ? projects.slice(0, 5)
    : projects.slice(0, 5).filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-brand-light dark:bg-brand-dark/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl mb-4 dark:text-white"
            >
              Sélection de <span className="text-brand-purple">Projets</span>
            </motion.h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md">
              Un aperçu de mon univers créatif à travers des collaborations variées.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/30' 
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-4">Envie d'en voir plus ?</p>
          <a 
            href="https://facebook.com/IstiYR" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-brand-purple hover:underline"
          >
            Découvrir mon Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
