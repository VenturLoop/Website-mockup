import React from 'react';

const PhoneMockup2 = () => {
  return (
    <div className="relative z-10">
      <div className="w-72 sm:w-80 h-[500px] sm:h-[600px] bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-[3rem] p-3 shadow-2xl animate-phone-float">
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden">
          <div className="h-full w-full bg-gray-50 dark:bg-gray-800 relative">
            {/* Phone UI */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black dark:bg-gray-700 rounded-full"></div>
            <div className="pt-12 px-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="bg-gray-200 dark:bg-gray-700 h-8 w-24 rounded"></div>
                <div className="bg-gray-200 dark:bg-gray-700 h-8 w-8 rounded-full"></div>
              </div>

              {/* Balance Card */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-6 mb-6 text-white animate-pulse-slow">
                <div className="bg-white/20 h-4 w-20 rounded mb-2"></div>
                <div className="bg-white/30 h-8 w-32 rounded mb-4"></div>
                <div className="flex justify-between">
                  <div className="bg-white/20 h-3 w-16 rounded"></div>
                  <div className="bg-white/20 h-3 w-12 rounded"></div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-3 shadow-sm hover-lift">
                    <div className="bg-blue-100 dark:bg-blue-900 h-8 w-8 rounded-lg mb-2 mx-auto"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-2 w-full rounded"></div>
                  </div>
                ))}
              </div>

              {/* Transaction List */}
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm flex items-center hover-lift"
                  >
                    <div className="bg-gray-200 dark:bg-gray-700 h-10 w-10 rounded-full mr-3"></div>
                    <div className="flex-1">
                      <div className="bg-gray-200 dark:bg-gray-700 h-3 w-20 rounded mb-1"></div>
                      <div className="bg-gray-200 dark:bg-gray-700 h-2 w-16 rounded"></div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 w-12 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup2;
