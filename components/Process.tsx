import React from 'react'
import { process } from '@/data'
import { AiOutlineMore, AiFillPlusCircle, AiOutlinePlus } from 'react-icons/ai'
import { Animate } from './Animate'

type Props = {}

const Process = (props: Props) => {
  return (
    <>
    
      <div className='flex flex-row p-10'>
        <div className='flex flex-1 flex-col space-y-4 p-3'>
          <Animate>
            <h3 className='text-4xl font-thin text-[#ffffff]'>This is how I get things done..... </h3>
          </Animate>
          <Animate>
            <p className='text-base text-[#b0b0b0] font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat aperiam nam cumque explicabo ipsum atque amet earum, provident veniam possimus nisi labore 
            expedita iste accusantium quibusdam, magni obcaecati facere culpa?</p>
          </Animate>  
        </div>
        <div className='flex flex-1 flex-col pt-10'>
          
          {process.map((step) => (
            <div 
            key={step.index}
            className='flex flex-row justify-between space-y-3 '
            >
              <div className='flex flex-row space-x-3'>
                <Animate>
                  <p className='text-base text-gray-500 font-thin'>0{step.index}.</p>
                </Animate>
                <Animate>
                  <p className='text-base text-[#b0b0b0] font-extralight'>{step.title}</p>
                </Animate> 
              </div>
              <div className=''>
                <AiOutlinePlus className='text-2xl text-[#b0b0b0] hover:text-[#ffffff]'/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Process;