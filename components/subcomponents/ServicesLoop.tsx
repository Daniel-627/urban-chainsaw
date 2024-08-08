import React from 'react'
import { services } from '@/data'

type Props = {}

const ServicesLoop = (props: Props) => {
  return (
    <div className='flex flex-col py-12'>
        <h1 className='flex justify-start text-4xl font-thin py-4'>I can help you with......</h1>
        <div className='flex flex-row'>
            {services.map((service) => (
                <div
                key={service.index}
                className='flex flex-col space-y-3'
                >
                    <h1 className='text-5xl text-gray-600 font-semibold'>0{service.index}</h1>
                    <h3 className='font-thin text-[#5588f7] text-2xl'>{service.title}</h3>
                    <p className='font-light text-xs text-[#b0b0b0]'>{service.details}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServicesLoop;