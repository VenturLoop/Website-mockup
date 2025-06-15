import React from 'react';
import Image from 'next/image';

// Shared Icons
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
const AppLogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"> {/* Reduced size slightly */}
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
  </svg>
);

const UserPlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2"> {/* Adjusted stroke width */}
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="17" y1="11" x2="23" y2="11"></line>
  </svg>
);


const PhoneMockup3 = ({ onGetStartedClick }) => {
  // Simplified avatar styling for Android theme
  const avatarDisplayData = [
    { imgSrc: 'https://i.pravatar.cc/150?img=1', id: 1, title: 'User 1' },
    { imgSrc: 'https://i.pravatar.cc/150?img=2', id: 2, title: 'User 2' },
    { imgSrc: 'https://i.pravatar.cc/150?img=3', id: 3, title: 'User 3' },
    { imgSrc: 'https://i.pravatar.cc/150?img=4', id: 4, title: 'User 4' },
    { imgSrc: 'https://i.pravatar.cc/150?img=5', id: 5, title: 'User 5' },
  ];


  return (
    <div className="relative">
      {/* Decorative Blobs REMOVED for cleaner Android theme */}
      <div className="android-frame animate-phone-float shadow-2xl"> {/* Applied android-frame */}
        <div className="mockup-screen">

          <div className="mockup-header flex justify-between items-center text-xs">
            <div className="flex items-center space-x-1"> <TimeIcon /> <span>9:41 AM</span> </div>
            <div className="flex items-center space-x-1"> <WifiIcon /> <BatteryIcon /> </div>
          </div>

          <div className="flex flex-col justify-around flex-grow px-6 py-8"> {/* Adjusted padding and justify for better spacing */}

            <div className="text-center animate-fadeInUp">
              {/* App Logo with brand blue background */}
              <div className="inline-block   rounded-full shadow-md "> {/* Adjusted padding, shadow */}
 <Image
                src="/appLogoT.png"
                alt="VenturLoop app logo on a sign-up screen mockup."
                width={64}
                height={64}
                className="w-16 h-16 -white  object-contain  rounded-lg"
              />              </div>
              <h1 className="text-2xl font-bold text-blue-600 mb-1">VenturLoop</h1> {/* text-brand-blue */}
              <p className="text-sm text-muted-foreground">Find cofounders, investors & build faster.</p>
            </div>

            <div className="space-y-4 my-5 animate-fadeInUp animate-delay-200"> {/* Increased spacing */}
              <div>
                <input type="email" placeholder="Enter your email" className="mockup-input px-3 py-2 w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <input type="password" placeholder="Create a password" className="mockup-input px-3 py-2 w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>

            <div className="animate-fadeInUp animate-delay-400">
              {/* Button uses Android theme styles. Removed text-base, py-3 */}
              <button
                className="mockup-button w-full flex items-center justify-center animate-pulseMore bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
                onClick={onGetStartedClick}
              >
                <UserPlusIcon />
                Get Started
              </button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                By signing up, you agree to our Terms of Service.
              </p>
            </div>

            <div className="mt-5 text-center animate-fadeInUp animate-delay-600">
              <p className="text-sm font-medium text-foreground mb-3">Join these amazing people!</p>
              <div className="flex justify-center -space-x-2.5"> {/* Slightly reduced negative space */}
                {avatarDisplayData.map((avatar, index) => (
                  <Image
                    key={avatar.id}
                    src={avatar.imgSrc}
                    alt={avatar.title}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full border-2 border-blue-600 cursor-pointer animate-scaleIn hover:shadow-lg transform hover:-translate-y-1"
                    style={{ animationDelay: `${700 + index * 100}ms` }}
                    title={avatar.title}
                  />
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
