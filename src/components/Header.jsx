import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track if the menu is open

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open state
  };

  return (
    <>
      <header className="container-fluid">
        <div className="header">
          <div className="home-button">
            <Link className='home-btn' to="/">Mr.G</Link>
          </div>
          <div className="menu-button">
            <label className="switch">
              <input
                type="checkbox"
                checked={menuOpen}
                onChange={toggleMenu} // Toggle menu on checkbox change
              />
              <span className={`wrapper ${menuOpen ? 'active' : ''}`}>
                <span className="line">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </span>
                <span className="line line-bottom">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </span>
                <span className={`line-vertical ${menuOpen ? 'active' : ''}`}>
                  <span className="dot"></span>
                  <span className="dot middle-dot"></span>
                  <span className="dot"></span>
                </span>
                <span className={`line-horizontal ${menuOpen ? 'active' : ''}`}>
                  <span className="dot"></span>
                  <span className="dot middle-dot-horizontal"></span>
                  <span className="dot"></span>
                </span>
              </span>
            </label>
          </div>
        </div>
      </header>

      {/* Menu container that slides in */}
      <div className={`menu-page ${menuOpen ? 'menu-open' : 'menu-closed'}`}>
        <ul>
          <li><span>01.</span><Link className='link' to="/" onClick={toggleMenu}>Home</Link></li>
          <li><span>02.</span><Link className='link' to="/about" onClick={toggleMenu}>About</Link></li>
          <li><span>03.</span><Link className='link' to="/project" onClick={toggleMenu}>Projects</Link></li>
          <li><span>04.</span><Link className='link' to="/contact" onClick={toggleMenu}>Contact</Link></li>

          <div className="menu-media">
            <a href='gg' target="_blank" rel="noreferrer">
              <i className="bi bi-arrow-up-right"></i>instagram
              <div className="link-underline"></div>
            </a>
            <a href='gg' target="_blank" rel="noreferrer">
              <i className="bi bi-arrow-up-right"></i>linkedIn
              <div className="link-underline"></div>
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
