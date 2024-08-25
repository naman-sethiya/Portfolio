import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import {  SiLeetcode, SiCodeforces } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex gap-60 justify-start -mt-5">
      {/* Section for social media links */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4"> {/* Increased margin-bottom */}
          Find me on
        </h2>
        <div className="flex gap-6">
          <a href="https://wa.me/9445192525" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon text-4xl hover:scale-110 hover:text-green-600 transition-transform duration-300 ease-in-out">
              <FaWhatsapp />
            </span>
          </a>
          <a href="https://instagram.com/namansethiya1203" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon text-4xl hover:scale-110 hover:text-pink-600 transition-transform duration-300 ease-in-out">
              <FaInstagram />
            </span>
          </a>
          <a href="https://linkedin.com/in/naman-sethiya" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon text-4xl hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      {/* Section for coding handles */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4"> {/* Increased margin-bottom */}
          Coding Handles
        </h2>
        <div className="flex gap-6">
          <a href="https://leetcode.com/namansethiya1203" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon text-4xl hover:scale-110 hover:text-blue-500 transition-transform duration-300 ease-in-out">
              <SiLeetcode />
            </span>
          </a>
          <a href="https://codeforces.com/profile/namansethiya22" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon text-4xl hover:scale-110 hover:text-blue-700 transition-transform duration-300 ease-in-out">
              <SiCodeforces />
            </span>
          </a>
          <a href="https://github.com/naman-sethiya" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon text-4xl hover:scale-110 hover:text-gray-800 transition-transform duration-300 ease-in-out">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
