import doodlegram from '../../img/doodlegram.gif';
import vitalize from '../../img/vitalize.gif';
import holistic from '../../img/holistic.gif';
import jpme from '../../img/jpme.gif';
import botthoven from '../../img/botthoven.gif';
import nuggets from '../../img/nuggets.gif';
import minesweeper from '../../img/mines.gif';
import spaceInvaders from '../../img/spaceinvaders.gif';
import tse from '../../img/tse.png';
import sketch from '../../img/sketch.gif';

const ProjectItems = [
  {
    project: 'Doodlegram',
    description: 'A social media site where users can share doodles with others. For the frontend, I used React. For the backend, I built a CRUD API server using Node.js, Express, and mongoDB.',
    filter: 'personal',
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
        name: 'fab fa-github githubIcon',
        link: 'https://github.com/JY2452/doodlegram-FE',
        text: 'Repo (FE)',
      },
      {
        name: 'fab fa-github githubIcon',
        link: 'https://github.com/JY2452/doodlegram-BE',
        text: 'Repo (BE)',
      },
      {
        name: 'fas fa-desktop desktopIcon',
        link: 'https://doodlegram.netlify.app',
        text: 'Website',
      },
    ],
  },
  {
    project: 'Vitalize App + Dashboard',
    description: 'I worked in a team to build the first ever wellness app tailored to healthcare professionals.',
    description2: 'In addition, I wrote algorithms to filter app data in the backend API, then created a webpage to visually represent this data in an User Analytics Dashboard.',
    filter: 'team',
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
        name: 'fas fa-desktop desktopIcon',
        link: 'https://vitalize.tech/',
        text: 'App Website',
      },
    ],
  },
  {
    project: 'Holistic Ranching',
    description: 'A full-stack webpage built to assist ranchers in monitoring cattle weight for succesful calving and breeding cycles.',
    description2: 'For the frontend, I used React. For the backend, I built a CRUD API server using Node.js, Express, and mongoDB.',
    filter: 'team',
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
        name: 'fas fa-desktop desktopIcon',
        link: 'https://holisticranching.netlify.app',
        text: 'Website',
      },
    ],
  },
  {
    project: 'jasonpak.me',
    description: 'What you are seeing right now! A personal website applying my skills in web development and UI/UX Design.',
    filter: 'personal',
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
        name: 'fab fa-github githubIcon',
        link: 'https://github.com/JY2452/jasonpak.me',
        text: 'Repo',
      },
      {
        name: 'fas fa-desktop desktopIcon',
        link: 'https://jasonpak.me/',
        text: 'Website',
      },
    ],
  },
  {
    project: 'Bot-thoven',
    description: 'A xylophone-playing robot that is controlled using an Arduino microcontroller. I wrote a program in C++ that allows the user to program the robot to perform any desired tune.',
    filter: 'personal',
    img: {
      src: botthoven,
      style: {
        width: '370px',
        borderRadius: '0.25rem',
        boxShadow: '2px 2px 0px rgba(0,0,0,0.4)',
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
        name: 'fab fa-github githubIcon',
        link: 'https://github.com/JY2452/bot-thoven',
        text: 'Repo',
      },
      {
        name: 'fab fa-youtube youtubeIcon',
        link: 'https://youtu.be/9Ag7zkTR_XE',
        text: 'Demo',
      },
      {
        name: 'fas fa-desktop desktopIcon',
        link: 'https://hackaday.io/project/167574-bot-thoven-a-robot-musician',
        text: 'Website',
      },
    ],
  },
  {
    project: 'Nuggets',
    description: 'A multi-player exploration game where users try to collect more gold nuggets than any other player.',
    description2: 'Wrote unit and integration tests to ensure both the server and client ran as intended.',
    filter: 'coursework',
    img: {
      src: nuggets,
      style: {
        width: '400px',
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
        name: 'fab fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
  {
    project: 'Minesweeper',
    description: 'A Minesweeper clone that I built from scratch. The game supports functionality such as right-click to flag, different game levels, sound effects, and a high scores page.',
    filter: 'personal',
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
        name: 'fab fa-github githubIcon',
        link: 'https://github.com/JY2452/minesweeper',
        text: 'Repo',
      },
    ],
  },
  {
    project: 'Tiny Search Engine',
    description: 'A three-part search engine that crawls the contents of webpages on a server, runs website indexing, and outputs a ranked list of pages based on the search query.',
    description2: 'Supports search modifiers such as the AND & OR keywords when determining what URLs to display back to the user.',
    filter: 'coursework',
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
        name: 'fab fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
  {
    project: 'Space Invaders',
    description: 'A simplified Space Invaders clone made in Python. The game supports functionality such as tracking user score, randomized enemy shooting, and tracking health with a health bar.',
    filter: 'personal',
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
        name: 'fab fa-github githubIcon',
        link: 'https://github.com/JY2452/space-invaders',
        text: 'Repo',
      },
    ],
  },
  {
    project: 'Sketch Collaborator',
    description: 'A live multi-client platform where users can draw together! Supports different shape and line tools, colors, and functionality to move, recolor, and delete existing shapes.',
    filter: 'coursework',
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
        name: 'fab fa-github githubIcon',
        link: 'mailto:jaeyoung.pak8@gmail.com',
        text: 'Contact to View Repo',
      },
    ],
  },
];

export default ProjectItems;
