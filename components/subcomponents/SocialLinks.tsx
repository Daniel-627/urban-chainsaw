'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { socialMediaLinks } from '@/data';

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-row space-x-2 md:space-x-4">
      {socialMediaLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={index}
            href={social.link}
            className=""
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3, ease: 'easeOut' }}
          >
            <Icon className="text-3xl text-slate-400 hover:text-slate-50" />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

