"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X, Users, DollarSign, Download, LogIn, Home } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">Venturloop</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              For Founders
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
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

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium text-sm">
              Download App
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Login
            </Button>
          </div>

          {/* Mobile/Tablet Right Side */}
          <div className="flex lg:hidden items-center space-x-3">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="h-10 w-10 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-40 overflow-hidden">
            <div className="py-4">
              {/* Navigation Links */}
              <div className="px-2 space-y-1">
                <Link
                  href="/"
                  className={`flex items-center px-4 py-3 rounded-xl font-medium transition-colors ${
                    pathname === "/"
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <Home className="h-5 w-5 mr-3" />
                  Home
                </Link>

                <Link
                  href="#"
                  className="flex items-center px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                >
                  <Users className="h-5 w-5 mr-3" />
                  For Founders
                </Link>

                <Link
                  href="#"
                  className="flex items-center px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
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
                >
                  <DollarSign className="h-5 w-5 mr-3" />
                  Pricing
                </Link>
              </div>

              {/* Divider */}
              <div className="mx-4 my-4 border-t border-gray-200 dark:border-gray-700"></div>

              {/* Action Buttons */}
              <div className="px-2 space-y-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-xl py-3 flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download App
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl py-3 flex items-center justify-center"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 lg:hidden z-30" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  )
}
