const ParticleParams = {
  particles: {
    shape: {
      type: 'images',
      images: [
        {
          src: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
          height: 1,
          width: 2,
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
          height: 1.2,
          width: 1,
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
          height: 1,
          width: 1,
        },
        {
          src: 'https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png',
          height: 1,
          width: 1.5,
        },
        {
          src: 'https://img.icons8.com/color/452/c-programming.png',
          height: 1,
          width: 1,
        },
        {
          src: 'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png',
          height: 1,
          width: 3,
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
          height: 1,
          width: 2,
        },
      ],
    },
    line_linked: {
      enable: false,
    },
    number: {
      value: 15,
    },
    size: {
      value: 20,
    },
    move: {
      speed: 3,
      out_mode: 'out',
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

export default ParticleParams;
