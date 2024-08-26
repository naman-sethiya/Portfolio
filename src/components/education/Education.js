import React from 'react';
import ResumeCard from './ResumeCard';
import Title from '../layouts/Title';

const Education = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Education" />
      <div className="relative">
        {/* Remove the vertical line in mobile view */}
        <div className="hidden sm:block absolute top-0 left-0 w-[2px] h-full" style={{ backgroundColor: '#ff014f' }}></div>
        <div className="mt-6 sm:mt-14 w-full flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Engineering Physics"
            subTitle="Indian Institute of Technology, Guwahati (2021-25)"
            result="7.91 / 10 (Current)"
          />
          <ResumeCard
            title="Senior Secondary Education"
            subTitle="CBSE Board (2021)"
            result="97.0 %"
          />
          <ResumeCard
            title="Secondary Education"
            subTitle="CBSE Board (2019)"
            result="94.6 %"
          />
        </div>
      </div>
    </section>
  );
}

export default Education;
