"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export function ShareProfileModal({ isOpen, onClose, profileUrl }) {
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  if (!isOpen) {
    return null;
  }

  const handleCopyUrl = async () => {
    if (!profileUrl) return;
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopyButtonText("Copied!");
      setTimeout(() => setCopyButtonText("Copy"), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopyButtonText("Failed");
      setTimeout(() => setCopyButtonText("Copy"), 2000);
    }
  };

  // Placeholder social share functions
  const handleSocialShare = (platform) => {
    console.log(`Sharing on ${platform}: ${profileUrl}`);
    // In a real app, you'd use window.open with the respective share URLs
    // e.g., for Twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(profileUrl)}&text=${encodeURIComponent("Check out this profile!")}`
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Profile</DialogTitle>
        </DialogHeader>
        <div className="p-6 space-y-6">
          <div>
            <label htmlFor="profileLink" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your profile link
            </label>
            <div className="flex items-center space-x-2">
              <Input id="profileLink" value={profileUrl || ''} readOnly className="flex-grow bg-gray-100 dark:bg-gray-800" />
              <Button variant="outline" onClick={handleCopyUrl} className="flex-shrink-0">
                <Copy className={`mr-2 h-4 w-4 ${copyButtonText === "Copied!" ? "text-green-500" : ""}`} />
                {copyButtonText}
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3 text-center text-gray-600 dark:text-gray-400">
              Or share directly on social media
            </h4>
            <div className="flex justify-center space-x-3">
              <Button variant="outline" size="icon" onClick={() => handleSocialShare('Facebook')} aria-label="Share on Facebook">
                <Facebook className="h-5 w-5 text-[#1877F2]" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleSocialShare('Twitter')} aria-label="Share on Twitter">
                <Twitter className="h-5 w-5 text-[#1DA1F2]" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleSocialShare('LinkedIn')} aria-label="Share on LinkedIn">
                <Linkedin className="h-5 w-5 text-[#0A66C2]" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleSocialShare('Email')} aria-label="Share via Email">
                <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="mt-2">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
