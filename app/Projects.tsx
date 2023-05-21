import React, { useState } from 'react'
import ProjectBox from './ProjectBox'
import { Carousel } from 'flowbite-react'
import { BiCaretLeftCircle, BiCaretRightCircle } from 'react-icons/bi'
import { ContainerVariant, ChildrenVariant } from '@/src/constants/animationVariants'

const ProjectInfo = [
  {
    title: 'Braking Friendships',
    description: `A faithful recreation of the popular card game, Exploding Kittens, featuring online multiplayer, in-game chat, and custom profiles. Invite up to three friends to play a game with real-time updates and interactive UI.`,
    collaborators: 'Josh Garza, Hieu Ngo, Fernando Gamboa, Joseph Redmond, Eric Pei',
    stack: ['JavaScript', 'React', 'HTML', 'CSS', 'TailwindCSS', 'Socket.io', 'Framer Motion', 'Node/Express', 'MongoDB', 'Firebase'],
    image: '',
    githubLink: 'https://github.com/jonahchoi/Braking-Friendships',
  },
  {
    title: 'This Portfolio (inception?)',
    description: `A web developer portfolio designed and developed by yours truly.`,
    stack: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'TailwindCSS', 'Next.js'],
    image: '/PortfolioSS.PNG',
    liveLink: 'https://jonahchoi.vercel.app/',
    githubLink: 'https://github.com/jonahchoi/Jonah-Portfolio',
  },
  {
    title: 'Atelier',
    description: `A RESTful API for an ecommerce website designed with a microservice architecture. The architecture includes a PostgreSQL database, filled with over 3 million rows using an ETL process, two Node/Express servers with an MVC design, and an NGINX load-balancer.`,
    stack: ['PostgreSQL', 'Node/Express', 'NGINX', 'AWS', 'Loader.io',],
    image: '/postgres-schema-design.PNG',
    githubLink: 'https://github.com/jonahchoi/Atelier-QnA-API',
  }
]

const Projects = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center  text-white relative
    after:content-[""] after:bg-secondary-color after:absolute after:h-full after:w-[3000px] after:z-[-1] after:m-0 after:p-0 after:rotate-[10deg]
      md:after:h-full md:after:w-[3000px] '>
      <h2 className='text-4xl font-bold md:text-7xl text-primary-color'>Projects</h2>
      <div className='w-[90%] md:w-[70%] p-0 h-[90%] md:h-3/4 xl:h-1/2'>
        <Carousel
          indicators={false}
          slide={false}
          leftControl={<BiCaretLeftCircle className='text-4xl' />}
          rightControl={<BiCaretRightCircle className='text-4xl' />}
          className=''
        >
          {ProjectInfo.map((project) => (<ProjectBox
            key={project.githubLink}
            title={project.title}
            description={project.description}
            collaborators={project.collaborators}
            stack={project.stack}
            image={project.image}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />))}
        </Carousel>
      </div>
    </section>
  )
}

export default Projects