const ParticleParams = {
  particles: {
    line_linked: {
      enable: true,
    },
    number: {
      value: 30,
    },
    size: {
      value: 3,
    },
    move: {
      speed: 5,
    },
  },
  interactivity: {
    events: {
      onhover: {
        distance: 500,
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

export default ParticleParams;
