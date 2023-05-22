import React from 'react'
import TechBox from './TechBox'
import { DiJsBadge, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiMysql, DiPostgresql, DiMongodb } from 'react-icons/di'
import {IoLogoFirebase} from 'react-icons/io5'

const TechList = () => {
  const techList = [
    {
      name: 'JavaScript',
      icon: <DiJsBadge />,
      color: 'text-yellow-300'
    },
    {
      name: 'HTML5',
      icon: <DiHtml5 />,
      color: 'text-orange-600'
    },
    {
      name: 'CSS3',
      icon: <DiCss3 />,
      color: 'text-blue-600'
    },
    {
      name: 'React',
      icon: <DiReact />,
      color: 'text-blue-400'
    },
    {
      name: 'Node.js',
      icon: <DiNodejsSmall />,
      color: 'text-green-600'
    },
    {
      name: 'MySQL',
      icon: <DiMysql />,
      color: 'text-blue-800'
    },
    {
      name: 'PostgreSQL',
      icon: <DiPostgresql />,
      color: 'text-blue-800'
    },
    {
      name: 'MongoDB',
      icon: <DiMongodb />,
      color: 'text-green-600'
    },
    {
      name: 'Firebase',
      icon: <IoLogoFirebase />,
      color: 'text-yellow-400'
    },
  ]

  return (
    <section className='m-0 p-0 z-40 grid grid-rows-3 grid-cols-3 gap-0 xl:gap-2'>
      {techList.map((tech) => <TechBox key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />)}
    </section>
  )
}

export default TechList
