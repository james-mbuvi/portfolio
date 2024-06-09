import React from 'react';
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-900 text-white min-h-screen p-8 md:p-20">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <p className="text-lg">Hello, It's Me</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">James Mbuvi</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mt-2">And I'm a Software Developer</h2>
        <p className="mt-4 text-gray-300">Passionate software engineer skilled in HTML5, CSS, JavaScript, React, Python, Flask, Figma designing,
          database management, API development, SQL, MySQL, Firebase, GitHub, and Docker. Proficient in full-stack
          development, I excel in architecting, developing, and deploying complex software systems that deliver seamless user experiences. With
          expertise in these technologies, I build efficient web applications and contribute to the development of dynamic and interactive websites.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img src="/src/assets/Screenshot from 2024-05-15 13-41-15.png" alt="Profile" className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg border-4 border-teal-400" />
      </div>
    </div>
  );
}

export default Home;
