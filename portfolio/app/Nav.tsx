import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className='fixed bg-red-100 top-2 text-black'>
      <ul>
        {['Home', 'About', 'Tech', 'Projects'].map((section) => <li><Link to={section} >{section}</Link></li>)}
      </ul>
    </div>
  )
}

export default Nav
