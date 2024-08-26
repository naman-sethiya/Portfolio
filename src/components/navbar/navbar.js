import React, { useState } from 'react';
import logo from '../../images/Capture.PNG';
import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div
            className="
                w-full
                mx-auto
                flex
                justify-between
                items-center
                font-titleFont
                sticky
                top-0
                z-50
                bg-bodyColor
                shadow-md
                py-4
                px-6
                lg:px-10
                relative
            "
        >
            {/* Logo Section */}
            <div className="flex items-center gap-5">
                <img
                    src={logo}
                    alt="logo"
                    className="w-12 h-12 object-contain"
                />
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden p-2 rounded-md text-white bg-gray-800 hover:bg-gray-700"
                onClick={toggleMenu}
            >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

            {/* Navigation Links */}
            <div
                className={`
                    ${isMenuOpen ? 'block' : 'hidden'}
                    lg:flex lg:items-center lg:gap-8 flex-col lg:flex-row
                    absolute lg:relative top-full lg:top-auto left-0 w-full lg:w-auto
                    bg-bodyColor lg:bg-transparent shadow-lg lg:shadow-none
                    lg:py-0 py-4 lg:px-0 px-6
                    transition-transform transform ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}
                `}
            >
                <ul className="flex flex-col lg:flex-row lg:gap-8 gap-4 lg:items-center">
                    {navLinksdata.map((navlink) => (
                        <li
                            key={navlink._id}
                            className="
                                text-base
                                font-normal
                                text-gray-400
                                tracking-wide
                                cursor-pointer
                                hover:text-designColor
                                duration-300
                            "
                        >
                            <Link
                                activeClass="active"
                                to={navlink.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {navlink.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
