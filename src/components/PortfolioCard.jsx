import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineArrowOutward } from 'react-icons/md';

const PortfolioCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-white/5 aspect-square md:aspect-[4/5] lg:aspect-square"
    >
      {/* Image */}
      <img
        src={project.image.replace('.webp', '.png')}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-2 mb-3">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm line-clamp-2 mb-4">
            {project.description}
          </p>
          <button className="flex items-center gap-2 text-brand-purple font-bold text-sm bg-white px-4 py-2 rounded-full hover:bg-brand-purple hover:text-white transition-all">
            Voir le projet <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
