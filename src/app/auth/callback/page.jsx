"use client";

import { useEffect, Suspense } from "react"; // Removed useState
import { useSearchParams, useRouter } from "next/navigation";
// Removed useUser, dynamic, Lottie

const AuthCallbackContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  // Removed loginUser, status, error, animationData states

  useEffect(() => {
    const token = searchParams.get("token");
    const userId = searchParams.get("userId");

    if (!token || !userId) {
      // Handle missing token or userId - redirect to login with an error
      // For now, this simple redirect will do. A more robust error handling
      // might involve setting a query param for the login page to display a message.
      router.push("/login?error=auth_callback_missing_params");
      return;
    }

    // Store token and userId in localStorage
    localStorage.setItem('venturloop_auth_token', token);
    localStorage.setItem('venturloop_user_id', userId);

    // Retrieve the redirect path from localStorage
    const redirectPath = localStorage.getItem('venturloop_redirect_path') || '/'; // Default to home

    // Remove the redirect path from localStorage as it's no longer needed
    localStorage.removeItem('venturloop_redirect_path');

    // Perform the redirect
    router.push(redirectPath);

    // Dependencies for useEffect. searchParams and router are stable.
  }, [searchParams, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>Processing authentication...</p>
      {/* Minimal UI, user should be redirected quickly */}
    </div>
  );
};

// Main wrapper with Suspense
const AuthCallbackPage = () => {
  return (
    // Suspense fallback can be very minimal as the content itself is minimal.
    <Suspense fallback={<div className="flex flex-col items-center justify-center min-h-screen"><p>Loading...</p></div>}>
      <AuthCallbackContent />
    </Suspense>
  );
};

export default AuthCallbackPage;
