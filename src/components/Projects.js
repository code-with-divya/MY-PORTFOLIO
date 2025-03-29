import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaFileAlt, FaNewspaper, FaQuestion, FaUser, FaGamepad } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "TextUtil",
      description: "A text utility application that allows users to manipulate and analyze text with various transformations and analytics.",
      features: [
        "Convert text to Uppercase & Lowercase",
        "Remove Extra Spaces",
        "Copy text to Clipboard",
        "Count Words & Characters",
        "Dark Mode Support"
      ],
      technologies: ["React", "JavaScript", "Bootstrap", "CSS"],
      liveLink: "https://texemodify.netlify.app/",
      githubLink: "https://github.com/Suraj051198/TextUtil-React-JS-",
      icon: <FaFileAlt />
    },
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
      githubLink: "https://github.com/Suraj051198/tic-tac-toe-game",
      icon: <FaCode />
    },
    {
      title: "Rock Paper Scissors",
      description: "Interactive Rock Paper Scissors game with score tracking and responsive design.",
      features: [
        "Player vs Computer gameplay",
        "Score tracking",
        "Animated moves",
        "Responsive UI"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://rock-paper-scissors-new-game.netlify.app/",
      githubLink: "https://github.com/Suraj051198/Rock-Paper-Scissors-Game",
      icon: <FaGamepad />
    },
    {
      title: "iNotebook",
      description: "A MERN stack note-taking application with user authentication and CRUD operations.",
      features: [
        "User authentication with JWT",
        "Create, read, update, and delete notes",
        "Secure API endpoints",
        "MongoDB database integration"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "",
      githubLink: "https://github.com/Suraj051198/iNotebook",
      icon: <FaLaptopCode />
    },
    {
      title: "News App",
      description: "A React-based news application that fetches and displays news articles from various sources.",
      features: [
        "Category-based news filtering",
        "Latest headlines",
        "Responsive design",
        "External news API integration"
      ],
      technologies: ["React", "API Integration", "Bootstrap", "JavaScript"],
      liveLink: "https://newsapp-react-js.netlify.app/",
      githubLink: "https://github.com/Suraj051198/New-App-React-js-",
      icon: <FaNewspaper />
    },
    {
      title: "Quiz Application",
      description: "An interactive quiz application that tests users' knowledge across various topics.",
      features: [
        "Multiple choice questions",
        "Score tracking",
        "Timer functionality",
        "Results summary"
      ],
      technologies: ["JavaScript", "HTML", "CSS"],
      liveLink: "",
      githubLink: "https://github.com/Suraj051198/Quiz-Application",
      icon: <FaQuestion />
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio showcasing my projects and skills.",
      features: [
        "Responsive design for all devices",
        "Smooth scrolling navigation",
        "Modern UI with animations"
      ],
      technologies: ["React", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "https://github.com/Suraj051198/portfolio",
      icon: <FaUser />
    }
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