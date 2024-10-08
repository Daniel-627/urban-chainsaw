'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import img1 from '@/public/img1.jpg';
import { Animate } from './subcomponents/Animate';
import BackgroundAnimation from './subcomponents/BackgroundAnimation';

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

  const handleButtonClick = () => {
    window.open('mailto:ochiengdaniel627@gmail.com', '_blank');
  };

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank'); // Update the path to your resume file
  };

  return (
    <div
      className="flex flex-col justify-between items-center pt-20 md:pt-32 pb-5 px-4 sm:px-8 md:px-16 md:h-full"
      ref={ref}
    >
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
          ease: 'easeOut',
          delay: 0.2,
        }}
      >
        <Image
          src={img1}
          alt="My Photo"
          width={150}
          height={150}
          quality={100}
          placeholder="blur"
          className="rounded-3xl"
        />
      </motion.div>

      <div className="flex flex-col justify-center items-center text-center space-y-4 py-4 z-10">
        <Animate>
          <p className="text-base font-extralight text-[#b0b0b0]">Hi, I'm Daniel Ochieng</p>
        </Animate>
        <Animate>
          <h1 className="text-3xl sm:text-4xl font-semibold pb-2 text-[#ffffff] max-w-2xl sm:mx-8">
            Creating user-friendly technology through design and development
          </h1>
        </Animate>
        <Animate>
          <p className="text-base font-extralight text-[#b0b0b0] max-w-xl mx-4 sm:mx-8">
            UI/UX Designer & Web Developer based in Kenya. Specializing in responsive web design. Let's create something amazing together.
          </p>
        </Animate>
      </div>

        <div
          className="flex justify-center items-center flex-col md:flex-row space-y-2 md:space-x-2 z-10"
        >
          <motion.button
            onClick={handleButtonClick}
            className="px-4 py-2 rounded-lg bg-[#3a1ff3] text-[#ffffff] text-base cursor-pointer border-2 border-[#3a1ff3] z-10"
            variants={{
              hidden: { opacity: 0, x: -100, y: 100 },
              show: { opacity: 1, x: 0, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0.5,
            }}
          >
            Get In Touch
          </motion.button>
          <motion.button
            onClick={handleResumeClick}
            className="px-4 py-2 rounded-lg bg-transparent text-[#b0b0b0] text-base cursor-pointer hover:text-[#ffffff] border-2 border-[#b0b0b0] z-10"
            variants={{
              hidden: { opacity: 0, x: 100, y: 100 },
              show: { opacity: 1, x: 0, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0.7,
            }}
          >
            My Resume
          </motion.button>
        </div>
    </div>
  );
};

export default Hero;