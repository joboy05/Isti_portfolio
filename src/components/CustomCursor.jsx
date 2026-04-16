import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { stiffness: 500, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="cursor-dot hidden md:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -4,
          top: -4,
        }}
      />
      <motion.div
        className="cursor-outline hidden md:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          left: -20,
          top: -20,
        }}
      />
    </>
  );
};

export default CustomCursor;
