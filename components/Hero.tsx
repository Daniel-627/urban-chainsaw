import React from 'react'
import Image from "next/image";
import img1 from'@/public/img1.jpg'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex flex-col justify-between items-center py-5'>
      <div >
        <Image
          src={img1}
          alt='My Photo'
          width={150}
          height={150}
          quality={100}
          placeholder='blur'
          className='rounded-full'
        /> 
      </div>
      <div className='flex flex-col justify-items-center mx-56 text-center space-y-5 py-5'>
        <p className='text-lg font-extralight text-slate-400'>Hi, I'm Daniel Ochieng</p>
        <h1 className='text-4xl font-semibold text-slate-200'>Building Bridges between Users and Technology through Design and Development.</h1>
        <p className='test-base font-light text-slate-400'>a web designer and developer based in Kenya.<br/>I specialize in Ui/Ux Design, Responsive Web Design and Web Development.</p>
      </div>
      <div className='space-x-3'>
        <button className='px-6 py-2 rounded-lg bg-slate-300 hover:border hover:bg-transparent hover:text-slate-200 text-slate-900 hover:border-slate-50'>Get In Touch</button>
        <button className='border py-2 px-6 rounded-lg border-slate-600 hover:border-slate-50'>My Resume</button>
      </div>
    </div>
  )
}

export default Hero