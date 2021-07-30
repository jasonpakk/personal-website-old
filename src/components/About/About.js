import React from 'react';
import Fade from 'react-reveal/Fade';
import LanguagesList from './LanguagesList';

const About = () => {
  return (
    <section data-index="1" id="about">
      <Fade bottom>
        <h2>About Me</h2>
      </Fade>
      <Fade bottom>
        <div id="aboutBody">
          <div id="portrait" />
          <div id="aboutText">
            <h3>Hello!</h3>
            <p>
              My name is <b>Jason</b> and I&apos;m a developer from Northern Virginia.
              Currently, I am a <b>Sophomore (&apos;24) at Dartmouth</b> where I am majoring in Computer Science.
              As a developer, I enjoy applying my skills in <b>full stack development</b> to create
              software in the form of websites or mobile apps.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div id="languages">
          <h3>Languages + Technologies</h3>
          <LanguagesList />
        </div>
      </Fade>

    </section>
  );
};

export default About;
