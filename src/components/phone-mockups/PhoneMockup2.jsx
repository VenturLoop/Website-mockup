import React from 'react';

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

// Adapted UserAvatarIcon
const UserAvatarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue">
    <circle cx="12" cy="8" r="5" fill="var(--brand-blue)" stroke="var(--android-screen-bg-light, var(--background))" /> {/* Use screen bg for stroke */}
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="var(--brand-blue)" />
  </svg>
);
// Dark mode variant for UserAvatarIcon if needed explicitly, or ensure CSS vars handle it.
// For this setup, CSS variables in .dark .android-frame .mockup-screen should make --android-screen-bg-light correctly fallback or be defined.


// Finance Icons - ensure they use currentColor and parent sets color
const SendIcon = () => ( <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>);
const ReceiveIcon = () => ( <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 10H3l4-4m0 8l-4-4"></path><path d="M21 14h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5v12z"></path></svg>);
const BillIcon = () => ( <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>);
const MoreIcon = () => ( <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>);

// Transaction Type Icons - use currentColor by default
const ShoppingBagIcon = () => (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>);
const CoffeeIcon = () => (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>);
const UserTransferIcon = () => (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>);

// Navigation Icons
const HomeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const TransactionsIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>;
const ProfileIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;


const PhoneMockup2 = () => {
  // Assume activeTab state would be managed by React state in a real app
  const activeTab = "Home";

  return (
    <div className="relative z-10">
      <div className="android-frame animate-phone-float">
        <div className="mockup-screen">

          <div className="mockup-header flex justify-between items-center text-xs">
            <div className="flex items-center space-x-1"> <TimeIcon /> <span>9:41 AM</span> </div>
            <div className="flex items-center space-x-1"> <WifiIcon /> <BatteryIcon /> </div>
          </div>

          <div className="flex justify-between items-center px-4 py-3 animate-fadeIn">
            <h1 className="text-xl font-bold text-brand-blue">My Wallet</h1>
            <UserAvatarIcon />
          </div>

          <div className="px-4 animate-scaleIn animate-delay-100">
            <div className="mockup-card"> {/* Removed gradient, p-5, rounded-xl, hover-shadow-lift */}
              <p className="text-sm text-muted-foreground">Total Balance</p>
              <p className="text-3xl font-semibold text-brand-blue mt-1 mb-3">$12,345.67</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>**** **** **** 1234</span>
                <span>Expires 12/25</span>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 animate-fadeIn animate-delay-200">
            <p className="text-sm font-medium mb-2 text-muted-foreground px-1">Quick Actions</p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { label: 'Send', icon: <SendIcon />, delay: 200 },
                { label: 'Receive', icon: <ReceiveIcon />, delay: 300 },
                { label: 'Pay Bills', icon: <BillIcon />, delay: 400 },
                { label: 'More', icon: <MoreIcon />, delay: 500 },
              ].map((action) => (
                <div key={action.label} className={`mockup-card items-center justify-center flex flex-col text-center animate-slideInUp`} style={{animationDelay: `${action.delay}ms`}}> {/* Removed p-2, hover-shadow-lift */}
                  <div className="p-2 bg-brand-blue/10 rounded-full mb-1 text-brand-blue">{action.icon}</div>
                  <p className="text-xs text-muted-foreground">{action.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 flex-grow overflow-y-auto space-y-2 pb-16 hide-scrollbar"> {/* Adjusted pb, space-y */}
            <p className="text-sm font-medium mb-2 text-muted-foreground px-1 animate-fadeIn animate-delay-600">Recent Transactions</p>
            {[
              { icon: <ShoppingBagIcon />, name: 'Zara Shopping', date: 'Oct 28, 3:45 PM', amount: '-$75.50', delay: 700, color: 'text-red-500 dark:text-red-400' },
              { icon: <CoffeeIcon />, name: 'Starbucks Coffee', date: 'Oct 28, 9:12 AM', amount: '-$5.25', delay: 800, color: 'text-red-500 dark:text-red-400' },
              { icon: <UserTransferIcon />, name: 'Salary Deposit', date: 'Oct 27, 10:00 AM', amount: '+$2,500.00', delay: 900, type: 'deposit', color: 'text-green-500 dark:text-green-400' },
            ].map((transaction) => (
              <div key={transaction.name} className={`mockup-card flex items-center space-x-3 animate-slideInUp`} style={{animationDelay: `${transaction.delay}ms`}}> {/* Removed p-3, hover-shadow-lift */}
                <div className={`p-2 rounded-full bg-secondary ${transaction.type === 'deposit' ? 'text-green-500' : 'text-muted-foreground'}`}>{transaction.icon}</div> {/* Adjusted icon background and color */}
                <div className="flex-grow">
                  <p className="font-medium text-sm text-foreground">{transaction.name}</p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
                <p className={`text-sm font-medium ${transaction.color}`}>
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-background border-t border-android-border-light dark:border-android-border-dark"> {/* Android nav bar style */}
            <div className="flex justify-around items-center py-1">
              {[
                {name: "Home", icon: <HomeIcon />},
                {name: "Transactions", icon: <TransactionsIcon />},
                {name: "Profile", icon: <ProfileIcon />}
              ].map(item => (
                <button
                  key={item.name}
                  className={`mockup-button text flex flex-col items-center justify-center space-y-0.5 ${activeTab === item.name ? 'text-brand-blue' : 'text-muted-foreground'}`}
                >
                  {item.icon}
                  <span className="text-xs font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PhoneMockup2;
