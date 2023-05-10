import React, { useEffect, useRef, useState } from 'react'
import NavLink from './NavLink';
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'
import { MdOutlineContactPage,  } from 'react-icons/md'

interface MenuProps {
  updateSection: Function;
  currentSection: string;
}

const Menu = ({ updateSection, currentSection }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen])

  return (
    <div className='mb-10 w-screen relative md:fixed z-50'>
      <NavLink
        section={'Home'}
        updateSection={updateSection}
        classNames={`absolute left-5 top-0 md:left-20 md:top-20 cursor-pointer text-5xl font-bold transition-color duration-500 ${currentSection === 'Projects' ? 'text-primary-color' : 'text-secondary-color'}`}
      >
        JC
      </NavLink>
      <div className='absolute top-0 right-0 md:top-10 md:right-10 bg-gray-100'>
        <button className='absolute top-0 right-5 z-[60] md:top-10 md:right-10 flex flex-col justify-center items-center' type='button' onMouseDown={toggleMenu}>
          <div className={`h-1 w-9 my-1 transition ease transform duration-300 ${isOpen
            ? "rotate-45 translate-y-3"
            : ""}
            ${currentSection === 'Contact'
            ? 'bg-primary-color'
            : 'bg-secondary-color'}`}></div>
          <div className={`h-1 w-9 my-1 transition ease transform duration-300 ${isOpen
            ? 'rotate-45'
            : ''}
            ${currentSection === 'Contact'
            ? 'bg-primary-color'
            : 'bg-secondary-color'}`}></div>
          <div className={`h-1 w-9 my-1 transition ease transform duration-300 ${isOpen
            ? "-rotate-45 -translate-y-3"
            : ""}
            ${currentSection === 'Contact'
            ? 'bg-primary-color'
            : 'bg-secondary-color'}`}></div>
        </button>
        {isOpen && <div ref={menuRef} className='h-screen w-screen fixed top-0 left-0 p-20 z-10 md:static md:h-[400px] md:w-[300px] bg-red-100 text-black flex flex-col md:p-10 justify-between text-2xl'>
          <div className='flex flex-col justify-evenly items-start h-3/4 '>
            <NavLink section={'About'} updateSection={updateSection} classNames='cursor-pointer'>About</NavLink>
            <NavLink section={'Projects'} updateSection={updateSection} classNames='cursor-pointer'>Projects</NavLink>
            <NavLink section={'Contact'} updateSection={updateSection} classNames='cursor-pointer'>Contact</NavLink>
          </div>
          <div className='flex gap-5 pt-3 justify-between items-center '>
            <a href='resume' target='_blank'><MdOutlineContactPage title='Resume'/></a>
            <a href='https://www.linkedin.com/in/jonah-choii/' target='_blank' title='LinkedIn'><RiLinkedinLine /></a>
            <a href='https://github.com/jonahchoi' target='_blank' title='GitHub'><RiGithubLine /></a>
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