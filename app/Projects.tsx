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
    image: '/CardAnimation.gif',
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
    after:content-[""] after:bg-secondary-color after:absolute after:h-[600px] after:w-[600px] after:z-[-1] after:m-0 after:p-0 after:rotate-[10deg]
      md:after:h-full md:after:w-[3000px] '>
      <h1 className='text-4xl font-bold md:text-7xl text-primary-color'>Projects</h1>
      <div className='w-[90%] md:w-[70%]'>
        <Carousel
          indicators={false}
          slide={false}
          leftControl={<BiCaretLeftCircle className='text-4xl' />}
          rightControl={<BiCaretRightCircle className='text-4xl' />}
        >
          <ProjectBox
            title={'Braking Friendships'}
            description={`A recreation of the popular board game, Exploding Kittens, featuring online multiplayer, in-game chat, and custom profiles.`}
            stack={['JavaScript', 'React', 'HTML', 'CSS', 'Socket.io', 'Framer Motion', 'Node/Express', 'MongoDB']}
            image={'/CardAnimation.gif'}
            link={'https://github.com/jonahchoi/Braking-Friendships'}
          />
          <ProjectBox
            title={'This Portfolio (inception?)'}
            description={`A web developer portfolio designed and developed by yours truly.`}
            stack={['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'TailwindCSS', 'Next.js']}
            image={'/CardAnimation.gif'}
            link={'https://github.com/jonahchoi/Jonah-Portfolio'}
          />
          <ProjectBox
            title={'Atelier'}
            description={`A RESTful API for an ecommerce website designed with a microservice architecture.`}
            stack={['PostgreSQL', 'Node/Express', 'NGINX', 'AWS', 'Loader.io',]}
            image={'/CardAnimation.gif'}
            link={'https://github.com/jonahchoi/Atelier-QnA-API'}
          />
        </Carousel>
      </div>


      {/* <ProjectBox
        title={'Braking Friendships'}
        description={`A recreation of the popular board game, Exploding Kittens, featuring online multiplayer, in-game chat, and custom profiles.`}
        stack={['JavaScript', 'React', 'HTML', 'CSS', 'Socket.io', 'Framer Motion', 'Node/Express', 'MongoDB']}
        image={'/CardAnimation.gif'}
        link={'https://github.com/jonahchoi/Braking-Friendships'}
      />
      <ProjectBox
        title={'This Portfolio (inception?)'}
        description={`A web developer portfolio designed and developed by yours truly.`}
        stack={['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'TailwindCSS', 'Next.js']}
        image={'/CardAnimation.gif'}
        link={'https://github.com/jonahchoi/Jonah-Portfolio'}
      />
      <ProjectBox
        title={'Atelier'}
        description={`A RESTful API for an ecommerce website designed with a microservice architecture.`}
        stack={['PostgreSQL', 'Node/Express', 'NGINX', 'AWS', 'Loader.io',]}
        image={'/CardAnimation.gif'}
        link={'https://github.com/jonahchoi/Atelier-QnA-API'}
      /> */}
    </section>
  )
}

export default Projects
/*
const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={image.id}
                  image={image}
                  layout="fill"
                  objectFit="contain"
                  className="animate-fadeIn"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
*/