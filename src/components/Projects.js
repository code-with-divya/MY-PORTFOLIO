import {
  FaCode,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGithub,
  FaLaptopCode,
  FaMapMarkedAlt,
  FaNewspaper,
  FaStar,
  FaTasks,
  FaUser,
  FaUserShield,
  FaWallet
} from 'react-icons/fa';
import '../styles/Projects.css';

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
      githubLink: "https://github.com/Suraj051198/tic-tac-toe-game",
      icon: <FaCode />
    },
    {
      title: "Expense Tracker Application",
      description: "A modern expense tracking app to monitor your daily, weekly, and monthly spending.",
      features: [
        "Add and delete transactions",
        "Calculate total income and expenses",
        "Real-time balance updates",
        "Responsive and user-friendly interface"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/Suraj051198/Expense-Tracker-App",
      icon: <FaWallet />
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
      title: "User Management App",
      description: "A full-stack user management system with authentication and profile management capabilities.",
      features: [
        "JWT-based authentication",
        "Profile management",
        "Secure password hashing with bcrypt",
        "Full CRUD operations for users",
        "Centralized error handling"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "JavaScript"],
      githubLink: "https://github.com/Suraj051198/user-management-app",
      liveLink: "https://all-password-manager-app.netlify.app/",
      icon: <FaUserShield />,
      image: process.env.PUBLIC_URL + "/ProjectsIMG/User-Management-App.png"
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
    },
    {
      title: "Store Rating System",
      description: "A full-featured web app for managing store ratings with role-based access and data persistence using localStorage.",
      features: [
        "Role-based login (Admin, Store Owner, User)",
        "User/store management (CRUD)",
        "Rate, edit & filter store ratings",
        "Validation & session handling"
      ],
      technologies: ["React", "Bootstrap", "React Router", "localStorage"],
      liveLink: "https://store-rating.netlify.app/login",
      githubLink: "https://github.com/Suraj051198/roxiler-store-rating.git",
      icon: <FaStar />
    },
    {
      title: "Task Manager Application",
      description: "Feature-rich task management app with Kanban, Calendar & List views, built using React and Tailwind.",
      features: [
        "Kanban board, calendar, list view",
        "Drag-and-drop tasks",
        "Search & filter",
        "Dark/Light mode support"
      ],
      technologies: ["React", "Tailwind CSS", "Context API", "Moment.js"],
      liveLink: "https://task-tracker-appli.netlify.app/",
      githubLink: "https://github.com/Suraj051198/task-tracker.git",
      icon: <FaTasks />
    },
    {
      title: "Travel Maharashtra",
      description: "Explore and book travel experiences across Maharashtra. Features destinations, packages, and responsive UI.",
      features: [
        "View destinations & packages",
        "Filter and book experiences",
        "Responsive design & testimonials"
      ],
      technologies: ["React", "React Router", "CSS3", "HTML5"],
      liveLink: "https://travel-app-by.netlify.app/",
      githubLink: "https://github.com/Suraj051198/travel.git",
      icon: <FaMapMarkedAlt />
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
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-thumbnail"
                />
              ) : (
                <div className="project-icon">{project.icon}</div>
              )}
              <div className="project-overlay">
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub /> View Code
                  </a>
                  {project.liveLink && project.title !== "Expense Tracker Application" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt /> Live Demo
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
                  <span className="tech-tag" key={techIndex}>
                    {tech}
                  </span>
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
