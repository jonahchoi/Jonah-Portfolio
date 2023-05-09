import React from 'react'
import TechList from './TechList'

const HomePage = () => {

  return (
    <section className='h-screen w-screen flex flex-col justify-center items-center md:flex-row '>
      <div className='flex flex-col gap-5 w-[90%] md:w-[50%]'>
        <h1 className='text-4xl font-bold md:text-7xl text-secondary-color'>Full Stack <br/> Software Engineer</h1>
        <p>Hi, I&apos;m Jonah Choi. An ingenuitive Software Engineer based in San Diego, CA.</p>
        <div className='flex gap-5 items-center my-5'>
          <h3>My Tech:</h3>
          <TechList />
        </div>
      </div>
      <div className='w-[300px] h-[300px] bg-black relative z-10
      after:content-[""] after:bg-primary-color after:rounded-full after:absolute after:h-[600px] after:w-[600px] after:z-[-1] after:m-0 after:p-0
      md:after:h-[2000px] md:after:w-[2000px] md:after:top-1/2 md:after:left-1/2 md:after:translate-x-[-15%] md:after:translate-y-[-50%]'>
        image here
      </div>
    </section>
  )
}


export default HomePage
