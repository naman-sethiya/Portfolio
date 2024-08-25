import React from 'react';
import logo from '../../images/Capture.PNG';
import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
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
                px-10
            "
        >
            {/* Logo Section */}
            <div className="flex items-center gap-5">
                <img
                    src={logo}
                    alt="logo"
                    className="w-12 h-12 object-contain"
                />
                {/* Optional: Add a brand name or title next to the logo */}
                {/* <span className="text-xl font-bold text-white">BrandName</span> */}
            </div>

            {/* Navigation Links */}
            <div>
                <ul className="flex items-center gap-8">
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
