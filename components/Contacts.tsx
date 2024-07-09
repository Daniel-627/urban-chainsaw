import React from 'react'
import SocialLinks from './subcomponents/SocialLinks'
import ContactForm from './subcomponents/ContactForm'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className='flex flex-row space-x-5'>
      <div className='flex flex-1'>
        <SocialLinks />
      </div>
      <div className='flex flex-1'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contacts