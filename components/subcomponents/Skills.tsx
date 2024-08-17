'use client'

import React, {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion'
import { skills } from '@/data'

interface Skill {
  name: string
  logo: string
}

{/*const skills: Skill[] = [
  { name: 'React', logo: '/logos/react.png' },
  { name: 'Next.js', logo: '/logos/nextjs.png' },
  { name: 'TypeScript', logo: '/logos/typescript.png' },
  { name: 'TailwindCSS', logo: '/logos/tailwindcss.png' },
  { name: 'JavaScript', logo: '/logos/javascript.png' },
  { name: 'Git', logo: '/logos/git.png' },
  { name: 'HTML', logo: '/logos/html.png' },
  { name: 'CSS', logo: '/logos/css.png' },
]*/}

const Skills = () => {
  const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("show");
        }
    }, [isInView]);
  return (
    <motion.div
    variants={{
      hidden: {opacity : 0},
      show: {
        opacity:1,
        transition: {
          staggerChildren:0.25,
        },
      },
    }}
    initial="hidden"
    animate={mainControls}
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4"
    >
      {skills.map(skill => (
        <motion.div key={skill.name}
        variants={{
          hidden: {opacity: 0},
          show: {opacity:1}
        }}
        className="flex flex-col items-center"
        >
          <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain" />
          {/*<p className="mt-2 text-center">{skill.name}</p>*/}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Skills;