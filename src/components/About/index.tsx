import React from 'react'
import TechList from '../Tech'
import { motion } from 'framer-motion'
import { ContainerVariant, ChildrenVariant } from '@/src/constants/animationVariants'

const About = () => {
  return (
    <section className='h-[75vh] md:h-screen mt-1 flex justify-center items-center'>
      <div className='w-[90%] md:w-[75%] xl:w-[60%] h-full md:h-auto grid grid-flow-row auto-rows-min md:grid-rows-none md:grid-cols-2 md:gap-5'>
        <motion.div
          className='flex flex-col justify-center items-center mb-10 md:mb-0'
          variants={ContainerVariant}
          initial='initial'
          whileInView='inView'
          viewport={{ once: true }}
        >
          <motion.h2
            className='text-4xl font-bold md:text-7xl text-secondary-color mb-5'
            variants={ChildrenVariant}
          >
            About Me
          </motion.h2>
          <motion.p
            className=''
            variants={ChildrenVariant}
          >
            I&apos;m a Software Engineer specializing in web development. I strive to bring unique ideas to life. You can find me contemplating layouts and adjusting margins.
            <br/>
            <br/>
            In my free time, I love playing games, dancing, and spending time with friends and family.
          </motion.p>
        </motion.div>
        <div className='flex flex-col gap-2 xl:gap-5 justify-center items-center bg-white py-5 xl:py-10 w-full xl:w-[80%] m-auto drop-shadow-md'>
          <h3 className='text-2xl text-secondary-color'>Skills</h3>
          <TechList />
        </div>
      </div>
    </section>
  )
}

export default About
