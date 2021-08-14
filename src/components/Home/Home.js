import React from 'react';
// import ParticleBackground from './ParticleBackground';
import ParticleBackground from './ParticleBg';

const Home = () => {
  const handleMenuClick = (event) => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section data-index="0" id="home">
      <ParticleBackground />

      <p className="navLinks"
        onClick={handleMenuClick}
      >
        V
      </p>

    </section>
  );
};

export default Home;
