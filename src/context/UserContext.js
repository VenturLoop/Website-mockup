"use client";

import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext(null);

// Create a provider component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Simulate user login
  const loginUser = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  // Simulate user logout
  const logoutUser = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ currentUser, isLoggedIn, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
