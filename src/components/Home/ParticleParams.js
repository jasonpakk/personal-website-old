const ParticleParams = {
  particles: {
    line_linked: {
      enable: true,
    },
    number: {
      value: 50,
    },
    size: {
      value: 1,
    },
    move: {
      speed: 10,
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
