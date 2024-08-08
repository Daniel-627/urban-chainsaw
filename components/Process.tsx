import React from 'react'
import { process } from '@/data'
import { AiOutlineMore, AiFillPlusCircle, AiOutlinePlus } from 'react-icons/ai'

type Props = {}

const Process = (props: Props) => {
  return (
    <>
    
      <div className='flex flex-row p-10'>
        <div className='flex flex-1 flex-col space-y-4 p-3'>
          <h3 className='text-4xl font-thin text-[#ffffff]'>This is how I get things done..... </h3>
          <p className='text-base text-[#b0b0b0]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quaerat aperiam nam cumque explicabo ipsum atque amet earum, provident veniam possimus nisi labore 
            expedita iste accusantium quibusdam, magni obcaecati facere culpa?</p>
        </div>
        <div className='flex flex-1 flex-col pt-10'>
          
          {process.map((step) => (
            <div 
            key={step.index}
            className='flex flex-row justify-between space-y-3 '
            >
              <div className='flex flex-row space-x-3'>
                <p className='text-bs text-gray-500 '>0{step.index}.</p>
                <p className='text-bs text-[#b0b0b0]'>{step.title}</p>
              </div>
              <div className=''>
                <AiOutlinePlus className='text-2xl text-slate-400'/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Process;