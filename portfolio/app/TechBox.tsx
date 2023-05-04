import React, { ReactComponentElement, ReactElement } from 'react'
import { IconType } from 'react-icons/lib'
import { Interface } from 'readline'

interface TechBoxProps {
  name: string,
  icon: ReactElement<IconType>
}

const TechBox = ({name, icon}: TechBoxProps) => {
  return (
    <div>
      <div className='text-8xl'>{icon}</div>
      {name}
    </div>
  )
}

export default TechBox
