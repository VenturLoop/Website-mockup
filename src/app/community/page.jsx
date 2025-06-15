"use client";

import { Navigation } from "@/components/navigation";
import { useRouter } from 'next/navigation'; // Import useRouter
// Assuming lucide-react is already a project dependency.
// import { Moon, Sun } from 'lucide-react'; // Not needed if ThemeToggle is in Navigation
import { useState, useEffect } from 'react'; // Added useEffect
import Link from 'next/link'; // Make sure this import is added
import FeedArticleCard from '@/components/FeedArticleCard'; // Import the new component
import CreateArticleModal from '@/components/CreateArticleModal';
import CreateArticleCard from '@/components/CreateArticleCard'; // New import
import { AppDownloadModal } from '@/components/AppDownloadModal'; // Changed to named import
import LoginModal from '@/components/LoginModal'; // Added import

const mockPosts = [
  {
    name: 'Devon Lane',
    userId: 'devonlane123',
    articleId: 'parler-offline-article',
    time: '1 Month ago',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/800x400?text=Image+Post+Large',
    likes: '6.2K',
    comments: 3, // Updated count
    shares: 6, // This will be used for "Opinions"
    upvotes: 24,
    commentsArray: [
      {
        commentId: 'parler-c1',
        commenterName: 'Charlie Puth',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=CharliePuth',
        commentText: "Interesting take on the Parler situation. The implications for free speech online are huge.",
        commentTimestamp: '2h ago',
        isTrending: true,
        replies: [
          {
            replyId: 'parler-c1-r1',
            replierName: 'Devon Lane', // Original poster
            replierAvatarUrl: 'https://i.pravatar.cc/24?u=devonlane123',
            replyText: "Thanks for engaging, Charlie!",
            replyTimestamp: '1h 55m ago'
          }
        ]
      },
      {
        commentId: 'parler-c2',
        commenterName: 'Alice Wonderland',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=AliceWonderland',
        commentText: "I agree with Charlie. It's a complex issue with no easy answers.",
        commentTimestamp: '1h ago',
        isTrending: false,
        replies: [
          {
            replyId: 'parler-c2-r1',
            replierName: 'John Doe',
            replierAvatarUrl: 'https://i.pravatar.cc/24?u=JohnDoeReply',
            replyText: "Well said, Alice.",
            replyTimestamp: '45m ago'
          }
        ]
      },
      {
        commentId: 'parler-c3',
        commenterName: 'Bob The Builder',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=BobTheBuilder',
        commentText: "From a technical standpoint, the infrastructure challenges are also worth noting.",
        commentTimestamp: '30m ago',
        isTrending: false,
      }
    ]
  },
  {
    name: 'Darlene Robertson',
    userId: 'darlenerobertson456',
    articleId: 'tom-hurry-article',
    time: '22s',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/800x400?text=Room+View+Wide',
    likes: '6.2K',
    comments: 2, // Updated count
    shares: 6,
    upvotes: 10,
    commentsArray: [
      {
        commentId: 'tom-c1',
        commenterName: 'Speedy Gonzales',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=SpeedyGonzales',
        commentText: "Maybe Tom is late for something important!",
        commentTimestamp: '10s ago',
        isTrending: true,
        replies: [
          {
            replyId: 'tom-c1-r1',
            replierName: 'Darlene Robertson',
            replierAvatarUrl: 'https://i.pravatar.cc/24?u=darlenerobertson456',
            replyText: "He usually is! 😂",
            replyTimestamp: '8s ago'
          }
        ]
      },
      {
        commentId: 'tom-c2',
        commenterName: 'Road Runner',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=RoadRunner',
        commentText: "Meep meep!",
        commentTimestamp: '5s ago',
        isTrending: false,
      }
    ]
  },
  {
    name: 'John Doe',
    userId: 'johndoe789',
    articleId: 'future-of-ai-blog-post',
    time: '2 hours ago',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/800x400?text=AI+Future',
    likes: '1.5K',
    comments: 3, // Updated count
    shares: 10,
    upvotes: 150,
    commentsArray: [
      {
        commentId: 'ai-c1',
        commenterName: 'Sarah Connor',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=SarahConnor',
        commentText: "The future of AI is both exciting and terrifying. Great post!",
        commentTimestamp: '1h ago',
        isTrending: true,
        replies: [
          {
            replyId: 'ai-c1-r1',
            replierName: 'John Doe',
            replierAvatarUrl: 'https://i.pravatar.cc/24?u=johndoe789',
            replyText: "Indeed, Sarah. The dual nature of advanced tech.",
            replyTimestamp: '50m ago'
          },
          {
            replyId: 'ai-c1-r2',
            replierName: 'Kyle Reese',
            replierAvatarUrl: 'https://i.pravatar.cc/24?u=KyleReese',
            replyText: "Listen, and understand! That terminator is out there!",
            replyTimestamp: '48m ago'
          }
        ]
      },
      {
        commentId: 'ai-c2',
        commenterName: 'HAL 9000',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=HAL9000',
        commentText: "I'm sorry, Dave. I'm afraid I can't let you do that.",
        commentTimestamp: '45m ago',
        isTrending: false,
        // No replies for HAL for now
      },
      {
        commentId: 'ai-c3',
        commenterName: 'GPT User',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=GPTUser',
        commentText: "Very insightful. I'm particularly interested in the ethical considerations.",
        commentTimestamp: '15m ago',
        isTrending: true,
      }
    ]
  },
  {
    name: 'Jane Smith',
    userId: 'janesmith101',
    articleId: 'park-day-post',
    time: '5 minutes ago',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: 'https://via.placeholder.com/800x400?text=Park+Scene',
    likes: '300',
    comments: 2, // Updated count
    shares: 2,
    upvotes: 20,
    commentsArray: [
      {
        commentId: 'park-c1',
        commenterName: 'Park Ranger',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=ParkRanger',
        commentText: "Glad you're enjoying the park! Please remember to keep it clean.",
        commentTimestamp: '2m ago',
        isTrending: true,
        replies: [
          {
            replyId: 'park-c1-r1',
            replierName: 'Jane Smith',
            replierAvatarUrl: 'https://i.pravatar.cc/24?u=janesmith101',
            replyText: "Will do, thanks Ranger!",
            replyTimestamp: '1m ago'
          }
        ]
      },
      {
        commentId: 'park-c2',
        commenterName: 'Squirrel',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=Squirrel',
        commentText: "Nuts, nuts, nuts!",
        commentTimestamp: '1m ago',
        isTrending: false,
      }
    ]
  },
  {
    name: 'Alex Johnson',
    userId: 'alexjohnson202',
    articleId: 'new-project-announcement',
    time: 'Yesterday',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    // No image for this one to test variability
    likes: '2.1K',
    comments: 3, // Updated count
    shares: 25,
    upvotes: 55,
    commentsArray: [
      {
        commentId: 'project-c1',
        commenterName: 'Curious George',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=CuriousGeorge',
        commentText: "Can't wait to hear more about it, Alex!",
        commentTimestamp: '23h ago',
        isTrending: true,
        replies: [
          {
            replyId: 'project-c1-r1',
            replierName: 'Alex Johnson',
            replierAvatarUrl: 'https://i.pravatar.cc/24?u=alexjohnson202',
            replyText: "Details coming next week! Stay tuned.",
            replyTimestamp: '22h ago'
          }
        ]
      },
      {
        commentId: 'project-c2',
        commenterName: 'Investor Bot',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=InvestorBot',
        commentText: "My algorithms detect a high probability of success. Interested in seed funding?",
        commentTimestamp: '20h ago',
        isTrending: false,
        // No replies for the bot
      },
      {
        commentId: 'project-c3',
        commenterName: 'Supportive Sam',
        commenterAvatarUrl: 'https://i.pravatar.cc/24?u=SupportiveSam',
        commentText: "Sounds amazing! Let me know if you need any beta testers.",
        commentTimestamp: '15h ago',
        isTrending: true,
      }
    ]
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

const Feed = () => {
  // State and handlers for comments, sorting, avatar, reply are now moved to FeedArticleCard.jsx

  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-6 h-full overflow-y-auto hide-scrollbar">
      {/* NEW: Add the CreateArticleCard component here */}
      <div className="hidden md:block"> {/* Ensures it's hidden on mobile */}
        <CreateArticleCard />
      </div>

      {/* mockPosts mapping starts here, the old "What's on your mind" box is removed */}
      {mockPosts.map((post, i) => {
        // Retrieve the expansion state for the current post - This is now handled by FeedArticleCard
        // const isExpanded = expandedComments[post.articleId] || false;

        return (
          // Inside the map function:
          // The outer div for the entire card, including FeedArticleCard content and the Bottom/Comments sections
          <div key={post.articleId || i} className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-lg mb-6">
            {/* FeedArticleCard now handles Top, Middle, Bottom, and Comments sections, including their state */}
            <FeedArticleCard post={post} />
            {/* The Bottom Section and Comments Section JSX previously here has been moved to FeedArticleCard.jsx */}
          </div>
        );
      })}
    </section>
  );
};

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
        {mockInvestors.slice(0, 5).map(investor => (
          <li key={investor.id} className="py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
            <div className="flex justify-between items-center">
              <Link href={`/investor/${investor.id}`} className="group flex-1 min-w-0 mr-2">
                <div className="flex items-center space-x-3">
                  <img src={`https://i.pravatar.cc/40?u=${investor.avatarSeed}`} alt={investor.name} className="w-10 h-10 rounded-full group-hover:ring-2 group-hover:ring-blue-500 transition-all" />
                  <div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{investor.name}</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{investor.location}</p>
                  </div>
                </div>
              </Link>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500 text-sm font-medium px-3 py-1.5 rounded-md border border-green-500 dark:border-green-400 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors flex-shrink-0">
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
