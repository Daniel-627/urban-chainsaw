import React from 'react'
import SocialLinks from './subcomponents/SocialLinks'
import { PiArrowCircleUpThin } from 'react-icons/pi'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <div className='border-t mx-5 border-slate-500'></div>
        <div className='flex flex-col justify-start px-24 py-10 space-y-3 '>
          <div>
            <h3 className='text-3xl text-slate-200'>Get In Touch </h3>
          </div>
          <div>
            <p className='text-lg text-slate-400 hover:text-slate-200'>ochiengdaniel627@gmail.com</p>
          </div>
          <div className='sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/4'>
            <SocialLinks />
          </div>
          <div className='flex justify-between'>
            <div>
              <p className='text-xs text-slate-400'>@2024. All Rights Reserved</p>
            </div>
            <div>
              <PiArrowCircleUpThin className='text-4xl text-slate-400 hover:text-slate-50' />
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer