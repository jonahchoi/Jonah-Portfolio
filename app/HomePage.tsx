import React from 'react'
import TechList from './TechList'

const HomePage = () => {
  return (
    <section className='h-screen flex justify-center items-center gap-28'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-7xl'>Full Stack <br/> Software Engineer</h1>
        <p>Hi, I&apos;m Jonah Choi. A passionate Software Engineer based in San Diego, CA.</p>
        <div className='flex gap-5 items-center my-5'>
          <h3>My Tech:</h3>
          <TechList />
        </div>
      </div>
      <div className='w-[300px] h-[300px] bg-gray-200'>
        image here
      </div>
    </section>
  )
}


export default HomePage
