'use client'

import React, {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion'
import Image from "next/image";
import img1 from'@/public/img1.jpg'
import { Animate } from './Animate';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex flex-col justify-between items-center py-5'>
      <motion.div 
      variants={{
      hidden: {opacity : 0, y: -100},
      show: {
        opacity:1, y: 0
      },
    }}
    initial="hidden"
    animate="show"
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
      <div className='flex flex-col justify-center items-center mx-56 text-center space-y-5 py-5'>
        <Animate>
          <p className='flex text-center text-base font-extralight text-[#b0b0b0]'>Hi, I'm Daniel Ochieng</p>
        </Animate>
        <Animate>
          <h1 className='text-4xl font-semibold text-[#ffffff]'>Building Bridges between Users and Technology through Design and Development.</h1>
        </Animate>
        <Animate>
          <p className='test-base font-extralight text-[#b0b0b0]'>a web designer and developer based in Kenya.<br/>I specialize in Ui/Ux Design, Responsive Web Design and Web Development.</p>
        </Animate>
      </div>
      <div className='space-x-3'>
        
        <button className='px-6 py-2 rounded-lg bg-[#3a1ff3] text-[#ffffff] '>Get In Touch</button>
        <button className='py-2 px-6 rounded-lg bg-[#121212] border border-[#b0b0b0] text-[#b0b0b0]'>My Resume</button>
      </div>
    </div>
  )
}

export default Hero