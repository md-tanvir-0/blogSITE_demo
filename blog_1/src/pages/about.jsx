import React from 'react';

const About = ({ isNightVideo }) => {
  return (
    <section id="about">
      <div className="flex flex-col md:flex-row items-center min-h-screen">
        <div className="md:w-1/2 w-full">
          <img
            src="/images/Uglobe.png"
            alt="About us"
            className="w-full h-full object-cover md:h-screen"
          />
        </div>
        <div className={`md:w-1/2 w-full flex flex-col justify-center items-start text-left p-8 md:p-12 ${isNightVideo ? ' text-gray-300' : ' text-gray-800'}`}>
          <h2 className="text-4xl font-bold mb-4">Explore the World with Us</h2>
          <p className="text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            ac nisl ullamcorper, tincidunt lorem nec, aliquam justo. Proin eu
            magna non risus varius gravida. Phasellus ac odio a nibh efficitur
            tincidunt. Nulla facilisi. Donec lacinia consectetur est, ac
            suscipit ipsum ultricies vitae.
          </p>
          <a href="#" className={`inline-block px-8 py-3 ${isNightVideo ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} font-semibold rounded-lg shadow-md hover:${isNightVideo ? 'bg-gray-600' : 'bg-gray-400'} transition duration-300`}>
            Start Exploring
          </a>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
