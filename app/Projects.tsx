import React from 'react'
import ProjectBox from './ProjectBox'

const Projects = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-7xl'>Projects</h1>
      <ProjectBox title={'Project1'} description={`Use pointer-events-auto to revert to the default browser behavior for pointer events (like :hover and click). Use pointer-events-none to make an element ignore pointer events. The pointer events will still trigger on child elements and pass-through to elements that are “beneath” the target.`} image={''} link={''}/>
    </section>
  )
}

export default Projects
