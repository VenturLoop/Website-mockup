import React, { useState } from "react";
import Image from "next/image";

// Shared Icons
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

// Verified Badge Icon
const VerifiedBadgeIcon = () => (
  <svg
    className="w-4 h-4 text-green-500 inline-block ml-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

// Location, Currency, and Website Icons
const LocationPinIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 inline-block"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

const CurrencyDollarIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 inline-block"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.5 2.5 0 00-.567-.267C8.07 8.488 8 8.737 8 9.01V11c0 .273.07.522.433.622.155.103.346.196.567.267v1.698a2.5 2.5 0 00.567-.267c.364-.1.433-.349.433-.622V10a1 1 0 00-1-1h-.567V7.418zm-2.517 0A2.5 2.5 0 003 9.01V11c0 .273.07.522.433.622.155.103.346.196.567.267v1.698a2.5 2.5 0 00.567-.267c.364-.1.433-.349.433-.622V10a1 1 0 00-1-1h-.567V7.418zm8.001 0A2.5 2.5 0 0011 9.01V11c0 .273.07.522.433.622.155.103.346.196.567.267v1.698a2.5 2.5 0 00.567-.267c.364-.1.433-.349.433-.622V10a1 1 0 00-1-1h-.567V7.418zM10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.56 4.56 0 00-1.82.824 1.5 1.5 0 00-.604 1.157 1.5 1.5 0 00.604 1.156A4.56 4.56 0 009 10.322V12a1 1 0 102 0v-.092a4.56 4.56 0 001.82-.824 1.5 1.5 0 00.604-1.157 1.5 1.5 0 00-.604-1.156A4.56 4.56 0 0011 6.678V5z"
      clipRule="evenodd"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 inline-block"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.002 6.002 0 0111.336 0H4.332zm.166 1.946A6.002 6.002 0 0110 6.003a6.002 6.002 0 015.502 3.97h-11.004zM10 14.003a6.002 6.002 0 01-5.502-3.97h11.004A6.002 6.002 0 0110 14.003z"
      clipRule="evenodd"
    />
  </svg>
);

// User Icon for Age
const UserIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 inline-block"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
);

// Calendar Icon for Joined Date
const CalendarIcon = () => (
  <svg
    className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2 inline-block"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
      clipRule="evenodd"
    />
  </svg>
);

// LinkedIn Icon
const LinkedInIcon = () => (
  <svg
    className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// Colored Circle Icons for Match Score
const YellowCircleIcon = () => (
  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 shrink-0"></div>
);
const GreenCircleIcon = () => (
  <div className="w-3 h-3 bg-green-400 rounded-full mr-2 shrink-0"></div>
);
const RedCircleIcon = () => (
  <div className="w-3 h-3 bg-red-400 rounded-full mr-2 shrink-0"></div>
);

// Co-founder FAB Icon
const UsersIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.945 11.945A5.002 5.002 0 0117 15v1h-14v-1a5.002 5.002 0 014.055-3.055A5.988 5.988 0 009 11c-1.805 0-3.43.842-4.445 2.162A6.001 6.001 0 001 18h18a6.001 6.001 0 00-3.555-5.838A5.988 5.988 0 0015 11c-1.074 0-2.072.288-2.945.777z" />
  </svg>
);

// FAB Icons (Resized to w-5 h-5)
const StarIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const CrossIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
const EnvelopeIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);
const PinIcon = () => (
  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

// Unused icons and variables removed.

const PhoneMockup4 = () => {
  const [activeView, setActiveView] = useState("Co-founder");
  const [activeCoFounderTab, setActiveCoFounderTab] = useState("About");

  return (
    <div className="relative">
      {/* Decorative Blobs REMOVED for cleaner Android theme */}
      <div className="android-frame animate-phone-float">
        <div className="mockup-screen relative">
          <div className="mockup-header flex justify-between items-center text-xs">
            <div className="flex items-center space-x-1">
              {" "}
              <TimeIcon /> <span>9:41 AM</span>{" "}
            </div>
            <div className="flex items-center space-x-1">
              {" "}
              <WifiIcon /> <BatteryIcon />{" "}
            </div>
          </div>

          {/* Top Toggle Section */}
          {/* Note: Dark mode for this toggle bar (and other dark: prefixed classes in this component)
              is activated by adding the 'dark' class to an ancestor HTML element (e.g., <html> or <body>),
              as per Tailwind's darkMode: 'class' configuration. */}
          <div className="flex justify-around items-center p-2 bg-gray-100 dark:!bg-gray-800 border-b border-android-border-light dark:border-android-border-dark">
            <button
              className={`py-2 px-4 text-sm font-medium focus:outline-none ${
                activeView === "Co-founder"
                  ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
              onClick={() => setActiveView("Co-founder")}
            >
              Co-founder
            </button>
            <button
              className={`py-2 px-4 text-sm font-medium focus:outline-none ${
                activeView === "Investor"
                  ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
              onClick={() => setActiveView("Investor")}
            >
              Investor
            </button>
          </div>

          {/* Scrollable content area */}
          <div className="flex-grow overflow-y-auto hide-scrollbar pb-20">
            {activeView === "Co-founder" && (
              <>
                <div className="border-b border-android-border-light dark:border-android-border-dark">
                  {" "}
                  {/* Wrapper for Co-founder content sections */}
                  {/* Co-founder Identity Section */}
                  <div className="p-4 flex items-center space-x-4">
                    {/* Profile Picture */}
                    <Image
                      src="https://ik.imagekit.io/venturloopimage/user_profiles/bf1370b8-51f8-4514-8045-a7661d041115_pGvAfpP-o.jpeg?updatedAt=1749968142080"
                      alt="Rishi Rajput profile picture on VenturLoop"
                      width={48}
                      height={48}
                      className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-md flex items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-300"
                    />
                    {/* Text Info */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Rishi Rajput
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Looking for Co-founder
                      </p>
                    </div>
                  </div>
                  {/* Connection Status & Social Presence Section */}
                  <div className="px-4 py-3 flex justify-between items-center">
                    {/* No bottom border here, as the main wrapper div has it */}
                    <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                      10 Connections
                    </span>
                    <LinkedInIcon />
                  </div>
                  {/* Headline / Summary Section */}
                  <div className="px-4 py-3">
                    <p className="text-base text-gray-800 dark:text-gray-200">
                      Full Stack Web Developer | Graphic Designer | Exploring
                      UI/UX
                    </p>
                  </div>
                  {/* Additional Info Section */}
                  <div className="px-4 py-3">
                    <div className="flex items-center mb-2">
                      <UserIcon />
                      <span className="text-sm text-gray-600 dark:text-gray-400 w-20">
                        Age:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-gray-200">
                        25
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      <LocationPinIcon />
                      <span className="text-sm text-gray-600 dark:text-gray-400 w-20">
                        Location:
                      </span>{" "}
                      {/* Icon already has mr-2 */}
                      <span className="text-sm text-gray-800 dark:text-gray-200">
                        Jaipur
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon />
                      <span className="text-sm text-gray-600 dark:text-gray-400 w-20">
                        Joined:
                      </span>
                      <span className="text-sm text-gray-800 dark:text-gray-200">
                        Feb 2025
                      </span>
                    </div>
                  </div>
                  {/* AI-Based Match Score Block */}
                  <div className="px-4 py-4 bg-sky-50 dark:bg-sky-900/50 rounded-lg border border-sky-200 dark:border-sky-700 shadow-md">
                    <div className="text-center mb-3">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        You got
                      </span>
                      <span className="text-4xl font-bold text-sky-600 dark:text-sky-400 mx-1">
                        14%
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        match
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <YellowCircleIcon />
                        <span>1 common skill set</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <GreenCircleIcon />
                        <span>1 common interest</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <RedCircleIcon />
                        <span>2 supporting skill sets</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Co-founder Specific Tabs for More Info */}
                <div className="flex justify-around items-center bg-gray-100 dark:!bg-gray-750 border-b border-android-border-light dark:border-android-border-dark shadow-sm">
                  <button
                    className={`py-2 px-3 text-xs font-medium focus:outline-none w-1/3 text-center ${
                      // Added w-1/3 and text-center
                      activeCoFounderTab === "About"
                        ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-500"
                        : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}
                    onClick={() => setActiveCoFounderTab("About")}
                  >
                    About
                  </button>
                  <button
                    className={`py-2 px-3 text-xs font-medium focus:outline-none w-1/3 text-center ${
                      // Added w-1/3 and text-center
                      activeCoFounderTab === "Experience"
                        ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-500"
                        : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}
                    onClick={() => setActiveCoFounderTab("Experience")}
                  >
                    Experience
                  </button>
                  <button
                    className={`py-2 px-3 text-xs font-medium focus:outline-none w-1/3 text-center ${
                      // Added w-1/3 and text-center
                      activeCoFounderTab === "Projects"
                        ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-500"
                        : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    }`}
                    onClick={() => setActiveCoFounderTab("Projects")}
                  >
                    Projects
                  </button>
                </div>
                {/* Content for Co-founder Tabs */}
                {activeCoFounderTab === "About" && (
                  <div className="p-4 text-sm">
                    <div className="mb-3">
                      <p className="font-semibold text-gray-700 dark:text-gray-300">
                        Commitment Level
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Ready to go full time next year
                      </p>
                    </div>
                    <div className="mb-3">
                      <p className="font-semibold text-gray-700 dark:text-gray-300">
                        Prior Experience
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Worked in a startup
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 dark:text-gray-300">
                        Equity Expectation
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Around 30% – 70%
                      </p>
                    </div>
                  </div>
                )}
                {activeCoFounderTab === "Experience" && (
                  <div className="p-4 text-sm text-gray-700 dark:text-gray-300">
                    Experience Content Placeholder. Yash's past roles, projects,
                    and achievements.
                  </div>
                )}
                {activeCoFounderTab === "Projects" && (
                  <div className="p-4 text-sm text-gray-700 dark:text-gray-300">
                    Projects Content Placeholder. Showcase of personal or
                    professional projects undertaken by Yash.
                  </div>
                )}
              </>
            )}

            {activeView === "Investor" && (
              <>
                {/* Investor Identity Block */}
                <div className="p-4 flex items-center space-x-3 border-b border-android-border-light dark:border-android-border-dark">
                  {/* Avatar */}
                  <Image
                    src="https://ik.imagekit.io/venturloopimage/user_profiles/jungle_ventures_logo_ZyHBNA7W2.jpg"
                    alt="Jungle Ventures logo on VenturLoop investor profile"
                    width={48}
                    height={48}
                    className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-md flex items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-300"
                  />

                  {/* https://ik.imagekit.io/venturloopimage/user_profiles/jungle_ventures_logo_ZyHBNA7W2.jpg */}
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
                    Jungle Ventures is a Singapore-based venture capital firm
                    that invests in early to growth-stage startups...
                  </p>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none">
                    See More
                  </button>
                </div>

                {/* Location + Funding Info Section */}
                <div className="p-4 border-b border-android-border-light dark:border-android-border-dark">
                  <div className="flex items-center mb-2">
                    <LocationPinIcon />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Singapore
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <CurrencyDollarIcon />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      $2 million – $20 million
                    </span>
                  </div>
                  <div className="flex items-center">
                    <GlobeIcon />
                    <a
                      href="https://www.jungle.vc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                    >
                      https://www.jungle.vc
                    </a>
                  </div>
                </div>

                {/* Investor Criteria Tags Section */}
                <div className="p-4 border-b border-android-border-light dark:border-android-border-dark">
                  {/* Investment Stages */}
                  <div className="mb-4">
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Investment Stages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        Seed
                      </span>
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        Series A
                      </span>
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        Series B
                      </span>
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        Growth Stage
                      </span>
                    </div>
                  </div>

                  {/* Investment Region */}
                  <div className="mb-4">
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Investment Region
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        Southeast Asia
                      </span>
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        India
                      </span>
                    </div>
                  </div>

                  {/* Preferred Business Model */}
                  <div>
                    {" "}
                    {/* No mb-4 on the last group */}
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Preferred Business Model
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        B2B
                      </span>
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        B2C
                      </span>
                      <span className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-200">
                        Marketplace
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* FAB Container - Conditionally Rendered */}
            {activeView === "Co-founder" && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                <div className="flex space-x-2 bg-gray-800 bg-opacity-75 p-1.5 rounded-full shadow-lg">
                  <button
                    aria-label="Bookmark profile"
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center p-2 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  >
                    <StarIcon />
                  </button>
                  <button
                    aria-label="Skip profile"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center p-2 shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                  >
                    <CrossIcon />
                  </button>
                  <button
                    aria-label="Request to connect"
                    className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center p-2 shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
                  >
                    <UsersIcon />
                  </button>
                  <button
                    aria-label="Send message"
                    className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center p-2 shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                  >
                    <EnvelopeIcon />
                  </button>
                </div>
              </div>
            )}

            {activeView === "Investor" && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                <div className="flex space-x-2 bg-gray-800 bg-opacity-75 p-1.5 rounded-full shadow-lg">
                  {" "}
                  {/* Adjusted space and padding */}
                  <button
                    aria-label="Save profile"
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center p-2 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  >
                    {" "}
                    {/* Adjusted size and padding */}
                    <StarIcon />
                  </button>
                  <button
                    aria-label="Dismiss profile"
                    className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center p-2 shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                  >
                    {" "}
                    {/* Adjusted size and padding */}
                    <CrossIcon />
                  </button>
                  <button
                    aria-label="Send message"
                    className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center p-2 shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                  >
                    {" "}
                    {/* Adjusted size and padding */}
                    <EnvelopeIcon />
                  </button>
                  <button
                    aria-label="Pin profile"
                    className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center p-2 shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                  >
                    {" "}
                    {/* Adjusted size and padding */}
                    <PinIcon />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup4;
