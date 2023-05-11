'use client';
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Nav from './Nav';
import Menu from './Menu';
import Footer from './Footer';
import { Element, scroller } from 'react-scroll';
import { sectionNames } from '../src/tools/sections.js'

interface SectionPositions {
  [key: string]: {
    top: number;
    bottom: number;
  };
}


const Page = (): JSX.Element => {
  const [currentSection, setCurrentSection] = useState<string>('');
  const [lastScrollTime, setLastScrollTime] = useState<number>(0);
  const [isMobile, setisMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateSection = (section: string): void => {
    setCurrentSection(section)
  }

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();

    const currentTime = performance.now();
    const timeSinceLast = currentTime - lastScrollTime;
    setLastScrollTime(currentTime);

    if (timeSinceLast < 200) {
      return;
    }

    const delta = event.deltaY;
    const scrollPosition = window.scrollY;
    let currentIndex = sectionNames.indexOf(currentSection);
    let newIndex = currentIndex;

    if (delta > 0 && currentIndex < sectionNames.length - 1) {
      newIndex = currentIndex + 1
    } else if (delta < 0 && currentIndex > 0) {
      newIndex = currentIndex - 1
    }

    if (newIndex !== currentIndex) {
      const newCurrentSection = sectionNames[newIndex];
      setCurrentSection(newCurrentSection);
      handleSectionChange(newCurrentSection);
    }
  }, [currentSection, lastScrollTime]);

  const handleSectionChange = useCallback((to: string) => {
    scroller.scrollTo(to, {
      duration: 300,
      smooth: 'easeInOutQuart',
    });
  }, []);

  function handleWindowSizeChange() {
    setisMobile(window.innerWidth < 768);
  }
  useEffect(() => {
    if (!isMobile && !isLoading) {
      const sectionPositions: SectionPositions = {};
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const sectionName = (section as HTMLElement).dataset.section || '';
        const position = section.getBoundingClientRect();
        sectionPositions[sectionName] = {
          top: position.top + window.scrollY,
          bottom: position.bottom + window.scrollY,
        };
      });

      const scrollPosition = window.scrollY;
      let newCurrentSection = currentSection;
      for (const [section, position] of Object.entries(sectionPositions)) {
        if (scrollPosition >= position.top && scrollPosition < position.bottom) {
          newCurrentSection = section;
          break;
        }
      }
      setCurrentSection(newCurrentSection);
      handleSectionChange(newCurrentSection);
    }
  }, [isMobile, isLoading]);

  useEffect(() => {
    handleWindowSizeChange();
    setIsLoading(false);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      console.log('isnotmobile')
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel, isMobile]);

  return (
    <div className=''>
      {!isLoading &&
      <>
        <Menu updateSection={updateSection} currentSection={currentSection} />
        {!isMobile && <Nav updateSection={updateSection} currentSection={currentSection} />}
        <Element name="Home" data-section="Home">
          <HomePage updateSection={updateSection} />
        </Element>
        <Element name="About" data-section="About">
          <About />
        </Element>
        {/* <Element name="Tech" data-section="Tech">
          <TechList />
        </Element> */}
        <Element name="Projects" data-section="Projects">
          <Projects />
        </Element>
        <Element name="Contact" data-section="Contact">
          <Contact />
        </Element>
        <Element name="Footer" data-section="Footer">
          <Footer updateSection={updateSection} />
        </Element>

      </>}
    </div>
  );
};

export default Page;
