import React, { useState } from 'react'
import TechBox from './TechBox'
import { DiJsBadge, DiReact, DiNodejsSmall, DiHtml5, DiCss3, DiMysql, DiPostgresql, DiMongodb, DiFirebase, DiNginx, DiGit, DiNpm, } from 'react-icons/di'
import {SiJest} from 'react-icons/si'

const TechList = () => {
  const techList = [
    {
      name: 'JavaScript',
      icon: <DiJsBadge />
    },
    {
      name: 'HTML5',
      icon: <DiHtml5 />
    },
    {
      name: 'CSS3',
      icon: <DiCss3 />
    },
    {
      name: 'React',
      icon: <DiReact />
    },
    {
      name: 'Node.js',
      icon: <DiNodejsSmall />
    },
    {
      name: 'MySQL',
      icon: <DiMysql />
    },
    {
      name: 'PostgreSQL',
      icon: <DiPostgresql />
    },
    {
      name: 'MongoDB',
      icon: <DiMongodb />
    },
    {
      name: 'Firebase',
      icon: <DiFirebase />
    },
    {
      name: 'NGINX',
      icon: <DiNginx />
    },
    {
      name: 'Git',
      icon: <DiGit />
    },
    {
      name: 'npm',
      icon: <DiNpm />
    },
    {
      name: 'Jest',
      icon: <SiJest />
    },

  ]

  return (
    <section className='h-screen flex justify-center items-center'>
      {techList.map((tech) => <TechBox key={tech.name} name={tech.name} icon={tech.icon} />)}
    </section>
  )
}

export default TechList
