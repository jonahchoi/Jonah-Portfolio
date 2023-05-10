import React, { useState } from 'react'
import NavLink from './NavLink'
import { RxCommit } from 'react-icons/rx'
import { sectionNames } from '@/src/tools/sections'

interface NavProps {
  updateSection: Function;
  currentSection: string
}

const Nav = ({updateSection, currentSection}: NavProps) => {

  return (
    <div className={`fixed top-1/2 translate-y-[-50%] right-20  text-4xl z-50 transition-color duration-300 ${currentSection === 'Projects' ? 'text-primary-color' : 'text-secondary-color'}`}>
      <ul className='flex flex-col items-center'>
        {sectionNames
        .map((section) => (
          <li key={section} className='m-0 p-0 cursor-pointer'>
            <NavLink section={section} updateSection={updateSection} currentSection={currentSection} classNames={`flex items-center m-[-1px] ${section === currentSection ? 'active' : 'inactive'}`}>
              {section === currentSection ?
              <div className='flex justify-center items-center'><RxCommit /><div className={`rounded-full w-3.5 h-3.5 absolute transition-color duration-300 ${currentSection === 'Projects' ? 'bg-primary-color' : 'bg-secondary-color'}`}></div></div>
              : <RxCommit />}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav