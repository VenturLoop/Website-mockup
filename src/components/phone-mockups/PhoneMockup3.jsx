import React from 'react';

// Shared Icons (assuming they'd be in a common place)
const TimeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const WifiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);

const BatteryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>
  </svg>
);

// Social/App Specific Icons
const AppLogoIcon = () => ( // Generic App Logo / Community Icon
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

const UserPlusIcon = () => ( // For "Join" or "Sign Up"
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="17" y1="11" x2="23" y2="11"></line>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);


const PhoneMockup3 = () => {
  const avatarColors = ['bg-pink-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400'];
  const initials = ['J', 'A', 'L', 'S', 'R'];


  return (
    <div className="relative">
      {/* Decorative Blobs - kept from original */}
      <div className="absolute -z-10 w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] bg-pink-200/70 dark:bg-pink-900/30 rounded-full -bottom-10 -left-16 sm:-left-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 w-20 h-20 bg-yellow-300/70 dark:bg-yellow-500/30 rounded-full top-0 right-0 animate-float"></div>

      <div className="w-72 sm:w-80 h-[550px] sm:h-[650px] bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-[3rem] p-2 shadow-xl relative z-0 animate-phone-float">
        <div className="mockup-screen h-full w-full">

          {/* Status Bar */}
          <div className="mockup-header flex justify-between items-center text-xs px-2 py-1">
            <div className="flex items-center space-x-1">
              <TimeIcon /> <span>9:41 AM</span>
            </div>
            <div className="flex items-center space-x-1">
              <WifiIcon /> <BatteryIcon />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col justify-between h-[calc(100%-28px)] px-5 py-4"> {/* Adjusted height for status bar */}

            {/* App Logo / Welcome Section */}
            <div className="text-center animate-fadeInUp">
              <div className="inline-block p-4 bg-gradient-modern-1 rounded-full shadow-lg mb-3">
                <AppLogoIcon />
              </div>
              <h1 className="text-2xl font-bold text-glow-primary mb-1">Connect & Share</h1>
              <p className="text-sm text-muted-foreground">Join our vibrant community today!</p>
            </div>

            {/* Input Fields Section */}
            <div className="space-y-3 my-6 animate-fadeInUp animate-delay-200">
              <div className="relative">
                <MailIcon />
                <input type="email" placeholder="Enter your email" className="mockup-input pl-10 w-full" />
              </div>
              <div className="relative">
                <LockIcon />
                <input type="password" placeholder="Create a password" className="mockup-input pl-10 w-full" />
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="animate-fadeInUp animate-delay-400">
              <button className="mockup-button w-full text-base py-3 animate-pulseMore focus-ring-accent animate-clickEffect">
                <UserPlusIcon />
                Get Started
              </button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                By signing up, you agree to our Terms of Service.
              </p>
            </div>

            {/* Community Preview / Social Proof */}
            <div className="mt-6 text-center animate-fadeInUp animate-delay-600">
              <p className="text-sm font-medium text-foreground mb-2">Join these amazing people!</p>
              <div className="flex justify-center -space-x-3">
                {initials.map((initial, index) => (
                  <div
                    key={index}
                    className={`w-10 h-10 rounded-full ${avatarColors[index % avatarColors.length]} border-2 border-background flex items-center justify-center text-white font-semibold text-sm hover-shadow-lift cursor-pointer animate-scaleIn`}
                    style={{ animationDelay: `${700 + index * 100}ms` }}
                    title={`User ${initial}`}
                  >
                    {initial}
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

export default PhoneMockup3;
