import React from 'react';
import ParticleBackground from './ParticleBackground';

const Home = () => {
  return (
    <section data-index="0" id="home">
      <ParticleBackground />
      <div id="homeText">
        <h2>Hi, I&apos;m Jason.</h2>
        <p>I am a Computer Science Major at Dartmouth College.</p>
      </div>

    </section>
  );
};

export default Home;
