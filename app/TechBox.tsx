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
      <div className='text-6xl'>{icon}</div>
      {/* {name} */}
    </div>
  )
}

export default TechBox
