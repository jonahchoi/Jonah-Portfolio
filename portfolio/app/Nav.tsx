import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBug, FaCodeBranch, FaGhost } from 'react-icons/fa'
import { GiAtom, GiCardAceSpades, GiCardJoker, GiCard2Hearts, GiConvergenceTarget } from 'react-icons/gi'
import {HiCog} from 'react-icons/hi2'
import {RxComponent1, RxCommit, RxSewingPinFilled} from 'react-icons/rx'
import {RiGitCommitFill, RiGitCommitLine} from 'react-icons/ri'


const Nav = ({updateSection, currentSection}) => {

  return (
    <div className='fixed top-1/2 right-2 text-red-500 text-5xl'>
      <ul className='flex flex-col items-center'>
        {[
          'Home',
          'About',
          'Tech',
          'Projects'
        ]
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
              <div className='flex justify-center items-center'><RxCommit /><div className='bg-red-500 rounded-full w-5 h-5 absolute'></div></div>
              : <RxCommit />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
