import React from 'react';
import ProjectCard from './projectCard';
import flourish from '../assets/projects/flourish.svg';
import wellbuddies from '../assets/projects/wellbuddies.svg';
import notes from '../assets/projects/notes.svg';

// eslint-disable-next-line react/function-component-definition
const Projects = (props) => {
  const projects = [
    {
      color: 'blue',
      description: 'Worked as a React Native developer on chronic illness management app Flourish to mitigate significant vulnerabiliities affecting 80% of users and improved onboarding flow.',
      name: 'Flourish',
      image: flourish,
      link: 'https://www.flourish.care/',
    },
    {
      color: 'red',
      description: 'In this project, I created a reliable transport layer using UDP sockets and implemented threading, sockets, and select for simultaneous upload/download for P2P Dropbox project.',
      name: 'Peer-to-Peer Dropbox-like Project',
    },
    {
      color: 'red',
      description: 'In this project, I experimented with various of SKLEARN classifiers to determine the best for performing sentiment analysis to predict Amazon ratings from review information.',
      name: 'Amazon Review Sentiment Analysis for Project Rating',
      link: 'https://github.com/lizfrey/review-analysis',
    },
    {
      color: 'blue',
      description: 'WellBuddies was first a second-place winning React web app that turned into a React Native full stack mobile app. I created the backend and onboarding frontend.',
      name: 'WellBuddies',
      image: wellbuddies,
      link: 'https://devpost.com/software/wellbuddies',
    },
    {
      color: 'blue',
      description: 'A note board posting app, complete with authentication. Made with React.js, Node.js, Express.js, and a MongoDB backend.',
      name: 'Notes',
      image: notes,
    },
    {
      color: 'red',
      description: 'React-Native, Node.js, MongoDB, Express.js, Expo community fitness application. I created the app architecture, wrote backend, and mentored two developers on the tech stack.',
      name: 'FitWit',
    },
    {
      color: 'red',
      description: 'An application that used OOP, Java, and data structures to classify the Brown corpus using Hidden Markov Models and the Dijkstra algorithm with 90% accuracy.',
      name: 'Parts of Speech Tagger',
    },
    {
      color: 'blue',
      description: 'A software design and implementation project written in C that lets users connect to a server and search a map. Made using the agile scrum process. Scrum master.',
      name: 'Gold Mining Game',
      link: 'https://github.com/lizfrey/gold-game',
    },
  ];
  return (
    <div id="projects">
      {projects.map((project, idx) => {
        // eslint-disable-next-line react/no-array-index-key
        return <ProjectCard key={idx} color={project.color === 'blue' ? '#E8F2FE' : '#FBE8E6'} description={project.description} name={project.name} image={project.image} link={project.link} />;
      })}
    </div>
  );
};

export default Projects;
