import React from 'react'
import { AiOutlineX, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex flex-row justify-between px-24 py-10'>
      <div>
        <p className='font-extralight text-gray-400 text-xl'>Daniel627</p>
      </div>
      <div className='flex flex-row space-x-3'>
        <AiOutlineX className='text-3xl text-slate-400' />
        <AiFillLinkedin className='text-3xl text-slate-400' />
        <AiOutlineMail className='text-3xl text-slate-400' />
      </div>
    </div>
  )
}

export default Header