import React from 'react';

const Post = () => {
  return (
    <section id="posts" className="services py-12 bg-gray-100">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="section-header text-center mb-12">
          <h2 className="text-3xl font-semibold">Featured Places</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 h-full">
              <div className="card-img overflow-hidden">
                <img src="images/pic1.jpg" alt="" className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110" />
              </div>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <a href="service-r&d.html" className="text-gray-800 hover:text-gray-600">Dubrovnik, Southern Croatia</a>
                  </h3>
                  <p className="text-gray-600 text-justify">Dubrovnik is a beautiful city that is rich in history, art, and culture. It is the perfect place for people who are fascinated by art and history. There are plenty of museums, art galleries and palaces to visit during your one-week Dubrovnik itinerary, as well as exciting day trips and tours including the game of thrones tour if you are a fan of this legendary series.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="200">
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 h-full">
              <div className="card-img overflow-hidden">
                <img src="images/pic2.jpg" alt="" className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110" />
              </div>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <a href="service-pcb.html" className="text-gray-800 hover:text-gray-600">Tahiti, the volcanic island</a>
                  </h3>
                  <p className="text-gray-600 text-justify">The main island, Tahiti, is a paradise for hikers who want to discover  mountainous peaks and uninhabited valleys. The island is also known for its sense of hospitality together with its festive atmosphere all year round. Tahiti and her islands have always been associated with sandy landscapes and postcard settings, and rightfully so. It is recommended you go and visit one of the most beautiful islands in French Polynesia.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay="300">
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 h-full">
              <div className="card-img overflow-hidden">
                <img src="images/pic3.jpg" alt="" className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110" />
              </div>
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <a href="service-3D.html" className="text-gray-800 hover:text-gray-600">Santorini, Greece</a>
                  </h3>
                  <p className="text-gray-600 text-justify">Santorini is the most famous of all Greek islands and the number one summer destination in the world. Santorini is one of the Cyclades islands nestled in the Aegean Sea. Spectacular sunsets, traditional whitewashed houses and the breathtaking sights of the ocean make this island the best place for tourists to visit. Santorini has inviting beaches, old castles, ancient ruins, stark volcanic countryside and small fishing ports. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
