import doodlegram from '../../img/doodlegram.gif';
import jpme from '../../img/jpme.gif';
import botthoven from '../../img/botthoven.gif';
import minesweeper from '../../img/mines.gif';
import spaceInvaders from '../../img/spaceinvaders.gif';

const ProjectItems = [
  {
    project: 'Doodlegram',
    description: 'A social media site where users can share doodles with others. For the frontend, I used React. For the backend, I built a CRUD API server using Node.js, Express, and mongoDB.',
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
    project: 'jasonpak.me',
    description: 'What you are seeing right now! A personal website applying my skills in web development and UI/UX Design.',
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
    ],
  },
  {
    project: 'Minesweeper',
    description: 'A Minesweeper clone that I built from scratch. The game supports functionality such as right-click to flag, different game levels, sound effects, and a high scores page.',
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
    project: 'Space Invaders',
    description: 'A simplified Space Invaders clone made in Python. The game supports functionality such as tracking user score, randomized enemy shooting, and tracking health with a health bar.',
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
];

export default ProjectItems;
