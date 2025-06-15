// src/context/UserContext.js
"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

// It's good practice to define the shape of your context for better autocompletion and clarity
const initialContextState = {
  currentUser: null,
  isLoggedIn: false,
  isLoading: true, // To indicate if we are currently trying to load session from cookie
  loginUser: (userData) => {},
  logoutUser: () => {},
};

const UserContext = createContext(initialContextState);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start as true

  useEffect(() => {
    // Try to load user from session storage first
    try {
      const storedUser = sessionStorage.getItem('currentUser');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setCurrentUser(user);
        setIsLoggedIn(true);
        setIsLoading(false);
        console.log("UserProvider: User loaded from session storage.", user);
        return; // IMPORTANT: Exit early if found in session storage
      }
    } catch (error) {
      console.error("UserProvider: Error loading user from session storage", error);
      // If parsing fails, treat as no user in session storage
      sessionStorage.removeItem('currentUser');
    }
    // This effect will run once on mount to try and load user from a session cookie
    const loadSessionFromCookie = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/auth/get-session');
        if (response.ok) {
          const data = await response.json();
          if (data.isLoggedIn && data.currentUser) {
            setCurrentUser(data.currentUser);
            setIsLoggedIn(true);
            console.log("UserProvider: Session loaded from cookie.", data.currentUser);
          } else {
            // No active session or data missing
            setCurrentUser(null);
            setIsLoggedIn(false);
          }
        } else {
          // Non-200 response, e.g. 401 if no session
          setCurrentUser(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("UserProvider: Failed to load session from API", error);
        setCurrentUser(null);
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    };

    loadSessionFromCookie();
  }, []);

  const loginUser = (userData) => {
    // This function will be called from the auth callback page
    // after successful validation with auth.venturloop.com
    if (userData) {
      setCurrentUser(userData);
      setIsLoggedIn(true);
      if (userData) {
        try {
          sessionStorage.setItem('currentUser', JSON.stringify(userData));
          console.log("UserProvider: User data stored in session storage during login.", userData);
        } catch (error) {
          console.error("UserProvider: Error storing user data in session storage during login", error);
        }
      }
      setIsLoading(false);
      console.log("UserContext: loginUser called with:", userData);
    } else {
      // Handle cases where userData might be null/undefined unexpectedly
      console.error("UserContext: loginUser called with invalid userData");
      setCurrentUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  const logoutUser = async () => {
    setIsLoading(true);
    try {
      await fetch('/api/auth/clear-session', { method: 'POST' });
      console.log("UserContext: Logout successful, session cookie cleared.");
    } catch (error) {
      console.error("UserContext: Error clearing session cookie via API", error);
    } finally {
      try {
        sessionStorage.removeItem('currentUser');
        console.log("UserProvider: User data removed from session storage during logout.");
      } catch (error) {
        console.error("UserProvider: Error removing user data from session storage during logout", error);
      }
      setCurrentUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
      // Optional: redirect to home or login page
      // window.location.href = '/'; // Or use Next.js router if appropriate context
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, isLoggedIn, isLoading, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    // This error is helpful during development.
    throw new Error('useUser must be used within a UserProvider. Make sure UserProvider wraps your application in layout.jsx.');
  }
  return context;
};
