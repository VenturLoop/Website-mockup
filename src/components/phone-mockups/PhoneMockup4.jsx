import React from 'react';

const PhoneMockup4 = () => {
  return (
    <div className="relative">
      {/* Pink background blob */}
      <div className="absolute -z-10 w-[350px] h-[350px] bg-pink-200 dark:bg-pink-900/30 rounded-full -bottom-10 -left-10 animate-pulse-slow"></div>
      {/* Red decoration */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-red-300 dark:bg-red-500/70 transform rotate-45 animate-float-delayed"></div>

      {/* Phone mockup */}
      <div className="w-72 sm:w-80 h-[500px] sm:h-[600px] bg-white dark:bg-gray-900 rounded-[3rem] p-2 shadow-xl relative z-0 animate-phone-float">
        <div className="w-full h-full bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] overflow-hidden">
          {/* Phone mockup content */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black dark:bg-gray-700 rounded-full"></div>
          <div className="pt-12 px-6">
            <div className="bg-gray-200 dark:bg-gray-700 h-8 rounded-lg w-1/2 mb-4"></div>
            <div className="space-y-4 mb-6">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm hover-lift">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-400 mr-2"></div>
                  <div className="bg-gray-200 dark:bg-gray-700 h-4 w-24 rounded"></div>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-full mb-1"></div>
                <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-3/4"></div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm hover-lift">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-400 mr-2"></div>
                  <div className="bg-gray-200 dark:bg-gray-700 h-4 w-24 rounded"></div>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-full mb-1"></div>
                <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-3/4"></div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 h-6 rounded-lg w-1/3 mx-auto"></div>
            <div className="mt-4 text-center">
              <span className="text-xs text-gray-500 dark:text-gray-400">1/28</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup4;
