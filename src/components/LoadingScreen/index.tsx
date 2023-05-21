import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const LeftHalfVariant = {
    initial: {
      x: 0
    },
    animate: {
      x: '-100%',
      transition: {
        when: 'afterChildren',
        delay: 1,
        duration: 1.25,
        type: 'easeOut',
        damping: 18
      }
    }
  }
  const RightHalfVariant = {
    initial: {
      x: 0
    },
    animate: {
      x: '100%',
      transition: {
        when: 'afterChildren',
        delay: 1,
        duration: 1.25,
        type: 'easeOut',
        damping: 18
      }
    }
  }
  const LeftLogoVariant = {
    initial: {
      x: 0
    },
    animate: {
      x: '100%',
      transition: {
        duration: 2,
        type: 'spring',
        damping: 18
      }
    }
  }
  const RightLogoVariant = {
    initial: {
      x: 0
    },
    animate: {
      x: '-100%',
      transition: {
        duration: 2,
        type: 'spring',
        damping: 18
      }
    }
  }

  return (
    <div
      className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center z-50 pointer-events-none'
    >
      {/* Left Half */}
      <motion.div
        className='h-full w-1/2 flex justify-end items-center bg-white'
        variants={LeftHalfVariant}
        initial='initial'
        animate='animate'
      >
        <motion.div
          className='relative font-black text-8xl bg-secondary-color text-white h-[140px] w-[75px] flex justify-center items-center overflow-hidden'
        >
          J
          <motion.div
            className='absolute top-0 left-0 bg-white w-full h-full'
            layout
            variants={LeftLogoVariant}
          />
        </motion.div>
      </motion.div>

      {/* Right Half */}
      <motion.div
        className='h-full w-1/2 flex justify-start items-center bg-white'
        variants={RightHalfVariant}
        initial='initial'
        animate='animate'
      >
        <motion.div
          className='relative font-black text-8xl bg-secondary-color text-white h-[140px] w-[75px] flex justify-center items-center pr-2 overflow-hidden'

        >
          C
          <motion.div
            className='absolute top-0 left-0 bg-white w-full h-full'
            layout
            variants={RightLogoVariant}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
