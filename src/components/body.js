import React from 'react';

import Home from './Home/Home';
import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Personal from './Personal/Personal';
import Contact from './Contact/Contact';

const Body = (props) => {
  return (
    <main>
      <Home />
      <div ref={props.aboRef}>
        <About />
      </div>
      <div ref={props.eduRef}>
        <Education />
      </div>
      <div ref={props.expRef}>
        <Experience />
      </div>
      <div ref={props.projRef}>
        <Projects />
      </div>
      <div ref={props.persRef}>
        <Personal />
      </div>
      <div ref={props.contRef}>
        <Contact />
      </div>

    </main>
  );
};

export default Body;
