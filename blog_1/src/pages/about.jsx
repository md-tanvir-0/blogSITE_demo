import React from 'react';

const About = () => {
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
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start text-left p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-4">Explore the World with Us</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            ac nisl ullamcorper, tincidunt lorem nec, aliquam justo. Proin eu
            magna non risus varius gravida. Phasellus ac odio a nibh efficitur
            tincidunt. Nulla facilisi. Donec lacinia consectetur est, ac
            suscipit ipsum ultricies vitae.
          </p>
          <a href="#" className="inline-block px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300">Start Exploring</a>
        </div>
      </div>
      <hr></hr>
    </section>
  );
};

export default About;
