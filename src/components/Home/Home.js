import React from 'react';
import Fade from 'react-reveal/Fade';
import ParticleBackground from './ParticleBg';
import ContactItems from '../Contact/ContactItems';

const Home = () => {
  const handleButtonClick = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section data-index="0" id="home">
      <ParticleBackground />

      <Fade bottom delay={800}>
        <div className="homeContact">
          {ContactItems.map((item) => {
            return (
              <a href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                key={item.name}
              >
                <i className={item.icon} />
              </a>
            );
          })}
        </div>
      </Fade>

      <Fade bottom delay={1000}>
        <div id="downButton">
          <i className="fas fa-chevron-circle-down"
            onClick={handleButtonClick}
            role="button"
            tabIndex={0}
            aria-label="downbutton"
          />
          <p>
            See More
          </p>
        </div>
      </Fade>

    </section>
  );
};

export default Home;
