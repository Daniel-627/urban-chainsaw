import React from 'react'
import ServicesMarquee from './ServicesMarquee'
import ServicesLoop from './ServicesLoop'


type Props = {}

const ServicesCarousel = (props: Props) => {
  return (
    <div className='my-10'>
      <ServicesLoop />
    </div>
  )
}

export default ServicesCarousel