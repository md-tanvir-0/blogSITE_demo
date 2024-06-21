import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Index from './pages/index';
import Post from './pages/post';
import About from './pages/about';
import Contact from './pages/contact';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isNightVideo, setIsNightVideo] = useState(true);

  const sectionRefs = {
    home: useRef(null),
    posts: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  const toggleVideo = () => {
    setIsNightVideo(prev => !prev);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header activeSection={activeSection} toggleVideo={toggleVideo} isNightVideo={isNightVideo} />
        <main className="flex-grow">
          <div ref={sectionRefs.home}>
            <Index isNightVideo={isNightVideo} />
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-black text-white">
            <div ref={sectionRefs.posts}>
              <Post />
            </div>
            <div ref={sectionRefs.about}>
              <About />
            </div>
            <div ref={sectionRefs.contact}>
              <Contact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;