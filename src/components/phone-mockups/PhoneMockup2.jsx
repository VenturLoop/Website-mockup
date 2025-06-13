import React from 'react';

// Shared Icons from PhoneMockup1 (or a common file in a real scenario)
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

const UserAvatarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
    <circle cx="12" cy="8" r="5" fill="var(--primary)" stroke="var(--background)" strokeWidth="1.5" />
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="var(--primary)" />
  </svg>
);


// Finance Icons
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const ReceiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 10H3l4-4m0 8l-4-4"></path><path d="M21 14h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5v12z"></path>
  </svg>
);

const BillIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const MoreIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
  </svg>
);

const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const CoffeeIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

const HomeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const TransactionsIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>;
const ProfileIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;


const PhoneMockup2 = () => {
  return (
    <div className="relative z-10"> {/* Added z-10 as in original */}
      <div className="w-72 sm:w-80 h-[550px] sm:h-[650px] bg-gradient-to-br from-sky-100 to-indigo-200 dark:from-sky-800 dark:to-indigo-900 rounded-[3rem] p-2 animate-phone-float shadow-2xl">
        <div className="mockup-screen h-full w-full">

          {/* Status Bar */}
          <div className="mockup-header flex justify-between items-center text-xs px-2 py-1">
            <div className="flex items-center space-x-1">
              <TimeIcon />
              <span>9:41 AM</span>
            </div>
            <div className="flex items-center space-x-1">
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>

          {/* App Header */}
          <div className="flex justify-between items-center px-4 py-3 animate-fadeIn">
            <h1 className="text-xl font-bold text-glow-primary">My Wallet</h1>
            <UserAvatarIcon />
          </div>

          {/* Balance Card */}
          <div className="px-4 animate-scaleIn animate-delay-100">
            <div className="mockup-card bg-gradient-modern-1 p-5 rounded-xl hover-shadow-lift">
              <p className="text-sm text-indigo-200 opacity-90">Total Balance</p>
              <p className="text-3xl font-semibold text-white mt-1 mb-3">$12,345.67</p>
              <div className="flex justify-between items-center text-xs text-indigo-100">
                <span>**** **** **** 1234</span>
                <span>Expires 12/25</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-4 animate-fadeIn animate-delay-200">
            <p className="text-sm font-semibold mb-2 text-muted-foreground px-1">Quick Actions</p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: 'Send', icon: <SendIcon />, delay: 200 },
                { label: 'Receive', icon: <ReceiveIcon />, delay: 300 },
                { label: 'Pay Bills', icon: <BillIcon />, delay: 400 },
                { label: 'More', icon: <MoreIcon />, delay: 500 },
              ].map((action) => (
                <div key={action.label} className={`mockup-card items-center justify-center flex flex-col p-2 hover-shadow-lift animate-slideInUp`} style={{animationDelay: `${action.delay}ms`}}>
                  <div className="p-2 bg-primary/10 rounded-full mb-1 text-primary">{action.icon}</div>
                  <p className="text-xs text-center text-muted-foreground">{action.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction List */}
          <div className="px-4 flex-grow overflow-y-auto space-y-3 pb-16 hide-scrollbar"> {/* Added pb-16 for nav bar space */}
            <p className="text-sm font-semibold mb-2 text-muted-foreground px-1 animate-fadeIn animate-delay-600">Recent Transactions</p>
            {[
              { icon: <ShoppingBagIcon />, name: 'Zara Shopping', date: 'Oct 28, 3:45 PM', amount: '-$75.50', delay: 700 },
              { icon: <CoffeeIcon />, name: 'Starbucks Coffee', date: 'Oct 28, 9:12 AM', amount: '-$5.25', delay: 800 },
              { icon: <UserIcon />, name: 'Salary Deposit', date: 'Oct 27, 10:00 AM', amount: '+$2,500.00', delay: 900, type: 'deposit' },
            ].map((transaction) => (
              <div key={transaction.name} className={`mockup-card p-3 flex items-center space-x-3 hover-shadow-lift animate-slideInUp`} style={{animationDelay: `${transaction.delay}ms`}}>
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">{transaction.icon}</div>
                <div className="flex-grow">
                  <p className="font-medium text-sm">{transaction.name}</p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
                <p className={`text-sm font-medium ${transaction.type === 'deposit' ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Navigation (Fixed) */}
          <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border p-1 rounded-b-[2.5rem]">
            <div className="flex justify-around items-center">
              <button className="mockup-button bg-transparent hover:bg-primary/10 text-primary p-2 rounded-lg flex flex-col items-center text-xs focus-ring-accent">
                <HomeIcon /> Home
              </button>
              <button className="mockup-button bg-transparent hover:bg-primary/10 text-muted-foreground hover:text-primary p-2 rounded-lg flex flex-col items-center text-xs focus-ring-accent">
                <TransactionsIcon /> Transactions
              </button>
              <button className="mockup-button bg-transparent hover:bg-primary/10 text-muted-foreground hover:text-primary p-2 rounded-lg flex flex-col items-center text-xs focus-ring-accent">
                <ProfileIcon /> Profile
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
// Helper UserIcon from PhoneMockup1, if not already globally available
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
  </svg>
);


export default PhoneMockup2;
