import React, { useRef, useEffect } from 'react';
import './index.css';

const Index = ({ isNightVideo }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      video.play();
      video.removeEventListener('canplay', handleCanPlay);
    };

    video.addEventListener('canplay', handleCanPlay);

    // Load the new video source
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [isNightVideo]);

  return (
    <div id="home" className="index-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="video-background"
        loop  // Add loop attribute here
      >
        <source src={isNightVideo ? "/videos/night1.mp4" : "/videos/day.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default Index;
