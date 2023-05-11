import React, { ReactComponentElement, ReactElement } from 'react'
import { IconType } from 'react-icons/lib'
import { Interface } from 'readline'

interface TechBoxProps {
  name: string;
  icon: ReactElement<IconType>;
  color: string;
}

const TechBox = ({name, icon, color}: TechBoxProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className={`text-4xl xl:text-6xl ${color}`}>{icon}</div>
      <p className=''>{name}</p>
    </div>
  )
}

export default TechBox
