import React from 'react';
import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Body = () => {
  return (
    <main>
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Body;
