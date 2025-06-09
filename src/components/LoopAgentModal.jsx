"use client"

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"; // Removed DialogDescription as we are using <p>
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function LoopAgentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0"> {/* Keep p-0 to allow full-width header/footer bg */}
        <DialogHeader className="p-4 sm:p-6 pb-2 sm:pb-4"> {/* Adjusted padding, less bottom padding before content */}
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 text-left"> {/* Slightly smaller title on mobile */}
            Meet Loop Agent Mini o1
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-3 sm:space-y-4 text-sm sm:text-base"> {/* Adjusted padding and spacing */}
          <p className="text-gray-600 dark:text-gray-300">
            Loop Agent Mini o1 is an AI-powered assistant designed to help startup founders and entrepreneurs with a variety of tasks.
          </p>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <strong>General Startup Queries:</strong> Get insights and answers to your common startup questions.
            </li>
            <li>
              <strong>Task Assistance:</strong> Helps with tasks like business name generation, go-to-market (GTM) strategy formulation, and more.
            </li>
            <li>
              <strong>Resource Discovery:</strong> Find potential co-founders and investors using a simple prompt-based search within the Venturloop platform.
            </li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 pt-1 sm:pt-2">
            Get early access and start leveraging the power of AI for your startup journey!
          </p>
        </div>
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 text-right">
          <Button
            onClick={() => {
              window.open("https://loop.venturloop.com/", "_blank", "noopener,noreferrer");
              onClose();
            }}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 sm:py-2.5" // Full width on mobile, adjusted padding
          >
            Try Loop Mini o1 Now (Early Access)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
