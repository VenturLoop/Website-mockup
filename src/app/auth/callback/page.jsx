// src/app/auth/callback/page.jsx
"use client";

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { useUser } from '@/context/UserContext';

const AuthCallbackPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { loginUser } = useUser();

  const [status, setStatus] = useState('loading'); // 'loading', 'success', 'error'
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null); // To store user data from validation

  useEffect(() => {
    const token = searchParams.get('token');
    const userId = searchParams.get('userId');

    if (token && userId) {
      const validateToken = async () => {
        try {
          // Assume this is the validation endpoint. This needs to be confirmed.
          const response = await fetch('https://auth.venturloop.com/api/verify-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, userId }),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: 'Token validation failed with status: ' + response.status }));
            throw new Error(errorData.message || 'Token validation failed');
          }

          const validatedUserData = await response.json();
          if (!validatedUserData) { // Or check for a specific property that should exist
            throw new Error('No user data returned from validation');
          }

          console.log('Token validated successfully. User data:', validatedUserData);

          // Now, call our API route to set the session cookie
          const sessionResponse = await fetch('/api/auth/set-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, userId, userData: validatedUserData }),
          });

          if (!sessionResponse.ok) {
            const sessionErrorData = await sessionResponse.json().catch(() => ({ message: 'Failed to set session cookie' }));
            throw new Error(sessionErrorData.message || 'Failed to set session cookie');
          }

          console.log('Session cookie set successfully.');
          loginUser(validatedUserData); // Update UserContext
          setUserData(validatedUserData); // Local state for display on this page if needed
          setStatus('success');
          router.push('/'); // Redirect to homepage
        } catch (err) {
          console.error('Validation Error:', err);
          setError(err.message || 'An unexpected error occurred during token validation.');
          setStatus('error');
          // Redirect to login page with a generic error.
          // Specific errors could be logged to console or an error reporting service.
          router.push('/login?error=authentication_failed');
        }
      };

      validateToken();
    } else {
      setStatus('error');
      console.error('Token or UserId not found in URL.');
      router.push('/login?error=missing_credentials');
    }
  }, [searchParams, router, loginUser ]);

  if (status === 'loading') {
    return <div>Loading... Verifying authentication...</div>;
  }

  if (status === 'error') {
    return (
      <div>
        {/* This content might be briefly visible before redirect kicks in from useEffect */}
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
        <p>Welcome, {userData.name || userId}!</p> {/* Assuming userData has a 'name' field */}
        <p>Redirecting you to the homepage...</p>
        {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
        {/* <button onClick={() => router.push('/profile')}>Go to Profile</button> */}
      </div>
    );
  }

  // Fallback, though ideally one of the above states should always be met.
  return <div>Processing authentication...</div>;
};

export default AuthCallbackPage;
