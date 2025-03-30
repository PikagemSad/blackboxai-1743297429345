import React from 'react';
import { FaMobileAlt, FaMoon, FaBolt } from 'react-icons/fa';

const Features: React.FC = () => {
  const features = [
    {
      name: 'Responsive Design',
      description: 'Looks great on any device',
      icon: <FaMobileAlt className="h-6 w-6" />
    },
    {
      name: 'Dark Mode',
      description: 'Toggle between light/dark themes',
      icon: <FaMoon className="h-6 w-6" />
    },
    {
      name: 'Fast Performance',
      description: 'Optimized for speed',
      icon: <FaBolt className="h-6 w-6" />
    }
  ];

  return (
    <div className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {feature.icon}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;