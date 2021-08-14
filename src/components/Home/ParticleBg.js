import React from 'react';
import ParticleImage, { forces, Vector } from 'react-particle-image';

import img from '../../img/bg.png';

const ParticleBackground = () => {
  return (
    <ParticleImage
      className="particles"
      maxParticles={10000}
      backgroundColor="transparent"
      src={img}
      width={1000}
      height={500}
      mouseMoveForce={(x, y) => forces.disturbance(x, y, 10)}
      touchMoveForce={(x, y) => forces.disturbance(x, y, 10)}
      mouseDownForce={(x, y) => forces.disturbance(x, y, 50)}
      particleOptions={{
        mass: () => 40,
        filter: ({ x, y, image }) => {
          const pixel = image.get(x, y);
          return pixel.r === 255;
        },
        color: () => '#f8f9fa',
        friction: () => 0.30,
        initialPosition: ({ canvasDimensions }) => {
          return new Vector(
            canvasDimensions.width / 2,
            canvasDimensions.height / 2,
          );
        },
      }}
    />
  );
};

export default ParticleBackground;
