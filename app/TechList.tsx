import React, { useState } from 'react'
import TechBox from './TechBox'
import { DiJsBadge, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiMysql, DiPostgresql, DiMongodb, DiFirebase, DiNginx, DiGit, DiNpm, } from 'react-icons/di'
import {SiJest} from 'react-icons/si'
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
    // {
    //   name: 'NGINX',
    //   icon: <DiNginx />
    // },
    // {
    //   name: 'Git',
    //   icon: <DiGit />
    // },
    // {
    //   name: 'npm',
    //   icon: <DiNpm />
    // },
    // {
    //   name: 'Jest',
    //   icon: <SiJest />
    // },

  ]

  return (
    <section className='w-full m-0 p-0 z-40 flex justify-center items-center gap-5 flex-wrap'>
      {techList.map((tech) => <TechBox key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />)}
    </section>
  )
}

export default TechList
