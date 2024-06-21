import React from 'react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Contact = ({ isNightVideo }) => {
  return (
    <section id="contact">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h1 className={`mt-2 text-2xl font-semibold ${isNightVideo ? 'text-white' : 'text-black'}`}>Get in touch</h1>
          <p className={`mt-3 ${isNightVideo ? 'text-gray-400' : 'text-gray-600'}`}>Our friendly team is always here to chat.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Info 1 */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className={`p-3 text-blue-500 rounded-full ${isNightVideo ? 'bg-gray-800' : 'bg-gray-300'}`}>
              <MdEmail className="w-6 h-6" />
            </span>
            <h2 className={`mt-4 text-lg font-medium ${isNightVideo ? 'text-white' : 'text-black'}`}>Email</h2>
            <p className={`mt-2 ${isNightVideo ? 'text-gray-400' : 'text-gray-600'}`}>Our friendly team is here to help.</p>
            <p className={`mt-2 ${isNightVideo ? 'text-blue-400' : 'text-blue-500'}`}>hello@merakiui.com</p>
          </div>

          {/* Contact Info 2 */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className={`p-3 text-blue-500 rounded-full ${isNightVideo ? 'bg-gray-800' : 'bg-gray-300'}`}>
              <MdLocationOn className="w-6 h-6" />
            </span>
            <h2 className={`mt-4 text-lg font-medium ${isNightVideo ? 'text-white' : 'text-black'}`}>Office</h2>
            <p className={`mt-2 ${isNightVideo ? 'text-gray-400' : 'text-gray-600'}`}>Come say hello at our office HQ.</p>
            <p className={`mt-2 ${isNightVideo ? 'text-blue-400' : 'text-blue-500'}`}>100 Smith Street Collingwood VIC 3066 AU</p>
          </div>

          {/* Contact Info 3 */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className={`p-3 text-blue-500 rounded-full ${isNightVideo ? 'bg-gray-800' : 'bg-gray-300'}`}>
              <MdPhone className="w-6 h-6" />
            </span>
            <h2 className={`mt-4 text-lg font-medium ${isNightVideo ? 'text-white' : 'text-black'}`}>Phone</h2>
            <p className={`mt-2 ${isNightVideo ? 'text-gray-400' : 'text-gray-600'}`}>Mon-Fri from 8am to 5pm.</p>
            <p className={`mt-2 ${isNightVideo ? 'text-blue-400' : 'text-blue-500'}`}>+1 (555) 000-0000</p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className={`mt-12 rounded-lg overflow-hidden ${isNightVideo ? 'bg-gray-700' : 'bg-gray-300'}`}>
          <iframe
            className="w-full h-80 md:h-96"
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.960651070251!2d144.98388871518912!3d-37.80380047975434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642d1c1dc7e43%3A0xa3b3ab6b09b77d7d!2s100%20Smith%20St%2C%20Collingwood%20VIC%203066%2C%20Australia!5e0!3m2!1sen!2sus!4v1624555501550!5m2!1sen!2sus"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
