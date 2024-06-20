// src/components/index.jsx
import React, { useRef, useEffect } from 'react';
import './index.css';

const Index = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime < 0.2) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div id="home" className="index-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="video-background"
      >
        <source src="/videos/night1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Index;
