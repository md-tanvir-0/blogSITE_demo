import React, { useRef, useEffect } from 'react';
import './index.css';

const Index = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      // Check if we're close to the end of the video
      if (video.duration - video.currentTime < 0.2) {
        // Jump to the start seamlessly
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (<>
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/night1.mp4" type="video/mp4" />
      </video>
    </div>
    <div className=' mt-[500px] h-[500px] w-full bg-gray-300'>dummy div</div>
    <div className='h-[500px] w-full bg-cyan-300'>dummy div</div>
  </>
  );
};

export default Index;
