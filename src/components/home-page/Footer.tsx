// import React from 'react';

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        {/* About Us */}
        <div className="w-full md:w-1/4 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>
            Disney Plus Hotstar is a streaming service that offers a wide range
            of movies, series, and documentaries.
          </p>
        </div>

        {/* Careers */}
        <div className="w-full md:w-1/4 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Careers</h3>
          <p>Join our team and be part of the Disney Plus Hotstar family.</p>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/4 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Statement */}
        <div className="w-full md:w-1/4 lg:w-1/4">
          <p className="text-sm">
            &copy; 2024 Disney Plus Hotstar. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
