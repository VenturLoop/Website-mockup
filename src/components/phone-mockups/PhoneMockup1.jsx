import React from "react";

// VoLTEIcon (moved from src/components/icons/VoLTEIcon.jsx)
const VoLTEIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <text
      x="50%"
      y="50%"
      dy=".3em"
      textAnchor="middle"
      fontSize="8"
      fontWeight="bold"
    >
      VoLTE
    </text>
  </svg>
);

// InfinityLogo (moved from src/components/icons/InfinityLogo.jsx)
const InfinityLogo = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9.37 7.2c1.46-1.46 3.28-2.22 5.28-2.22 4.03 0 7.35 3.32 7.35 7.35s-3.32 7.35-7.35 7.35c-1.92 0-3.7-0.73-5.07-1.95" />
    <path d="M14.63 16.8c-1.46 1.46-3.28 2.22-5.28 2.22-4.03 0-7.35-3.32-7.35-7.35S5.97 4.65 10 4.65c1.92 0 3.7 0.73 5.07 1.95" />
  </svg>
);

// Simple SVG Icons for placeholders
const TimeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const WifiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);

const BatteryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
    <line x1="23" y1="13" x2="23" y2="11"></line>
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// CoFounderIcon: Illustration of one person helping another up.
const CoFounderIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    <line x1="12" y1="15" x2="12" y2="17"></line>
    <polyline points="10 13 12 15 14 13"></polyline>
  </svg>
);

// InvestorIcon: People and coins.
const InvestorIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <circle cx="17" cy="7" r="2"></circle>
    <path d="M19 10h.01"></path>
    <path d="M17 14h.01"></path>
    <path d="M15 18h.01"></path>
    <path d="M21 12h.01"></path>
  </svg>
);

// CommunityIcon: Generic community builder (e.g., group of people, network).
const CommunityIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
    <path d="M12 12H8v4h4v-4z"></path>
    <path d="M12 12h4v4h-4v-4z"></path>
    <path d="M12 8V5"></path>
    <path d="M9 10l-2-1"></path>
    <path d="M15 10l2-1"></path>
  </svg>
);

// AcceleratorIcon: Group discussion.
const AcceleratorIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    <path d="M12 18h.01"></path>
    <path d="M15 15h.01"></path>
    <path d="M9 15h.01"></path>
  </svg>
);

// IncubatorIcon: Robot and founder team.
const IncubatorIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 2H8a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v2M18 2a4 4 0 0 1 4 4v1h2a2 2 0 0 1 2 2v2"></path>
    <circle cx="7" cy="14" r="1"></circle>
    <circle cx="17" cy="14" r="1"></circle>
    <line x1="7" y1="12" x2="7" y2="10"></line>
    <line x1="17" y1="12" x2="17" y2="10"></line>
    <path d="M12 18v-4M10 16h4"></path>
  </svg>
);

// HelpIcon: Envelope or question mark with an arrow.
const HelpIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
    <path d="M15 12l2 2 2-2"></path>
  </svg>
);

// Navigation Bar Icons
const LaunchIcon = ({ className, isActive }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill={isActive ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Simple rocket icon */}
    <path d="M5 18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
    <path d="M9 18V5l3-3 3 3v13" />
    <path d="M12 12L7 7" />
    <path d="M12 12L17 7" />
    {isActive && (
      <circle
        cx="12"
        cy="11"
        r="1"
        fill={isActive ? "white" : "currentColor"}
      />
    )}
  </svg>
);

const CommunityNavIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const FindNavIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MessageIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const ProfileNavIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// Note: SettingsIcon, UserIcon, ChartIcon have been removed as they are no longer used.

const PhoneMockup1 = () => {
  return (
    <div className="android-frame animate-phone-float">
      <div className="mockup-screen">
        {/* Status Bar */}
        <div className="mockup-header flex justify-between items-center text-xs">
          {" "}
          {/* Removed px-2 py-1 as .mockup-header in .android-frame handles padding */}
          <div className="flex items-center space-x-1">
            <TimeIcon />
            <span>9:41 AM</span>
          </div>
          <div className="flex items-center space-x-1">
            <VoLTEIcon className="w-3 h-3" /> {/* Add VoLTEIcon here */}
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {/* App Header: Logo and Founder Pass Button */}
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/appLogoT.png" // 🔁 Replace with your actual image path (e.g., /logo.svg or /assets/logo.png)
                alt="Venturloop Logo"
                className="w-8 h-8 -white  object-contain mr-2 rounded-lg"
              />
            </div>
            <button className="bg-yellow-400 text-black text-xs font-semibold py-1 px-3 rounded-full shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50">
              Founder Pass
            </button>
          </div>
        </div>

        {/* Search & Prompt Section */}
        <div className="px-4 pt-4 pb-3 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            What are you looking for?
          </h2>
          <div className="flex items-center justify-between p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Ask for 'Find Investors 🚀'
            </span>
            <SearchIcon className="text-gray-400 dark:text-gray-500" />
          </div>
        </div>

        {/* App Content Area - Replaced with Action Tiles */}
        <div className="flex-grow overflow-y-auto px-4 py-4 hide-scrollbar">
          <div className="grid grid-cols-2 gap-3">
            {/* Tile 1: Find a Co-founder */}
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
              <CoFounderIcon className="w-8 h-8 text-brand-blue mb-2" />
              <h3 className="text-xs font-semibold text-gray-800 dark:text-white">
                Find a Co-founder
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                Connect with like-minded innovators
              </p>
            </div>

            {/* Tile 2: Find Investors */}
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
              <InvestorIcon className="w-8 h-8 text-brand-green mb-2" />
              <h3 className="text-xs font-semibold text-gray-800 dark:text-white">
                Find Investors
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                Secure funding for your venture
              </p>
            </div>

            {/* Tile 3: Join a Community */}
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
              <CommunityIcon className="w-8 h-8 text-brand-purple mb-2" />
              <h3 className="text-xs font-semibold text-gray-800 dark:text-white">
                Join a Community
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                Network with peers and mentors
              </p>
            </div>

            {/* Tile 4: Find Accelerators */}
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center relative">
              <div className="absolute top-1 right-1 bg-red-500 text-white text-[0.625rem] leading-none px-1.5 py-0.5 rounded-full">
                New
              </div>
              <AcceleratorIcon className="w-8 h-8 text-brand-orange mb-2" />
              <h3 className="text-xs font-semibold text-gray-800 dark:text-white">
                Find Accelerators
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                Fast-track your startup growth
              </p>
            </div>

            {/* Tile 5: Find Incubator */}
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center relative">
              <div className="absolute top-1 right-1 bg-red-500 text-white text-[0.625rem] leading-none px-1.5 py-0.5 rounded-full">
                New
              </div>
              <IncubatorIcon className="w-8 h-8 text-brand-teal mb-2" />
              <h3 className="text-xs font-semibold text-gray-800 dark:text-white">
                Find Incubator
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                Nurture your idea from scratch
              </p>
            </div>

            {/* Tile 6: Help & Support */}
            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
              <HelpIcon className="w-8 h-8 text-gray-500 dark:text-gray-400 mb-2" />
              <h3 className="text-xs font-semibold text-gray-800 dark:text-white">
                Help & Support
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                Get assistance and find resources
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="flex justify-around items-center py-2 px-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mt-auto">
          {/* Nav Item 1: Launch (Active) */}
          <button className="flex flex-col items-center text-brand-blue dark:text-brand-blue hover:opacity-75 transition-opacity px-1 flex-shrink-0">
            <LaunchIcon className="w-4 h-4 mb-px" isActive={true} />
            <span className="text-[10px] leading-tight font-medium">
              Launch
            </span>
          </button>

          {/* Nav Item 2: Community */}
          <button className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors px-1 flex-shrink-0">
            <CommunityNavIcon className="w-4 h-4 mb-px" />
            <span className="text-[10px] leading-tight font-medium">
              Community
            </span>
          </button>

          {/* Nav Item 3: Find */}
          <button className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors px-1 flex-shrink-0">
            <FindNavIcon className="w-4 h-4 mb-px" />
            <span className="text-[10px] leading-tight font-medium">Find</span>
          </button>

          {/* Nav Item 4: Message */}
          <button className="relative flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors px-1 flex-shrink-0">
            <MessageIcon className="w-4 h-4 mb-px" />
            <span className="text-[10px] leading-tight font-medium">
              Message
            </span>
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 text-white text-[0.5rem] leading-none flex items-center justify-center rounded-full border-1 border-white dark:border-gray-800">
              1
            </span>
          </button>

          {/* Nav Item 5: Profile */}
          <button className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors px-1 flex-shrink-0">
            <ProfileNavIcon className="w-4 h-4 mb-px" />
            <span className="text-[10px] leading-tight font-medium">
              Profile
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup1;
