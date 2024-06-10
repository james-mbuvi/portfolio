import React from 'react';
import { FaCode, FaTools, FaDatabase, FaProjectDiagram, FaUsers, FaComments,FaBrain } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-8 md:p-20">
      <div className="md:w-3/4 lg:w-2/3 mb-10 md:mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-2 text-center animate-fadeIn text-teal-400">About Me</h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl">
          I am a passionate and results-driven software engineer with experience in developing high-quality web applications. Adept at working with a variety of programming languages and frameworks, including JavaScript, React, Python, and Flask. Known for delivering scalable and maintainable solutions that enhance user experiences and drive business success.
        </p>
      </div>
      
      <div className="md:w-3/4 lg:w-2/3">
        <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mt-4">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl mt-4 space-y-2">
          <li><FaCode className="inline-block mr-2 text-teal-400" /><strong>Languages</strong>: JavaScript, Python, SQL</li>
          <li><FaTools className="inline-block mr-2 text-teal-400" /><strong>Frameworks</strong>: React, Flask</li>
          <li><FaProjectDiagram className="inline-block mr-2 text-teal-400" /><strong>Tools</strong>: Git, Docker, Firebase</li>
          <li><FaDatabase className="inline-block mr-2 text-teal-400" /><strong>Databases</strong>: MySQL, PostgreSQL</li>
        </ul>
        <div className="text-gray-300 text-lg md:text-xl mt-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Led a team of 4 developers in designing and implementing a scalable e-commerce platform, increasing online sales by 30% within the first six months.</li>
            <li>Developed a real-time chat application using React and Firebase, enhancing customer support response times by 50%.</li>
          </ul>
        </div>        
        <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mt-8">Soft Skills</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl mt-4 space-y-2">
          <li><FaUsers className="inline-block mr-2 text-teal-400" />Strong communicator, able to effectively collaborate with cross-functional teams and stakeholders.</li>
          <li><FaComments className="inline-block mr-2 text-teal-400" />Proven leadership skills, with experience in mentoring fellow developers and leading project teams.</li>
          <li><FaBrain className="inline-block mr-2 text-teal-400" />Excellent problem-solving abilities, with a track record of troubleshooting and optimizing complex systems.</li>
        </ul>
        
        <p className="text-gray-300 text-lg md:text-xl mt-8">
          I am passionate about using technology to solve real-world problems and create meaningful user experiences. I thrive in collaborative environments where continuous learning and innovation are encouraged. My commitment to excellence drives me to stay updated with industry trends and continuously improve my skills.
        </p>
        
        <p className="text-gray-300 text-lg md:text-xl mt-8">
          I am excited to bring my skills and passion for software development to a dynamic and forward-thinking company. Let's connect and discuss how I can contribute to your team's success. Feel free to reach out to me at [your contact information].
        </p>
      </div>
    </div>
  );
}

export default About;


