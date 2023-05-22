import React from 'react'
import { Link } from 'react-scroll'

interface NavLinkProps {
  section: string;
  updateSection: (section: string) => void;
  children: React.ReactNode;
  classNames?: string;
}

const NavLink = ({section, updateSection, children, classNames}: NavLinkProps) => {
  return (
    <Link
      to={section}
      smooth={true}
      duration={300}
      onClick={()=>updateSection(section)}
      className={classNames}
    >
      {children}
    </Link>
  )
}

export default NavLink
