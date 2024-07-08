import React from 'react'
import Skills from './subcomponents/Skills'
import Clients from './subcomponents/Clients'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col py-10 space-y-5'>
      <div className='flex flex-row'>
        <div className='flex flex-col flex-1 space-y-3'>
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Atque molestiae libero aperiam! Aliquam voluptatibus sunt iure officiis alias repellat,
             eligendi totam nemo omnis hic! Doloribus natus ex voluptates accusamus vitae?</p>
        </div>
        <div className='flex flex-1'>
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