import React from 'react';
import About from './about';
import Education from './education';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

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
