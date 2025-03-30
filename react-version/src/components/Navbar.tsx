import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                Logo
              </span>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="#" className="border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Features
            </a>
            <a href="#" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Contact
            </a>
          </div>

          <div className="flex items-center">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full focus:outline-none"
            >
              {darkMode ? <FaSun className="text-yellow-300"/> : <FaMoon className="text-gray-600"/>}
            </button>
            <button 
              className="sm:hidden ml-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 dark:text-indigo-300">
              Home
            </a>
            <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-200 hover:border-gray-300 hover:text-gray-800">
              Features
            </a>
            <a href="#" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-200 hover:border-gray-300 hover:text-gray-800">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;