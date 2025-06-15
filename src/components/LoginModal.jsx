// LoginModal.jsx
"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // useRouter removed as it's not used
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Users, LogIn, UserPlus, Download, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner'; // Import toast

// Inner component that uses useSearchParams
const LoginModalContent = ({ isOpen, onClose, onOpenAppDownloadModal }) => {
  const searchParams = useSearchParams();
  // const router = useRouter(); // Router might not be needed if not clearing params
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(null); // 'login', 'createAccount', or null

  useEffect(() => {
    // Only process if the modal is open and searchParams is available
    if (isOpen && searchParams) {
      const errorParam = searchParams.get('error');
      if (errorParam) {
        if (errorParam === 'authentication_failed') {
          setErrorMessage('Login failed. Please try again. If the problem persists, contact support.');
        } else if (errorParam === 'missing_credentials') {
          setErrorMessage('Authentication callback was missing necessary information. Please try logging in again.');
        } else {
          setErrorMessage('An unknown error occurred. Please try again.');
        }
        // Optional: Clear the error from URL. Consider implications.
        // router.replace(window.location.pathname, undefined, { shallow: true });
      } else {
        setErrorMessage(''); // Clear if no error
      }
    }
  // Effect dependencies: isOpen to re-check when modal opens, searchParams to react to URL changes.
  }, [isOpen, searchParams]);

  // Event handlers for modal actions
  const handleLogin = () => {
    setIsLoading(true);
    setLoadingButton('login');
    toast.success("Logged in successfully!"); // Show toast
    setTimeout(() => {
      window.location.href = 'https://auth.venturloop.com/login';
      setIsLoading(false);
      setLoadingButton(null);
    }, 2000);
  };
  const handleCreateAccount = () => {
    setIsLoading(true);
    setLoadingButton('createAccount');
    toast.success("Logged in successfully!"); // Show toast (as per instruction, could be "Account created...")
    setTimeout(() => {
      window.location.href = 'https://auth.venturloop.com/auth/signup';
      setIsLoading(false);
      setLoadingButton(null);
    }, 2000);
  };
  const handleDownloadApp = () => {
    if(onOpenAppDownloadModal) {
      onOpenAppDownloadModal();
    }
    onClose();
  };

  // Actual Dialog rendering
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
          <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white' size="lg" onClick={handleLogin} disabled={isLoading}>
            {loadingButton === 'login' ? 'Loading...' : <><LogIn className="mr-2 h-5 w-5" /> Login</>}
          </Button>
          <Button variant='outline' className='w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700' size="lg" onClick={handleCreateAccount} disabled={isLoading}>
            {loadingButton === 'createAccount' ? 'Loading...' : <><UserPlus className="mr-2 h-5 w-5" /> Create Account</>}
          </Button>
          <Button
            variant='ghost'
            disabled={isLoading}
            className='w-full text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400'
            size="lg"
            onClick={handleDownloadApp}
          >
            <Download className="mr-2 h-5 w-5" /> Download VenturLoop App
          </Button>
        </div>
        <div className="mt-8 text-center">
          <Button variant="link" onClick={onClose} className="text-sm text-gray-500 dark:text-gray-500" disabled={isLoading}>
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Main LoginModal component that wraps the content with Suspense
const LoginModal = (props) => {
  // Do not render Suspense or ModalContent if modal is not open
  if (!props.isOpen) return null;

  return (
    // Fallback can be null for a modal that appears over content, or a very minimal loader.
    <Suspense fallback={null}>
      <LoginModalContent {...props} />
    </Suspense>
  );
};

export default LoginModal;
