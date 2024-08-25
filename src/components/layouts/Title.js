import React from 'react';

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h1 className="text-lg md:text-xl uppercase font-light text-designColor tracking-wide">
        {title}
      </h1>
      <h3 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">{des}</h3>
    </div>
  );
}

export default Title;
