import React from 'react';

const PhoneMockup3 = () => {
  return (
    <div className="relative">
      {/* Pink background blob */}
      <div className="absolute -z-10 w-[350px] h-[350px] bg-pink-200 dark:bg-pink-900/30 rounded-full -bottom-10 -left-10 animate-pulse-slow"></div>
      {/* Yellow decoration */}
      <div className="absolute top-0 right-0 w-10 h-10 bg-yellow-300 dark:bg-yellow-500/70 rounded-full z-10 animate-float"></div>

      {/* Phone mockup */}
      <div className="w-72 sm:w-80 h-[500px] sm:h-[600px] bg-white dark:bg-gray-900 rounded-[3rem] p-2 shadow-xl relative z-0 animate-phone-float">
        <div className="w-full h-full bg-gray-50 dark:bg-gray-800 rounded-[2.5rem] overflow-hidden">
          {/* Phone mockup content */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black dark:bg-gray-700 rounded-full"></div>
          <div className="pt-12 px-6">
            <div className="bg-blue-600 dark:bg-blue-700 h-20 rounded-xl mb-4 flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold">SIGN UP</span>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-3/4"></div>
              <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-1/2"></div>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white dark:border-gray-800 animate-pulse-slow"></div>
                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white dark:border-gray-800 animate-pulse-slow animate-delay-100"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white dark:border-gray-800 animate-pulse-slow animate-delay-200"></div>
                <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white dark:border-gray-800 animate-pulse-slow animate-delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup3;
