import React from 'react'
import { FiGithub } from 'react-icons/fi'

interface ProjectProps {
  title: string,
  description: string,
  image: string,
  link: string
}

const ProjectBox = ({ title, description, image, link}: ProjectProps) => {
  return (
    <div className='flex w-[90%] md:w-[70%] xl:w-[50%] h-[40%] gap-10 p-2'>
      <div className='h-full w-[40%] bg-white'>s</div>
      <div className='w-[50%]'>
        <h2 className='text-3xl'>{title}</h2>
        <p>{description}</p>
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
