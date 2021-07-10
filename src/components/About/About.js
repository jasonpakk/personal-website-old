import React from 'react';
import LanguagesList from './LanguagesList';

const About = () => {
  return (
    <section data-index="1" id="about">
      <h2>About Me</h2>
      <div id="aboutBody">
        <div id="portrait" />
        <div id="aboutText">
          <h3>Hi! I&apos;m Jason.</h3>
          <p>I am a Computer Science Major at Dartmouth, interested in Software Engineeringn</p>
        </div>
      </div>
      <div id="languages">
        <h3>Languages + Technologies</h3>
        <LanguagesList />
      </div>

    </section>
  );
};

export default About;
