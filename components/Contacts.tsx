import React from 'react'
import SocialLinks from './subcomponents/SocialLinks'
import ContactForm from './subcomponents/ContactForm'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className='flex flex-row space-x-5'>
      <div className='flex flex-1 justify-center'>
        <SocialLinks />
      </div>
      <div className='flex flex-1 justify-center'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contacts