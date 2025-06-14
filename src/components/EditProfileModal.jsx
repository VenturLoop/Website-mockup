"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image as LucideImage } from 'lucide-react'; // Placeholder icon

export function EditProfileModal({ isOpen, onClose, currentUser }) {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    location: '',
    skills: '',
    profilePhoto: ''
  });

  useEffect(() => {
    if (isOpen && currentUser) {
      setFormData({
        name: currentUser.name || '',
        bio: currentUser.profile?.bio || '',
        location: currentUser.profile?.location || '',
        skills: currentUser.profile?.skillSet?.join(', ') || '',
        profilePhoto: currentUser.profile?.profilePhoto || ''
      });
    }
  }, [isOpen, currentUser]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSaveChanges = () => {
    console.log("Saving data:", formData);
    // Here you would typically call an API to save the changes
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 p-6">
          <div className="space-y-2">
            <label htmlFor="profilePhoto" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Profile Image</label>
            <div className="flex flex-col items-center space-y-2">
              {formData.profilePhoto ? (
                <img src={formData.profilePhoto} alt="Profile Preview" className="w-24 h-24 rounded-full object-cover mx-auto" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto">
                  <LucideImage className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                </div>
              )}
              <Button variant="outline" onClick={() => console.log('Change image clicked')}>Change Profile Image</Button>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full" />
          </div>

          <div className="space-y-1">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Bio</label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
            <Input id="location" value={formData.location} onChange={handleChange} placeholder="City, Country" className="w-full" />
          </div>

          <div className="space-y-1">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Skills (comma-separated)</label>
            <Input id="skills" value={formData.skills} onChange={handleChange} placeholder="e.g., React, Node.js, Product Management" className="w-full" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="button" onClick={handleSaveChanges}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
