import React from 'react';

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full max-w-xs p-6 rounded-lg shadow-lg flex flex-col items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full text-4xl text-designColor">
          {icon}
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
            {title}
          </h2>
          <p className="text-base text-gray-400 mt-2">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
