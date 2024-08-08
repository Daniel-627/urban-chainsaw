import React from 'react'
import SocialLinks from './subcomponents/SocialLinks'
import { PiArrowCircleUpThin } from 'react-icons/pi'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <div className='border-t mx-5 border-slate-500'></div>
        <div className='flex flex-col justify-start px-24 py-10 space-y-3 '>
          <div className='flex flex-row justify-between'>
            <div>
              <h3 className='text-3xl text-slate-200'>Get In Touch </h3>
            </div>
            <div>
              <PiArrowCircleUpThin className='text-4xl text-slate-400 hover:text-slate-50' />
            </div>
          </div>
          <div className='flex flex-row justify-between'>
            <div className=''>
              <p className='text-lg text-slate-400 hover:text-slate-200'>ochiengdaniel627@gmail.com</p>
            </div>
            <div className=''>
              <SocialLinks />
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <p className='text-xs text-slate-400'>@2024. All Rights Reserved</p>
            </div>
            <div className='md:hidden'>
              <PiArrowCircleUpThin className='text-4xl text-slate-400 hover:text-slate-50' />
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer