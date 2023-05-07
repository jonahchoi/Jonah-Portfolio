import React, { useState } from 'react'
import NavLink from './NavLink';
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'

interface MenuProps {
  updateSection: Function;
}

const Menu = ({ updateSection }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='fixed top-10 right-14'>
      <div className='relative'>
        <button className='absolute top-10 right-10 flex flex-col justify-center items-center' type='button' onClick={toggleMenu}>
          <div className={`h-1 w-9 my-1 transition ease transform duration-300 ${isOpen
          ? "rotate-45 translate-y-3 bg-black"
          : "bg-white"}`}></div>
          <div className={`h-1 w-9 my-1 transition ease transform duration-300 ${isOpen
            ? 'rotate-45 bg-black'
            : 'bg-white'}`}></div>
          <div className={`h-1 w-9 my-1 transition ease transform duration-300 ${isOpen
          ? "-rotate-45 -translate-y-3 bg-black"
          : "bg-white"}`}></div>
        </button>
        {isOpen && <div className='h-[400px] w-[300px] bg-white text-black flex flex-col p-10 justify-between text-2xl'>
          <div className='flex flex-col justify-evenly h-3/4 '>
            <NavLink section={'About'} updateSection={updateSection} classNames='cursor-pointer'>About</NavLink>
            <NavLink section={'Projects'} updateSection={updateSection} classNames='cursor-pointer'>Projects</NavLink>
            <NavLink section={'Contact'} updateSection={updateSection} classNames='cursor-pointer'>Contact</NavLink>
          </div>
          <div className='flex gap-5 pt-3 justify-between items-center '>
            <a href='resume' target='_blank'>Resume</a>
            <a href='https://www.linkedin.com/in/jonah-choii/' target='_blank'><RiLinkedinLine /></a>
            <a href='https://github.com/jonahchoi' target='_blank'><RiGithubLine /></a>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Menu
{/* <div
      className={`${genericHamburgerLine} ${
        isOpen
          ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
          : "opacity-50 group-hover:opacity-100"
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        isOpen
          ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
          : "opacity-50 group-hover:opacity-100"
      }`}
    />
*/}