import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Popup from './Popup';
import { motion } from 'framer-motion'
import { ContainerVariant, ChildrenVariant } from '@/src/constants/animationVariants'


const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [firstForm, setFirstForm] = useState<boolean>(true);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (process.env.NEXT_PUBLIC_SERVICE_ID === undefined || process.env.NEXT_PUBLIC_TEMPLATE_ID === undefined || process.env.NEXT_PUBLIC_PUBLIC_KEY === undefined || formRef.current === null) {
      return;
    }

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
          setIsSubmitted(true);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFirstForm(false);
  }

  return (
    <motion.section
      className='h-[75vh] my-8 md:my-0 md:h-screen flex flex-col justify-center items-center'
      variants={ContainerVariant}
      initial='initial'
      whileInView='inView'
      viewport={{ once: true }}

    >
      <motion.h2
        className='text-4xl font-bold md:text-7xl text-secondary-color'
        variants={ChildrenVariant}
      >
        Contact
      </motion.h2>
      <motion.p
        className='w-[90%] md:w-[70%] xl:w-[40%] pt-5 pl-3'
        variants={ChildrenVariant}
      >
        If you want to reach out or just say hello, fill out the form below and I&apos;ll get back to you as soon as I can!
      </motion.p>
      {!isSubmitted
      ? <motion.form
        className='w-[90%] md:w-[70%] xl:w-[40%]'
        ref={formRef}
        onSubmit={sendEmail}
        variants={firstForm ? ChildrenVariant : undefined}
      >
        <div className='relative my-[25px]'>
          <input className='border-[#808080] border w-full p-[10px] h-12 text-base bg-transparent peer' type='text' id='name' name='name' placeholder=' ' required></input>
          <label className='text-base bg-[#f9f9f9] text-[#808080] absolute pointer-events-none left-[5px] duration-500 transform -translate-y-4 top-1 z-10 origin-[0] px-[5px] m-0
          peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:text-black
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2' htmlFor='name'>Name</label>
        </div>
        <div className='relative my-[25px]'>
          <input className='border-[#808080] border w-full p-[10px] h-12 text-base bg-transparent peer' type='email' id='email' name='email' placeholder=' ' required></input>
          <label className='text-base bg-[#f9f9f9] text-[#808080] absolute pointer-events-none left-[5px] duration-500 transform -translate-y-4 top-1 z-10 origin-[0] px-[5px] m-0
          peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:text-black
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2' htmlFor='email'>Email</label>
        </div>
        <div className='relative my-[25px]'>
          <textarea className='border-[#808080] border w-full p-[10px] h-48 text-base bg-transparent peer' id='message' name='message' placeholder=' ' required></textarea>
          <label className='text-base bg-[#f9f9f9] text-[#808080] absolute pointer-events-none left-[5px] duration-500 transform -translate-y-4 top-1 z-10 origin-[0] px-[5px] m-0
          peer-focus:top-1 peer-focus:-translate-y-4 peer-focus:text-black
          peer-placeholder-shown:top-[30px]' htmlFor='message'>Message</label>
        </div>
        <button type='submit' className='float-right border border-secondary-color text-secondary-color font-bold py-[10px] px-[50px] relative z-10 overflow-hidden
        after:content-[" "] after:bg-secondary-color after:w-full after:h-full after:absolute after:top-0 after:left-0 after:z-[-1] after:-translate-x-full hover:text-white hover:after:translate-x-0 after:transition-transform after:duration-300 active:after:bg-blue-800'>Submit</button>
      </motion.form>
      : <Popup resetForm={resetForm}/>}
    </motion.section>
  )
}

export default Contact
