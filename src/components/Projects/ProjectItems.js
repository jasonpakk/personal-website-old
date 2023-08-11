import doodlegram from '../../img/mockup/doodlegram.gif';
import vitalize from '../../img/mockup/vitalize.gif';
import holistic from '../../img/mockup/holistic.gif';
import minesweeper from '../../img/mockup/mines.gif';
import spaceInvaders from '../../img/mockup/spaceinvaders.gif';
import tse from '../../img/mockup/tse.png';
import sketch from '../../img/mockup/sketch.gif';
import notes from '../../img/mockup/notes.gif';
import buzzfeed from '../../img/mockup/buzzfeed.gif';
import fitkitch from '../../img/mockup/fitkitch.gif';
import jpme from '../../img/mockup/jpme.gif';

const ProjectItems = [
  {
    project: 'AR Drum Set',
    description: 'A virtual drum that uses Augmented Reality to allow users to easily record and save their own drum tracks.',
    filter: 'arvr mobile',
    img: {
      src: 'https://media.giphy.com/media/GnDCiHLuGZD7zmrNOM/giphy-downsized-large.gif',
      style: {
        width: '370px',
        borderRadius: '0.25rem',
        boxShadow: '5px 5px 5px rgba(0,0,0,0.4)',
        marginRight: '1rem',
      },
    },
    languages: [
      {
        name: 'Unity',
        bg: '#000',
        color: '#fff',
      },
      {
        name: 'C#',
        bg: '#953dac',
        color: '#fff',
      },
      {
        name: 'Android Studio',
        bg: '#92c755',
        color: '#fff',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'https://github.com/JY2452/AR-Drumset',
        text: 'Repo',
      },
      {
        name: 'fa-brands fa-youtube youtubeIcon',
        link: 'https://youtu.be/DfeqlA-RrQQ',
        text: 'Demo',
      },
    ],
  },
  {
    project: 'Doodlegram',
    description: 'A social media site where users can share doodles with others. For the frontend, I used React. For the backend, I built a CRUD API server using Node.js, Express, and mongoDB.',
    filter: 'web',
    img: {
      src: doodlegram,
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'React',
        bg: '#61DBFB',
        color: '#03071e',
      },
      {
        name: 'Node.js',
        bg: '#3C873A',
        color: '#f8f9fa',
      },
      {
        name: 'HTML',
        bg: '#e34c26',
        color: 'f8f9fa',
      },
      {
        name: 'CSS',
        bg: '#1496d0',
        color: 'f8f9fa',
      },
      {
        name: 'Javascript',
        bg: '#f0db4f',
        color: '#03071e',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'https://github.com/JY2452/doodlegram-FE',
        text: 'Repo (FE)',
      },
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'https://github.com/JY2452/doodlegram-BE',
        text: 'Repo (BE)',
      },
      {
        name: 'fa-solid fa-desktop desktopIcon',
        link: 'https://doodlegram.netlify.app',
        text: 'Website',
      },
    ],
  },
  {
    project: 'FitKitch',
    description: 'A mobile app that gamifies excercise to encourage individuals to stay fit. The app uses user data from Apple Healthkit to help users set daily workout goals.',
    description2: 'Users unlock ingredients by completing their daily goal, and work in "kitchens" with other users to collaboratively unlock the dish of the day!',
    filter: 'mobile',
    mobile: true,
    img: {
      src: fitkitch,
      style: {
        width: '160px',
        marginLeft: '60px',
        marginRight: '60px',
      },
    },
    languages: [
      {
        name: 'React Native',
        bg: '#03071e',
        color: '#61DBFB',
      },
      {
        name: 'React',
        bg: '#61DBFB',
        color: '#03071e',
      },
      {
        name: 'Node.js',
        bg: '#3C873A',
        color: '#f8f9fa',
      },
      {
        name: 'HTML',
        bg: '#e34c26',
        color: 'f8f9fa',
      },
      {
        name: 'CSS',
        bg: '#1496d0',
        color: 'f8f9fa',
      },
      {
        name: 'Javascript',
        bg: '#f0db4f',
        color: '#03071e',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
  {
    project: 'Space Colony',
    description: 'A virtual reality farming simulator. The game is set in the final frontier and players can harvest crops, decorate the land with structures, and grow animals.',
    filter: 'arvr',
    img: {
      src: 'https://media.giphy.com/media/SUHiCbpp1eobkpfc1T/giphy-downsized-large.gif',
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'Unity',
        bg: '#000',
        color: '#fff',
      },
      {
        name: 'C#',
        bg: '#953dac',
        color: '#fff',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-youtube youtubeIcon',
        link: 'https://youtu.be/qVChgCFsS1k',
        text: 'Demo',
      },
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
  {
    project: 'Vitalize App + Dashboard',
    description: 'I worked in a team to build the first ever wellness app tailored to healthcare professionals.',
    description2: 'In addition, I wrote algorithms to filter app data in the backend API, then created a webpage to visually represent this data in an User Analytics Dashboard.',
    filter: 'web mobile',
    img: {
      src: vitalize,
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'React Native',
        bg: '#03071e',
        color: '#61DBFB',
      },
      {
        name: 'React',
        bg: '#61DBFB',
        color: '#03071e',
      },
      {
        name: 'Node.js',
        bg: '#3C873A',
        color: '#f8f9fa',
      },
      {
        name: 'HTML',
        bg: '#e34c26',
        color: 'f8f9fa',
      },
      {
        name: 'CSS',
        bg: '#1496d0',
        color: 'f8f9fa',
      },
      {
        name: 'Javascript',
        bg: '#f0db4f',
        color: '#03071e',
      },
    ],
    icons: [
      {
        name: 'fa-solid fa-desktop desktopIcon',
        link: 'https://vitalizecare.co/',
        text: 'Organization Website',
      },
    ],
  },
  {
    project: 'VR Solar System Simulator',
    description: 'A model of the solar system in Virtual Reality. A user can interact with the different planets to better visualize and understand the complexities that lie in the celestial world.',
    filter: 'arvr',
    img: {
      src: 'https://media.giphy.com/media/wK3LzfKDJg3W8SwosH/giphy-downsized-large.gif',
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'Unity',
        bg: '#000',
        color: '#fff',
      },
      {
        name: 'C#',
        bg: '#953dac',
        color: '#fff',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-youtube youtubeIcon',
        link: 'https://youtu.be/jzn9STFVCxM',
        text: 'Demo',
      },
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
  {
    project: 'Holistic Ranching',
    description: 'A full-stack webpage built to assist ranchers in monitoring cattle weight for succesful calving and breeding cycles.',
    description2: 'For the frontend, I used React. For the backend, I built a CRUD API server using Node.js, Express, and mongoDB.',
    filter: 'web',
    img: {
      src: holistic,
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'React',
        bg: '#61DBFB',
        color: '#03071e',
      },
      {
        name: 'Node.js',
        bg: '#3C873A',
        color: '#f8f9fa',
      },
      {
        name: 'HTML',
        bg: '#e34c26',
        color: 'f8f9fa',
      },
      {
        name: 'CSS',
        bg: '#1496d0',
        color: 'f8f9fa',
      },
      {
        name: 'Javascript',
        bg: '#f0db4f',
        color: '#03071e',
      },
    ],
    icons: [
      {
        name: 'fa-solid fa-desktop desktopIcon',
        link: 'https://holisticranching.netlify.app',
        text: 'Website',
      },
    ],
  },
  {
    project: 'jasonpak.me',
    description: 'What you are seeing right now! A personal website applying my skills in web development and UI/UX Design.',
    filter: 'web',
    img: {
      src: jpme,
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'React',
        bg: '#61DBFB',
        color: '#03071e',
      },
      {
        name: 'HTML',
        bg: '#e34c26',
        color: 'f8f9fa',
      },
      {
        name: 'CSS',
        bg: '#1496d0',
        color: 'f8f9fa',
      },
      {
        name: 'Javascript',
        bg: '#f0db4f',
        color: '#03071e',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'https://github.com/JY2452/jasonpak.me',
        text: 'Repo',
      },
      {
        name: 'fa-solid fa-desktop desktopIcon',
        link: 'https://jasonpak.me/',
        text: 'Website',
      },
    ],
  },
  {
    project: 'Terrace Survival',
    description: 'A Unity game where the user is locked out on a terrace, and must scavenge and collect items to make themselves a meal and survive.',
    filter: 'arvr',
    img: {
      src: 'https://media.giphy.com/media/O5q7a8MMCOAm9CiAXB/giphy.gif',
      style: {
        width: '370px',
        borderRadius: '0.25rem',
        boxShadow: '5px 5px 5px rgba(0,0,0,0.4)',
        marginRight: '1rem',
      },
    },
    languages: [
      {
        name: 'Unity',
        bg: '#000',
        color: '#fff',
      },
      {
        name: 'C#',
        bg: '#953dac',
        color: '#fff',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'https://github.com/JY2452/terrace-survival',
        text: 'Repo',
      },
      {
        name: 'fa-brands fa-youtube youtubeIcon',
        link: 'https://youtu.be/THqoeknpMg0',
        text: 'Demo',
      },
    ],
  },
  {
    project: 'Bot-thoven',
    description: 'A xylophone-playing robot that is controlled using an Arduino microcontroller. I wrote a program in C++ that allows the user to program the robot to perform any desired tune.',
    filter: 'software',
    img: {
      src: 'https://media.giphy.com/media/BhIZiJYZ1FaVuQVpO6/giphy.gif',
      style: {
        width: '370px',
        borderRadius: '0.25rem',
        boxShadow: '5px 5px 5px rgba(0,0,0,0.4)',
        marginRight: '1rem',
      },
    },
    languages: [
      {
        name: 'C++',
        bg: '#02599d',
        color: 'f8f9fa',
      },
      {
        name: 'Arduino',
        bg: '#01989d',
        color: 'f8f9fa',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'https://github.com/JY2452/bot-thoven',
        text: 'Repo',
      },
      {
        name: 'fa-brands fa-youtube youtubeIcon',
        link: 'https://youtu.be/9Ag7zkTR_XE',
        text: 'Demo',
      },
      {
        name: 'fa-solid fa-desktop desktopIcon',
        link: 'https://hackaday.io/project/167574-bot-thoven-a-robot-musician',
        text: 'Website',
      },
    ],
  },
  {
    project: 'Tiny Search Engine',
    description: 'A three-part search engine that crawls the contents of webpages on a server, runs website indexing, and outputs a ranked list of pages based on the search query.',
    description2: 'Supports search modifiers such as the AND & OR keywords when determining what URLs to display back to the user.',
    filter: 'software',
    img: {
      src: tse,
      style: {
        height: '250px',
        objectFit: 'cover',
      },
    },
    languages: [
      {
        name: 'C',
        bg: '#394aab',
        color: '#f8f9fa',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
  {
    project: 'CollabNotes',
    description: 'A live note editing app where multiple users can collaborate on a noteboard at one time, and edits are updated live across all users on the current noteboard.',
    filter: 'web',
    img: {
      src: notes,
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'React',
        bg: '#61DBFB',
        color: '#03071e',
      },
      {
        name: 'Firebase',
        bg: '#ffa713',
        color: '#f4f5f4',
      },
      {
        name: 'HTML',
        bg: '#e34c26',
        color: 'f8f9fa',
      },
      {
        name: 'CSS',
        bg: '#1496d0',
        color: 'f8f9fa',
      },
      {
        name: 'Javascript',
        bg: '#f0db4f',
        color: '#03071e',
      },
    ],
    icons: [
      {
        name: 'fa-solid fa-desktop desktopIcon',
        link: 'https://frosty-villani-15fd5f.netlify.app',
        text: 'Website',
      },
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
  {
    project: 'Minesweeper',
    description: 'A Minesweeper clone that I built from scratch. The game supports functionality such as right-click to flag, different game levels, sound effects, and a high scores page.',
    filter: 'software',
    img: {
      src: minesweeper,
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'Java',
        bg: '#e37207',
        color: 'f8f9fa',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'https://github.com/JY2452/minesweeper',
        text: 'Repo',
      },
    ],
  },
  {
    project: 'Space Invaders',
    description: 'A simplified Space Invaders clone made in Python. The game supports functionality such as tracking user score, randomized enemy shooting, and tracking health with a health bar.',
    filter: 'software',
    img: {
      src: spaceInvaders,
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'Python',
        bg: '#FFD43B',
        color: '#03071e',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'https://github.com/JY2452/space-invaders',
        text: 'Repo',
      },
    ],
  },
  {
    project: 'Sketch Collaborator',
    description: 'A live multi-client platform where users can draw together! Supports different shape and line tools, colors, and functionality to move, recolor, and delete existing shapes.',
    filter: 'software',
    img: {
      src: sketch,
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'Java',
        bg: '#e37207',
        color: 'f8f9fa',
      },
    ],
    icons: [
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
  {
    project: 'BuzzFeed Quizzes',
    description: 'Three buzzfeed-style quizzes that I created. The website reads in a JSON file containing the questions and answer choices and renders it on the screen for users to play.',
    filter: 'web',
    img: {
      src: buzzfeed,
      style: {
        width: '400px',
      },
    },
    languages: [
      {
        name: 'HTML',
        bg: '#e34c26',
        color: 'f8f9fa',
      },
      {
        name: 'CSS',
        bg: '#1496d0',
        color: 'f8f9fa',
      },
      {
        name: 'Javascript',
        bg: '#f0db4f',
        color: '#03071e',
      },
    ],
    icons: [
      {
        name: 'fa-solid fa-desktop desktopIcon',
        link: 'https://dartmouth-cs52-21s.github.io/lab2-JY2452',
        text: 'Website',
      },
      {
        name: 'fa-brands fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
];

export default ProjectItems;
