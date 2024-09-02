'use client';

import React, { useEffect, useRef } from 'react';
import { AiOutlineX, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Animate } from './Animate';
import Link from 'next/link';

interface Props {}

const Header = (props: Props) => {
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
      className='fixed top-0 left-0 right-0 z-50 flex flex-row justify-between px-6 py-4 md:px-24 md:py-10 bg-transparent'
      ref={ref}
    >
      <div>
        <Animate>
          <Link href="/">
            <p className='font-extralight text-[#b0b0b0] text-lg md:text-xl hover:text-[#ffffff] cursor-pointer'>
              Daniel Ochieng
            </p>
          </Link>
        </Animate>
      </div>
      <div className='flex flex-row space-x-3'>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
        >
          <a href="http://" title='X' className='cursor-pointer'> 
            <AiOutlineX className='text-2xl md:text-3xl text-[#b0b0b0] hover:text-[#ffffff]' />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
        >
          <a href="http://" title='LinkedIn' className='cursor-pointer'>
            <AiFillLinkedin className='text-2xl md:text-3xl text-[#b0b0b0] hover:text-[#ffffff]' />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
