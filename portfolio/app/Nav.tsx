import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { RxCommit } from 'react-icons/rx'
import { sectionNames } from '@/src/tools/sections'


const Nav = ({updateSection, currentSection}) => {

  return (
    <div className='fixed top-1/2 translate-y-[-50%] right-2 text-red-500 text-4xl'>
      <ul className='flex flex-col items-center'>
        {sectionNames
        .map((section) => (
          <li key={section} className='m-0 p-0'>
            <Link
              to={section}
              smooth={true}
              duration={300}
              onClick={()=>updateSection(section)}
              className={`flex items-center m-[-1px] ${section === currentSection ? 'active' : 'inactive'}`}
            >
              {section === currentSection ?
              <div className='flex justify-center items-center'><RxCommit /><div className='bg-red-500 rounded-full w-3.5 h-3.5 absolute'></div></div>
              : <RxCommit />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
