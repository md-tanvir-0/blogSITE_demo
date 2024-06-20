import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ activeSection }) => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', link: 'home' },
    { name: 'Posts', link: 'posts' },
    { name: 'About', link: 'about' },
    { name: 'Contact', link: 'contact' },
  ];

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  const handleNavClick = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileNavVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/90 shadow-lg py-0' : 'bg-transparent py-[15px]'}`}>
      <div className="container mx-auto flex items-center justify-between py-5 px-5">
        <Link to="/" className="text-3xl font-bold flex items-center text-white">
          <h1>DEMIR</h1>
        </Link>
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
          className={`navbar md:flex md:items-center ${isMobileNavVisible ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.link}`}
                  className={`text-xl text-white hover:text-gray-300 px-2 ${activeSection === item.link ? 'text-blue-500' : ''}`}
                  onClick={() => handleNavClick(item.link)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
