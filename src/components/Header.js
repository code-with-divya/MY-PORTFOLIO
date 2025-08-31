import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
  
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link 
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
          Divya Gawade
          </Link>
        </div>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <Link 
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActiveSection(item)}
                className={activeSection === item ? 'active' : ''}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 