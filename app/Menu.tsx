import React, { useEffect, useRef, useState } from 'react'
import NavLink from './NavLink';
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
    <div className='w-screen relative md:fixed z-40'>
      <NavLink
        section={'Home'}
        updateSection={updateSection}
        classNames={`absolute left-5 top-5 text-3xl font-bold md:left-20 md:top-20 md:text-5xl cursor-pointer  transition-color duration-500 ${currentSection === 'Projects' || currentSection === 'Footer' ? 'text-primary-color' : 'text-secondary-color'}`}
      >
        JC
      </NavLink>
      <div className='absolute top-0 right-0 md:top-10 md:right-10 bg-gray-100'>
        <button className='absolute top-5 right-5 z-[60] md:top-10 md:right-10 flex flex-col justify-center items-center' type='button' onMouseDown={toggleMenu}>
          <div className={`h-1 w-9 my-1 transition ease transform duration-300 ${isOpen
            ? "rotate-45 translate-y-3"
            : ""}
            ${currentSection === 'Footer' && !isOpen
            ? 'bg-primary-color'
            : currentSection === 'Contact' || currentSection === 'Footer' && !isOpen
            ? 'bg-secondary-color xl:bg-primary-color'
            : currentSection === 'Projects' && !isOpen
            ? 'bg-primary-color xl:bg-secondary-color'
            : 'bg-secondary-color'}`}></div>
          <div className={`h-1 w-9 my-1 transition ease transform duration-300 ${isOpen
            ? 'rotate-45'
            : ''}
            ${currentSection === 'Footer' && !isOpen
            ? 'bg-primary-color'
            : currentSection === 'Contact' && !isOpen
            ? 'bg-secondary-color xl:bg-primary-color'
            : currentSection === 'Projects' && !isOpen
            ? 'bg-primary-color xl:bg-secondary-color'
            : 'bg-secondary-color'}`}
            ></div>
          <div className={`h-1 w-9 my-1 transition ease transform duration-300 ${isOpen
            ? "-rotate-45 -translate-y-3"
            : ""}
            ${currentSection === 'Footer' && !isOpen
            ? 'bg-primary-color'
            : currentSection === 'Contact' && !isOpen
            ? 'bg-secondary-color xl:bg-primary-color'
            : currentSection === 'Projects' && !isOpen
            ? 'bg-primary-color xl:bg-secondary-color'
            : 'bg-secondary-color'}`}></div>
        </button>
        {isOpen && <div ref={menuRef} className='h-screen w-screen fixed top-0 left-0 p-20 z-10 drop-shadow-lg md:static md:h-[400px] md:w-[300px] bg-white text-black flex flex-col md:p-10 justify-between text-2xl'>
          <div className='flex flex-col justify-evenly items-start h-3/4 '>
            <NavLink section={'About'} updateSection={updateSection} classNames='cursor-pointer transform duration-300 hover:text-secondary-color hover:translate-y-[-5px]'>About</NavLink>
            <NavLink section={'Projects'} updateSection={updateSection} classNames='cursor-pointer transform duration-300 hover:text-secondary-color hover:translate-y-[-5px]'>Projects</NavLink>
            <NavLink section={'Contact'} updateSection={updateSection} classNames='cursor-pointer transform duration-300 hover:text-secondary-color hover:translate-y-[-5px]'>Contact</NavLink>
          </div>
          <div className='flex gap-5 pt-3 justify-between items-center '>
            <a href='resume' target='_blank' title='Resume' className='p-1 transform duration-300 hover:text-secondary-color hover:translate-y-[-5px]'>
              <MdOutlineContactPage />
            </a>
            <a href='https://www.linkedin.com/in/jonah-choii/' target='_blank' title='LinkedIn' className='p-1 transform duration-300 hover:text-secondary-color hover:translate-y-[-5px]'>
              <RiLinkedinLine />
            </a>
            <a href='https://github.com/jonahchoi' target='_blank' title='GitHub' className='p-1 transform duration-300 hover:text-secondary-color hover:translate-y-[-5px]'>
              <RiGithubLine />
            </a>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Menu
