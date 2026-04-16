import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineArrowOutward, MdZoomIn } from 'react-icons/md';

const PortfolioCard = ({ project, onOpen }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col cursor-pointer"
      onClick={() => onOpen(project)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-white/5 aspect-[4/5] border border-slate-100 dark:border-white/5 mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Visualise Overlay on Hover */}
        <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <motion.div 
               whileHover={{ scale: 1.1 }}
               className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-3xl border border-white/30 flex items-center justify-center text-white shadow-2xl"
            >
                <MdZoomIn size={40} />
            </motion.div>
        </div>
        
        {/* Subtle Icon on Corner */}
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-100 transition-all duration-500">
          <MdOutlineArrowOutward size={24} />
        </div>
      </div>

      {/* Persistent Project Info */}
      <div className="px-2">
        <div className="flex gap-2 mb-4">
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-purple bg-brand-purple/5 dark:bg-white/5 dark:text-gray-400 px-3 py-1 rounded-full border border-brand-purple/10 dark:border-white/5">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-3xl font-black text-slate-800 dark:text-white mb-3 tracking-tighter leading-tight">
          {project.title}
        </h3>
        
        <p className="text-slate-500 dark:text-gray-400 text-lg font-light leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
