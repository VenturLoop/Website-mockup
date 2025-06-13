import React from 'react';

// Shared Icons
const TimeIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> );
const WifiIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg> );
const BatteryIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg> );

// Feed/Notification Specific Icons
const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-brand-blue cursor-pointer">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

// Icon wrappers for consistent styling
const IconWrapper = ({ children, className }) => (
  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm shrink-0 ${className}`}> {/* Reduced size to w-9 h-9 */}
    {children}
  </div>
);

const UserCommentIcon = () => (
  <IconWrapper className="bg-brand-blue text-white">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
  </IconWrapper>
);

const PhotoPostIcon = () => (
  <IconWrapper className="bg-secondary text-secondary-foreground">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
  </IconWrapper>
);

const SystemUpdateIcon = () => (
  <IconWrapper className="bg-secondary text-secondary-foreground">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01"></path><path d="M16.72 14.25A6.989 6.989 0 0012.01 10h-.01a7.004 7.004 0 00-5.02 2.07"></path><path d="M12 10V4"></path><path d="M12 4L9 7"></path><path d="M12 4l3 7"></path><path d="M18.36 6.64A9 9 0 0 1 20.77 15"></path><path d="M4.23 15A9 9 0 0 1 12 4.03"></path></svg>
  </IconWrapper>
);

const feedItems = [
  { id: 1, icon: <UserCommentIcon />, title: <><span className="font-semibold">Sarah Lane</span> commented on your post</>, description: "This looks amazing! Can't wait to try it out.", time: "5m ago", delay: 200 },
  { id: 2, icon: <PhotoPostIcon />, title: <><span className="font-semibold">Alex Green</span> added a new photo</>, description: "Exploring the city vibes today! 🏙️ #urbanlife", time: "25m ago", delay: 300 },
  { id: 3, icon: <SystemUpdateIcon />, title: "System Update Successful", description: "Your app has been updated to the latest version.", time: "1h ago", delay: 400 },
  { id: 4, icon: <UserCommentIcon />, title: <><span className="font-semibold">Mike P.</span> liked your photo</>, description: "Photo: 'Sunset Over The Hills'", time: "2h ago", delay: 500 },
];

const PhoneMockup4 = () => {
  return (
    <div className="relative">
      {/* Decorative Blobs REMOVED for cleaner Android theme */}
      <div className="android-frame animate-phone-float">
        <div className="mockup-screen">

          <div className="mockup-header flex justify-between items-center text-xs">
             <div className="flex items-center space-x-1"> <TimeIcon /> <span>9:41 AM</span> </div>
             <div className="flex items-center space-x-1"> <WifiIcon /> <BatteryIcon /> </div>
          </div>

          <div className="flex justify-between items-center px-4 py-3 animate-fadeIn border-b border-android-border-light dark:border-android-border-dark">
            <h1 className="text-lg font-semibold text-brand-blue">Activity Feed</h1> {/* text-brand-blue */}
            <BellIcon />
          </div>

          {/* Adjusted height: status bar (~28px) + header (~49px) + button area (~53px) = ~130px. Screen height is ~634px (650-8*2). So list height ~504px */}
          <div className="flex-grow overflow-y-auto space-y-2 p-3 hide-scrollbar"> {/* space-y-2, p-3 for list items */}
            {feedItems.map((item) => (
              <div
                key={item.id}
                className="mockup-card flex space-x-3 items-start animate-slideInUp" /* hover-shadow-lift removed, default card hover is subtle enough */
                style={{ animationDelay: `${item.delay}ms`}}
              >
                <div className="mt-0.5">{item.icon}</div> {/* Adjusted mt for better alignment with new icon size */}
                <div className="flex-grow">
                  <p className="text-sm text-foreground mb-0.5">{item.title}</p>
                  <p className="text-xs text-muted-foreground mb-1">{item.description}</p>
                  <p className="text-xs text-brand-blue">{item.time}</p> {/* text-brand-blue for time */}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 py-2 border-t border-android-border-light dark:border-android-border-dark"> {/* Adjusted padding for button area */}
             <button className="mockup-button w-full animate-fadeInUp animate-delay-[700ms] focus-ring-accent animate-clickEffect">
              Load More Activity
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PhoneMockup4;
