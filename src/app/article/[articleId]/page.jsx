// src/app/article/[articleId]/page.jsx
"use client";

import { Navigation } from "@/components/navigation";
import Footer from "@/components/Footer"; // Corrected import
import Link from "next/link";
import { useParams } from "next/navigation"; // To get articleId if needed for fetching later

// Mock data for "People also read" - adjust as needed
const mockOtherArticles = [
  { id: 1, title: "Understanding Quantum Computing", category: "Technology" },
  { id: 2, title: "The Future of Renewable Energy", category: "Science" },
  { id: 3, title: "Exploring Deep Sea Ecosystems", category: "Nature" },
  { id: 4, title: "AI in Healthcare: Revolution or Risk?", category: "AI" },
  { id: 5, title: "The Rise of Decentralized Finance", category: "Finance" },
  { id: 6, title: "Urban Gardening: A Green Revolution", category: "Lifestyle" },
  { id: 7, title: "The Art of Minimalist Living", category: "Lifestyle" },
  { id: 8, title: "Space Exploration: The Next Frontier", category: "Space" },
  { id: 9, title: "Cybersecurity Trends in 2024", category: "Technology" },
  { id: 10, title: "The Impact of Social Media on Society", category: "Culture" },
];

// Mock article data - in a real app, you'd fetch this based on articleId
const mockArticleContent = {
  title: "Dynamic Routing in Next.js",
  author: "Jane Doe",
  date: "October 26, 2023",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.",
    "Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.",
  ],
  image: "https://via.placeholder.com/800x400?text=Article+Hero+Image"
};

export default function ArticlePage() {
  const params = useParams();
  const articleId = params.articleId; // Example of how to get the article ID

  // In a real app, you would fetch article data based on articleId
  // For now, we'll use mockArticleContent for demonstration
  const article = mockArticleContent;

  return (
    <>
      <Navigation />
      <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen transition-colors duration-300 flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <div className="grid grid-cols-12 gap-8">
            {/* Main Article Content Area */}
            <div className="col-span-12 lg:col-span-9">
              <article className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <span>By {article.author}</span>
                  <span className="mx-2">|</span>
                  <span>{article.date}</span>
                </div>
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-6 border border-gray-200 dark:border-gray-700"
                  />
                )}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {article.paragraphs.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </div>
              </article>
            </div>

            {/* People Also Read Sidebar */}
            <aside className="col-span-12 lg:col-span-3 space-y-6">
              <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg flex flex-col max-h-[calc(100vh-8rem)]">
                <h2 className="font-semibold text-xl mb-4 text-gray-900 dark:text-white flex-shrink-0">
                  People also read
                </h2>
                <div className="overflow-y-auto hide-scrollbar flex-grow">
                  <ul className="space-y-4">
                    {mockOtherArticles.map((otherArticle) => (
                      <li key={otherArticle.id} className="pb-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                        <Link href={`/article/${otherArticle.id}`} className="group">
                          <h3 className="text-md font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                            {otherArticle.title}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {otherArticle.category}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </main>
        <Footer /> {/* Added Footer component here */}
      </div>
    </>
  );
}
