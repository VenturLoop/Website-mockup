"use client";
import { X, Download, Smartphone, Play, Copy, Check, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog.jsx";
import { useState } from "react";

export function AppDownloadModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const downloadLink =
    "https://play.google.com/store/apps/details?id=com.venturloop.venturloop"; // Customization: Changed URL

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = downloadLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm sm:max-w-md md:max-w-lg w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-lg max-h-[90vh] sm:max-h-[85vh] p-0">
        {/* Header with Close Button */}
        <div className="relative p-4 sm:p-5 border-b border-gray-200 dark:border-zinc-700">
          <h2 className="text-lg sm:text-xl font-bold text-center text-gray-900 dark:text-gray-100 pr-8">
            Download VenturLoop {/* Customization: Changed text */}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2 sm:right-3 sm:top-3 h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto">
          {/* Mobile Layout - Stacked */}
          <div className="block md:hidden space-y-4">
            {/* Greeting Text */}
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Get VenturLoop on your mobile device for networking on the go.{" "}
                {/* Customization: Changed text */}
              </p>
            </div>

            {/* Phone Illustration - Smaller for Mobile */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-20 h-36 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.2rem] p-1 shadow-lg">
                  <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[1rem] flex flex-col">
                    {/* Phone Screen Header */}
                    <div className="h-4 bg-gray-100 dark:bg-zinc-800 rounded-t-[1rem] flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-gray-300 dark:bg-zinc-600 rounded-full"></div>
                    </div>

                    {/* Phone Screen Content */}
                    <div className="flex-1 p-1.5 flex flex-col">
                      <div className="flex items-center gap-1 mb-1.5">
                        <div className="w-2 h-2 bg-blue-500 rounded"></div>
                        <div className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                          VenturLoop
                        </div>{" "}
                        {/* Customization: Changed text */}
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="h-1 bg-gray-200 dark:bg-zinc-700 rounded w-3/4"></div>
                        <div className="h-1 bg-gray-200 dark:bg-zinc-700 rounded w-1/2"></div>
                        <div className="h-1 bg-gray-200 dark:bg-zinc-700 rounded w-2/3"></div>
                      </div>

                      <div className="mt-auto">
                        <div className="h-4 bg-blue-500 rounded flex items-center justify-center">
                          <Smartphone className="w-2 h-2 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.venturloop.venturloop"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-20 w-auto mx-auto hover:scale-140 transition-transform"
                />
              </a>

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className="w-auto flex items-center mx-auto justify-center gap-2 p-3 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Copy Download Link
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Desktop/Tablet Layout - Side by Side */}
          <div className="hidden md:flex items-start gap-6">
            {/* Left Side - Illustration and Link Copy */}
            <div className="flex-1 flex flex-col items-center space-y-4">
              {/* Greeting Text */}
              <div className="text-center mb-2">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Take VenturLoop with you everywhere! Download our mobile app
                  for seamless startup networking on the go.{" "}
                  {/* Customization: Changed text */}
                </p>
              </div>

              {/* Phone Illustration */}
              <div className="relative">
                <div className="w-36 h-72 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.5rem] p-1 shadow-lg">
                  <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[1.2rem] flex flex-col">
                    {/* Phone Screen Header */}
                    <div className="h-5 bg-gray-100 dark:bg-zinc-800 rounded-t-[1.2rem] flex items-center justify-center">
                      <div className="w-10 h-0.5 bg-gray-300 dark:bg-zinc-600 rounded-full"></div>
                    </div>

                    {/* Phone Screen Content */}
                    <div className="flex-1 p-2 flex flex-col">
                      <div className="flex items-center gap-1.5 mb-2">
                        <img
                          src="/appLogoT.png" // 🔁 Replace with your actual image path (e.g., /logo.svg or /assets/logo.png)
                          alt="Venturloop Logo"
                          className="w-4 h-4 bg-  object-contain  rounded-xl"
                        />{" "}
                        <div className="text-xs font-semibold text-gray-900 dark:text-gray-100">
                          VenturLoop
                        </div>{" "}
                        {/* Customization: Changed text */}
                        {/* Customization: Removed Pro badge div */}
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded w-3/4"></div>
                        <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded w-1/2"></div>
                        <div className="h-1.5 bg-gray-200 dark:bg-zinc-700 rounded w-2/3"></div>
                      </div>

                      <div className="mt-auto">
                        <div className="h-6 bg-blue-500 rounded-md flex items-center justify-center">
                          <Smartphone className="w-2.5 h-2.5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Download Options */}
            <div className="flex-1 w-full max-w-xs space-y-6 rounded-xl bg-white dark:bg-zinc-900 p-5 shadow-sm dark:shadow-md">
              {/* Header */}
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Get the App
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Available for Android devices
                </p>
              </div>

              {/* Download Buttons */}
              <div className="space-y-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.venturloop.venturloop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-20 w-auto mx-auto hover:scale-120 transition-transform"
                  />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm">Copy Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Feature List */}
              <div className="pt-4 border-t border-gray-200 dark:border-zinc-700">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Features:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {[
                    "AI-powered co-founder matching",
                    "Secure idea sharing",
                    "Expert mentorship access",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Note - Only on larger screens */}
          <div className="hidden md:block mt-4 pt-3 border-t border-gray-200 dark:border-zinc-700 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By downloading the app, you agree to our{" "}
              <button className="text-blue-500 hover:underline">Terms</button>{" "}
              and{" "}
              <button className="text-blue-500 hover:underline">
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
