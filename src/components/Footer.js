// Footer.js
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Footer.css';

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
          className="top-link"
        >
          <FaArrowUp className="top-icon" />
        </Link>
      </div>
      
      <div className="footer-content">
        <div className="footer-info">
          <h3 className="footer-name">Suraj Sonawane</h3>
          <p className="footer-description">Full Stack Developer based in Pune, India</p>
        </div>
        
        <div className="social-links">
          <a 
            href="https://github.com/Suraj051198" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <FaGithub className="social-icon github" />
          </a>
          <a 
            href="https://www.linkedin.com/in/sonawane-suraj/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a 
            href="mailto:surajsonawane172@gmail.com" 
            aria-label="Email"
            className="social-link"
          >
            <FaEnvelope className="social-icon email" />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">&copy; {new Date().getFullYear()} Suraj Sonawane. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;