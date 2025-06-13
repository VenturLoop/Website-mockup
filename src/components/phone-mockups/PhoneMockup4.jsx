import React from 'react';

// Shared Icons
const TimeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> );
const WifiIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg> );
const BatteryIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg> );

// Verified Badge Icon
const VerifiedBadgeIcon = () => (
  <svg className="w-4 h-4 text-green-500 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

// Location, Currency, and Website Icons
const LocationPinIcon = () => (
  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const CurrencyDollarIcon = () => (
  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.5 2.5 0 00-.567-.267C8.07 8.488 8 8.737 8 9.01V11c0 .273.07.522.433.622.155.103.346.196.567.267v1.698a2.5 2.5 0 00.567-.267c.364-.1.433-.349.433-.622V10a1 1 0 00-1-1h-.567V7.418zm-2.517 0A2.5 2.5 0 003 9.01V11c0 .273.07.522.433.622.155.103.346.196.567.267v1.698a2.5 2.5 0 00.567-.267c.364-.1.433-.349.433-.622V10a1 1 0 00-1-1h-.567V7.418zm8.001 0A2.5 2.5 0 0011 9.01V11c0 .273.07.522.433.622.155.103.346.196.567.267v1.698a2.5 2.5 0 00.567-.267c.364-.1.433-.349.433-.622V10a1 1 0 00-1-1h-.567V7.418zM10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.56 4.56 0 00-1.82.824 1.5 1.5 0 00-.604 1.157 1.5 1.5 0 00.604 1.156A4.56 4.56 0 009 10.322V12a1 1 0 102 0v-.092a4.56 4.56 0 001.82-.824 1.5 1.5 0 00.604-1.157 1.5 1.5 0 00-.604-1.156A4.56 4.56 0 0011 6.678V5z" clipRule="evenodd" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.002 6.002 0 0111.336 0H4.332zm.166 1.946A6.002 6.002 0 0110 6.003a6.002 6.002 0 015.502 3.97h-11.004zM10 14.003a6.002 6.002 0 01-5.502-3.97h11.004A6.002 6.002 0 0110 14.003z" clipRule="evenodd" />
  </svg>
);

// FAB Icons
const StarIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const CrossIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);
const EnvelopeIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);
const PinIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

// Unused icons and variables removed.

const PhoneMockup4 = () => {
  return (
    <div className="relative">
      {/* Decorative Blobs REMOVED for cleaner Android theme */}
      <div className="android-frame animate-phone-float">
        <div className="mockup-screen relative">

          <div className="mockup-header flex justify-between items-center text-xs">
             <div className="flex items-center space-x-1"> <TimeIcon /> <span>9:41 AM</span> </div>
             <div className="flex items-center space-x-1"> <WifiIcon /> <BatteryIcon /> </div>
          </div>

          {/* Top Toggle Section */}
          <div className="flex justify-around items-center p-2 bg-gray-100 border-b border-android-border-light dark:border-android-border-dark">
            <button className="py-2 px-4 text-sm text-gray-500 dark:text-gray-400">
              Co-founder
            </button>
            <button className="py-2 px-4 text-sm text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400">
              Investor
            </button>
          </div>

          {/* Scrollable content area */}
          <div className="flex-grow overflow-y-auto hide-scrollbar pb-20">
            {/* Investor Identity Block */}
            <div className="p-4 flex items-center space-x-3 border-b border-android-border-light dark:border-android-border-dark">
              {/* Avatar */}
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-md flex items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-300">
                J
              </div>
              {/* Text Info */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Jungle Ventures <VerifiedBadgeIcon />
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Venture Capital (VC) Firm
                </p>
              </div>
            </div>

            {/* About/Description Section */}
            <div className="p-4 border-b border-android-border-light dark:border-android-border-dark">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Jungle Ventures is a Singapore-based venture capital firm that invests in early to growth-stage startups...
              </p>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none">
                See More
              </button>
            </div>

            {/* Location + Funding Info Section */}
            <div className="p-4 border-b border-android-border-light dark:border-android-border-dark">
              <div className="flex items-center mb-2">
                <LocationPinIcon />
                <span className="text-sm text-gray-700 dark:text-gray-300">Singapore</span>
              </div>
              <div className="flex items-center mb-2">
                <CurrencyDollarIcon />
                <span className="text-sm text-gray-700 dark:text-gray-300">$2 million – $20 million</span>
              </div>
              <div className="flex items-center">
                <GlobeIcon />
                <a href="https://www.jungle.vc" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none">
                  https://www.jungle.vc
                </a>
              </div>
            </div>

            {/* Investor Criteria Tags Section */}
            <div className="p-4 border-b border-android-border-light dark:border-android-border-dark">
              {/* Investment Stages */}
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Investment Stages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">Seed</span>
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">Series A</span>
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">Series B</span>
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">Growth Stage</span>
                </div>
              </div>

              {/* Investment Region */}
              <div className="mb-4">
                <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Investment Region</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">Southeast Asia</span>
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">India</span>
                </div>
              </div>

              {/* Preferred Business Model */}
              <div> {/* No mb-4 on the last group */}
                <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">Preferred Business Model</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">B2B</span>
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">B2C</span>
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">Marketplace</span>
                </div>
              </div>
            </div>
            {/* FAB Container */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
              <div className="flex space-x-3 bg-gray-800 bg-opacity-75 p-2 rounded-full shadow-lg">
                <button aria-label="Save profile" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center p-3 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  <StarIcon />
                </button>
                <button aria-label="Dismiss profile" className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center p-3 shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                  <CrossIcon />
                </button>
                <button aria-label="Send message" className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center p-3 shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                  <EnvelopeIcon />
                </button>
                <button aria-label="Pin profile" className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center p-3 shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                  <PinIcon />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PhoneMockup4;
