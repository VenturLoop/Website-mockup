"use client";

import { Navigation } from "@/components/navigation";
import { useRouter } from 'next/navigation'; // Import useRouter
// Assuming lucide-react is already a project dependency.
// import { Moon, Sun } from 'lucide-react'; // Not needed if ThemeToggle is in Navigation
import { useState } from 'react';
import Link from 'next/link'; // Make sure this import is added
import CreateArticleModal from '@/components/CreateArticleModal';
import CreateArticleCard from '@/components/CreateArticleCard'; // New import
import { AppDownloadModal } from '@/components/AppDownloadModal'; // Changed to named import
import LoginModal from '@/components/LoginModal'; // Added import

const mockPosts = [
  {
    name: 'Devon Lane',
    time: '1 Month ago',
    content: 'Posted an article: Parler may go offline following suspensions by Amazon, Apple and Google.',
    image: 'https://via.placeholder.com/800x400?text=Image+Post+Large',
    likes: '6.2K',
    comments: 12,
    shares: 6,
  },
  {
    name: 'Darlene Robertson',
    time: '22s',
    content: 'Tom is in a big hurry.',
    image: 'https://via.placeholder.com/800x400?text=Room+View+Wide',
    likes: '6.2K',
    comments: 12,
    shares: 6,
  },
  {
    name: 'John Doe',
    time: '2 hours ago',
    content: 'Just shared a new blog post about the future of AI. Check it out!',
    image: 'https://via.placeholder.com/800x400?text=AI+Future',
    likes: '1.5K',
    comments: 45,
    shares: 10,
  },
  {
    name: 'Jane Smith',
    time: '5 minutes ago',
    content: 'Enjoying a beautiful day at the park. #nature #sunnyday',
    image: 'https://via.placeholder.com/800x400?text=Park+Scene',
    likes: '300',
    comments: 5,
    shares: 2,
  },
  {
    name: 'Alex Johnson',
    time: 'Yesterday',
    content: 'Excited to announce my new project. More details coming soon!',
    // No image for this one to test variability
    likes: '2.1K',
    comments: 102,
    shares: 25,
  }
];

const SidebarLeft = ({ onSeeAllClick, onConnectClick, onTryNowClick }) => { // Added onTryNowClick prop
  const usersToConnect = [
    { name: 'Alice Wonderland', bio: 'Curious explorer of digital realms.', userId: 'user1' },
    { name: 'Mohammed Azgar (Test)', bio: 'Test profile link', userId: '682de28d858fff4521c35b29' }, // Matching ID
    { name: 'Bob The Builder', bio: 'Constructing software solutions.', userId: 'user2' },
    { name: 'Charlie Brown', bio: 'Good grief, learning to code.', userId: 'user3' },
    { name: 'Diana Prince', bio: 'Championing user-centric design.', userId: 'user4' },
    { name: 'Edward Scissorhands', bio: 'Crafting elegant interfaces.', userId: 'user5' },
    { name: 'Fiona Gallagher', bio: 'Managing complex projects.', userId: 'user6' },
  ];

  return (
    <aside className="lg:col-span-3 hidden lg:block space-y-6 h-full overflow-y-auto hide-scrollbar">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
        <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">People to Connect</h2>
        <ul className="space-y-3">
          {usersToConnect.map((user, i) => (
            <li key={i} className="flex justify-between items-center py-2">
              <Link href={`/profile/${user.userId}`} className="flex items-center group"> {/* Wrap image and name div */}
                <img
                  src={`https://i.pravatar.cc/32?u=${user.name.replace(/\s/g, '')}`}
                  alt={user.name}
                  className="w-8 h-8 rounded-full mr-2.5 group-hover:ring-2 group-hover:ring-blue-500 transition-all"
                />
                <div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{user.name}</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{user.bio}</p>
                </div>
              </Link>
              <button
                onClick={onConnectClick} // This should correctly open the login modal
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 text-sm font-medium px-3 py-1.5 rounded-md border border-blue-500 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                Connect
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={onSeeAllClick}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-4 inline-block w-full text-center"
        >
          See All
        </button>
      </div>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Try Founder Pass</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Unlock premium features and grow your startup journey.</p>
      <ul className="space-y-2 my-4 text-sm text-gray-700 dark:text-gray-300">
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2"><path d="M20 6L9 17l-5-5"></path></svg>
          Unlimited connections
        </li>
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2"><path d="M20 6L9 17l-5-5"></path></svg>
          Verified Member badge
        </li>
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2"><path d="M20 6L9 17l-5-5"></path></svg>
          Send 60 pitch decks/month
        </li>
      </ul>
      <button
        onClick={onTryNowClick} // Call the passed-in handler
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium w-full transition-all duration-300 ease-in-out transform hover:scale-105">
        Try Now
      </button>
    </div>
  </aside>
  );
};

const Feed = () => (
  <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-6 h-full overflow-y-auto hide-scrollbar">
    {/* NEW: Add the CreateArticleCard component here */}
    <div className="hidden md:block"> {/* Ensures it's hidden on mobile */}
      <CreateArticleCard />
    </div>

    {/* mockPosts mapping starts here, the old "What's on your mind" box is removed */}
    {mockPosts.map((post, i) => (
      <div key={i} className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-lg">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <img src={`https://i.pravatar.cc/40?u=${post.name.replace(/\s/g, '')}`} alt={post.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <span className="font-semibold text-gray-900 dark:text-white">{post.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 block">{post.time}</span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
          </button>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{post.content}</p>
        {post.image && <img src={post.image} alt="Post image" className="w-full h-auto mt-3 rounded-lg border border-gray-200 dark:border-gray-700" />}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-gray-700/50">
          <div className="flex gap-x-5 text-sm text-gray-600 dark:text-gray-400">
            <button className="flex items-center gap-1.5 hover:text-red-500 dark:hover:text-red-400 transition-colors group">
              <svg className="group-hover:fill-red-100 dark:group-hover:fill-red-900/30 transition-colors" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              {post.likes}
            </button>
            <button className="flex items-center gap-1.5 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              {post.comments} <span className="hidden sm:inline">Comments</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-green-500 dark:hover:text-green-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
              {post.shares} <span className="hidden sm:inline">Shares</span>
            </button>
          </div>
           <button className="text-gray-500 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors group">
            <svg className="group-hover:fill-yellow-100 dark:group-hover:fill-yellow-700/30 transition-colors" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
          </button>
        </div>
      </div>
    ))}
  </section>
);

const mockArticles = [
  { id: 1, title: "Omicron: Most dangerous time of the pandemic", postedDate: "Oct 20, 2023", image: "https://via.placeholder.com/40x40" },
  { id: 2, title: "Parler may go offline following suspensions", postedDate: "Oct 22, 2023", image: "https://via.placeholder.com/40x40" },
  { id: 3, title: "India to Australia: Sydney Test ends in a draw", postedDate: "Oct 25, 2023", image: "https://via.placeholder.com/40x40" },
  { id: 4, title: "New breakthroughs in AI research", postedDate: "Oct 28, 2023", image: "https://via.placeholder.com/40x40" },
  { id: 5, title: "The future of remote work", postedDate: "Oct 30, 2023", image: "https://via.placeholder.com/40x40" },
];

const mockInvestors = [
  { id: 1, name: "Bessie Cooper", location: "New York, USA", avatarSeed: "BessieCooper" },
  { id: 2, name: "Jenny Wilson", location: "San Francisco, USA", avatarSeed: "JennyWilson" },
  { id: 3, name: "Robert Fox", location: "London, UK", avatarSeed: "RobertFox" },
  { id: 4, name: "Jacob Jones", location: "Berlin, Germany", avatarSeed: "JacobJones" },
  { id: 5, name: "Kristin Watson", location: "Paris, France", avatarSeed: "KristinWatson" },
];

const mockProjects = [
  { id: 1, name: "Blinkit Clone", description: "A clone of the Blinkit app for grocery delivery.", image: "https://via.placeholder.com/40x40" },
  { id: 2, name: "Zepto Clone", description: "A clone of the Zepto app for quick commerce.", image: "https://via.placeholder.com/40x40" },
  { id: 3, name: "Zenauto Clone", description: "A clone of the Zenauto app for car leasing.", image: "https://via.placeholder.com/40x40" },
  { id: 4, name: "AI Cover Letter Generator", description: "An AI-powered tool to generate cover letters.", image: "https://via.placeholder.com/40x40" },
  { id: 5, name: "Project Phoenix", description: "A revolutionary new platform for project management with advanced collaboration features and AI-powered insights. This project aims to redefine productivity.", image: "https://via.placeholder.com/40x40" },
];

const SidebarRight = ({ onAddNewArticleClick, setIsAppDownloadModalOpen, setIsLoginModalOpen }) => (
  <aside className="md:col-span-4 lg:col-span-3 hidden md:block space-y-6 h-full overflow-y-auto hide-scrollbar">
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Trending Articles</h2>
      <ul className="space-y-3">
        {mockArticles.slice(0, 5).map((article, index) => (
          <li key={article.id} className="py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <div className="flex items-start space-x-3">
              <img src={article.image} alt={article.title} className="w-10 h-10 rounded-md object-cover" />
              <div className="flex-1">
                <Link href={`/article/${article.id}`} className="group">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{article.title}</h3>
                </Link>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{article.postedDate}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsAppDownloadModalOpen(true)}
        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-4 inline-block w-full text-center"
      >
        See more
      </button>
    </div>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Active Investors</h2>
      <ul className="space-y-3">
        {mockInvestors.slice(0, 5).map(investor =>(
          <li key={investor.id} className="py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img src={`https://i.pravatar.cc/40?u=${investor.avatarSeed}`} alt={investor.name} className="w-10 h-10 rounded-full" />
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{investor.name}</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{investor.location}</p>
                </div>
              </div>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500 text-sm font-medium px-3 py-1.5 rounded-md border border-green-500 dark:border-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors">
                Pitch now
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsAppDownloadModalOpen(true)}
        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-4 inline-block w-full text-center"
      >
        See more
      </button>
    </div>
     <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Trending Projects</h2>
        <button
          onClick={() => setIsAppDownloadModalOpen(true)}
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          Add project
        </button>
      </div>
      <ul className="space-y-3">
        {mockProjects.slice(0, 5).map(project => (
          <li key={project.id} className="py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <div className="flex items-start space-x-3">
              <img src={project.image} alt={project.name} className="w-10 h-10 rounded-md object-cover" />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors leading-snug">{project.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{project.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsAppDownloadModalOpen(true)}
        className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-4 inline-block w-full text-center"
      >
        See more
      </button>
    </div>
  </aside>
);

export default function CommunityScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppDownloadModalOpen, setIsAppDownloadModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter(); // Initialize router

  const handleTryNowClick = () => {
    router.push('/pricing');
  };

  return (
    <>
      <Navigation />
      <div style={{ height: 'calc(100vh - 4rem)' }} className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        <main className="max-w-screen-xl mx-auto px-4 pb-4 sm:px-6 sm:pb-6 pt-4 grid grid-cols-12 gap-4 h-full">
          <SidebarLeft
            onSeeAllClick={() => setIsAppDownloadModalOpen(true)}
            onConnectClick={() => setIsLoginModalOpen(true)}
            onTryNowClick={handleTryNowClick} // Pass the new handler
          />
          <Feed />
          <SidebarRight
            onAddNewArticleClick={() => setIsModalOpen(true)}
            setIsAppDownloadModalOpen={setIsAppDownloadModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
          />
        </main>
      </div>
      <CreateArticleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AppDownloadModal isOpen={isAppDownloadModalOpen} onClose={() => setIsAppDownloadModalOpen(false)} /> {/* Rendered AppDownloadModal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} /> {/* Rendered LoginModal */}
      {/* Floating Action Button for Mobile */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="md:hidden fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-40 transition-transform transform hover:scale-110"
        aria-label="Add New Article"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </>
  );
}
