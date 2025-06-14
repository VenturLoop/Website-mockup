"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, UserMinus, X } from 'lucide-react'; // X can be an alternative close icon if needed, User for view profile
import RemoveConnectionWarningModal from './RemoveConnectionWarningModal'; // Import the new modal

export function MyConnectionsModal({ isOpen, onClose, connectionsList = [], totalConnections = 0 }) {
  const router = useRouter();
  const [isRemoveConfirmModalOpen, setIsRemoveConfirmModalOpen] = useState(false);
  const [userToRemove, setUserToRemove] = useState(null);

  if (!isOpen) {
    return null;
  }

  const handleViewProfile = (userId) => {
    console.log("View profile:", userId);
    router.push(`/profile/${userId}`);
    onClose(); // Close modal after navigation
  };

  const handleRemoveConnection = (userId) => {
    setUserToRemove(userId);
    setIsRemoveConfirmModalOpen(true);
  };

  const executeRemoveConnection = () => {
    console.log("Confirmed: Remove connection for user", userToRemove);
    // TODO: API call to remove connection for userToRemove
    // Then potentially update connectionsList or refetch
    alert(`Placeholder: Connection with ${userToRemove} removed.`);
    setIsRemoveConfirmModalOpen(false);
    setUserToRemove(null);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg max-h-[80vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-4 border-b dark:border-gray-700">
            <DialogTitle className="flex items-center justify-between">
            My Connections ({totalConnections})
            {/* Optional explicit close button in header if design calls for it, usually DialogClose in footer is enough */}
            {/* <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-4 w-4" />
            </Button> */}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-grow overflow-y-auto px-6 py-4 space-y-3 min-h-[370px]">
          {connectionsList && connectionsList.length > 0 ? (
            connectionsList.map((connection) => (
              <div
                key={connection.userId}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
              >
                <img
                  src={connection.profilePhotoUrl || '/placeholder.jpg'}
                  alt={connection.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-grow min-w-0">
                  <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                    {connection.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {connection.bio || 'No bio available.'}
                  </p>
                </div>
                <div className="flex space-x-1 flex-shrink-0">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleViewProfile(connection.userId)}
                    title="View Profile"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <User className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveConnection(connection.userId)}
                    title="Remove Connection"
                    className="text-red-500 hover:text-red-600 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <UserMinus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-10">
              No connections yet. Start networking to build your connections!
            </p>
          )}
        </div>

        <DialogFooter className="p-6 pt-4 border-t dark:border-gray-700">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <RemoveConnectionWarningModal
      isOpen={isRemoveConfirmModalOpen}
      onClose={() => {
        setIsRemoveConfirmModalOpen(false);
        setUserToRemove(null);
      }}
      onConfirm={executeRemoveConnection}
    />
  </>
  );
}

// Example defaultProps for robustness, though not strictly required by subtask
MyConnectionsModal.defaultProps = {
  connectionsList: [],
  totalConnections: 0,
};
