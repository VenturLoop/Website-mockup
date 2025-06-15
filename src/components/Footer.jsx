"use client";
import { useEffect, useRef } from "react";
// import Link from 'next/link'; // Not needed here but example

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    // QuerySelectorAll can be used on the ref to scope the search
    const elements = footerRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      // No need to disconnect the observer if it's going to be re-used or if the component instance is unique.
      // However, if multiple Footer instances could exist and be destroyed, disconnecting is safer.
      // For a typical site-wide footer, this might not be strictly necessary if it's only mounted once.
      observer.disconnect();
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <footer
      ref={footerRef}
      className="bg-white dark:bg-gray-950 pt-12 sm:pt-16 pb-8"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2 animate-on-scroll">
            <div className="flex items-center mb-6">
              <img
                src="/appLogoT.png" // 🔁 Replace with your actual image path (e.g., /logo.svg or /assets/logo.png)
                alt="Venturloop Logo"
                className="w-8 h-8 -white  object-contain mr-2 mt-1 rounded-lg"
              />
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                Venturloop
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-md">
              Connecting entrepreneurs with verified investors to build the
              future of innovation. Join thousands of startups already growing
              with our platform.
            </p>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/we.venturloop/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10  rounded-lg flex items-center justify-center bg-pink-500 text-white dark:bg-pink-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/VenturLoop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-10 h-10  rounded-lg flex items-center justify-center bg-black text-white dark:bg-black transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.61 3H17.4l-4.26 5.77L8.51 3H2.4l6.91 9.15L2.06 21h3.21l4.77-6.47L15.6 21h6.11l-7.1-9.35L20.61 3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/venturloop/"
                className="w-10 h-10  rounded-lg flex items-center justify-center bg-blue-600 text-white dark:bg-blue-600 transition-colors "
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="animate-on-scroll animate-delay-100">
            <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#about-us"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#testimonial"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Our Company Links */}
          <div className="animate-on-scroll animate-delay-200">
            <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">
              Our communities
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/community"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Our Community
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/we.venturloop/"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram Community
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/venturloop"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Community
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="animate-on-scroll animate-delay-300">
            <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-600 dark:text-gray-400">
                  +91 7603037718
                </span>
              </li>
              <li>
                <a
                  href="mailto:Connect@venturloop.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Connect@venturloop.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center animate-on-scroll">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2025 Venturloop. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/privacy-policy"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-conditions"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="/community-guidelines"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              Community Guidelines
            </a>
            <a
              href="/refund-policy"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              Refund Policy
            </a>
            <a
              href="/sitemap.xml"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
