import React, { useState } from 'react';
import './index.css'; // Ensure you have this import if you need additional custom styles

const Header = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header className="header fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between py-5 px-5">
        <a href="index.html" className="text-3xl font-bold flex items-center text-white">
          <h1>DEMIR</h1>
        </a>
        <button
          className="mobile-nav-toggle md:hidden text-3xl text-white"
          onClick={toggleMobileNav}
        >
          {isMobileNavVisible ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </button>
        <nav
          id="navbar"
          className={`navbar md:flex md:items-center ${
            isMobileNavVisible ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
            <li>
              <a href="index.html" className="text-xl text-white hover:text-gray-300 px-2">
                Home
              </a>
            </li>
            <li>
              <a href="about.html" className="text-xl text-white hover:text-gray-300 px-2">
                Post
              </a>
            </li>
            <li>
              <a href="projects.html" className="text-xl text-white hover:text-gray-300 px-2">
                About
              </a>
            </li>
            <li>
              <a href="teams.html" className="text-xl text-white hover:text-gray-300 px-2">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
