import React from 'react'

const Contact = () => {



  return (
    <section className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-7xl font-bold'>Contact</h1>
      <p>If you want to reach out or just say hello, fill out the form below and I&apos;ll get back to you as soon as I can!</p>
      <form className='w-[90%] md:w-[70%] xl:w-[40%]' action="mailto:cjonah227@gmail.com" encType="text/plain">
        <div className='relative my-[25px]'>
          <input className='border-[#808080] border w-full p-[10px] h-12 text-base bg-transparent peer' type='text' id='name' placeholder=' '></input>
          <label className='text-base bg-black text-[#808080] absolute pointer-events-none left-[5px] duration-500 transform -translate-y-4 top-1 z-10 origin-[0] px-[5px] m-0
          peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:text-white
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2' htmlFor='name'>Name</label>
        </div>
        <div className='relative my-[25px]'>
          <input className='border-[#808080] border w-full p-[10px] h-12 text-base bg-transparent peer' type='email' id='email' placeholder=' '></input>
          <label className='text-base bg-black text-[#808080] absolute pointer-events-none left-[5px] duration-500 transform -translate-y-4 top-1 z-10 origin-[0] px-[5px] m-0
          peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:text-white
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2' htmlFor='email'>Email</label>
        </div>
        <div className='relative my-[25px]'>
          <textarea className='border-[#808080] border w-full p-[10px] h-48 text-base bg-transparent peer' id='message' placeholder=' '></textarea>
          <label className='text-base bg-black text-[#808080] absolute pointer-events-none left-[5px] duration-500 transform -translate-y-4 top-1 z-10 origin-[0] px-[5px] m-0
          peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:text-white
          peer-placeholder-shown:top-[30px]' htmlFor='message'>Message</label>
        </div>


        <button type='submit' className='float-right border border-[#808080] py-[10px] px-[50px]'>Submit</button>
      </form>
    </section>
  )
}

export default Contact
