import React from 'react';

// Simple SVG Icons for placeholders
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

// Updated to use brand colors or neutral colors from Android theme
const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100">
    <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const ChartIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100">
    <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);


const PhoneMockup1 = () => {
  return (
    <div className="android-frame animate-phone-float">
      <div className="mockup-screen">

        {/* Status Bar */}
        <div className="mockup-header flex justify-between items-center text-xs"> {/* Removed px-2 py-1 as .mockup-header in .android-frame handles padding */}
          <div className="flex items-center space-x-1">
            <TimeIcon />
            <span>9:41 AM</span>
          </div>
          <div className="flex items-center space-x-1">
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        {/* App Content Area */}
        <div className="flex-grow overflow-y-auto px-4 py-3 space-y-4 hide-scrollbar"> {/* Adjusted padding */}

          {/* Header Section */}
          <div className="text-center py-2 animate-fadeIn animate-delay-100">
            <h1 className="text-xl font-bold text-brand-blue">Dashboard</h1> {/* Changed to text-brand-blue */}
            <p className="text-xs text-muted-foreground">Welcome back!</p>
          </div>

          {/* Card 1: Profile Overview */}
          <div className="mockup-card group animate-slideInUp animate-delay-200"> {/* Added group for icon hover */}
            <div className="mockup-card-header flex justify-between items-center">
              <span>Profile</span>
              <UserIcon />
            </div>
            <p className="text-sm text-muted-foreground mb-2">Keep your details up to date.</p>
            <div className="flex items-center space-x-2">
              {/* Avatar updated to use brand blue */}
              <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-lg">JD</div>
              <div>
                <p className="font-semibold text-foreground">John Doe</p> {/* Ensured text color from theme */}
                <p className="text-xs text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>
          </div>

          {/* Card 2: Quick Actions */}
          <div className="mockup-card group animate-slideInUp animate-delay-300">
            <div className="mockup-card-header flex justify-between items-center">
              <span>Quick Actions</span>
              <SettingsIcon />
            </div>
            <div className="grid grid-cols-2 gap-2"> {/* Removed text-sm as button style handles font size */}
              {/* Removed text-xs p-2 from buttons */}
              <button className="mockup-button focus-ring-accent">Edit Profile</button>
              <button className="mockup-button focus-ring-accent">View Stats</button>
              <button className="mockup-button focus-ring-accent">Notifications</button>
              <button className="mockup-button focus-ring-accent">Settings</button>
            </div>
          </div>

          {/* Card 3: Statistics Teaser */}
          <div className="mockup-card group animate-slideInUp animate-delay-400">
            <div className="mockup-card-header flex justify-between items-center">
              <span>Activity</span>
              <ChartIcon />
            </div>
            <p className="text-sm text-muted-foreground mb-1">Your recent activity levels.</p>
            {/* Updated gradient to a solid, theme-appropriate background */}
            <div className="bg-secondary p-3 rounded-lg">
              <div className="h-16 w-full opacity-60 flex items-center justify-center text-sm">
                <span className="text-secondary-foreground">Chart Area</span>
              </div>
            </div>
          </div>

          {/* Input Field Example */}
          <div className="animate-slideInUp animate-delay-500 pt-2">
            <input type="text" placeholder="Search for anything..." className="mockup-input w-full focus-ring-accent" />
          </div>

          {/* Action Button at the bottom */}
          <div className="pt-3 pb-1 animate-slideInUp animate-delay-600">
            {/* Kept animate-pulseMore for now, can be removed if too distracting */}
            <button className="mockup-button w-full animate-pulseMore focus-ring-accent">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup1;
