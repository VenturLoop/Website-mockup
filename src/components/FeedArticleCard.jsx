import Link from 'next/link';
import { useState, useEffect } from 'react'; // Added imports

const FeedArticleCard = (props) => {
  const { post } = props;

  // Text truncation logic
  const words = post.content.split(' ');
  const isLongText = words.length > 30;
  const truncatedText = isLongText ? words.slice(0, 30).join(' ') + '...' : post.content;

  // Moved state from Feed.jsx
  const [isCommentsExpanded, setIsCommentsExpanded] = useState(false);
  const [cardOpinionSortOrder, setCardOpinionSortOrder] = useState('latest');
  const [cardCurrentUserAvatar, setCardCurrentUserAvatar] = useState('https://i.pravatar.cc/32?u=defaultUserIcon');
  const [cardReplyingToOpinionId, setCardReplyingToOpinionId] = useState(null);

  // Moved handler from Feed.jsx
  const toggleCardComments = () => {
    setIsCommentsExpanded(prev => !prev);
  };

  // Moved handler from Feed.jsx
  const handleCardSortChange = (newSortOrder) => {
    setCardOpinionSortOrder(newSortOrder);
  };

  // Moved useEffect from Feed.jsx
  useEffect(() => {
    try {
      const storedUserDataString = localStorage.getItem('userData');
      if (storedUserDataString) {
        const storedUserData = JSON.parse(storedUserDataString);
        if (storedUserData && storedUserData.avatarUrl) {
          setCardCurrentUserAvatar(storedUserData.avatarUrl);
        }
      }
    } catch (error) {
      console.error('Error reading user data from local storage:', error);
    }
  }, []);

  return (
    <>
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <Link href={`/profile/${post.userId}`} passHref>
            <a className="group">
              <img
                src={`https://i.pravatar.cc/40?u=${post.userId}`}
                alt={post.name}
                className="w-10 h-10 rounded-full mr-3 cursor-pointer group-hover:ring-2 group-hover:ring-blue-500 transition-all"
              />
            </a>
          </Link>
          <div>
            <Link href={`/profile/${post.userId}`} passHref>
              <a className="font-semibold text-gray-900 dark:text-white hover:underline cursor-pointer text-sm">
                {post.name}
              </a>
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Posted an article.</p>
          </div>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{post.time}</span>
      </div>

      {/* Middle Section - Text content above image */}
      <div className="mb-4 flex flex-col">
        <div className="flex-grow mb-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            <span className="font-medium">Posted an article:</span> {truncatedText}
          </p>
          {isLongText && (
            <Link href={`/article/${post.articleId}`} passHref>
              <a className="text-blue-600 dark:text-blue-400 hover:underline ml-1 text-sm font-medium">
                see more
              </a>
            </Link>
          )}
        </div>
        {post.image && (
          <div className="w-full h-auto flex-shrink-0">
            <img
              src={post.image}
              alt="Article image"
              className="w-full h-full object-cover rounded-lg border border-gray-200 dark:border-gray-700"
            />
          </div>
        )}
      </div>

      {/* === Bottom Section & Comments Section - MOVED FROM Feed.jsx === */}
      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
        <div className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 min-w-0">
          <div className="flex -space-x-2 flex-shrink-0">
            <img className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ring-1 ring-gray-300 dark:ring-gray-600" src="https://i.pravatar.cc/24?u=avatar1" alt="User 1" />
            <img className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ring-1 ring-gray-300 dark:ring-gray-600" src="https://i.pravatar.cc/24?u=avatar2" alt="User 2" />
            <img className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 ring-1 ring-gray-300 dark:ring-gray-600" src="https://i.pravatar.cc/24?u=avatar3" alt="User 3" />
          </div>
          <button
            onClick={toggleCardComments}
            aria-expanded={isCommentsExpanded}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 font-medium px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors whitespace-nowrap min-w-0"
          >
            {post.comments} Opinion{post.comments !== 1 ? 's' : ''}
          </button>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap min-w-0">
            {post.upvotes} Upvote{post.upvotes !== 1 ? 's' : ''}
          </span>
        </div>
        <button className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 18.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3Z" /></svg>
          <span className="whitespace-nowrap">Upvote</span>
        </button>
      </div>

      {/* Comments Section - Conditionally Rendered */}
      {isCommentsExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700/50">
          {/* Comment Input Area */}
          <div className="mb-4 flex items-start space-x-3">
            <img
              src={cardCurrentUserAvatar} // Use local state
              alt="Your avatar"
              className="w-8 h-8 rounded-full flex-shrink-0 mt-1"
            />
            <div className="flex-grow">
              <textarea
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md resize-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                rows="3"
                placeholder="Add up your opinion..."
              ></textarea>
              <div className="mt-2 flex justify-end">
                <button
                  onClick={() => console.log('Post opinion clicked for post:', post.articleId)}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Post Opinion
                </button>
              </div>
            </div>
          </div>

          {/* Comment List Area */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {post.comments} Opinion{post.comments !== 1 ? 's' : ''}
              </h3>
              <div className="relative">
                <select
                  value={cardOpinionSortOrder} // Use local state
                  onChange={(e) => handleCardSortChange(e.target.value)} // Use local handler
                  className="text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-1.5 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-8"
                >
                  <option value="latest">Latest Opinions</option>
                  <option value="trending">Trending Opinions</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {(() => {
                let opinionsToDisplay = [];
                if (post.commentsArray && post.commentsArray.length > 0) {
                  if (cardOpinionSortOrder === 'latest') { // Use local state
                    opinionsToDisplay = [...post.commentsArray].reverse();
                  } else if (cardOpinionSortOrder === 'trending') { // Use local state
                    opinionsToDisplay = post.commentsArray.filter(opinion => opinion.isTrending);
                  }
                }

                if (opinionsToDisplay.length > 0) {
                  return opinionsToDisplay.map((opinion) => (
                    <div key={opinion.commentId} className="flex items-start space-x-3">
                      <img src={opinion.commenterAvatarUrl} alt={opinion.commenterName} className="w-8 h-8 rounded-full flex-shrink-0 mt-1" />
                      <div className="flex-grow bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-gray-800 dark:text-gray-100">{opinion.commenterName}</span>
                          <span className="text-xs text-gray-400 dark:text-gray-500">{opinion.commentTimestamp}</span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap mb-2">{opinion.commentText}</p>
                        <button
                          onClick={() => setCardReplyingToOpinionId(prevId => prevId === opinion.commentId ? null : opinion.commentId)} // Use local state setter
                          className="text-xs font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        >
                          Reply
                        </button>
                        {opinion.replies && opinion.replies.length > 0 && (
                          <div className="mt-3 ml-8 pl-4 border-l-2 border-gray-200 dark:border-gray-500 space-y-3">
                            {opinion.replies.map((reply) => (
                              <div key={reply.replyId} className="flex items-start space-x-2">
                                <img
                                  src={reply.replierAvatarUrl}
                                  alt={reply.replierName}
                                  className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                                />
                                <div className="flex-grow bg-gray-100 dark:bg-gray-700/60 p-2 rounded-md shadow-sm">
                                  <div className="flex items-center justify-between mb-0.5">
                                    <span className="font-semibold text-xs text-gray-700 dark:text-gray-200">{reply.replierName}</span>
                                    <span className="text-xs text-gray-400 dark:text-gray-500">{reply.replyTimestamp}</span>
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{reply.replyText}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        {cardReplyingToOpinionId === opinion.commentId && ( // Use local state
                          <div className="mt-3 ml-5 pl-3 border-l-2 border-gray-200 dark:border-gray-600">
                            <div className="flex items-start space-x-3">
                              <img
                                src={cardCurrentUserAvatar} // Use local state
                                alt="Your avatar"
                                className="w-7 h-7 rounded-full flex-shrink-0 mt-1"
                              />
                              <div className="flex-grow">
                                <textarea
                                  className="w-full p-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md resize-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                  rows="2"
                                  placeholder={`Replying to ${opinion.commenterName}...`}
                                ></textarea>
                                <div className="mt-2 flex items-center justify-end space-x-2">
                                  <button
                                    onClick={() => setCardReplyingToOpinionId(null)} // Use local state setter
                                    className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => {
                                      console.log(`Post reply to opinionId: ${opinion.commentId}`);
                                      setCardReplyingToOpinionId(null); // Use local state setter
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
                  if (cardOpinionSortOrder === 'trending') { // Use local state
                    return <p className="text-sm text-gray-500 dark:text-gray-400">No trending opinions at the moment.</p>;
                  } else if (!post.commentsArray || post.commentsArray.length === 0) {
                     return <p className="text-sm text-gray-500 dark:text-gray-400">No opinions yet. Be the first to share!</p>;
                  } else {
                     return <p className="text-sm text-gray-500 dark:text-gray-400">No opinions to display for this filter.</p>;
                  }
                }
              })()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedArticleCard;
