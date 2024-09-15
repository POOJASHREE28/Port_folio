import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ activeSection, onSectionClick }) {
  const sections = ['Home', 'About', 'Projects', 'ContactMe'];

  return (
    <nav className="navbar">
      <div className="name">Poojashree</div> {/* Replaced logo with name */}
      <div className="desktopMenu">
        {sections.map((section) => (
          <Link
            key={section}
            to={`/${section}`} // Ensure proper routing paths
            className={`desktopMenuListItem ${activeSection === section ? 'active' : ''}`}
            onClick={() => onSectionClick(section)} // Trigger smooth scroll
          >
            {section}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
