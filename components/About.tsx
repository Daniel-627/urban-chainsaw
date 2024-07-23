import React from 'react'
import Clients from './subcomponents/Clients'
import Skills from './subcomponents/Skills'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col py-10 space-y-5'>
      <div className='flex flex-row'>
        <div className='flex flex-col flex-1 space-y-3'>
          <h1 className='text-3xl text-slate-50'>About Me</h1>
          <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Atque molestiae libero aperiam! Aliquam voluptatibus sunt iure officiis alias repellat,
             eligendi totam nemo omnis hic! Doloribus natus ex voluptates accusamus vitae?</p>
        </div>
        <div className='flex flex-1 flex-col justify-center items-center space-y-4'>
          <h3 className='text-3xl text-slate-200'>My Skills</h3>
          <Skills />
        </div>
      </div>
      <div className='flex justify-center'>
        <Clients />
      </div>
    </div>
  )
}

export default About