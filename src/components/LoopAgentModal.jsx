"use client"

import React from 'react';
// Use ShadcnDialogTitle and DialogDescription if available and appropriate, or style h2/p manually
import { Dialog, DialogContent, DialogTitle as ShadcnDialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Zap, CheckCircle2, Users, ArrowRight } from "lucide-react";

export function LoopAgentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 sm:max-w-xl rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700/50 p-0 overflow-hidden transition-all duration-300 ease-in-out">
        {/* Main padded container */}
        <div className="p-6 sm:p-8 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700/50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 text-center sm:text-left">
             <div className="p-3 bg-gray-100 dark:bg-slate-800/60 rounded-lg mr-0 sm:mr-5 mb-3 sm:mb-0 border border-slate-200 dark:border-slate-700 self-center flex-shrink-0">
                <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
             </div>
             <div>
                <ShadcnDialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-indigo-400 leading-tight">
                    Meet Loop Agent Mini o1
                </ShadcnDialogTitle>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                    Your AI Co-pilot for Startup Success & Innovation.
                </p>
             </div>
          </div>

          {/* Content Section */}
          <div className="space-y-4 text-gray-700 dark:text-slate-300 text-sm sm:text-base">
            <p className="leading-relaxed">
              Loop Agent Mini o1 is an AI-powered assistant designed to help startup founders and entrepreneurs with a variety of tasks, streamlining your journey from idea to impact.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 shrink-0" />
                <span><strong>General Startup Queries:</strong> Get insights and answers to your common startup questions.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 shrink-0" />
                <span><strong>Task Assistance:</strong> Helps with tasks like business name generation, go-to-market (GTM) strategy formulation, and more.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 shrink-0" />
                <span><strong>Co-founder & Investor Matching:</strong> Ask the agent to find potential co-founders or investors tailored to your needs, right within the Venturloop platform.</span>
              </li>
            </ul>
            <p className="leading-relaxed pt-2">
              Get early access and start leveraging the power of AI for your startup journey!
            </p>
          </div>

          {/* Footer Section */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-xs text-blue-600/90 dark:text-blue-300/80 order-2 sm:order-1 font-medium">
                    <Users className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>Limited Early Access: 6,000/10,000 spots filled!</span>
                </div>
                <Button
                    onClick={() => {
                    window.open("https://loop.venturloop.com/", "_blank", "noopener,noreferrer");
                    onClose();
                    }}
                    // Ensuring high contrast for text on gradient button for both light/dark modes might mean text color doesn't change, or button bg needs adjustment in light mode
                    className="w-full sm:w-auto rounded-full px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 dark:from-blue-500 dark:to-indigo-600 dark:hover:from-blue-600 dark:hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center order-1 sm:order-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-900"
                >
                    Try Loop Mini o1 Now
                    <ArrowRight className="h-4 w-4 ml-2.5 flex-shrink-0" />
                </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
