"use client";

import { Navigation } from "@/components/navigation";
// Assuming lucide-react is already a project dependency.
// import { Moon, Sun } from 'lucide-react'; // Not needed if ThemeToggle is in Navigation
import { useState } from 'react';
import CreateArticleModal from '@/components/CreateArticleModal';
import CreateArticleCard from '@/components/CreateArticleCard'; // New import

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
];

const SidebarLeft = () => (
  <aside className="lg:col-span-3 hidden lg:block space-y-6">
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">People to Connect</h2>
      <ul className="space-y-3">
        {['Steve Jobs', 'Ryan Roslansky', 'Dylan Field', 'Ada Lovelace'].map((name, i) => (
          <li key={i} className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={`https://i.pravatar.cc/32?u=${name.replace(/\s/g, '')}`} alt={name} className="w-8 h-8 rounded-full mr-2.5" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{name}</span>
            </div>
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 text-xs font-medium px-2.5 py-1 rounded-md border border-blue-500 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">Connect</button>
          </li>
        ))}
      </ul>
      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-4 inline-block">See All</a>
    </div>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Try Founder Pass</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Unlock premium features and grow your startup journey.</p>
      <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium w-full transition-all duration-300 ease-in-out transform hover:scale-105">Try Now</button>
    </div>
  </aside>
);

const Feed = () => (
  <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-6">
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

const SidebarRight = ({ onAddNewArticleClick }) => (
  <aside className="md:col-span-4 lg:col-span-3 hidden md:block space-y-6">
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Community Articles</h2>
      <ul className="space-y-2.5 text-sm">
        {[
          { title: "Omicron: Most dangerous time of the pandemic", id:1 },
          { title: "Parler may go offline following suspensions", id:2 },
          { title: "India to Australia: Sydney Test ends in a draw", id:3 }
        ].map(article => (
          <li key={article.id} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors leading-normal">{article.title}</li>
        ))}
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-3.5 inline-block">Show more</a>
        {/* "Add New Article" button removed from here */}
      </ul>
    </div>
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Active Investors</h2>
      <ul className="space-y-3 text-sm">
        {[
          { name: "Bessie Cooper", id:1, avatarSeed: "BessieCooper"},
          { name: "Jenny Wilson", id:2, avatarSeed: "JennyWilson"}
        ].map(investor =>(
          <li key={investor.id} className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={`https://i.pravatar.cc/32?u=${investor.avatarSeed}`} alt={investor.name} className="w-8 h-8 rounded-full mr-2.5" />
              <span className="text-gray-700 dark:text-gray-300">{investor.name}</span>
            </div>
            <button className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500 text-xs font-medium border border-green-500 dark:border-green-400 px-2.5 py-1 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 transition-colors">Pitch</button>
          </li>
        ))}
      </ul>
       <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-4 inline-block">See all</a>
    </div>
     <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Trending Projects</h2>
      <ul className="space-y-2.5 text-sm">
        {["Blinkit Clone", "Zepto Clone", "Zenauto Clone", "AI Cover Letter Generator"].map((project, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">{project}</li>
        ))}
      </ul>
      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mt-3.5 inline-block">See all</a>
    </div>
  </aside>
);

export default function CommunityScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 pt-16">
        <main className="max-w-screen-xl mx-auto p-4 sm:p-6 grid grid-cols-12 gap-4">
          <SidebarLeft />
          <Feed />
          <SidebarRight onAddNewArticleClick={() => setIsModalOpen(true)} />
        </main>
      </div>
      <CreateArticleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
