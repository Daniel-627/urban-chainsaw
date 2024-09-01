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
                With a deep passion for web development and a keen eye for design, I have honed my skills in creating responsive, user-friendly websites. My journey began with learning the basics of HTML and CSS, and has since evolved into mastering frameworks like React and Next.js, as well as tools like TailwindCSS and Framer Motion.
              </p>
            </Animate>
            <Animate>
              <p className='text-[#b0b0b0] text-base font-thin'>
                My approach to development is always user-centric, ensuring that the websites and applications I build are not only functional but also aesthetically pleasing. I believe that a well-designed user interface is key to delivering a great user experience, and I take pride in writing clean, efficient code that brings these designs to life.
              </p>
            </Animate>
            <Animate>
              <p className='text-[#b0b0b0] text-base font-thin'>
                When I’m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through content creation. My goal is to continuously improve and stay at the forefront of the ever-evolving web development landscape, while also helping others to learn and grow in this exciting field.
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
