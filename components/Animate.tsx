'use client'

import React, {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from 'framer-motion'


interface Props {
    children: JSX.Element;
    width: "fit-content" | "100%";
}

export const Animate = ({ children, width="fit-content"}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

  return (
    <div ref={ref} className="relative hidden" style={{position: "relative", width, overflow:"hidden"}}>
        <motion.div
            variants={{
                hidden: {opacity: 0, y:75},
                visible:  {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.3 }}
        >
            {children}
        </motion.div>
        <motion.div
            variants={{
                hidden:{left:0},
                visible: {left: "100%"},
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn"}}
            className='absolute py-16 px-0 bg-[#3a1ff3] z-20'
        />
    </div>
  );
};