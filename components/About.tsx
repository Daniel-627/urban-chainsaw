import React from 'react'
import Clients from './subcomponents/Clients'
import Skills from './subcomponents/Skills'
import { Animate } from './Animate'

type Props = {}

const About = (props: Props) => {
  return (
    <>
      <div className='flex flex-col py-10 space-y-5'>
        <div className='flex flex-row'>
          <div className='flex flex-col flex-1 space-y-3'>
            <Animate>
              <h1 className='text-3xl text-[#ffffff] font-extralight'>About Me</h1>
            </Animate>
            <Animate>
              <p className='text-[#b0b0b0] text-base font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Atque molestiae libero aperiam! Aliquam voluptatibus sunt iure officiis alias repellat,
                eligendi totam nemo omnis hic! Doloribus natus ex voluptates accusamus vitae?
              </p>
            </Animate>            
          </div>
          <div className='flex flex-1 flex-col justify-center items-center space-y-4'>
            <Animate>
              <h3 className='text-3xl text-[#ffffff] font-extralight'>My Skills</h3>
            </Animate>
            <Skills />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Animate>
            <h1 className='flex text-center text-2xl text-[#b0b0b0] font-extralight'>Clients I've worked with......</h1>
          </Animate>
          <Clients />
        </div>
      </div>
    </>
  )
}

export default About