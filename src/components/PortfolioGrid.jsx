import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import PortfolioCard from './PortfolioCard';
import { MdOutlineArrowForward, MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import TextReveal from './TextReveal';

const categories = ['Tous', 'Social Media', 'Miniatures/Affiches'];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'Tous' 
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const handleNext = () => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-40 bg-brand-light dark:bg-brand-dark transition-colors duration-1000">
      <div className="container mx-auto px-6">
        
        {/* Header with Monumental Typography */}
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-purple dark:text-brand-purple-light font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Portfolio — Galerie</span>
            <TextReveal 
              text="SÉLECTION DE PROJETS."
              variant="fade"
              className="text-6xl md:text-[5.5rem] lg:text-[8rem] font-black tracking-tighter text-[#1A1A1A] dark:text-white leading-[0.85]"
            />
          </motion.div>

          {/* Premium Filters */}
          <div className="flex flex-wrap gap-4 bg-slate-50 dark:bg-white/5 p-2 rounded-[2rem] border border-slate-100 dark:border-white/5 w-fit h-fit self-start lg:self-end">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  activeCategory === cat 
                  ? 'bg-brand-purple text-white shadow-xl shadow-brand-purple/20' 
                  : 'text-slate-500 dark:text-gray-500 hover:text-brand-purple'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <PortfolioCard 
                key={project.id} 
                project={project} 
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Premium Call to Action */}
        <div className="mt-40 pt-24 border-t border-slate-100 dark:border-white/5 flex flex-col items-center text-center">
            <h4 className="text-2xl md:text-3xl font-black mb-8 dark:text-white tracking-tighter">
              Envie de voir l'intégralité de mon travail ?
            </h4>
            <motion.a 
                href="https://facebook.com/IstiYR" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 py-5 px-10 border-2 border-brand-purple text-brand-purple rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-purple hover:text-white transition-all shadow-xl hover:shadow-brand-purple/20"
            >
                Découvrir sur Facebook <MdOutlineArrowForward className="text-xl" />
            </motion.a>
        </div>
      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 lg:p-24"
          >
            {/* Backdrop with Blur Texture */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-3xl"
            />
            
            <div className="absolute top-8 right-8 flex gap-4 z-50">
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <MdClose size={32} />
              </motion.button>
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-50">
              <motion.button 
                whileHover={{ x: -10, scale: 1.1 }}
                onClick={handlePrev}
                className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white pointer-events-auto backdrop-blur-xl hover:bg-white/10"
              >
                <MdChevronLeft size={48} />
              </motion.button>
              <motion.button 
                whileHover={{ x: 10, scale: 1.1 }}
                onClick={handleNext}
                className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white pointer-events-auto backdrop-blur-xl hover:bg-white/10"
              >
                <MdChevronRight size={48} />
              </motion.button>
            </div>

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-7xl h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 overflow-y-auto lg:overflow-hidden scrollbar-hide py-20 lg:py-0"
            >
              <div className="w-full lg:w-2/3 h-full flex items-center justify-center">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="max-w-full max-h-full object-contain rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/5"
                />
              </div>

              <div className="w-full lg:w-1/3 flex flex-col justify-center text-left">
                <div className="inline-block px-4 py-2 bg-brand-purple/20 rounded-full mb-8 w-fit">
                   <span className="text-brand-purple-light font-black tracking-[0.3em] uppercase text-[10px]">
                     {selectedProject.category}
                   </span>
                </div>
                
                <h3 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                  {selectedProject.title}
                </h3>
                
                <div className="h-1 w-20 bg-brand-purple/20 mb-10 rounded-full" />
                
                <p className="text-gray-400 text-2xl font-light leading-relaxed mb-12">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGrid;
