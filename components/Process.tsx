'use client';

import React, { useState } from 'react';
import { process } from '@/data';
import { AiOutlinePlus } from 'react-icons/ai';
import { Animate } from './Animate';
import { Animate2 } from './Animate2';
import { Animate1 } from './Animate1';

type Props = {}

const Process = (props: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className='flex flex-col lg:flex-row p-6 sm:p-8 md:p-10'>
      <div className='flex flex-1 flex-col space-y-4 p-3'>
        <Animate2>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-thin text-[#ffffff] pb-2'>
            This is how I get things done.....
          </h3>
        </Animate2>
        <Animate>
          <p className='text-sm sm:text-base text-[#b0b0b0] font-thin'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat aperiam nam cumque explicabo ipsum atque amet earum, 
            provident veniam possimus nisi labore expedita iste accusantium 
            quibusdam, magni obcaecati facere culpa?
          </p>
        </Animate>
      </div>
      <div className='flex flex-1 flex-col pt-6 lg:pt-10 space-y-3'>
        {process.map((step, index) => (
          <div 
            key={step.index}
            className='flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0 relative'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className='flex flex-row space-x-3'>
              <Animate1>
                <p className='text-sm sm:text-base text-gray-500 font-thin'>0{step.index}.</p>
              </Animate1>
              <Animate1>
                <p className='text-sm sm:text-base text-[#b0b0b0] font-extralight'>{step.title}</p>
              </Animate1> 
            </div>
            <div className='mt-2 sm:mt-0'>
              <AiOutlinePlus className='text-xl sm:text-2xl text-[#b0b0b0] hover:text-[#ffffff]'/>
            </div>
            {/* Details box */}
            {hoveredIndex === index && (
              <div className='absolute top-full right-0 mt-2 w-[250px] sm:w-[300px] p-3 sm:p-4 bg-neutral-900 text-[#b0b0b0] rounded-md shadow-lg z-20'>
                <Animate>
                  <p className='text-xs sm:text-sm'>{step.details}</p>
                </Animate>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
