import React from 'react'
import { AiOutlineX, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { Animate } from './Animate'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex flex-row justify-between px-24 py-10'>
      <div>
        <Animate>
          <p className='font-extralight text-[#b0b0b0] text-xl hover:text-[#ffffff]'>Daniel627</p>
        </Animate>
      </div>
      <div className='flex flex-row space-x-3'>
        <AiOutlineX className='text-3xl text-[#b0b0b0] hover:text-[#ffffff] bg-[252b41] border-[#fff]' />
        <AiFillLinkedin className='text-3xl text-[#b0b0b0] hover:text-[#ffffff]' />
        <AiOutlineMail className='text-3xl text-[#b0b0b0] hover:text-[#ffffff]' />
      </div>
    </div>
  )
}

export default Header