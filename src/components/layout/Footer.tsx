import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-6 px-4 bg-gray-100 border-t border-gray-200 text-center text-sm text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
         <p>&copy; {currentYear} Keuri Castillo. All rights reserved.</p>
         <div className="flex  flex-nowrap space-x-4">
            <a href="https://github.com/imkeuri" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200">
               <FaGithub size={20} /> GitHub 
            </a>
            <a href="https://www.linkedin.com/in/keuri-castillo-4468981a9/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-200">
               <FaLinkedin size={20} /> LinkedIn 
            </a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;