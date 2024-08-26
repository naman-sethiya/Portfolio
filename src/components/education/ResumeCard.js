import React from 'react';

const ResumeCard = ({ title, subTitle, result }) => {
  return (
    <div className="w-full sm:w-full group flex bg-gray">
      <div className="w-full bg-gray bg-opacity-20 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 transform group-hover:scale-105 transition-transform shadow-md hover:shadow-lg">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center bg-gray">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-white duration-300 group-hover:text-designColor">
              {title}
            </h1>
            <h2 className="text-sm mt-2 text-gray-400 duration-300 group-hover:text-designColor">
              {subTitle}
            </h2>
          </div>
          <div>
            <p className="px-4 py-2 text-designColor bg-gray bg-opacity-50 rounded-lg flex justify-center items-center shadow-inner text-sm font-medium group-hover:bg-opacity-70">
              {result}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;
