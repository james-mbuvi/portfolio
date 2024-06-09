import React from 'react';
import { FaEnvelope, FaWhatsapp, FaPhone, FaSms } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-8 md:p-20">
      <div className="md:w-3/4 lg:w-2/3 mb-10 md:mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mt-2 text-center animate-fadeIn text-teal-400">Contact Me</h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl leading-relaxed">
          As a passionate software developer with a proven track record in delivering high-quality web applications, I am eager to bring my expertise to a forward-thinking company. Let's connect to discuss how my skills and experiences can contribute to your team's success. Reach out to me through any of the following channels:
        </p>
      </div>
      
      <div className="md:w-3/4 lg:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg">
        <ul className="list-none text-gray-300 text-lg md:text-xl mt-8 space-y-6">
          <li className="flex items-center">
            <FaEnvelope className="inline-block mr-4 text-teal-400 text-2xl" />
            <span><strong>Email: </strong><a href="mailto:james1.mbuvi@gmail.com" className="hover:underline text-teal-400">james1.mbuvi@gmail.com</a></span>
          </li>
          <li className="flex items-center">
            <FaWhatsapp className="inline-block mr-4 text-teal-400 text-2xl" />
            <span><strong>WhatsApp: </strong><a href="https://wa.me/254779100618" className="hover:underline text-teal-400">+254779100618</a></span>
          </li>
          <li className="flex items-center">
            <FaPhone className="inline-block mr-4 text-teal-400 text-2xl" />
            <span><strong>Call: </strong><a href="tel:+254799697219" className="hover:underline text-teal-400">+254799697219</a></span>
          </li>
          <li className="flex items-center">
            <FaSms className="inline-block mr-4 text-teal-400 text-2xl" />
            <span><strong>SMS: </strong><a href="sms:+254799697219" className="hover:underline text-teal-400">+254799697219</a> / <a href="sms:+254779100618" className="hover:underline text-teal-400">+254779100618</a></span>
          </li>
        </ul>
      </div>
      
      <div className="md:w-3/4 lg:w-2/3 text-center mt-10">
        <p className="text-gray-300 text-lg md:text-xl">
          Looking forward to connecting with you and exploring how we can achieve great things together!
        </p>
      </div>
    </div>
  );
}

export default Contact;

