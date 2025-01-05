import React from 'react';
import './css/Projects.css';

const projects = [
  {
    name: 'Face Mask Detection',
    image: '/fmproject.png',
    description:
      'A machine learning project that detects whether a person is wearing a mask or not using computer vision and deep learning.',
    githubLink: 'https://github.com/NKSG100/Face_mask_detector',
  },
  {
    name: 'SecurePay',
    image: '/images/securepay.png', // Example image path, replace with actual path
    description:
      'A full-stack web app for user registration, login, and password recovery, built with React and Express.',
    githubLink: 'https://github.com/nksnamannks/securepay', // Replace with your GitHub project link
  },
  {
    name: 'Quiz App',
    image: '/quiz-app.png',
    description:
      'A Quiz app built with Next.js that allows users to test their knowledge on various subjects with real-time question fetching',
    githubLink: 'https://github.com/NKSG100/quiz-app-nextjs',
  },
];

function Projects() {
  return (
    <section className="projects">
      <div className="content-about">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-github-btn">
                View on Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
