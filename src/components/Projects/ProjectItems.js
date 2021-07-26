import jpme from '../../img/jpme.png';
import botthoven from '../../img/botthoven.png';

const ProjectItems = [
  {
    project: 'jasonpak.me',
    description: 'What you are seeing right now! A personal project applying my skills in web development and UI/UX Design.',
    img: {
      src: jpme,
      width: '300px',
    },
    bg: '#6D9DC5',
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
      {
        name: 'React',
        bg: '#61DBFB',
        color: '#03071e',
      },
    ],
    icons: [
      {
        name: 'fab fa-github githubIcon',
        link: 'https://github.com/JY2452/jasonpak.me',
      },
      {
        name: 'fas fa-desktop desktopIcon',
        link: 'https://jasonpak.me/',
      },
    ],
  },
  {
    project: 'Bot-thoven',
    description: 'A xylophone-playing robot that is controlled using an Arduino microcontroller. I wrote a program in C++ that allows the user to program the robot to perform any desired tune.',
    img: {
      src: botthoven,
      width: '250px',
    },
    bg: '#52b788',
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
      },
      {
        name: 'fab fa-youtube youtubeIcon',
        link: 'https://youtu.be/9Ag7zkTR_XE',
      },
    ],
  },
];

export default ProjectItems;
