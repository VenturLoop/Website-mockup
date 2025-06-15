import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";
import { cn } from "@/lib/utils.js";
import { useUser } from "@/context/UserContext";
import {
  acceptInvitation,
  declineInvitation,
  getInvitations,
  getNotification,
  getStartupDetailSendInvestorList,
} from "@/lib/backendApi";
import { toast } from "sonner";

// Utility to safely extract nested data using a path string
const getByPath = (obj, path) => {
  return path
    .split("?.")
    .reduce((acc, key) => (acc ? acc[key] : undefined), obj);
};

const MyUpdatesModal = ({ isOpen, onClose }) => {
  const { currentUser } = useUser();

  const [activeTab, setActiveTab] = useState("requests");
  const [loading, setLoading] = useState(false);
  const [updateData, setupdateData] = useState([]);

  const tabs = [
    {
      id: "requests",
      label: "Requests",
      function: getInvitations,
      dataPath: "invitations",
    },
    {
      id: "pitched",
      label: "Pitched",
      function: getStartupDetailSendInvestorList,
      dataPath: "data",
    },
    {
      id: "notifications",
      label: "Notifications",
      function: getNotification,
      dataPath: "notification",
    },
  ];

  const handleAccept = async (senderId) => {
    try {
      const res = await acceptInvitation(senderId, currentUser?.userId);
      console.log("Accepted:", res);
      if (res.success) {
        fetchData();
        toast.success("Invitation accepted"); // Show toast
      }
      // Optionally refetch data or remove item from list
    } catch (error) {
      console.error("Error accepting invitation:", error);
    }
  };

  const handleDecline = async (senderId) => {
    try {
      const res = await declineInvitation(senderId, currentUser?.userId);
      console.log("Declined:", res);
      if (res.success) {
        fetchData();
        toast.success("Invitation declined"); // Show toast
      }
      else{
        
      }
      // Optionally refetch data or remove item from list
    } catch (error) {
      console.error("Error declining invitation:", error);
    }
  };

  const fetchData = async () => {
    const selectedTab = tabs.find((t) => t.id === activeTab);

    if (!selectedTab?.function || !currentUser?.userId) {
      setupdateData([]);
      return;
    }

    setLoading(true);
    try {
      const result = await selectedTab.function(currentUser.userId);
      console.log("Update result", result);
      const extracted = getByPath(result, selectedTab.dataPath);
      setupdateData(extracted || []);
    } catch (err) {
      console.error(`Failed to fetch data for ${activeTab}:`, err);
      setupdateData([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [activeTab, currentUser?.userId]);

  const contentBaseClass =
    "px-4 min-h-[60vh] max-h-[65vh] overflow-y-auto text-gray-600 dark:text-gray-400";

  const renderRequests = () => (
    <div className={contentBaseClass}>
      <p className="text-sm text-gray-700 mb-2 text-center dark:text-gray-300">
        You have a new invitation.
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : updateData.length === 0 ? (
        <p>No requests at the moment.</p>
      ) : (
        <div className="space-y-4">
          {updateData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between  p-4 border border-gray-200 dark:border-zinc-700 rounded-lg bg-gray-50 dark:bg-zinc-900 shadow-sm"
            >
              <div className="flex items-center gap-4   border-gray-200 dark:border-zinc-700 rounded-lg bg-gray-50 dark:bg-zinc-900 shadow-sm">
                <img
                  src={
                    item?.sender?.profile?.profilePhoto ||
                    "https://avatar.iran.liara.run/public/boy?username=guest"
                  }
                  alt="Sender"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="flex flex-col  gap-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    {item?.sender?.name || "Unknown"}
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item?.sender?.profile?.status || "No status provided."}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={async () => {
                    try {
                      await handleAccept(item?.sender?._id); // Pass the correct ID
                    } catch (err) {
                      console.error("Accept failed", err);
                    }
                  }}
                  className="px-3 py-1 text-sm rounded-md bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Accept
                </button>

                <button
                  onClick={async () => {
                    try {
                      await handleDecline(item?.sender?._id); // Pass the correct ID
                    } catch (err) {
                      console.error("Decline failed", err);
                    }
                  }}
                  className="px-3 py-1 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderPitched = () => (
    <div className={contentBaseClass}>
      <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white mb-2">
        Outreached Investors
      </h3>
      {loading ? (
        <p>Loading...</p>
      ) : updateData.length === 0 ? (
        <p>No pitched ideas at the moment.</p>
      ) : (
        <div className="space-y-3">
          {updateData.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-zinc-800 rounded-md p-4 shadow-sm mb-4 flex items-center gap-4"
            >
              <img
                src={
                  item?.investorId?.image ||
                  "https://avatar.iran.liara.run/public/boy?username=guest"
                }
                alt="Investor"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                  {item?.investorId?.name || "Untitled"}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {item?.investorId?.investorType ||
                    "No description available."}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderNotifications = () => (
    <div className={contentBaseClass}>
      <h3 className="text-lg text-center font-semibold text-gray-800 dark:text-white mb-3">
        Notifications
      </h3>
      {loading ? (
        <p>Loading...</p>
      ) : updateData.length === 0 ? (
        <p>No notifications at the moment.</p>
      ) : (
        <ul className="space-y-2">
          {updateData.map((item, index) => (
            <li
              key={index}
              className="text-sm p-3 bg-blue-50 dark:bg-zinc-800 rounded-md border-l-4 border-blue-500"
            >
              {item?.message || item?.title || JSON.stringify(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case "requests":
        return renderRequests();
      case "pitched":
        return renderPitched();
      case "notifications":
        return renderNotifications();
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-xl mx-auto p-0 bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
        <DialogHeader className="px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200 dark:border-zinc-700">
          <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
            My Updates
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

        <div className="p-4 sm:p-6">{renderActiveTabContent()}</div>
      </DialogContent>
    </Dialog>
  );
};

export default MyUpdatesModal;
