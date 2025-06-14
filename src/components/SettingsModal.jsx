import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useUser } from '@/context/UserContext';
import { Mail, ShieldCheck, Lock, UserCircle, ListChecks, LogOut, Trash2, ChevronRight } from 'lucide-react';

const SettingsModal = ({ isOpen, onClose }) => {
  const { currentUser, logoutUser } = useUser();

  if (!currentUser) {
    return null; // Or some loading state
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white max-w-md mx-auto p-0 overflow-hidden flex flex-col h-full sm:h-auto sm:max-h-[90vh]">
        <DialogHeader className="p-4 sm:p-6 pb-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-10">
          <DialogTitle className="text-lg sm:text-xl font-semibold flex items-center text-gray-800 dark:text-white">
            <Mail className="mr-2 h-5 w-5 text-primary" />
            {currentUser.email}
            <span className="ml-3 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
              <ShieldCheck className="mr-1 h-3 w-3" />
              Verified
            </span>
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your account settings and preferences.
          </DialogDescription>
        </DialogHeader>

        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 overflow-y-auto flex-grow">
          {/* Password Section */}
          <section>
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 px-1">Password</h3>
            <div className="space-y-1 sm:space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200">
                <div className="flex items-center">
                  <Lock className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm sm:text-base">Change Password</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </button>
            </div>
          </section>

          {/* Account Section */}
          <section>
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 px-1">Account</h3>
            <div className="space-y-1 sm:space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200">
                <div className="flex items-center">
                  <UserCircle className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm sm:text-base">Founder Pass</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200">
                <div className="flex items-center">
                  <ListChecks className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm sm:text-base">My Subscription</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </button>
            </div>
          </section>

          {/* Privacy Section */}
          <section>
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 px-1">Privacy</h3>
            <div className="space-y-1 sm:space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-200">
                <div className="flex items-center">
                  <ShieldCheck className="mr-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm sm:text-base">Blocked users</span>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </button>
            </div>
          </section>
        </div>

        <div className="p-4 sm:p-6 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3 sm:space-y-4 sticky bottom-0 bg-white dark:bg-gray-900 z-10">
          <button
            onClick={logoutUser}
            className="w-full flex items-center justify-center p-3 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors font-medium text-gray-700 dark:text-gray-200 text-sm sm:text-base"
          >
            <LogOut className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Logout
          </button>
          <button
            className="w-full flex items-center justify-center p-3 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors font-medium dark:bg-red-600 dark:hover:bg-red-700 text-sm sm:text-base"
          >
            <Trash2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Delete Account
          </button>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            version 1.2.24
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
