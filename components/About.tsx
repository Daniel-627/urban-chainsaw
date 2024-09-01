'use client'

import React from 'react'
import Clients from './subcomponents/Clients'
import Skills from './subcomponents/Skills'
import { Animate } from './Animate'
import { Animate2 } from './Animate2'
import { Animate1 } from './Animate1'

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <div className='flex flex-col py-10 space-y-5'>
        <div className='flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0'>
          <div className='flex flex-col flex-1 space-y-3'>
            <Animate2>
              <h1 className='text-3xl text-[#ffffff] font-extralight'>About Me</h1>
            </Animate2>
            <Animate>
              <p className='text-[#b0b0b0] text-base font-thin'>
                Aluoch Daniel Ochieng is a skilled ICT specialist with a strong focus on web development and system administration. I have extensive experience in designing and managing websites, using technologies like JavaScript, ReactJS, and WordPress among others to create interactive and user-friendly web applications. In system administration, I excel in network management, server maintenance, and ensuring the security and optimal performance of IT infrastructure. My technical proficiency allows me to seamlessly integrate and maintain systems, ensuring efficient operations and a positive user experience.
              </p>
            </Animate>
            <Animate>
              <p className='text-[#b0b0b0] text-base font-thin'>
                My experience is centered around web design, development, and branding, where I create visually appealing and user-friendly websites that effectively communicate brand identity. My strong design sensibility and attention to detail ensure that every project reflects the brand's values and engages its target audience effectively.
              </p>
            </Animate>
            <Animate>
              <p className='text-[#b0b0b0] text-base font-thin'>
                I holds a Diploma in Information Communication and Technology from The Kisumu National Polytechnic. I am committed to leveraging my technical expertise and problem-solving abilities to deliver innovative solutions, with a strong focus on collaboration and effective communication across teams.
              </p>
            </Animate>            
          </div>
          <div className='flex flex-1 flex-col justify-center items-center space-y-4'>
            <Animate1>
              <h3 className='text-3xl text-[#ffffff] font-extralight'>My Skills</h3>
            </Animate1>
            <Skills />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Animate>
            <h1 className='flex text-center text-2xl text-[#b0b0b0] font-extralight'>Clients I've worked with...</h1>
          </Animate>
          <Clients />
        </div>
      </div>
    </>
  )
}

export default About
