"use client"; // If using client-side interactivity

import React, { useState } from 'react';

// Props interface - will be expanded later
interface CreateArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  // onArticleSubmit: (articleData: any) => void; // Example for submission handler
}

const CreateArticleModal: React.FC<CreateArticleModalProps> = ({ isOpen, onClose }) => {
  const [contentType, setContentType] = useState<'image' | 'url' | null>(null);
  const [articleText, setArticleText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [articleUrl, setArticleUrl] = useState<string>('');

  if (!isOpen) return null;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setArticleText(text);
    const words = text.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  const selectContentType = (type: 'image' | 'url') => {
    setContentType(type);
    if (type === 'image') {
      setArticleUrl('');
      // Potentially clear URL preview state if it exists (no separate state for it now)
    } else if (type === 'url') {
      setImagePreview(null);
      const fileInput = document.getElementById('image-upload') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = ''; // Reset file input
      }
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] && contentType === 'image') {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file));
      setArticleUrl(''); // Clear URL if image is chosen
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (contentType === 'url') {
      setArticleUrl(event.target.value);
      setImagePreview(null); // Clear image preview if URL is being typed/modified
    }
  };

  const isSubmitDisabled = () => {
    if (wordCount < 120 || wordCount > 1000) return true;
    if (!contentType) return true;
    if (contentType === 'image' && !imagePreview) return true;
    if (contentType === 'url' && !articleUrl.trim()) return true;
    // Basic URL validation (starts with http/https) - can be improved
    if (contentType === 'url' && articleUrl.trim() && !/^https?:\/\//i.test(articleUrl)) return true;
    return false;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Create Article</h2>

        {/* Content Type Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Choose content type:</label>
          <div className="flex space-x-2">
            <button
              onClick={() => selectContentType('image')}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${contentType === 'image' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
            >
              Image
            </button>
            <button
              onClick={() => selectContentType('url')}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${contentType === 'url' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
            >
              URL
            </button>
          </div>
        </div>

        {/* Image Upload Section (Conditional) */}
        {contentType === 'image' && (
          <div className="mb-4">
            <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload Image</label>
            <input id="image-upload" type="file" accept="image/jpeg,image/png,image/gif" onChange={handleImageChange} className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-blue-300 dark:hover:file:bg-gray-600"/>
            {imagePreview && (
              <div className="mt-2">
                <img src={imagePreview} alt="Image Preview" className="max-h-40 rounded-md border border-gray-300 dark:border-gray-600" />
              </div>
            )}
          </div>
        )}

        {/* URL Input Section (Conditional) */}
        {contentType === 'url' && (
          <div className="mb-4">
            <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Article URL</label>
            <input id="url-input" type="url" value={articleUrl} onChange={handleUrlChange} placeholder="https://example.com/article" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 dark:text-white" />
            {articleUrl && (
              <div className="mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-md">
                <p className="text-sm text-gray-700 dark:text-gray-300">URL to share:</p>
                <a href={articleUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">{articleUrl}</a>
                { !/^https?:\/\//i.test(articleUrl) && <p className="text-xs text-red-500 mt-1">Please enter a valid URL (e.g., http://example.com)</p>}
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">(Full preview generation requires backend processing)</p>
              </div>
            )}
          </div>
        )}

        {/* Text Area for Article Content */}
        <div className="mb-4">
          <label htmlFor="article-content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Thoughts</label>
          <textarea
            id="article-content"
            rows={6}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900 dark:text-white"
            placeholder="Share your insights (120-1000 words)"
            value={articleText}
            onChange={handleTextChange}
          />
          <p className={`text-xs mt-1 ${wordCount < 120 || wordCount > 1000 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
            Word count: {wordCount} (min 120, max 1000)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md border border-gray-300 dark:border-gray-500"
          >
            Cancel
          </button>
          <button
            // onClick={handleSubmit} // To be implemented
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md disabled:opacity-50"
            disabled={isSubmitDisabled()}
          >
            Submit Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateArticleModal;
