import React from 'react'
import Image from 'next/image'
import NavLink from './NavLink'

interface HomePageProps {
  updateSection: Function
}

const HomePage = ({ updateSection }: HomePageProps) => {

  return (
    <section className='h-screen w-screen flex flex-col justify-center items-center md:flex-row md:justify-evenly'>
      {/* First Half (holds title, text, and contact button) */}
      <div className='flex flex-col gap-5 w-[90%] md:w-[50%] pl-3 md:pl-0'>
        <h1 className='text-4xl font-bold md:text-7xl text-secondary-color'>Full Stack <br/> Software Engineer</h1>
        <p className='w-full'>Hi, I&apos;m <span className='text-secondary-color font-bold'>Jonah Choi</span>. An ingenuitive Software Engineer based in San Diego, CA.</p>
        <NavLink
          section='Contact'
          updateSection={updateSection}
          classNames='self-start'
        >
          <button className='border border-secondary-color text-secondary-color font-bold py-[10px] px-[50px] relative z-10 overflow-hidden self-start cursor-pointer
          after:content-[" "] after:bg-secondary-color after:w-full after:h-full after:absolute after:top-0 after:left-0 after:z-[-1] after:-translate-x-full hover:text-white hover:after:translate-x-0 after:transition-transform after:duration-300 focus:after:bg-blue-800'>
            Say Hello!

          </button>
        </NavLink>
      </div>
      {/* Second Half (holds profile picture and green circle) */}
      <div className='w-[300px] h-[350px] bg-black relative z-10 bg-transparent
      after:content-[""] after:bg-primary-color after:rounded-full after:absolute after:h-[400px] after:w-[400px] after:z-[-1] after:m-0 after:p-0 after:translate-x-[-50%] after:top-1/2 after:left-1/2 after:translate-y-[-37%]
      md:after:h-[1000px] md:after:w-[1000px] md:after:translate-x-[-20%]
      xl:after:h-[2000px] xl:after:w-[2000px] xl:after:translate-x-[-15%] md:after:translate-y-[-50%]'>
        <div className='h-full w-full overflow-hidden'>
          <Image src='/My project.png' width={500} height={500} alt='Profile picture of Jonah Choi' />

        </div>
      </div>
    </section>
  )
}


export default HomePage
