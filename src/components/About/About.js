import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Typical from 'react-typical';
import LanguagesList from './LanguagesList';

const About = () => {
  return (
    <section data-index="1" id="about">
      <h2>About Me</h2>

      <Fade bottom>
        <div id="aboutBody">
          <div>
            <div id="portrait" />
          </div>
          <Slide right>
            <div id="aboutText">
              <Typical
                steps={['> ', 1500, '> Hello world! 👋', 3000]}
                loop={Infinity}
                wrapper="h3"
              />
              <p>
                My name is<b>Jason</b>and I&apos;m a<b>Sophomore (&apos;24) at Dartmouth</b>studying Computer Science.
                Currently, I work as a<b>Software Engineer</b>at the
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="http://dali.dartmouth.edu/"
                >DALI Lab
                </a>
                where I enjoy building software for companies around the world. In January of 2023, I will also be joining
                <a target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.mathworks.com/"
                >MathWorks
                </a>as an intern for their Engineering Development Group.
                Scroll below to read more about the exciting projects and experiences I have been a part of! 😀
              </p>
            </div>
          </Slide>
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
