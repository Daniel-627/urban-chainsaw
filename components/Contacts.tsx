import React from 'react'
import SocialLinks from './subcomponents/SocialLinks'
import ContactForm from './subcomponents/ContactForm'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className='flex flex-col'>
      <div>
        <h1>Let's talk about a project, collaboration or an idea you may have.</h1>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-1'>
          <ContactForm />
        </div>
        <div className='flex flex-1'>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default Contacts