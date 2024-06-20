// src/components/footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Company</h2>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Support</h2>
            <ul>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a></li>
              <li><a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a></li>
              <li><a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a></li>
              <li><a href="#" className="hover:text-blue-700"><FaLinkedin size={24} /></a></li>
              <li><a href="#" className="hover:text-gray-600"><FaGithub size={24} /></a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Subscribe</h2>
            <form>
              <input type="email" placeholder="Email address" className="w-full p-2 mb-2 text-gray-900" />
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
