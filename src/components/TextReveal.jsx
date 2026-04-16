import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ text, className = "", variant = "up" }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const variants = {
    up: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }
  };

  const selectedVariant = variants[variant] || variants.up;

  const childTransition = {
    type: "spring",
    damping: 15,
    stiffness: 100,
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={{
            hidden: selectedVariant.hidden,
            visible: { 
              ...selectedVariant.visible, 
              transition: childTransition 
            }
          }}
          style={{ marginRight: "0.25em" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
