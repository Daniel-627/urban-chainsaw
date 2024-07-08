import React from 'react'
import { AiOutlineX, AiFillLinkedin } from 'react-icons/ai'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex flex-row justify-between px-24 py-10'>
      <div>
        <p>Daniel627</p>
      </div>
      <div className='flex flex-row'>
        <AiOutlineX />
        <AiFillLinkedin />
      </div>
    </div>
  )
}

export default Header