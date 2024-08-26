import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const Media = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
            {/* Section for social media links */}
            <div className="flex flex-col">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
                <div className="flex flex-wrap gap-6">
                    <a href="https://wa.me/9445192525" target="_blank" rel="noopener noreferrer">
                        <span className="bannerIcon text-3xl sm:text-4xl transition-transform duration-300 ease-in-out hover:scale-110 hover:text-green-600">
                            <FaWhatsapp />
                        </span>
                    </a>
                    <a href="https://instagram.com/namansethiya1203" target="_blank" rel="noopener noreferrer">
                        <span className="bannerIcon text-3xl sm:text-4xl transition-transform duration-300 ease-in-out hover:scale-110 hover:text-pink-600">
                            <FaInstagram />
                        </span>
                    </a>
                    <a href="https://linkedin.com/in/naman-sethiya" target="_blank" rel="noopener noreferrer">
                        <span className="bannerIcon text-3xl sm:text-4xl transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500">
                            <FaLinkedinIn />
                        </span>
                    </a>
                </div>
            </div>
            {/* Section for coding handles */}
            <div className="flex flex-col">
                <h2 className="text-base uppercase font-titleFont mb-4">Coding Handles</h2>
                <div className="flex flex-wrap gap-6">
                    <a href="https://leetcode.com/namansethiya1203" target="_blank" rel="noopener noreferrer">
                        <span className="bannerIcon text-3xl sm:text-4xl transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500">
                            <SiLeetcode />
                        </span>
                    </a>
                    <a href="https://codeforces.com/profile/namansethiya22" target="_blank" rel="noopener noreferrer">
                        <span className="bannerIcon text-3xl sm:text-4xl transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-700">
                            <SiCodeforces />
                        </span>
                    </a>
                    <a href="https://github.com/naman-sethiya" target="_blank" rel="noopener noreferrer">
                        <span className="bannerIcon text-3xl sm:text-4xl transition-transform duration-300 ease-in-out hover:scale-110 hover:text-gray-800">
                            <FaGithub />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Media;
