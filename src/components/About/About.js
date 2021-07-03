import React from 'react';
import Particles from 'react-particles-js';

const particleParams = {
  particles: {
    number: {
      value: 50,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

const About = () => {
  return (
    <section data-index="0" id="about">
      <Particles className="particles" params={particleParams} />
      <div id="aboutText">
        <h2>Hi, I&apos;m Jason.</h2>
        <p>I am a student at Dartmouth College.</p>
      </div>

    </section>
  );
};

export default About;
