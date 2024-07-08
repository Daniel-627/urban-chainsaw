import React from 'react'
import Image from "next/image";
import img1 from'@/public/img1.jpg'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex flex-col justify-between items-center py-4'>
      <div >
        <Image
          src={img1}
          alt='My Photo'
          width={180}
          quality={100}
          placeholder='blur'
          className='rounded-full'
        /> 
      </div>
      <div className='flex flex-col justify-items-center mx-56 text-center'>
        <p className='text-lg font-extralight py-5 text-gray-400'>Hi, I,m Daniel Ochieng</p>
        <h1 className='text-4xl font-semibold pb-5 text-gray-200'>Building Bridges between Users and Technology through Design and Development.</h1>
        <p className='test-base font-light pb-5 text-slate-400'>a web designer and developer based in Kenya.<br/>I specialize in Ui/Ux Design, Responsive Web Design and Web Development.</p>
      </div>
      <div>
        <button className='px-6 py-2 rounded-lg mx-2 bg-slate-50 text-gray-900'>Get In Touch</button>
        <button className='border py-2 px-6 rounded-lg mx-2 border-gray-600'>My Resume</button>
      </div>
    </div>
  )
}

export default Hero