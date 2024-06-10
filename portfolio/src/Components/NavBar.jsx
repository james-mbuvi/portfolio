import React, { useState } from 'react';
import { FaGithub, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-gray-900 text-white text-2xl p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex-grow'></div>
        <button className='lg:hidden' onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className='hidden lg:flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-10'>
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
      </div>
      {isOpen && (
        <div className='lg:hidden flex flex-col space-y-4 mt-4 items-end'>
          <Link to="home" className='flex items-center justify-center w-full h-10 hover:text-teal-400'>
            <h1 className='text-base'>Home</h1>
          </Link>
          <Link to="/about" className='flex items-center justify-center w-full h-10 hover:text-teal-400'>
            <h1 className='text-base'>About</h1>
          </Link>
          <Link to="/projects" className='flex items-center justify-center w-full h-10 hover:text-teal-400'>
            <h1 className='text-base'>Projects</h1>
          </Link>
          <Link to="/education" className='flex items-center justify-center w-full h-10 hover:text-teal-400'>
            <h1 className='text-base'>Education</h1>
          </Link>
          <a href="https://github.com/james-mbuvi?tab=repositories" className='flex items-center justify-center w-full h-10'>
            <FaGithub className='w-5 h-5 hover:text-teal-400' />
          </a>
          <a href="https://www.linkedin.com/in/james-mbuvi-0442152b1/" className='flex items-center justify-center w-full h-10'>
            <FaLinkedin className='w-5 h-5 hover:text-teal-400' />
          </a>
          <Link to="/contact" className='flex items-center justify-center w-full h-10 hover:text-teal-400'>
            <FaPhone className='w-5 h-5 hover:text-teal-400' />
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
