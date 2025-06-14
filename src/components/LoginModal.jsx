// LoginModal.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Users, LogIn, UserPlus, Download, AlertTriangle } from 'lucide-react'; // Added AlertTriangle

const LoginModal = ({ isOpen, onClose, onOpenAppDownloadModal }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  useEffect(() => {
    const errorParam = searchParams.get('error');
    if (errorParam) {
      if (errorParam === 'authentication_failed') {
        setErrorMessage('Login failed. Please try again. If the problem persists, contact support.');
      } else if (errorParam === 'missing_credentials') {
        setErrorMessage('Authentication callback was missing necessary information. Please try logging in again.');
      } else {
        setErrorMessage('An unknown error occurred. Please try again.');
      }
      // Optional: Clear the error from URL after displaying, so it doesn't reappear on manual modal close/reopen
      // router.replace(window.location.pathname, undefined, { shallow: true }); // This might be too aggressive if modal can be closed without full navigation
    } else {
      setErrorMessage(''); // Clear any previous error message if no error in URL
    }
  }, [isOpen, searchParams, router]); // Re-check if modal is opened and params change

  // TODO: Implement actual Login, Create Account, and App Download functionalities
  const handleLogin = () => {
    window.location.href = 'https://auth.venturloop.com/login';
  };

  const handleCreateAccount = () => {
    window.location.href = 'https://auth.venturloop.com/auth/signup';
  };

  const handleDownloadApp = () => {
    console.log("Download App action triggered");
    if(onOpenAppDownloadModal) {
      onOpenAppDownloadModal();
    }
    onClose(); // Close this modal to open the other
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <DialogHeader className="flex flex-col items-center text-center">
          <Users className='w-16 h-16 text-blue-600 dark:text-blue-500 mb-4' />
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome to VenturLoop
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300 mt-2 mb-6">
            Join our community or access your account to continue.
          </DialogDescription>
          {errorMessage && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-md mb-4 text-sm flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span>{errorMessage}</span>
            </div>
          )}
        </DialogHeader>

        <div className="space-y-4">
          <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white' size="lg" onClick={handleLogin}>
            <LogIn className="mr-2 h-5 w-5" /> Login
          </Button>
          <Button variant='outline' className='w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700' size="lg" onClick={handleCreateAccount}>
            <UserPlus className="mr-2 h-5 w-5" /> Create Account
          </Button>
          <Button
            variant='ghost'
            className='w-full text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400'
            size="lg"
            onClick={handleDownloadApp}
          >
            <Download className="mr-2 h-5 w-5" /> Download VenturLoop App
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Button variant="link" onClick={onClose} className="text-sm text-gray-500 dark:text-gray-500">
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
