import React, { useState } from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='fixed top-5 right-10'>
      <button type='button' onClick={toggleMenu}></button>
      <a href='resume' target='_blank'>Resume</a>
      <a href='https://www.linkedin.com/in/jonah-choii/' target='_blank'>Lin</a>
      <a href='https://github.com/jonahchoi' target='_blank'>GH</a>
    </div>
  )
}

export default Menu
