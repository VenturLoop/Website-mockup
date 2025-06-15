"use client";

import { Navigation } from "@/components/navigation";
import { useRouter } from 'next/navigation'; // Import useRouter
// Assuming lucide-react is already a project dependency.
// import { Moon, Sun } from 'lucide-react'; // Not needed if ThemeToggle is in Navigation
import { useState, useEffect } from 'react'; // Added useEffect
import Link from 'next/link'; // Make sure this import is added
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
    content: 'Parler may go offline following suspensions by Amazon, Apple and Google.',
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
    content: 'Tom is in a big hurry.',
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
    content: 'Just shared a new blog post about the future of AI. Check it out!',
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
    content: 'Enjoying a beautiful day at the park. #nature #sunnyday',
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
    content: 'Excited to announce my new project. More details coming soon!',
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
  const [expandedComments, setExpandedComments] = useState({}); // To store expanded state for each post
  const [opinionSortOrder, setOpinionSortOrder] = useState({}); // To store sort order for each post
  const DEFAULT_AVATAR_URL = 'https://i.pravatar.cc/32?u=defaultUserIcon';
  const [currentUserAvatar, setCurrentUserAvatar] = useState(DEFAULT_AVATAR_URL); // New state
  const [replyingToOpinionId, setReplyingToOpinionId] = useState(null); // null or the ID of the opinion being replied to

  const toggleComments = (articleId) => {
    setExpandedComments(prev => ({
      ...prev,
      [articleId]: !prev[articleId]
    }));
  };

  const handleSortChange = (articleId, newSortOrder) => {
    setOpinionSortOrder(prev => ({
      ...prev,
      [articleId]: newSortOrder
    }));
  };

  useEffect(() => {
    // This code runs on the client-side after component mounts
    try {
      const storedUserDataString = localStorage.getItem('userData'); // Assuming 'userData' is the key
      if (storedUserDataString) {
        const storedUserData = JSON.parse(storedUserDataString);
        if (storedUserData && storedUserData.avatarUrl) { // Assuming avatar URL is stored as 'avatarUrl'
          setCurrentUserAvatar(storedUserData.avatarUrl);
        }
      }
    } catch (error) {
      console.error('Error reading user data from local storage:', error);
      // Keep default avatar in case of error
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-6 space-y-6 h-full overflow-y-auto hide-scrollbar">
      {/* NEW: Add the CreateArticleCard component here */}
      <div className="hidden md:block"> {/* Ensures it's hidden on mobile */}
        <CreateArticleCard />
      </div>

      {/* mockPosts mapping starts here, the old "What's on your mind" box is removed */}
      {mockPosts.map((post, i) => {
        // Retrieve the expansion state for the current post
        const isExpanded = expandedComments[post.articleId] || false;

        return (
          // Inside the map function:
          <div key={i} className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-lg mb-6"> {/* Added mb-6 */}
            {/* Top Section */}
        <div className="flex items-start justify-between mb-4"> {/* Increased mb-3 to mb-4 */}
          <div className="flex items-center">
            <Link href={`/profile/${post.userId}`} passHref>
              <a className="group"> {/* Added group class for potential hover effects on children */}
                <img
                  src={`https://i.pravatar.cc/40?u=${post.userId}`}
                  alt={post.name}
                  className="w-10 h-10 rounded-full mr-3 cursor-pointer group-hover:ring-2 group-hover:ring-blue-500 transition-all" // Added hover effect
                />
              </a>
            </Link>
            <div>
              <Link href={`/profile/${post.userId}`} passHref>
                <a className="font-semibold text-gray-900 dark:text-white hover:underline cursor-pointer text-sm"> {/* Added text-sm */}
                  {post.name}
                </a>
              </Link>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Posted an article.</p> {/* Added mt-0.5 */}
            </div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{post.time}</span> {/* Added whitespace-nowrap */}
        </div>

        {/* Middle Section */}
        <div className="mb-4 flex items-start"> {/* Changed to mb-4, added items-start */}
          <div className="flex-grow pr-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm line-clamp-3"> {/* Added text-sm and line-clamp-3 (will need plugin for actual effect) */}
              <span className="font-medium">Posted an article:</span> {post.content} {/* Kept original content structure, truncation will be visual via line-clamp if plugin was active */}
            </p>
            {/* Basic JS truncation with "see more" as fallback if line-clamp isn't set up */}
            {post.content.length > 150 && ( /* Adjusted length for a bit more preview before "see more" */
              <Link href={`/article/${post.articleId}`} passHref>
                <a className="text-blue-600 dark:text-blue-400 hover:underline ml-1 text-sm font-medium">
                  see more
                </a>
              </Link>
            )}
          </div>
          {post.image && (
            <div className="w-28 h-28 flex-shrink-0 ml-2"> {/* Increased size, added ml-2 for spacing */}
              <img
                src={post.image}
                alt="Article image"
                className="w-full h-full object-cover rounded-lg border border-gray-200 dark:border-gray-700"
              />
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50"> {/* Main container - unchanged for now */}
          {/* Left group - REMOVED flex-shrink-1 */}
          <div className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 min-w-0">
            <div className="flex -space-x-2 flex-shrink-0"> {/* Avatars - flex-shrink-0 to prevent them from shrinking */}
              <img className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ring-1 ring-gray-300 dark:ring-gray-600" src="https://i.pravatar.cc/24?u=avatar1" alt="User 1" />
              <img className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ring-1 ring-gray-300 dark:ring-gray-600" src="https://i.pravatar.cc/24?u=avatar2" alt="User 2" />
              <img className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ring-1 ring-gray-300 dark:ring-gray-600" src="https://i.pravatar.cc/24?u=avatar3" alt="User 3" />
            </div>
            {/* Opinion text - added whitespace-nowrap and min-w-0 */}
            <button
              onClick={() => toggleComments(post.articleId)} // Updated onClick
              aria-expanded={isExpanded} // For accessibility
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 font-medium px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors whitespace-nowrap min-w-0"
            >
              {post.comments} Opinion{post.comments !== 1 ? 's' : ''}
            </button>
            {/* Upvote text - added whitespace-nowrap and min-w-0 */}
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap min-w-0">
              {post.upvotes} Upvote{post.upvotes !== 1 ? 's' : ''}
            </span>
          </div>
          {/* Right Upvote button - largely unchanged, ensure it has flex-shrink-0 if it shouldn't shrink */}
          <button className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 18.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3Z" /></svg>
            <span className="whitespace-nowrap">Upvote</span> {/* Added whitespace-nowrap to the text part of the button too */}
          </button>
        </div>
        {/* Comments Section - Conditionally Rendered */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
            {/* Comment Input Area */}
            <div className="mb-4 flex items-start space-x-3"> {/* Added flex and spacing for layout */}
              {/* User avatar (optional, but good for context) - using a generic one for now */}
              <img
                src={currentUserAvatar} // Use state variable
                alt="Your avatar"
                className="w-8 h-8 rounded-full flex-shrink-0 mt-1" // Small avatar
              />
              <div className="flex-grow">
                <textarea
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md resize-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  rows="3" // Start with 3 rows, can expand if needed or use auto-resizing JS later
                  placeholder="Add up your opinion..." /* Changed placeholder */
                ></textarea>
                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => console.log('Post opinion clicked for post:', post.articleId)} // Also updated console.log for consistency
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  >
                    Post Opinion {/* Changed text */}
                  </button>
                </div>
              </div>
            </div>

            {/* Comment List Area */}
            <div className="mt-6"> {/* Assuming this is the main container for lists that was there */}
              {/* New Main Header for Opinions */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {post.comments} Opinion{post.comments !== 1 ? 's' : ''}
                </h3>
                {/* Sort Dropdown */}
                <div className="relative"> {/* Container for select and potentially a custom arrow later */}
                  <select
                    value={opinionSortOrder[post.articleId] || 'latest'} // Default to 'latest'
                    onChange={(e) => handleSortChange(post.articleId, e.target.value)}
                    className="text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-1.5 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8" // Basic styling, appearance-none to help with custom arrow if added
                  >
                    <option value="latest">Latest Opinions</option>
                    <option value="trending">Trending Opinions</option>
                  </select>
                  {/* Basic dropdown arrow using SVG - for better appearance than default browser arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* The actual list of opinions will go below this header,
                  replacing the old separate "Recent" and "Trending" list structures.
              */}
              <div className="space-y-4">
                {(() => { // IIFE for cleaner logic separation
                  const currentSortOrder = opinionSortOrder[post.articleId] || 'latest';
                  let opinionsToDisplay = [];

                  if (post.commentsArray && post.commentsArray.length > 0) {
                    if (currentSortOrder === 'latest') {
                      opinionsToDisplay = [...post.commentsArray].reverse(); // Show all, newest first by reversing
                    } else if (currentSortOrder === 'trending') {
                      opinionsToDisplay = post.commentsArray.filter(opinion => opinion.isTrending);
                    }
                  }

                  if (opinionsToDisplay.length > 0) {
                    return opinionsToDisplay.map((opinion) => (
                      // Re-using the individual opinion item structure from previous steps
                      <div key={opinion.commentId} className="flex items-start space-x-3">
                        <img src={opinion.commenterAvatarUrl} alt={opinion.commenterName} className="w-8 h-8 rounded-full flex-shrink-0 mt-1" />
                        <div className="flex-grow bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-sm text-gray-800 dark:text-gray-100">{opinion.commenterName}</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">{opinion.commentTimestamp}</span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap mb-2">{opinion.commentText}</p> {/* Added mb-2 for spacing */}

                          {/* New "Reply" Button */}
                          <button
                            onClick={() => setReplyingToOpinionId(prevId => prevId === opinion.commentId ? null : opinion.commentId)}
                            className="text-xs font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          >
                            Reply
                          </button>
                          {/* Display Replies if they exist */}
                          {opinion.replies && opinion.replies.length > 0 && (
                            <div className="mt-3 ml-8 pl-4 border-l-2 border-gray-200 dark:border-gray-500 space-y-3"> {/* Adjusted indentation: ml-8, pl-4 */}
                              {opinion.replies.map((reply) => (
                                <div key={reply.replyId} className="flex items-start space-x-2"> {/* space-x-2 for tighter packing */}
                                  <img
                                    src={reply.replierAvatarUrl}
                                    alt={reply.replierName}
                                    className="w-6 h-6 rounded-full flex-shrink-0 mt-1" // Smaller avatar for replies (w-6 h-6)
                                  />
                                  <div className="flex-grow bg-gray-100 dark:bg-gray-700/60 p-2 rounded-md shadow-sm"> {/* Slightly different bg, padding, shadow */}
                                    <div className="flex items-center justify-between mb-0.5"> {/* Reduced mb */}
                                      <span className="font-semibold text-xs text-gray-700 dark:text-gray-200">{reply.replierName}</span>
                                      <span className="text-xs text-gray-400 dark:text-gray-500">{reply.replyTimestamp}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{reply.replyText}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Conditionally Rendered Reply Input Area */}
                          {replyingToOpinionId === opinion.commentId && (
                            <div className="mt-3 ml-5 pl-3 border-l-2 border-gray-200 dark:border-gray-600"> {/* Indent and add left border */}
                              <div className="flex items-start space-x-3">
                                <img
                                  src={currentUserAvatar} // Assumes currentUserAvatar state is available from Feed component
                                  alt="Your avatar"
                                  className="w-7 h-7 rounded-full flex-shrink-0 mt-1" // Slightly smaller avatar for reply input
                                />
                                <div className="flex-grow">
                                  <textarea
                                    className="w-full p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md resize-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                    rows="2" // Shorter text area for replies
                                    placeholder={`Replying to ${opinion.commenterName}...`}
                                  ></textarea>
                                  <div className="mt-2 flex items-center justify-end space-x-2">
                                    <button
                                      onClick={() => setReplyingToOpinionId(null)} // Cancel button
                                      className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={() => {
                                        console.log(`Post reply to opinionId: ${opinion.commentId}`);
                                        // Potentially clear textarea and close input here
                                        setReplyingToOpinionId(null);
                                      }}
                                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-md transition-colors"
                                    >
                                      Post Reply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ));
                  } else {
                    // Display a message based on why the list might be empty
                    if (currentSortOrder === 'trending') {
                      return <p className="text-sm text-gray-500 dark:text-gray-400">No trending opinions at the moment.</p>;
                    } else if (!post.commentsArray || post.commentsArray.length === 0) {
                       return <p className="text-sm text-gray-500 dark:text-gray-400">No opinions yet. Be the first to share!</p>;
                    } else {
                       // This case should ideally not be hit if logic is correct, but as a fallback:
                       return <p className="text-sm text-gray-500 dark:text-gray-400">No opinions to display for this filter.</p>;
                    }
                  }
                })()}
              </div>
            </div>
          </div>
        )}
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
