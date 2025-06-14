"use client";

import React, { createContext, useState, useContext } from 'react';

// Create the context
const UserContext = createContext(null);
const dummyUserData = {
  _id: "6849f6ed842c4bfee49e8441",
  email: "aishyashaikh@gmail.com",
  isVerified: true,
  isDeleted: false,
  isPremium: false,
  status: "offline",
  lastSeen: "2025-06-12T14:55:39.007Z",
  totalConnections: 2,
  authType: "email",
  mobile: "",
  workingWith: [],
  posts: [
    {
      postId: "684a03124e4601f6d95e8fd9",
      createdAt: "2025-06-11T22:28:34.205Z",
      _id: "684a03124e4601f6d95e8fdb",
    }
  ],
  createdAt: "2025-06-11T21:36:45.788Z",
  updatedAt: "2025-06-13T10:44:41.568Z",
  __v: 0,
  name: "Aishya Mohammad Shaikh",
  password: "$2b$10$f.djl/wOn6V/XL4rDSlNS.JIkyYKJKMyya5YhniLXVIt74TfJWk7a",
  profile: "6849f71f842c4bfee49e844e",
  pushToken: "fAupebGPRcKAQk7RBs1Sz9:APA91bGr886OaBw1ute_gyiDO0xu8WKBP5xneXjGIpBM6nTBPXq_U3jBH-PDDPKNTl9AdJpkYgwpvVoOCACKnc7w0CvRa4OYFhd0SDG0oi2x1qt0xg5BrTc"
};

// Create a provider component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(dummyUserData);
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
