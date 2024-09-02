import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import one from './projectimages/JobPortal.PNG';
import two from './projectimages/MERNChat.PNG';
import three from './projectimages/GateGuard.PNG';
import four from './projectimages/TextFileCompressor.PNG';


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="PROJECTS"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Job Application Portal"
          des="Developed a comprehensive job application portal using the MERN stack."
          src={one}
          link = "https://github.com/naman-sethiya/Job-Application-Portal"
        />
        <ProjectsCard
          title="Real-Time Chat Application"
          des="Developed a robust MERN Stack application enabling both one-to-one and group chatting functionalities."
          src={two}
          link = "https://github.com/naman-sethiya/Real-Time-Chat-Application"
        />
        <ProjectsCard
          title="GateGuard"
          des=" Developed a user-friendly website which provides real-time monitoring of students' entry and exit across various gates."
          src={three}
          link = "https://github.com/naman-sethiya/GateGaurd"
        />
        <ProjectsCard
          title="Text File Compressor"
          des=" Developed a Text File Compressor which encodes the text file and reduces the size of text file."
          src={four}
          link = "https://github.com/naman-sethiya/Text-File-Compressor"
        />
      </div>
    </section>
  );
}

export default Projects