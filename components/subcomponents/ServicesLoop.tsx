import React from 'react'
import { services } from '@/data'
import { Animate } from '../Animate'
import { Animate2 } from '../Animate2'

type Props = {}

const ServicesLoop = (props: Props) => {
  return (
    <div className='flex flex-col py-12'>
      <Animate2>
        <h1 className='flex justify-start text-4xl font-thin py-4'>I can help you with......</h1>
      </Animate2>
        
        <div className='flex flex-row'>
            {services.map((service) => (
                <div
                key={service.index}
                className='flex flex-col space-y-3'
                >
                  <Animate>
                  <h1 className='text-5xl text-gray-600 font-semibold'>0{service.index}</h1>
                </Animate>
                <Animate>
                  <h3 className='font-extralight text-[#5588f7] text-2xl'>{service.title}</h3>
                </Animate>
                <Animate>
                  <p className='font-thin text-base  text-[#b0b0b0]'>{service.details}</p>
                </Animate>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServicesLoop;