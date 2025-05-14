import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import '../Navbar/Navbar.css';
import BeautyLogo from "/BeautyLogo.png";
import Count from '../Count/Count';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleQueryClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('query');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById('query');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={BeautyLogo} alt="logo" className="logo" />
        <Count />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>

        <li
          className="dropdown"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span className="dropdown-toggle">Beach Zones ▾</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><NavLink to="/north" onClick={closeMenu}>North</NavLink></li>
              <li><NavLink to="/east" onClick={closeMenu}>East</NavLink></li>
              <li><NavLink to="/south" onClick={closeMenu}>South</NavLink></li>
              <li><NavLink to="/west" onClick={closeMenu}>West</NavLink></li>
            </ul>
          )}
        </li>

        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>

        <li>
          <a href="#query" onClick={handleQueryClick}>Query</a>
        </li>

        <li><NavLink to="/Contact us" onClick={closeMenu}>Contact us</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
