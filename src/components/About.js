import React from 'react';
import '../styles/About.css';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="image-container">
            <img 
              src="/WhatsApp Image 2025-03-14 at 01.10.04_17254417.jpg" 
              alt="Suraj Sonawane - Full Stack Developer" 
              className="profile-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x400?text=Suraj+Sonawane";
              }}
            />
          </div>
        </div>
        <div className="about-text">
          <h3> Full Stack Developer | Pune, India</h3>
          <p>
            I'm a passionate developer specializing in frontend and backend technologies. 
            I love turning ideas into efficient, user-friendly applications—handling everything from concept to deployment.
          </p>
          
          <div className="about-highlights-header">
            <h4>🔹 What I do:</h4>
          </div>
          
          <ul className="about-list">
            <li>  Write clean, scalable code</li>
            <li>  Develop robust, high-performance applications</li>
            <li>  Solve real-world problems with cutting-edge technologies</li>
          </ul>
          
          <div className="about-buttons">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="about-button primary"
            >
              Contact Me
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="about-button secondary"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 