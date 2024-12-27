import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-resume">
          <a href="/resume.pdf" download="Naman_Resume.pdf" className="resume-button">
            Download Resume
          </a>
        </div>
    </nav>
  );
}

export default Navbar;
