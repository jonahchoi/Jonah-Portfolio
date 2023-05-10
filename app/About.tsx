import React from 'react'
import TechList from './TechList'

const About = () => {
  return (
    <section className='h-[75vh] md:h-screen flex flex-col justify-center items-center'>

      <h1 className='text-4xl font-bold md:text-7xl text-secondary-color'>About Me</h1>
      <div className='flex justify-center items-center'>
        <p className='w-[85%] md:w-1/2'>I&apos;m a Software Engineer specializing in web development. I strive to bring unique ideas to life. You can find me contemplating layouts and adjusting margins.
        <br/>
        <br/>
        In my free time, I love playing games, dancing, and spending time with friends and family.
        </p>
      </div>
      <div className='flex flex-col gap-5 items-center my-5 w-[85%] md:w-[50%]'>
          <h3>My Tech:</h3>
          <TechList />
        </div>
    </section>
  )
}

export default About
