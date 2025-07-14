import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

function Header({ isNavOpen, toggleNav, isDarkMode, toggleTheme }) {
    return (
        <header className="main-header">
            <div className="container">
                <NavLink to="/" className="logo"> {/* Use NavLink for logo to ensure active styling if home is current route */}
                    <img src="/assets/images/lifewood_logo.png" alt="Lifewood Company Logo" className="logo-image header-logo" loading="lazy" />
                </NavLink>
                <nav className="main-nav">
                    <button className={`nav-toggle ${isNavOpen ? 'open' : ''}`} aria-label="Toggle navigation" onClick={toggleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`nav-list ${isNavOpen ? 'open' : ''}`}>
                        {/* Use NavLink instead of Link, and provide activeClassName or activeStyle */}
                        <li><NavLink to="/" onClick={toggleNav} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={toggleNav} className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink></li>
                        <li><NavLink to="/services" onClick={toggleNav} className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
                        <li><NavLink to="/projects" onClick={toggleNav} className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
                        <li><NavLink to="/contact" onClick={toggleNav} className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink></li>
                    </ul>
                </nav>
                <button id="theme-toggle" aria-label="Toggle dark and light mode" className="theme-toggle" onClick={toggleTheme}>
                    <span className="icon-light">☀️</span>
                    <span className="icon-dark">🌙</span>
                </button>
            </div>
        </header>
    );
}

export default Header;