"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Users,
  DollarSign,
  Download,
  LogIn,
  Home,
  ChevronDown,
  User,
  LogOut,
  Settings,
  Bookmark,
  Bell,
  Briefcase,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname, useRouter } from "next/navigation";
import { AppDownloadModal } from "../components/AppDownloadModal";
import LoginModal from "../components/LoginModal";
import { LoopAgentModal } from "../components/LoopAgentModal";
import MyBookmarksModal from "./MyBookmarksModal"; // Changed import
import { useUser } from "@/context/UserContext"; // Import useUser
import MyUpdatesModal from "./MyUpdatesModal.jsx"; // Import MyUpdatesModal
import MyStartupProfileModal from "./MyStartupProfileModal";
import SettingsModal from './SettingsModal'; // Import SettingsModal

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppDownloadModalOpen, setIsAppDownloadModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoopAgentModalOpen, setIsLoopAgentModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false); // State for SettingsModal
  const [isFoundersOpen, setIsFoundersOpen] = useState(false);
  const [isMobileFoundersOpen, setIsMobileFoundersOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown
  const [isBookmarkModalOpen, setIsBookmarkModalOpen] = useState(false); // Added state for bookmark modal
  const [isUpdatesModalOpen, setIsUpdatesModalOpen] = useState(false); // State for Updates modal
  const [isMyStartupProfileModalOpen, setIsMyStartupProfileModalOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const foundersDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null); // Ref for profile dropdown

  const { currentUser, isLoggedIn, logoutUser } = useUser(); // Get user state and functions

  const handleScrollToOurOfferings = () => {
    if (pathname === "/") {
      if (typeof window !== "undefined") {
        const element = document.getElementById("services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push("/#services");
    }
    setIsMenuOpen(false);
    setIsMobileFoundersOpen(false);
    setIsFoundersOpen(false);
  };

  const openAppDownloadModal = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setIsAppDownloadModalOpen(true);
  };
  const closeAppDownloadModal = () => setIsAppDownloadModalOpen(false);

  const openLoginModal = () => {
    if (!isLoggedIn) {
      // Only open if not logged in
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      setIsLoginModalOpen(true);
    }
  };
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openAppDownloadFromLoginModal = () => {
    closeLoginModal();
    openAppDownloadModal();
  };

  const openLoopAgentModal = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (isFoundersOpen) {
      setIsFoundersOpen(false);
    }
    if (isMobileFoundersOpen) {
      setIsMobileFoundersOpen(false);
    }
    setIsLoopAgentModalOpen(true);
  };
  const closeLoopAgentModal = () => setIsLoopAgentModalOpen(false);

  const openSettingsModal = () => setIsSettingsModalOpen(true);
  const closeSettingsModal = () => setIsSettingsModalOpen(false);

  const toggleUpdatesModal = () => setIsUpdatesModalOpen(!isUpdatesModalOpen);
  const toggleMyStartupProfileModal = () => setIsMyStartupProfileModalOpen(!isMyStartupProfileModalOpen);

  const handleLogout = () => {
    logoutUser();
    setIsProfileDropdownOpen(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileFoundersOpen(false);
    setIsFoundersOpen(false);
    setIsProfileDropdownOpen(false); // Close profile dropdown on route change
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsFoundersOpen(false);
        setIsProfileDropdownOpen(false);
        closeAppDownloadModal();
        closeLoginModal();
        closeLoopAgentModal();
        setIsBookmarkModalOpen(false); // Ensure bookmark modal is closed
        setIsUpdatesModalOpen(false); // Ensure updates modal is closed
        setIsMyStartupProfileModalOpen(false);
        closeSettingsModal(); // Close settings modal on Escape
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeSettingsModal]); // Added closeSettingsModal to dependency array

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        foundersDropdownRef.current &&
        !foundersDropdownRef.current.contains(event.target)
      ) {
        setIsFoundersOpen(false);
      }
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false); // Close profile dropdown on click outside
      }
    };

    if (isFoundersOpen || isProfileDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFoundersOpen, isProfileDropdownOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const profileMenuItems = [
    {
      label: "My bookmark",
      icon: Bookmark,
      onClick: () => {
        setIsBookmarkModalOpen(true);
        setIsProfileDropdownOpen(false); // Close profile dropdown
      }
    },
    {
      label: "Updates",
      icon: Bell,
      onClick: () => {
        toggleUpdatesModal();
        setIsProfileDropdownOpen(false); // Close profile dropdown
      }
    },
    {
      label: "My startup profile",
      icon: Briefcase,
      onClick: () => {
        toggleMyStartupProfileModal();
        setIsProfileDropdownOpen(false);
      }
    },
    {
      label: "Settings",
      icon: Settings,
      onClick: () => {
        openSettingsModal();
        setIsProfileDropdownOpen(false);
      }
    },
  ];

  console.log("currentUser", currentUser);

  // This provides a fallback if currentUser is null even when isLoggedIn is true
  const displayUser = isLoggedIn
    ? currentUser || {
        name: "User",
        email: "user@example.com",
        profileImage: "https://avatar.iran.liara.run/public/boy?username=guest",
      }
    : null;

  return (
    <header className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                Venturloop
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative" ref={foundersDropdownRef}>
              <button
                onClick={() => setIsFoundersOpen(!isFoundersOpen)}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                For Founders
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                    isFoundersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isFoundersOpen && (
                <div className="absolute mt-2 w-auto min-w-max bg-white dark:bg-gray-950 shadow-lg rounded-md py-1 z-20 border dark:border-gray-700">
                  <button
                    onClick={() => {
                      openLoopAgentModal();
                      setIsFoundersOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Loop Mini o1
                  </button>
                  <button
                    onClick={() => {
                      handleScrollToOurOfferings();
                      setIsFoundersOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Our Offerings
                  </button>
                </div>
              )}
            </div>
            <Link
              href="/community"
              className={`font-medium transition-colors ${
                pathname === "/community"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Community
            </Link>
            <Link
              href="/pricing"
              className={`font-medium transition-colors ${
                pathname === "/pricing"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={openAppDownloadModal}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium text-sm"
            >
              Download App
            </Button>
            {isLoggedIn && displayUser ? (
              <div className="relative" ref={profileDropdownRef}>
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 mt-2 focus:ring-blue-500"
                >
                  <img
                    src={
                      displayUser?.profile?.profilePhoto ||
                      "https://avatar.iran.liara.run/public/boy?username=guest"
                    }
                    alt="Profile"
                    className="h-9  w-9 rounded-full object-cover"
                  />
                </button>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-950 shadow-lg rounded-md py-1 z-20 border dark:border-   gray-700">
                    <div className="px-4 py-3 flex items-center gap-3 border-b dark:border-gray-700">
                      <img
                        src={
                          displayUser?.profile?.profilePhoto ||
                          "https://avatar.iran.liara.run/public/boy?username=guest"
                        }
                        alt="Profile"
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div className="flex flex-col overflow-hidden">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {displayUser?.name || "Guest User"}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {displayUser?.email || "guest@example.com"}
                        </p>
                      </div>
                    </div>

                    {profileMenuItems.map((item) => {
                      const commonProps = {
                        key: item.label,
                        className: "flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                        onClick: (e) => {
                          if (item.onClick) {
                            if (item.href) e.preventDefault();
                            item.onClick();
                          } else {
                            setIsProfileDropdownOpen(false);
                          }
                        }
                      };

                      if (item.href && !item.onClick) {
                        return (
                          <Link href={item.href} {...commonProps}>
                            <item.icon className="h-4 w-4 mr-2" />
                            {item.label}
                          </Link>
                        );
                      } else {
                        return (
                          <button {...commonProps} type="button">
                            <item.icon className="h-4 w-4 mr-2" />
                            {item.label}
                          </button>
                        );
                      }
                    })}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                onClick={openLoginModal}
                variant="ghost"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
              >
                Login
              </Button>
            )}
          </div>

          <div className="flex lg:hidden items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="h-10 w-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-40 overflow-hidden">
            <div className="py-4">
              {isLoggedIn && displayUser && (
                <>
                  <div className="px-4 pt-2 pb-4 flex items-center">
                    <img
                      src={
                        displayUser.profileImage ||
                        "https://avatar.iran.liara.run/public/boy?username=guest"
                      }
                      alt="Profile"
                      className="h-12 w-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {displayUser.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {displayUser.email}
                      </p>
                    </div>
                  </div>
                  <div className="mx-4 mb-3 border-t border-gray-200 dark:border-gray-700"></div>
                </>
              )}

              <div className="px-2 space-y-1">
                <Link
                  href="/"
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-colors ${
                    pathname === "/"
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="h-5 w-5 mr-3" />
                  Home
                </Link>

                <div>
                  <button
                    onClick={() =>
                      setIsMobileFoundersOpen(!isMobileFoundersOpen)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                  >
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3" />
                      For Founders
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isMobileFoundersOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isMobileFoundersOpen && (
                    <div className="pl-8 pr-4 py-1 space-y-1">
                      <button
                        onClick={() => {
                          openLoopAgentModal();
                        }}
                        className="block w-full text-left px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Loop Mini o1
                      </button>
                      <button
                        onClick={() => {
                          handleScrollToOurOfferings();
                        }}
                        className="block w-full text-left px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Our Offerings
                      </button>
                    </div>
                  )}
                </div>

                <Link
                  href="/community"
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-colors ${
                    pathname === "/community"
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users className="h-5 w-5 mr-3" />
                  Community
                </Link>

                <Link
                  href="/pricing"
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-colors ${
                    pathname === "/pricing"
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <DollarSign className="h-5 w-5 mr-3" />
                  Pricing
                </Link>

                {isLoggedIn && (
                  <>
                    <div className="mx-2 my-2 border-t border-gray-200 dark:border-gray-700"></div>
                    {profileMenuItems.map((item) => {
                      const commonProps = {
                        key: item.label,
                        className: "flex items-center px-4 py-3 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                        onClick: (e) => {
                          if (item.onClick) {
                            if (item.href) e.preventDefault();
                            item.onClick();
                          }
                          setIsMenuOpen(false);
                        }
                      };

                      if (item.href && !item.onClick) {
                        return (
                          <Link href={item.href} {...commonProps}>
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.label}
                          </Link>
                        );
                      } else {
                        return (
                          <button {...commonProps} type="button">
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.label}
                          </button>
                        );
                      }
                    })}
                  </>
                )}
              </div>

              <div className="mx-4 my-4 border-t border-gray-200 dark:border-gray-700"></div>

              <div className="px-2 space-y-2">
                <Button
                  onClick={() => {
                    openAppDownloadModal();
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-xl py-3 flex items-center justify-center"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download App
                </Button>
                {isLoggedIn ? (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl py-3 flex items-center justify-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      openLoginModal();
                    }}
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl py-3 flex items-center justify-center"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 lg:hidden z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <AppDownloadModal
        isOpen={isAppDownloadModalOpen}
        onClose={closeAppDownloadModal}
      />
      <LoginModal
        isOpen={isLoginModalOpen && !isLoggedIn}
        onClose={closeLoginModal}
        onOpenAppDownloadModal={openAppDownloadFromLoginModal}
      />
      <LoopAgentModal
        isOpen={isLoopAgentModalOpen}
        onClose={closeLoopAgentModal}
      />
      <MyBookmarksModal
        isOpen={isBookmarkModalOpen}
        onClose={() => setIsBookmarkModalOpen(false)}
      />
      <MyUpdatesModal
        isOpen={isUpdatesModalOpen}
        onClose={toggleUpdatesModal}
      />
      <MyStartupProfileModal
        isOpen={isMyStartupProfileModalOpen}
        onClose={toggleMyStartupProfileModal}
      />
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={closeSettingsModal}
      />
    </header>
  );
}
