"use client";

import React, { useState, useRef } from 'react';

// Interface for props if any are needed later (e.g., onSubmit)
interface CreateArticleCardProps {
  // onArticleSubmit: (articleData: any) => void; // Example for submission handler
}

const CreateArticleCard: React.FC<CreateArticleCardProps> = (/* props */) => {
  const [isExpanded, setIsExpanded] = useState(false); // To manage initial compact vs. expanded view
  const [contentType, setContentType] = useState<'image' | 'url' | null>(null);
  const [articleText, setArticleText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [articleUrl, setArticleUrl] = useState<string>('');

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null); // Add this ref

  const handleInitialFocus = () => {
    setIsExpanded(true);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setArticleText(text);
    const words = text.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
    // Auto-resize textarea
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const selectContentType = (type: 'image' | 'url' | null) => {
    setContentType(type);
    setIsExpanded(true); // Ensure card is expanded when a type is chosen
    if (type === 'image') {
      setArticleUrl('');
      if (fileInputRef.current) {
        fileInputRef.current.click(); // Open file dialog
      }
    } else if (type === 'url') {
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => urlInputRef.current?.focus(), 0); // Add this line
    } else { // Clearing content type
      setImagePreview(null);
      setArticleUrl('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] && contentType === 'image') {
      const file = event.target.files[0];
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setArticleUrl(''); // Clear URL if image is chosen
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (contentType === 'url') {
      setArticleUrl(event.target.value);
      setImagePreview(null);
    }
  };

  const handleCancel = () => {
    setArticleText('');
    setContentType(null);
    setImagePreview(null);
    setArticleUrl('');
    setWordCount(0);
    setIsExpanded(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto'; // Reset height
    }
  };

  const isSubmitDisabled = () => {
    if (wordCount < 120 || wordCount > 1000) return true;
    if (!contentType) return true; // Must choose a content type
    if (contentType === 'image' && !imagePreview) return true;
    if (contentType === 'url' && (!articleUrl.trim() || !/^(https?:\/\/)/i.test(articleUrl))) return true;
    return false;
  };

  // Basic JSX structure (will be refined with Tailwind CSS later)
  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-lg mb-6">
      <textarea
        ref={textAreaRef}
        className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all duration-300 resize-none overflow-hidden"
        placeholder="Share your article, Venturer..."
        rows={isExpanded ? 3 : 1} // Initial small size, expands
        onFocus={handleInitialFocus}
        value={articleText}
        onChange={handleTextChange}
      />

      {isExpanded && (
        <div className="mt-3 space-y-4">
          {/* Content Type Selection & Inputs */}
          <div className="flex items-center gap-3">
            <button
              title="Add Image"
              onClick={() => selectContentType(contentType === 'image' ? null : 'image')}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 border-2 ${contentType === 'image' ? 'border-blue-500 text-blue-500 bg-blue-50 dark:bg-blue-700' : 'border-transparent text-gray-500 dark:text-gray-400'}`}
            >
              {/* Placeholder for Image Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            </button>
            <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/jpeg,image/png,image/gif" className="hidden" />

            <button
              title="Add URL"
              onClick={() => selectContentType(contentType === 'url' ? null : 'url')}
              className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 border-2 ${contentType === 'url' ? 'border-blue-500 text-blue-500 bg-blue-50 dark:bg-gray-700' : 'border-transparent text-gray-500 dark:text-gray-400'}`}
            >
              {/* Placeholder for URL/Link Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </button>

            {contentType === 'url' && (
              <input
                ref={urlInputRef} // Add this ref
                type="url"
                value={articleUrl}
                onChange={handleUrlChange}
                placeholder="https://example.com/article"
                className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none"
              />
            )}
          </div>

          {/* Image Preview */}
          {contentType === 'image' && imagePreview && (
            <div className="mt-2">
              <img src={imagePreview} alt="Preview" className="max-h-48 rounded-md border border-gray-200 dark:border-gray-700" />
            </div>
          )}

          {/* URL Preview (Basic) */}
          {contentType === 'url' && articleUrl && !/^(https?:\/\/)/i.test(articleUrl) && (
             <p className="text-xs text-red-500">Please enter a valid URL (e.g., http://...)</p>
          )}
          {contentType === 'url' && articleUrl && /^(https?:\/\/)/i.test(articleUrl) && (
            <div className="mt-2 p-2 border border-gray-200 dark:border-gray-700 rounded-md">
              <a href={articleUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline text-sm break-all">{articleUrl}</a>
            </div>
          )}

          {/* Word Count */}
          <p className={`text-xs ${wordCount < 120 || wordCount > 1000 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
            {wordCount} words (min 120, max 1000)
          </p>

          {/* Action Buttons */}
          <div className="flex justify-end items-center gap-3">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg border border-gray-300 dark:border-gray-500"
            >
              Cancel
            </button>
            <button
              // onClick={handleSubmit} // To be implemented
              disabled={isSubmitDisabled()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              Post Article
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateArticleCard;
