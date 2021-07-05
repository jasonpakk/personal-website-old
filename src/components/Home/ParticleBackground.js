import React from 'react';
import Particles from 'react-particles-js';
import ParticleParams from './ParticleParams';

const ParticleBackground = () => {
  return (
    <Particles className="particles" params={ParticleParams} />
  );
};

export default ParticleBackground;
