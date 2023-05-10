import React, { useState } from 'react'
import ProjectBox from './ProjectBox'
import { Carousel } from 'flowbite-react'
import { BiCaretLeftCircle, BiCaretRightCircle } from 'react-icons/bi'

const ProjectInfo = [
  {
    title: 'Braking Friendships',
    description: `A recreation of the popular board game, Exploding Kittens, featuring online multiplayer, in-game chat, and custom profiles.`,
    stack: ['JavaScript', 'React', 'HTML', 'CSS', 'Socket.io', 'Framer Motion', 'Node/Express', 'MongoDB'],
    image: '/CardAnimation.gif',
    link: 'https://github.com/jonahchoi/Braking-Friendships',
  },
  {
    title: 'This Portfolio (inception?)',
    description: `A web developer portfolio designed and developed by yours truly.`,
    stack: ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'TailwindCSS', 'Next.js'],
    image: '/PortfolioSS.PNG',
    link: 'https://github.com/jonahchoi/Jonah-Portfolio',
  },
  {
    title: 'Atelier',
    description: `A RESTful API for an ecommerce website designed with a microservice architecture.`,
    stack: ['PostgreSQL', 'Node/Express', 'NGINX', 'AWS', 'Loader.io',],
    image: '/CardAnimation.gif',
    link: 'https://github.com/jonahchoi/Atelier-QnA-API',
  }
]

const Projects = () => {


  return (
    <section className='h-screen flex flex-col justify-center items-center gap-10 text-white relative
    after:content-[""] after:bg-secondary-color after:absolute after:h-full after:w-[3000px] after:z-[-1] after:m-0 after:p-0 after:rotate-[10deg]
      md:after:h-full md:after:w-[3000px] '>
      <h1 className='text-4xl font-bold md:text-7xl text-primary-color'>Projects</h1>
      <div className='w-[90%] md:w-[70%] p-0 h-1/2'>
        <Carousel
          indicators={false}
          slide={false}
          leftControl={<BiCaretLeftCircle className='text-4xl' />}
          rightControl={<BiCaretRightCircle className='text-4xl' />}
          className=''
        >
          {ProjectInfo.map((project) => (<ProjectBox
            key={project.link}
            title={project.title}
            description={project.description}
            stack={project.stack}
            image={project.image}
            link={project.link}
          />))}
        </Carousel>
      </div>
    </section>
  )
}

export default Projects