/* eslint-disable max-len */
const ExperienceItems = [
  {
    org: 'DALI Lab',
    logo: 'daliLogo',
    location: 'Hanover, NH',
    time: 'Sep 2021 - Present',
    titles: ['Core Leadership', 'Development Mentor', 'Software Engineer'],
    descrp: [
      'Outreach Chair and Marketing & Events Lead on the Core Leadership Team',
      'Built software products for companies around the world under 10-week deadlines by working in a team of developers, designers, and project managers',
      'Worked as a Developer Mentor to help new members learn unfamiliar frameworks and reviewed applications of potential new developers',
      'Created a video calling feature using the Agora.io SDK that allows users to anonymize their voice when participating in mental health coaching sessions (Fall 2021)',
      'Built a full-stack web application for Holistic Management International that helps ranchers monitor cattle weight during calving and breeding cycles (Winter 2022)',
      'Learned Ruby on Rails to debug the codebase for a sexual violence prevention program used by incoming first-years at Dartmouth (Summer 2022)',
      'Developed a mobile app in React Native that uses data from Apple Healthkit to gamify and personalize exercise for users (Summer 2022)',
      'Built a full-stack web application that makes use of the SMART goal framework to help orthopedic patients set effective healthcare goals (Fall 2022)',
    ],
  },
  {
    org: 'MathWorks',
    logo: 'mathworksLogo',
    location: 'Natick, MA',
    time: 'Jan 2023 - Mar 2023',
    titles: ['Software Engineer Intern'],
    descrp: [
      'Outreach Chair and Marketing & Events Lead on the Core Leadership Team',
      'Intern for the Engineering Development Group (EDG) at MathWorks - Core Design Automation',
      'Designed and developed a new domain specific language (DSL) that allows users to easily describe, modify, and understand MATLAB Simulink block diagrams, reducing verbosity and increasing readability from its predecessors',
      'Built a compiler in JavaScript that interprets the domain specific language by first performing lexical & syntax analysis to represent the user input as an abstract syntax tree, then traversing the tree to formulate the appropriate Simulink diagram as an output',
      'Optimized the compiler by designing a new JSON-based data structure to serve as an intermediate representation (IR) of the input, and deployed the compiler as a web service to create an endpoint that internal developers at MathWorks can reference',
      'Added bidirectional support by building a compiler that converts Simulink diagrams back to the domain specific language, allowing for seamless conversions between the language and diagram model without file damage',
      'Wrote unit tests in JavaScript to verify the performance of each individual unit in the language compiler',
    ],
  },
  {
    org: 'Vitalize App Inc.',
    logo: 'vitalizeLogo',
    location: 'Remote',
    time: 'Jun 2021 - Dec 2021',
    titles: ['Full Stack Developer'],
    descrp: [
      'Assisted in building the first public beta of the company’s wellness app through React-Native',
      'Used Node.js and MongoDB to host an API that handles CRUD calls for app functionality, such as journal entries, meditation files, and user statistics',
      'Used React.js to create an analytics webpage that allows the company to observe how long users interact with each of the app’s features',
      'Reduced server load by using Amazon S3 to store all images and files uploaded by users in the app’s group messaging feature',
      'Conducted technical interviews to hire new developers for the team',
    ],
  },
  {
    org: 'Dartmouth CS Department',
    logo: 'taLogo',
    location: 'Hanover, NH',
    time: 'Mar 2021 - Present',
    titles: ['Teaching Assistant'],
    descrp: [
      'Teaching Assistant for Dartmouth’s Object-Oriented Programming Course (CS 10)',
      'Led office hours and recitation periods to help students with questions and debugging issues',
      'Graded student submissions on assignments and exams while providing meaningful feedback to encourage healthy coding practices',
    ],
  },
];

export default ExperienceItems;
