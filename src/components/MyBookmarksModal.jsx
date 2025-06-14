import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog.jsx";
import { cn } from "@/lib/utils.js";
import { useUser } from "@/context/UserContext.js";
import { getListData } from "@/lib/backendApi"; // your custom API call function

const MyBookmarksModal = ({ isOpen, onClose }) => {
  const { currentUser, isLoggedIn } = useUser();

  const [activeTab, setActiveTab] = useState("founder");
  const [loading, setLoading] = useState(false);
  const [bookmarksData, setBookmarksData] = useState([]);

  const tabs = [
    { id: "founder", label: "Founder Profiles", endpoint: "getSavedCofounder" },
    { id: "investor", label: "Investor Profiles", endpoint: "getSavedInvestor" },
    { id: "projects", label: "Saved Projects", endpoint: "getSaveProject" },
  ];

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const tab = tabs.find(t => t.id === activeTab);
        const apiCallFunction = tab.endpoint 
        const result = await apiCallFunction(currentUser?._id); // API: getListData("founderBookmarks"), etc.
        setBookmarksData(result?.data || []);
      } catch (err) {
        console.error("Failed to fetch bookmarks:", err);
        setBookmarksData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab, isLoggedIn]);

  const renderContent = () => {
    const contentBaseClass = "p-4 min-h-[60vh] max-h-[65vh] overflow-y-auto";

    if (!isLoggedIn) {
      return (
        <div className={`${contentBaseClass} flex flex-col items-center justify-center`}>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Please log in to see your bookmarks.
          </p>
        </div>
      );
    }

    if (loading) {
      return (
        <div className={`${contentBaseClass} flex items-center justify-center`}>
          <p className="text-gray-600 dark:text-gray-400">Loading {activeTab}...</p>
        </div>
      );
    }

    if (!bookmarksData.length) {
      return (
        <div className={`${contentBaseClass} flex items-center justify-center`}>
          <p className="text-gray-600 dark:text-gray-400">No bookmarks found for {activeTab}.</p>
        </div>
      );
    }

    return (
      <div className={`${contentBaseClass}`}>
        <h2 className="text-lg font-medium mb-4">
          {tabs.find(t => t.id === activeTab)?.label}
        </h2>
        {bookmarksData.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-zinc-800 rounded-md p-4 shadow-sm mb-4"
          >
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
              {item.title || item.name || "Untitled"}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {item.description || item.about || "No description available."}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-xl mx-auto sm:w-full p-0 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <DialogHeader className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200 dark:border-zinc-700">
          <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            {isLoggedIn && currentUser?.name ? `${currentUser.name}'s Bookmarks` : 'My Bookmarks'}
          </DialogTitle>
        </DialogHeader>

        <div className="flex border-b border-gray-200 dark:border-zinc-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 py-2 px-2 text-xs sm:py-3 sm:px-4 sm:text-sm font-medium text-center focus:outline-none transition-colors duration-150",
                activeTab === tab.id
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-6">{renderContent()}</div>
      </DialogContent>
    </Dialog>
  );
};

export default MyBookmarksModal;
