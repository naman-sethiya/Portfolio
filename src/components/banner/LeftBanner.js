import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Professional Coder.', 'Full Stack Developer.', 'CP Enthusiast.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10 xl:gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Naman Sethiya</span>
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-sm md:text-base font-bodyFont leading-6 tracking-wide max-w-md">
          I am a motivated and a passion-driven student pursuing a B.Tech at IIT Guwahati. Enthusiastic about competitive programming and web development, I excel at problem-solving and thrive on creating innovative and refined solutions.
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
