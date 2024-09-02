'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { skills } from '@/data';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8, rotate: -15 },
            visible: { opacity: 1, scale: 1, rotate: 0 }
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
            delay: index * 0.3, // staggered delay for each skill
            type: 'spring',
            stiffness: 300
          }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
        >
          <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
          {/* <p className="mt-2 text-center">{skill.name}</p> */}
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
