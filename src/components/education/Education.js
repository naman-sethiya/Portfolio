import React from 'react';
import ResumeCard from './ResumeCard';
import Title from '../layouts/Title';

const Education = () => {
  return (
    <section id="resume" className="w-2/3 py-20 border-b-[1px] border-b-black">
      <Title title="Education" />
      <div className="relative">
              <div className="absolute top-0 left-0 w-[2px] h-5/6" style={{ backgroundColor: '#ff014f' }}></div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black flex flex-col gap-10">
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
