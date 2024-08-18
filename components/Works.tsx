"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data';
import { Animate } from './Animate';
import { Animate2 } from './Animate2';

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="flex flex-col space-y-16 py-8">
      <div className='flex flex-col justify-center items-center mb-16'>
        <Animate>
          <h1 className='text-3xl text-[#ffffff] font-extralight'>Selected Work</h1>
        </Animate>
        <Animate>
          <p className='text-xs text-[#b0b0b0]'>This is what I'm capable of...</p>
        </Animate>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative rounded-3xl overflow-hidden h-[550px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={projectVariants}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-full w-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 text-left z-10 bg-neutral-950/70 w-full">
                  <div className="flex flex-row space-x-2 mb-4">
                    {project.categories.map((category, index) => (
                      <Animate2 key={index}>
                        <div className="text-[#b0b0b0] text-xs font-semibold space-x-2 border bg-black border-[#b0b0b0] bg-opacity-50 rounded-3xl p-2 ">
                          {category}
                        </div>
                      </Animate2>
                    ))}
                  </div>

                  <Animate2>
                    <h3 className="text-xl font-semibold text-[#5588f7] mb-2">{project.title}</h3>
                  </Animate2>
                  
                  <Animate2>
                    <p className="text-lg font-extralight text-[#b0b0b0] mb-2">{project.des}</p>
                  </Animate2>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
