import React from 'react';
import Image from 'next/image';

// Shared Icons needed for the header
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

// Placeholder logo - this must remain
const PlaceholderVenturloopLogo = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Venturloop Logo Placeholder">
    <rect width="100" height="100" rx="10" ry="10" fill="var(--brand-blue)" />
    <text x="50%" y="50%" dy=".3em" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16" font-family="Arial, sans-serif" font-weight="bold">LOGO</text>
  </svg>
);

const PhoneMockup2 = () => {
  return (
    <div className="relative z-10">
      <div className="android-frame animate-phone-float">
        <div className="mockup-screen">

          <div className="mockup-header flex justify-between items-center text-xs">
            <div className="flex items-center space-x-1"> <TimeIcon /> <span>9:41 AM</span> </div>
            <div className="flex items-center space-x-1"> <WifiIcon /> <BatteryIcon /> </div>
          </div>

          {/* Main content area - now only for centering the logo and tagline */}
          <div className="flex flex-col flex-grow items-center justify-center text-center px-4">
 <Image
                src="/appLogoT.png"
                alt="VenturLoop app logo displayed on a smartphone mockup screen related to startup offerings."
                width={112}
                height={112}
                className="w-28 h-28 -white  object-contain mr-2 rounded-lg"
              />            <p className="mt-3 text-sm text-foreground">
              Everything you need to build the next big thing!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PhoneMockup2;
