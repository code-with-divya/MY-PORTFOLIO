import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Suraj Sonawane</span></h1>
          <h2>Full Stack Developer</h2>
          <div className="divider"></div>
          <p>I create modern, high-performance web applications</p>
          <p>Specializing in React, Node.js, and cloud technologies</p>
        </div>
        
        <div className="hero-buttons">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cta-button primary"
          >
            Contact Me
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cta-button secondary"
          >
            View Projects
          </Link>
        </div>
        
        <div className="scroll-indicator">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <FaArrowDown className="bounce" />
            <span className="scroll-text">Scroll Down</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;