import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlobalBackground = ({ darkMode }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate scattered particles
    const particleArray = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage vw
      y: Math.random() * 100, // percentage vh
      size: Math.random() * 4 + 1, // size in px
      duration: Math.random() * 30 + 15, // float duration
      delay: Math.random() * 10,
      direction: Math.random() > 0.5 ? 1 : -1
    }));
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      {/* Dynamic Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full transition-opacity duration-1000 ${darkMode ? 'bg-brand-purple-light shadow-[0_0_10px_rgba(167,139,250,0.4)]' : 'bg-brand-purple/40'}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
          }}
          animate={{
            y: [`${p.y}vh`, `${p.y - 40}vh`, `${p.y}vh`],
            x: [
              `${p.x}vw`, 
              `${p.x + (15 * p.direction)}vw`, 
              `${p.x}vw`
            ],
            opacity: [0, darkMode ? 0.6 : 0.8, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay
          }}
        />
      ))}

      {/* Atmospheric Glowing Orbs - Adapted from Hero for Global Context */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 dark:opacity-80 transition-opacity duration-1000 mix-blend-screen">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 80, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-brand-purple/20 md:bg-brand-purple/10 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, 80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-brand-purple-light/10 md:bg-brand-purple-light/5 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-[-10%] right-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-purple/5 rounded-full blur-[120px]" 
        />
      </div>
    </div>
  );
};

export default GlobalBackground;
