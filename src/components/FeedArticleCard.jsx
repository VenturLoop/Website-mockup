import Link from 'next/link';

const FeedArticleCard = (props) => {
  const { post } = props;

  // Text truncation logic
  const words = post.content.split(' ');
  const isLongText = words.length > 30;
  const truncatedText = isLongText ? words.slice(0, 30).join(' ') + '...' : post.content;

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
      {/* Bottom section (actions and comments) is NOT included in this component as per refined understanding of subtask */}
    </>
  );
};

export default FeedArticleCard;
