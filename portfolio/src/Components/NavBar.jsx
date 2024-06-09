import React from 'react';
import { FaGithub, FaPhone } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex flex-wrap justify-end p-4 space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-10 bg-gray-900 text-white text-2xl'>
      <Link to="home" className='flex items-center justify-center w-20 h-10 hover:text-teal-400'>
        <h1 className='text-sm sm:text-base md:text-lg lg:text-xl'>Home</h1>
      </Link>
      <Link to="/about" className='flex items-center justify-center w-20 h-10 hover:text-teal-400'>
        <h1 className='text-sm sm:text-base md:text-lg lg:text-xl'>About</h1>
      </Link>
      <Link to="/projects" className='flex items-center justify-center w-20 h-10 hover:text-teal-400'>
        <h1 className='text-sm sm:text-base md:text-lg lg:text-xl'>Projects</h1>
      </Link>
      <Link to="/education" className='flex items-center justify-center w-20 h-10 hover:text-teal-400'>
        <h1 className='text-sm sm:text-base md:text-lg lg:text-xl'>Education</h1>
      </Link>
      <a href="https://github.com/james-mbuvi?tab=repositories" className='flex items-center justify-center w-10 h-10'>
        <FaGithub className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-teal-400' />
      </a>
      <a href="https://www.linkedin.com/in/james-mbuvi-0442152b1/" className='flex items-center justify-center w-10 h-10'>
        <FaLinkedin className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-teal-400' />
      </a>
      <Link to="/contact">
        <FaPhone className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:text-teal-400' />
    
      </Link>
    </div>
  );
}

export default NavBar;








