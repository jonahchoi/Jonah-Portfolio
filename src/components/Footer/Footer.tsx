import React from 'react'
import NavLink from '../Nav/NavLink'
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'
import { MdOutlineContactPage,  } from 'react-icons/md'

interface FooterProps {
  updateSection: (section: string) => void;
}

const Footer = ({ updateSection }: FooterProps) => {
  return (
    <div className='h-1/2 md:h-screen bg-secondary-color text-primary-color p-5 md:p-40 xl:p-80 md:text-2xl'>
      <div className='flex flex-col justify-evenly items-start gap-5 py-5 md:gap-10 md:py-14'>
        <h2 className='text-gray-200'>CONTACT ME</h2>
        <NavLink section={'Contact'} updateSection={updateSection} classNames='cursor-pointer transform duration-300 hover:translate-y-[-5px]'>Send a Message</NavLink>
        <a href='mailto:cjonah227@gmail.com' className='cursor-pointer transform duration-300 hover:translate-y-[-5px]'>cjonah227@gmail.com</a>
      </div>
      <div className='flex border-t-2 border-primary-color my-5 pt-5 justify-between items-center '>
        <p className='m-0'>Jonah Choi 2023</p>
        <div className='flex gap-5 pt-3 justify-between items-center '>
          <a href='resume' target='_blank' title='Resume' className='p-1 transform duration-300 hover:translate-y-[-5px] text-xl md:text-3xl'>
            <MdOutlineContactPage />
          </a>
          <a href='https://www.linkedin.com/in/jonah-choii/' target='_blank' title='LinkedIn' className='p-1 transform duration-300 hover:translate-y-[-5px] text-xl md:text-3xl'>
            <RiLinkedinLine />
          </a>
          <a href='https://github.com/jonahchoi' target='_blank' title='GitHub' className='p-1 transform duration-300  hover:translate-y-[-5px] text-xl md:text-3xl'>
            <RiGithubLine />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
