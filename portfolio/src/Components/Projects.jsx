import React from 'react';
import movieAuthImage from '../assets/images/movieAuthentication.png';
import movieDetailsImage from '../assets/images/moviedetails.png';
import movieResultsImage from '../assets/images/movieresults.png';
import Auth from '../assets/images/beautyshoplogin.png';
import beard from '../assets/images/beard.pnj.png';
import checkout from '../assets/images/checkout.png';
import blogLogin from '../assets/images/adminlogin.png';
import blogdetails from '../assets/images/blogapp.png';
import search from '../assets/images/blogsearch.png';
import meallogin from '../assets/images/mealplanlogin.png';
import homepage from '../assets/images/mealhomepage.png';
import recipe from '../assets/images/recipe.png';
import getstarted from '../assets/images/getstarted.png';

const Projects = () => {
  const projects = [
    {
      title: "React-Flask Beauty Shop Application",
      description: "A state-of-the-art platform that redefines the online beauty shopping experience. This application seamlessly integrates a sleek and intuitive user interface with robust backend functionality.",
      githubLink: "https://github.com/Ndisyamwende/Beauty-shop-frontend.git",
      demoLink: "https://chipper-flan-8b810f.netlify.app",
      images: [
        Auth,
        beard,
        checkout,
      ],
      highlights: [
        "Secure Authentication: Implemented JWT for enhanced user data protection.",
        "Responsive UI: Developed with Tailwind CSS for a mobile-first approach.",
        "Admin Interface: Streamlined product management for administrators.",
        "Efficient Data Handling: Integrated PostgreSQL for reliable data management.",
      ],
    },
    {
      title: "Mind-Full Meal-Planner",
      description: "An application that helps users plan their meals ahead of time, ensuring they know what to eat and when.",
      githubLink: "https://github.com/james-mbuvi/meal-planner/tree/main/meal-planner",
      demoLink: "https://ndisyamwende.github.io/Mindful-meal-planner/",
      images: [
        meallogin,
        homepage,
        getstarted,
        recipe,
      ],
      highlights: [
        "Secure Authentication: Configured Firebase authentication for user security.",
        "Responsive UI: Tailwind CSS for consistent user experience across devices.",
        "Dynamic Meal Planning: Allows users to easily schedule and track meals.",
        "Efficient Data Storage: Enhanced with First API for scalability.",
      ],
    },
    {
      title: "Admin App",
      description: "A robust application designed to provide administrators with a comprehensive interface for managing various aspects of the system.",
      githubLink: "https://github.com/james-mbuvi/Admin-app-Front-end",
      demoLink: "https://mbuvis.vercel.app/",
      images: [
        blogLogin,
        blogdetails,
        search,
      ],
      highlights: [
        "Secure Access: Firebase authentication for secure user access.",
        "Efficient Navigation: SideBar navigation for seamless user experience.",
        "Dynamic Content Loading: Enhances performance and user experience.",
        "Responsive Design: Optimized for various devices and screen sizes.",
        "Continuous Deployment: CI/CD pipelines using Vercel for regular updates.",
      ],
    },
    {
      title: "Movie Search Application",
      description: "A convenient application for users to search for information about movies.",
      githubLink: "https://github.com/james-mbuvi/Movie-search-application-react",
      images: [
        movieAuthImage,
        movieDetailsImage,
        movieResultsImage,
      ],
      highlights: [
        "Search Functionality: Optimized search with debouncing for performance.",
        "Dynamic Movie Details: Displays detailed information from an external API.",
        "Authentication: Firebase authentication for user-specific features.",
        "Responsive UI: Ensures consistent user experience across devices.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-8 md:p-20">
      <div className="md:w-3/4 lg:w-2/3 mb-10 md:mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-2 text-center animate-fadeIn text-teal-400">Technical Projects</h1>

        <div className="mt-8 text-left space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mt-4">
                {project.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {project.images.map((image, idx) => (
                  <img key={idx} src={image} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-48 object-contain rounded-lg"/>
                ))}
              </div>
              <p className="mt-4 text-gray-300 text-lg md:text-xl">
                {project.description}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl mt-4 space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}><strong>{highlight.split(':')[0]}:</strong> {highlight.split(':')[1]}</li>
                ))}
              </ul>
              <div className="flex mt-6 space-x-4">
                <a href={project.githubLink} className="bg-teal-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-teal-500 transition">GitHub</a>
                {project.demoLink && (
                  <a href={project.demoLink} className="bg-teal-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-teal-500 transition">Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
