import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Hero.css';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Divya Gawade</span></h1>
        <h2>Full Stack Developer</h2>
        <p>I create modern, high-performance web applications using the latest technologies.</p>
        <p className="sub-text">Passionate about building scalable and efficient solutions.</p>
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
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <FaArrowDown className="bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 