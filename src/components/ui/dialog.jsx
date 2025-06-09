"use client"

import React, { useEffect } from 'react';

export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) { // Only trigger if overlay itself is clicked
      if (onOpenChange) {
        onOpenChange(false);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out animate-fadeIn"
      onClick={handleOverlayClick}
    >
      {children}
    </div>
  );
};

export const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => {
  // Basic styling for the content area.
  // Users can override/extend with the className prop.
  const baseClassName = "bg-white dark:bg-gray-900 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out animate-scaleUp";

  return (
    <div
      ref={ref}
      className={`${baseClassName} ${className || ''}`}
      {...props}
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside content from closing dialog via overlay click
    >
      {children}
    </div>
  );
});
DialogContent.displayName = 'DialogContent';

// Optional: Add simple DialogHeader, DialogFooter, DialogTitle, DialogDescription if needed by existing modal code
// For now, keeping it minimal to solve the import error.
// The modals AppDownloadModal.jsx and LoginModal.jsx primarily use Dialog and DialogContent.
// LoginModal uses DialogHeader, DialogTitle, DialogDescription - let's add basic versions.

export const DialogHeader = ({ className, children, ...props }) => (
  <div className={`p-6 text-center ${className || ''}`} {...props}>
    {children}
  </div>
);
DialogHeader.displayName = 'DialogHeader';

export const DialogTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h2 ref={ref} className={`text-lg font-semibold text-gray-900 dark:text-gray-100 ${className || ''}`} {...props}>
    {children}
  </h2>
));
DialogTitle.displayName = 'DialogTitle';

export const DialogDescription = React.forwardRef(({ className, children, ...props }, ref) => (
  <p ref={ref} className={`text-sm text-gray-500 dark:text-gray-400 ${className || ''}`} {...props}>
    {children}
  </p>
));
DialogDescription.displayName = 'DialogDescription';

// Add basic CSS for animations if not using Tailwind JIT animations or a CSS file
// For simplicity, let's assume Tailwind handles this or use inline styles/classes for now.
// Adding keyframes and animation classes directly here for self-containment if needed:
// This would typically go into a global CSS file.
/*
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn { animation: fadeIn 0.3s ease-out; }
.animate-scaleUp { animation: scaleUp 0.3s ease-out; }
*/
// For now, relying on Tailwind class `transition-opacity` and `transform transition-all` which might not be enough without `animate-*` utilities from tailwindcss-animate or similar.
// The provided `AppDownloadModal` used `max-w-sm sm:max-w-md md:max-w-lg` and `p-0` on DialogContent.
// The `LoginModal` used `max-w-md p-8`.
// The `className` prop on `DialogContent` will allow these to be passed through.
