'use client'; // Ensure this is at the top of the file

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const [circles, setCircles] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    // Generate circles with random properties
    const newCircles = Array.from({ length: 10 }).map((_, index) => (
      <motion.div
        key={index}
        className="absolute rounded-full bg-blue-700 bg-opacity-40"
        style={{
          width: `${Math.random() * 200 + 100}px`,
          height: `${Math.random() * 200 + 100}px`,
          top: `${Math.random() * 100}vh`,
          left: index % 2 === 0 
            ? `${Math.random() * 10}vw`  // Left side
            : `${90 + Math.random() * 10}vw`,  // Right side
          opacity: 0.3,
        }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.3, 0.6, 0.3],
          x: [`${Math.random() * 100 - 50}px`, `${Math.random() * 100 - 50}px`],
          y: [`${Math.random() * 200 - 100}px`, `${Math.random() * 200 - 100}px`],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
      />
    ));

    setCircles(newCircles);
  }, []); // Empty dependency array ensures this runs only on client side

  return (
    <div className="absolute inset-0 overflow-hidden">
      {circles}
    </div>
  );
};

export default BackgroundAnimation;
