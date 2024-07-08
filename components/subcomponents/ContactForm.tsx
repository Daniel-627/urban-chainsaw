import React from 'react'

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <div>
        <form action="" className='space-y-3 flex flex-col justify-start'>
            <input type="text" name="Name" id="" title='Name' placeholder='Your Name/Organisation Name' className='border-b bg-transparent border-slate-400 text-slate-400'/>
            <input type="email" name="Email" id="" title='Email' placeholder='Your Email' className='border rounded-lg border-slate-400 text-slate-400'/>
            <textarea name="" id="" title='Message' placeholder='Message' className='border rounded-lg border-slate-400 text-slate-400'/>
            <input type="button" value="submit" className='border rounded-lg border-slate-400 text-slate-400'/>
        </form>
    </div>
  )
}

export default ContactForm