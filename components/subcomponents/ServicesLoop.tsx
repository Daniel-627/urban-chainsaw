import React from 'react';
import { services } from '@/data';
import { Animate } from '../Animate';
import { Animate2 } from '../Animate2';

type Props = {};

const ServicesLoop = (props: Props) => {
  return (
    <div className='flex flex-col py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-full'>
      <Animate2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin py-4'>
          What I Do.
        </h1>
      </Animate2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service) => (
          <div
            key={service.index}
            className='flex flex-col space-y-3 p-4 bg-neutral-900 rounded-lg shadow-md'
          >
            <Animate2>
              <h1 className='text-3xl sm:text-4xl md:text-6xl text-gray-600 font-semibold'>
                0{service.index}
              </h1>
            </Animate2>
            <Animate2>
              <h3 className='text-xl sm:text-2xl md:text-3xl text-[#5588f7] font-extralight'>
                {service.title}
              </h3>
            </Animate2>
            <Animate>
              <p className='text-sm sm:text-base md:text-base text-[#b0b0b0] font-thin'>
                {service.details}
              </p>
            </Animate>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesLoop;
