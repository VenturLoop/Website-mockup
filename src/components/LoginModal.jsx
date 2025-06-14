// LoginModal.jsx
"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // Removed useRouter as it's not used in this component directly
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Users, LogIn, UserPlus, Download, AlertTriangle } from 'lucide-react';
import { useUser } from "@/context/UserContext"; // Added useUser
import dynamic from 'next/dynamic'; // Added dynamic

// Dynamically import lottie-react to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Utility function to load Lottie JSON from /public
const loadAnimation = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch Lottie animation from ${path}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error loading Lottie animation:", error);
    return null; // Return null or a default animation if loading fails
  }
};

// Inner component that uses useSearchParams
const LoginModalContent = ({ isOpen, onClose, onOpenAppDownloadModal }) => {
  const searchParams = useSearchParams();
  const { loginUser } = useUser(); // Destructure loginUser from useUser context

  const [errorMessage, setErrorMessage] = useState('');
  const [authStatus, setAuthStatus] = useState('idle'); // 'idle', 'authenticating', 'success', 'error'
  const [authToken, setAuthToken] = useState(null);
  const [authUserId, setAuthUserId] = useState(null);
  const [animationData, setAnimationData] = useState(null); // State for Lottie animation

  // Effect for handling URL errors and localStorage token retrieval
  useEffect(() => {
    if (!isOpen) return; // Only run if modal is open

    // Handle error messages from URL params
    const errorParam = searchParams.get('error');
    if (errorParam) {
      if (errorParam === 'authentication_failed') {
        setErrorMessage('Login failed. Please try again. If the problem persists, contact support.');
      } else if (errorParam === 'missing_credentials') {
        setErrorMessage('Authentication callback was missing necessary information. Please try logging in again.');
      } else if (errorParam === 'auth_callback_missing_params') {
        setErrorMessage('Authentication process could not start. Missing token or user ID from callback.');
      } else {
        setErrorMessage('An unknown error occurred. Please try again.');
      }
      setAuthStatus('error'); // Set status to error to display message and potentially error animation
      loadAnimation('/lottie/error.json').then(setAnimationData);
      // Consider clearing URL params: router.replace(window.location.pathname, undefined, { shallow: true });
    } else {
      setErrorMessage(''); // Clear if no error param
    }

    // Check for stored auth tokens only if not already authenticating or in an error state from URL
    if (!errorParam && authStatus === 'idle') {
      const storedToken = localStorage.getItem('venturloop_auth_token');
      const storedUserId = localStorage.getItem('venturloop_user_id');

      if (storedToken && storedUserId) {
        setAuthToken(storedToken);
        setAuthUserId(storedUserId);
        setAuthStatus('authenticating'); // This will trigger the authentication effect
        localStorage.removeItem('venturloop_auth_token');
        localStorage.removeItem('venturloop_user_id');
      }
    }
  }, [isOpen, searchParams, authStatus]); // authStatus is included to re-evaluate if it changes externally


  const performAuthentication = async (token, userId) => {
    if (!token || !userId) {
      setErrorMessage("Missing token or user ID for authentication.");
      setAuthStatus('error');
      loadAnimation('/lottie/error.json').then(setAnimationData);
      return;
    }

    loadAnimation('/lottie/loading.json').then(setAnimationData);
    setAuthStatus('authenticating'); // Ensure status is authenticating

    try {
      // Fetch user data for validation (token is not used in this specific fetch as per original logic)
      const userResponse = await fetch(
        `https://venturloopbackend-v-1-0-9.onrender.com/api/user/${userId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          // If token needs to be sent for this validation:
          // headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        }
      );

      if (!userResponse.ok) {
        const errorData = await userResponse.json().catch(() => ({ message: "User validation failed" }));
        throw new Error(errorData.message || "Failed to validate user information.");
      }

      const userData = await userResponse.json();
      const validatedUser = userData?.user;

      if (!validatedUser) {
        throw new Error("No user data returned after validation.");
      }

      // Set session by calling the local API endpoint
      const sessionResponse = await fetch("/api/auth/set-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: token, userId: userId, userData: validatedUser }),
      });

      if (!sessionResponse.ok) {
        const errorData = await sessionResponse.json().catch(() => ({ message: "Session setting failed" }));
        throw new Error(errorData.message || "Failed to set user session.");
      }

      // Update user context
      loginUser(validatedUser);
      setAuthStatus('success');
      loadAnimation('/lottie/success.json').then(setAnimationData);
      setErrorMessage(''); // Clear any previous error messages

      // Close modal after a delay
      setTimeout(() => {
        handleCloseModal(true); // Pass true to indicate success
      }, 2000);

    } catch (err) {
      console.error("Authentication error:", err);
      setErrorMessage(err.message || "An unexpected error occurred during authentication.");
      setAuthStatus('error');
      loadAnimation('/lottie/error.json').then(setAnimationData);
    }
  };

  // Effect to trigger authentication when status is 'authenticating' and tokens are ready
  useEffect(() => {
    if (authStatus === 'authenticating' && authToken && authUserId) {
      performAuthentication(authToken, authUserId);
    }
  }, [authStatus, authToken, authUserId]);


  const handleCloseModal = (isSuccess = false) => {
    // Reset state only if not a successful authentication closing the modal
    if (!isSuccess) {
      setAuthStatus('idle');
      setAuthToken(null);
      setAuthUserId(null);
      setAnimationData(null); // Clear animation
      // Do not clear error message if user closes modal while error is shown
      // setErrorMessage('');
    }
    // If it is a success, states are already set, just need to call onClose
    onClose(); // Call the original onClose prop from parent
  };

  // Event handlers for login/signup buttons
  const handleLogin = () => {
    localStorage.setItem('venturloop_redirect_path', window.location.pathname + window.location.search);
    window.location.href = 'https://auth.venturloop.com/login';
  };
  const handleCreateAccount = () => {
    localStorage.setItem('venturloop_redirect_path', window.location.pathname + window.location.search);
    window.location.href = 'https://auth.venturloop.com/auth/signup';
  };
  const handleDownloadApp = () => {
    if (onOpenAppDownloadModal) {
      onOpenAppDownloadModal();
    }
    handleCloseModal();
  };

  const renderContent = () => {
    if (authStatus === 'authenticating' || authStatus === 'success' || (authStatus === 'error' && animationData)) {
      let title = "Authenticating";
      let description = "Please wait while we verify your credentials...";
      if (authStatus === 'success') {
        title = "Login Successful!";
        description = "You are now logged in. Redirecting...";
      } else if (authStatus === 'error') {
        title = "Authentication Failed";
        description = errorMessage || "An error occurred.";
      }

      return (
        <>
          <DialogHeader className="flex flex-col items-center text-center">
            {animationData && <Lottie animationData={animationData} loop={authStatus === 'authenticating'} className="w-32 h-32 sm:w-40 sm:h-40 mb-4" />}
            <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{title}</DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 mb-6">{description}</DialogDescription>
          </DialogHeader>
          {authStatus === 'error' && (
            <Button onClick={() => handleCloseModal()} className="w-full" variant="outline">
              Close
            </Button>
          )}
        </>
      );
    }

    // Default 'idle' state (or error before Lottie loads)
    return (
      <>
        <DialogHeader className="flex flex-col items-center text-center">
          <Users className='w-12 h-12 sm:w-16 sm:h-16 text-blue-600 dark:text-blue-500 mb-4' />
          <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Welcome to VenturLoop
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 mb-6">
            Join our community or access your account to continue.
          </DialogDescription>
          {errorMessage && authStatus !== 'authenticating' && ( // Show error message if not in authenticating state
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-md mb-4 text-sm flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="flex-grow">{errorMessage}</span>
            </div>
          )}
        </DialogHeader>
        <div className="space-y-3 sm:space-y-4">
          <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3' size="lg" onClick={handleLogin}>
            <LogIn className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Login
          </Button>
          <Button variant='outline' className='w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 py-2.5 sm:py-3' size="lg" onClick={handleCreateAccount}>
            <UserPlus className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Create Account
          </Button>
          <Button
            variant='ghost'
            className='w-full text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 py-2.5 sm:py-3'
            size="lg"
            onClick={handleDownloadApp}
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Download App
          </Button>
        </div>
        <div className="mt-6 sm:mt-8 text-center">
          <Button variant="link" onClick={() => handleCloseModal()} className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            Maybe Later
          </Button>
        </div>
      </>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleCloseModal(); else onClose(); /* Prop onClose usually handles opening */ }}>
      <DialogContent className="max-w-xs sm:max-w-md p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

// Main LoginModal component that wraps the content with Suspense
const LoginModal = (props) => {
  if (!props.isOpen) return null;

  return (
    <Suspense fallback={
      <Dialog open={true}>
        <DialogContent className="max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex justify-center items-center h-64">
          <p>Loading...</p>
        </DialogContent>
      </Dialog>
    }>
      <LoginModalContent {...props} />
    </Suspense>
  );
};

export default LoginModal;
