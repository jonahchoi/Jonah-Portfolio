import React from 'react'
import { FiGithub } from 'react-icons/fi'
import Image from 'next/image'

interface ProjectProps {
  title: string,
  description: string,
  stack: string[],
  image: string,
  link: string
}

const ProjectBox = ({ title, description, stack, image, link}: ProjectProps) => {
  // <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
  return (
    <div className='flex flex-col justify-center items-center h-full  xl:px-20 xl:flex-row gap-10 p-2'>
      <div className='w-[80%] md:w-[70%] xl:w-auto'>
        <Image src={image} width={500} height={500} alt='Screenshot of project website'></Image>
      </div>
      <div className='w-[75%] xl:w-[50%]'>
        <h2 className='text-3xl'>{title}</h2>
        <p>{description}</p>
        <div>
          Stack: {stack.map((tech, i) => <span key={i}>{tech}{i < stack.length - 1 && ', '}</span>)}
        </div>
        <div className='flex text-2xl'>
          <a
            title='Github'
            href={link}
            target="_blank"
            className='cursor-pointer'
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox
