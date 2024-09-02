'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from "next/image";
import img1 from '@/public/img1.jpg';
import { Animate } from './Animate';
import BackgroundAnimation from './BackgroundAnimation';

interface Props {}

const Hero = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [isInView, controls]);

  return (
    <div className='flex flex-col justify-between items-center pt-32 pb-5 px-4 sm:px-8 md:px-16 h-full' ref={ref}>
      <BackgroundAnimation />
      <motion.div
        className="relative z-10"
        variants={{
          hidden: { opacity: 0, y: -100 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <Image
          src={img1}
          alt='My Photo'
          width={150}
          height={150}
          quality={100}
          placeholder='blur'
          className='rounded-3xl'
        />
      </motion.div>

      <div className='flex flex-col justify-center items-center text-center space-y-5 py-5'>
        <Animate>
          <p className='text-base font-extralight text-[#b0b0b0]'>Hi, I'm Daniel Ochieng</p>
        </Animate>
        <Animate>
          <h1 className='text-3xl sm:text-4xl font-semibold text-[#ffffff]'>Creating user-friendly technology through design and development</h1>
        </Animate>
        <Animate>
          <p className='text-base font-extralight text-[#b0b0b0] max-w-xl mx-4 sm:mx-8'>UI/UX Designer & Web Developer based in Kenya. Specializing in responsive web design. Let's create something amazing together.</p>
        </Animate>
      </div>

      <motion.div
        className='flex justify-center'
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.5,
        }}
      >
        <motion.a
          href="mailto:ochiengdaniel627@gmail.com"
          className='px-6 py-2 rounded-lg bg-[#3a1ff3] text-[#ffffff] text-base sm:text-lg'
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.7,
          }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Hero;
