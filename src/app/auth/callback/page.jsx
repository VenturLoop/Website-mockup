// src/app/auth/callback/page.jsx
"use client";

export const dynamic = 'force-dynamic'; // Ensure this page is dynamically rendered

import React, { useEffect, useState, Suspense } from 'react'; // Import Suspense
import { useSearchParams, useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

// Inner component that uses useSearchParams
const AuthCallbackContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { loginUser } = useUser();

  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = searchParams.get('token');
    const userId = searchParams.get('userId');

    if (token && userId) {
      const validateToken = async () => {
        try {
          const response = await fetch('https://auth.venturloop.com/api/verify-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, userId }),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Token validation failed with status: ' + response.status }));
            throw new Error(errorData.message || 'Token validation failed');
          }
          const validatedUserData = await response.json();
          if (!validatedUserData) {
            throw new Error('No user data returned from validation');
          }

          console.log('Token validated successfully. User data:', validatedUserData);

          const sessionResponse = await fetch('/api/auth/set-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, userId, userData: validatedUserData }),
          });

          if (!sessionResponse.ok) {
            const sessionErrorData = await sessionResponse.json().catch(() => ({ message: 'Failed to set session cookie' }));
            throw new Error(sessionErrorData.message || 'Failed to set session cookie');
          }

          console.log('Session cookie set successfully.');
          loginUser(validatedUserData);
          setUserData(validatedUserData);
          setStatus('success');
          router.push('/');
        } catch (err) {
          console.error('Validation Error:', err);
          setError(err.message || 'An unexpected error occurred during token validation.');
          setStatus('error');
          router.push('/login?error=authentication_failed');
        }
      };
      validateToken();
    } else {
      setStatus('error');
      console.error('Token or UserId not found in URL.');
      router.push('/login?error=missing_credentials');
    }
  // Ensure all dependencies are listed, especially if they are from props or outer scope.
  // For this component, searchParams, router, loginUser are the main external dependencies for the effect.
  }, [searchParams, router, loginUser]);

  if (status === 'loading') {
    return <div>Loading... Verifying authentication...</div>;
  }
  if (status === 'error') {
    // This UI might be briefly shown if redirection via router.push takes a moment.
    return (
      <div>
        <h1>Authentication Problem</h1>
        <p>{error || 'An error occurred during authentication. You are being redirected...'}</p>
        <p>If you are not redirected, <a href="/login">click here to try logging in again</a>.</p>
      </div>
    );
  }
  if (status === 'success' && userData) {
    return (
      <div>
        <h1>Authentication Successful!</h1>
        {/* userData might not have a name, ensure fallback or specific property */}
        <p>Welcome, {userData.name || `User ${userId}`}!</p>
        <p>Redirecting you to the homepage...</p>
      </div>
    );
  }
  return <div>Processing authentication...</div>; // Default fallback
};

// Main page component that wraps the content with Suspense
const AuthCallbackPage = () => {
  return (
    <Suspense fallback={<div>Loading page details...</div>}> {/* Provide a meaningful fallback */}
      <AuthCallbackContent />
    </Suspense>
  );
};

export default AuthCallbackPage;
