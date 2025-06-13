import React from 'react';

const PhoneMockup1 = () => {
  return (
    <div className="relative">
      <div className="w-72 sm:w-80 h-[500px] sm:h-[600px] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-[3rem] p-2 animate-phone-float">
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="h-full w-full bg-gray-50 dark:bg-gray-800 relative">
            {/* Phone mockup content */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black dark:bg-gray-700 rounded-full"></div>
            <div className="pt-12 px-6">
              <div className="bg-blue-600 dark:bg-blue-700 h-20 rounded-xl mb-4 animate-pulse-slow"></div>
              <div className="space-y-3">
                <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-3/4 animate-fade-in animate-delay-300"></div>
                <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-1/2 animate-fade-in animate-delay-400"></div>
                <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-2/3 animate-fade-in animate-delay-500"></div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-4 hover-lift">
                  <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-1/2 mb-2"></div>
                  <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-3/4"></div>
                </div>
                <div className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-4 hover-lift">
                  <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-1/2 mb-2"></div>
                  <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup1;
