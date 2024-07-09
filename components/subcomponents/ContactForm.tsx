import React from 'react'

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <div>
      
        <form action="" className='space-y-3 flex flex-col'>
            <input type="text" name="Name" id="" title='Name' placeholder='Name' className='border-b bg-transparent border-slate-400 text-slate-400'/>
            <input type="email" name="Email" id="" title='Email' placeholder='Email' className='border-b bg-transparent border-slate-400 text-slate-400'/>
            <textarea name="" id="" title='Message' placeholder='Message' className='border-b bg-transparent border-slate-400 text-slate-400'/>
            <input type="button" value="submit" className='border rounded-lg border-slate-400 text-slate-400'/>
        </form>
    </div>
  )
}

export default ContactForm