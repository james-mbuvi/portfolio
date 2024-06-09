

import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-8 md:p-1">
      <div className="md:w-3/4 lg:w-2/3 mb-10 md:mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-2 text-center animate-fadeIn text-teal-400">Technical Projects</h1>

        <div className="mt-8 text-left space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mt-4">
              React-Flask Beauty Shop Application - 
              <a href="https://github.com/Ndisyamwende/Beauty-shop-frontend.git" className="text-teal-400 underline"> Github</a> | 
              <a href="https://chipper-flan-8b810f.netlify.app" className="text-teal-400 underline"> Demo</a>
            </h2>
            <p className="mt-4 text-gray-300 text-lg md:text-xl">
              Welcome to the Beauty Shop Application, a state-of-the-art platform that redefines the online beauty shopping experience. This application seamlessly integrates a sleek and intuitive user interface with robust backend functionality, ensuring that users can effortlessly browse, select, and purchase their favorite beauty products. Designed with a mobile-first approach and enhanced security features, this app provides a smooth and secure shopping journey from start to finish.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl mt-4 space-y-2">
              <li><strong>Implemented secure login and registration using JWT, resulting in enhanced user data protection.</strong> Leveraging JSON Web Tokens (JWT) and localStorage, the application ensures that user information is securely encrypted and stored client-side, providing both security and performance benefits.</li>
              <li><strong>Designed and developed a responsive user interface with Tailwind CSS, improving user experience across devices.</strong> The mobile-first design approach ensures that the application delivers a consistent and optimized user experience on any device, enhancing user engagement and satisfaction.</li>
              <li><strong>Developed an admin interface for managing products, increasing efficiency in product management.</strong> This feature allows administrators to effortlessly add, update, and remove products, streamlining the management process and ensuring that the product catalog is always up-to-date.</li>
              <li><strong>Integrated a PostgreSQL database to handle user data and product information efficiently.</strong> Utilizing PostgreSQL, the application ensures reliable and efficient data management, supporting complex queries and providing a robust foundation for future scalability.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mt-4">
              Mind-Full Meal-Planner - 
              <a href="https://github.com/james-mbuvi/meal-planner/tree/main/meal-planner" className="text-teal-400 underline"> Github</a> | 
              <a href="https://ndisyamwende.github.io/Mindful-meal-planner/" className="text-teal-400 underline"> Demo</a>
            </h2>
            <p className="mt-4 text-gray-300 text-lg md:text-xl">
              The Mind-Full Meal-Planner is an application that helps users plan their meals ahead of time, ensuring they know what to eat and when.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl mt-4 space-y-2">
              <li><strong>Integrated Firebase Authentication:</strong> Configured Firebase authentication to securely authenticate users, ensuring that only authorized personnel can access the application and its features.</li>
              <li><strong>Designed and developed a responsive user interface with Tailwind CSS, improving user experience across devices.</strong> The mobile-first design approach ensures that the application delivers a consistent and optimized user experience on any device, enhancing user engagement and satisfaction.</li>
              <li><strong>Implemented a dynamic meal planning feature,</strong> allowing users to easily schedule and track their meals.</li>
              <li><strong>Enhanced data storage with First API,</strong> providing efficient and scalable database solutions.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mt-4">
              Admin App - 
              <a href="https://github.com/james-mbuvi/Admin-app-Front-end" className="text-teal-400 underline"> GitHub</a> | 
              <a href="https://mbuvis.vercel.app/" className="text-teal-400 underline"> Demo</a>
            </h2>
            <p className="mt-4 text-gray-300 text-lg md:text-xl">
              The Admin App Front-end is a robust application designed to provide administrators with a comprehensive interface for managing various aspects of the system. Leveraging Firebase authentication, the app ensures secure access for authorized users, enhancing overall security and usability.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl mt-4 space-y-2">
              <li><strong>Integrated Firebase Authentication:</strong> Configured Firebase authentication to securely authenticate users, ensuring that only authorized personnel can access the Admin Dashboard and its features.</li>
              <li><strong>Implemented SideBar Navigation:</strong> Developed a dynamic SideBar navigation component with links to key sections of the admin dashboard, including Home, Contact, Events, Membership, Finance, and Campaigns. This enables users to navigate between sections seamlessly and efficiently.</li>
              <li><strong>Populated Content for SideBar Links:</strong> Populated each sidebar link with relevant content and functionalities tailored to the respective section. This ensures that administrators can access and manage specific aspects of the system with ease and precision.</li>
              <li><strong>Enabled Dynamic Content Loading:</strong> Utilized dynamic content loading techniques to display the content of each SideBar link dynamically. This enhances the user experience by minimizing page reloads and improving overall performance.</li>
              <li><strong>Responsive Design:</strong> Ensured the application is fully responsive, providing an optimal user experience across various devices and screen sizes, from mobile phones to desktop computers.</li>
              <li><strong>Comprehensive Documentation:</strong> Created detailed documentation and usage guides for the application, aiding in smoother onboarding and better understanding for future developers and users.</li>
              <li><strong>Continuous Integration and Deployment:</strong> Implemented CI/CD pipelines using Vercel to streamline the development process, ensuring regular updates, automated testing, and seamless deployment without manual intervention.</li>
              <li><strong>Enhanced User Interface:</strong> Designed a user-friendly interface with a focus on usability and aesthetics, employing modern UI/UX principles to create an intuitive and visually appealing admin panel.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mt-4">
              Movie Search Application - 
              <a href="https://github.com/james-mbuvi/Movie-search-application-react" className="text-teal-400 underline"> Github</a> 
              {/* <a href="https://yourusername.github.io/weather-forecast" className="text-teal-400 underline"> Demo</a> */}
            </h2>
            <p className="mt-4 text-gray-300 text-lg md:text-xl">
            Movie search applicaion is designed to provide users with a convenient way to search for information about movies.Its
            functionality typically includes features such as
            </p>
            <ul className="list-disc list-inside text-gray-300 text-lg md:text-xl mt-4 space-y-2">
              <li><strong>SearchBar:</strong> Implemented a search functionality allowing users to input search queries and retrieve relevant movie information from a public API. Implemented debouncing to optimize search performance, ensuring efficient handling of user input while minimizing unnecessary API requests.</li>
              <li><strong>MoviesResults:</strong> Created a component to represent search results based on user’s query, showcasing relevant movie titles, posters, and brief descriptions.</li>
              <li><strong>MovieDetails:</strong> Implemented a component to display detailed information about a selected movie, including director, actors, genre, and release time. Integrated with an external API to fetch and render up-to-date movie data.</li>
              <li><strong>Authentication:</strong> Integrated an authentication feature to enhance user experience and personalize interactions within the application. Implemented user authentication and authorization using Firebase authentication services, enabling secure access to user-specific features.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

