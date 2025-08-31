import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="back-to-top">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <FaArrowUp />
        </Link>
      </div>
      
      <div className="footer-content">
        <div className="footer-info">
          <h3>Divya Gawade</h3>
          <p>Full Stack Developer based in Pune, India</p>
        </div>
        
        <div className="social-links">
          <a 
            href="https://github.com/code-with-divya" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/divya-gawade" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:gawadedivya15@gmail.com" 
            aria-label="Email"
            className="social-link"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Divya Gawade. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 