import React from 'react'
import ServicesLoop from './ServicesLoop'
import { Animate } from '@/components/Animate';



type Props = {}

const ServicesCarousel = (props: Props) => {
  return (
    <div className='my-10'>
        <ServicesLoop />
    </div>
  )
}

export default ServicesCarousel