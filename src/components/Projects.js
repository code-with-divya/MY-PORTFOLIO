import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaFileAlt, FaNewspaper, FaQuestion, FaUser, FaGamepad } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Tic Tac Toe Game",
      description: "A classic Tic Tac Toe game with interactive UI and game state management.",
      features: [
        "Two-player gameplay",
        "Win detection",
        "Draw detection",
        "Reset and new game options"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://tic-tac-toe-buttle.netlify.app/",
      githubLink: "https://github.com/code-with-divya/Tic-Tac-Toe",
      icon: <FaCode />
    },
    {
      title: "my-pill-remainder",
      description: "interactive and helpfull pill remainder system.",
      features: [
        "User Registration & Profile",
        "Medicine Scheduling",
        "Reminders & Alerts",
        "Dosage Confirmation"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://rock-paper-scissors-new-game.netlify.app/",
      githubLink: "https://github.com/code-with-divya/My-Pill-Remainder",
      icon: <FaGamepad />
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <div className="underline"></div>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <div className="project-icon">
                {project.icon}
              </div>
              <div className="project-overlay">
                <div className="project-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub /> Code
                  </a>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {project.technologies.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 