import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header-left">Your Name</div>
    <div className="header-right">
      <a
        href="/path-to-your-resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="resume-button"
      >
        Resume
      </a>
    </div>
  </header>
);

export default Header;