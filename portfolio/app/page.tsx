'use client';
import React, { useCallback, useEffect, useState } from 'react';
import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import TechList from './TechList';
import Nav from './Nav';
import { Element, scroller } from 'react-scroll';

interface SectionPositions {
  [key: string]: {
    top: number;
    bottom: number;
  };
}

const sectionNames = ['Home', 'About', 'Tech', 'Projects'];

const Page = (): JSX.Element => {
  const [currentSection, setCurrentSection] = useState<string>('');
  const [lastScrollTime, setLastScrollTime] = useState(0);

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

  useEffect(() => {
    const sectionPositions: SectionPositions = {};
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => {
      const sectionName = section.dataset.section || '';
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
    if (newCurrentSection !== currentSection) {
      setCurrentSection(newCurrentSection);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  return (
    <div>
      <Nav />
      <Element className="h-screen" name="Home" data-section="Home">
        <HomePage />
      </Element>
      <Element className="h-screen bg-gray-400" name="About" data-section="About">
        <About />
      </Element>
      <Element className="h-screen" name="Tech" data-section="Tech">
        <TechList />
      </Element>
      <Element className="h-screen" name="Projects" data-section="Projects">
        <Projects />
      </Element>
    </div>
  );
};

export default Page;
