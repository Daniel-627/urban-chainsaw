'use client'

import React, { useEffect, useRef } from 'react';
import { AiOutlineX, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Animate } from './Animate';

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
    <div className='flex flex-row justify-between px-24 py-10' ref={ref}>
      <div>
        <Animate>
          <p className='font-extralight text-[#b0b0b0] text-xl hover:text-[#ffffff]'>Daniel627</p>
        </Animate>
      </div>
      <div className='flex flex-row space-x-3'>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
        >
          <AiOutlineX className='text-3xl text-[#b0b0b0] hover:text-[#ffffff]' />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
        >
          <AiFillLinkedin className='text-3xl text-[#b0b0b0] hover:text-[#ffffff]' />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
        >
          <AiOutlineMail className='text-3xl text-[#b0b0b0] hover:text-[#ffffff]' />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
