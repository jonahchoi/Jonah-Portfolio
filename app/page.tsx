'use client';
import React, { useCallback, useEffect, useState } from 'react';
import HomePage from '@/src/components/HomePage';
import About from '@/src/components/About';
import Projects from '@/src/components/Projects';
import Contact from '@/src/components/Contact';
import Nav from '@/src/components/Nav';
import Menu from '@/src/components/Menu';
import Footer from '@/src/components/Footer/Footer';
import LoadingScreen from '@/src/components/LoadingScreen'
import { sectionNames } from '@/src/constants/sections'
import { Element, scroller } from 'react-scroll';

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
  const [showLoadingScreen, setShowLoadingScreen] = useState<boolean>(true);

  const updateSection = (section: string): void => {
    setCurrentSection(section)
  }

  const handleSectionChange = useCallback((to: string) => {
    scroller.scrollTo(to, {
      duration: 300,
      smooth: 'easeInOutQuart',
      ignoreCancelEvents: true
    });
  }, []);

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();

    const currentTime = performance.now();
    const timeSinceLast = currentTime - lastScrollTime;
    setLastScrollTime(currentTime);

    if (timeSinceLast < 200) {
      return;
    }

    const delta = event.deltaY;
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
  }, [currentSection, lastScrollTime, handleSectionChange]);

  const handleKey = useCallback((event: KeyboardEvent) => {
    let currentIndex = sectionNames.indexOf(currentSection);
    let newIndex = currentIndex;

    if ((event.key === 'ArrowDown' || event.key === 'PageDown') && currentIndex < sectionNames.length - 1) {
      newIndex = currentIndex + 1
    } else if ((event.key === 'ArrowUp' || event.key === 'PageUp') && currentIndex > 0) {
      newIndex = currentIndex - 1
    } else {
      return;
    }

    if (newIndex !== currentIndex) {
      const newCurrentSection = sectionNames[newIndex];
      setCurrentSection(newCurrentSection);
      handleSectionChange(newCurrentSection);
  }

  }, [currentSection, handleSectionChange])


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
    if(!isLoading) {
      let timeout = setTimeout(() => setShowLoadingScreen(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isMobile && !showLoadingScreen) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKey);
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleWheel, isMobile, showLoadingScreen]);

  return (
    <>
      {showLoadingScreen && <LoadingScreen />}
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
    </>
  );
};

export default Page;
