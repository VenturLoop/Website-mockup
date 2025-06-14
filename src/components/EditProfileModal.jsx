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
    // profilePhoto is effectively handled by imagePreviewUrl for display
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  // Initialize formData and imagePreviewUrl from currentUser
  useEffect(() => {
    if (isOpen && currentUser) {
      const currentPhoto = currentUser.profile?.profilePhoto || '';
      setFormData({
        name: currentUser.name || '',
        bio: currentUser.profile?.bio || '',
        location: currentUser.profile?.location || '',
        skills: currentUser.profile?.skillSet?.join(', ') || '',
      });
      setImagePreviewUrl(currentPhoto); // Set initial preview
      setSelectedFile(null); // Reset any selected file from previous modal openings
    }
  }, [isOpen, currentUser]);

  // Effect to create/revoke ObjectURLs based on selectedFile
  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setImagePreviewUrl(objectUrl);
      // console.log("Created object URL:", objectUrl);
      return () => {
        URL.revokeObjectURL(objectUrl);
        // console.log("Revoked object URL:", objectUrl);
      };
    } else {
      // No file selected, ensure preview reverts to current user's photo (or placeholder if none)
      // This is important if a file was selected then cleared.
      if (isOpen && currentUser) {
        setImagePreviewUrl(currentUser.profile?.profilePhoto || '');
      } else if (isOpen) { // Modal is open but no current user (shouldn't happen if Edit is for currentUser)
        setImagePreviewUrl('');
      }
    }
  }, [selectedFile, isOpen, currentUser]);


  if (!isOpen) {
    return null;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.size > 2 * 1024 * 1024) { // Max 2MB
        alert("File is too large! Max 2MB.");
        event.target.value = null;
        setSelectedFile(null); // Ensure no file is processed
        return;
      }
      setSelectedFile(file);
    } else {
      setSelectedFile(null); // No file selected or selection cancelled
    }
    // Clear the file input value so onChange fires again if the same file is chosen after being cleared or due to validation
    event.target.value = null;
  };

  const handleSaveChanges = async () => { // Made async to align with placeholder comments
    console.log("Form data to save:", formData);

    if (selectedFile) {
      console.log("New profile image selected:", selectedFile.name);
      // **Conceptual API Call - Placeholder**
      // 1. Upload `selectedFile` to a backend endpoint (e.g., /api/upload-image)
      //    const imageUploadFormData = new FormData();
      //    imageUploadFormData.append('profileImage', selectedFile);
      //    try {
      //      const uploadResponse = await fetch('/api/upload-image', { method: 'POST', body: imageUploadFormData });
      //      if (!uploadResponse.ok) throw new Error('Image upload failed');
      //      const uploadResult = await uploadResponse.json();
      //      const newImageUrl = uploadResult.imageUrl;
      //
      //      // 2. If upload is successful, update profile with newImageUrl
      //      //    This might involve merging newImageUrl into formData or making a separate call
      //      console.log("Image uploaded, new URL:", newImageUrl);
      //      //    const profileUpdateResponse = await fetch('/api/update-profile', {
      //      //      method: 'PUT',
      //      //      headers: { 'Content-Type': 'application/json' },
      //      //      body: JSON.stringify({ ...formData, profilePhoto: newImageUrl })
      //      //    });
      //      //    if (!profileUpdateResponse.ok) throw new Error('Profile update failed');
      //      //    const updatedUser = await profileUpdateResponse.json();
      //      //    // Optionally update UserContext or currentUser state here
      //    } catch (error) {
      //      console.error("Error in save process:", error);
      //      // alert("Failed to save changes. Please try again.");
      //      // Don't close modal on error, or handle error display
      //      // return;
      //    }
      // For now, just log and proceed to close.
    } else {
      console.log("No new profile image selected.");
      // **Conceptual API Call for text data only - Placeholder**
      // try {
      //   // const profileUpdateResponse = await fetch('/api/update-profile', {
      //   //   method: 'PUT',
      //   //   headers: { 'Content-Type': 'application/json' },
      //   //   body: JSON.stringify(formData) // Assuming formData does not contain profilePhoto URL here
      //   // });
      //   // if (!profileUpdateResponse.ok) throw new Error('Profile update failed');
      // } catch (error) {
      //    console.error("Error saving profile data:", error);
      //    // return;
      // }
    }

    // Close the modal after attempting to save.
    // In a real app, you might only close on success or provide error feedback.
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
              {imagePreviewUrl ? (
                <img src={imagePreviewUrl} alt="Profile Preview" className="w-24 h-24 rounded-full object-cover mx-auto" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto">
                  <LucideImage className="w-12 h-12 text-gray-400 dark:text-gray-500" />
                </div>
              )}
              {/* New file input mechanism */}
              <input
                type="file"
                id="profileImageUpload"
                name="profileImageUpload"
                accept="image/png, image/jpeg, image/gif"
                className="hidden" // Simple way to hide, label will trigger it
                onChange={handleImageChange}
              />
              <label
                htmlFor="profileImageUpload"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 cursor-pointer dark:border-gray-700 dark:hover:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Change Profile Image
              </label>
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
