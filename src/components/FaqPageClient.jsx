"use client";

import { useState, useEffect } from 'react';
import FaqSection from '@/components/FaqSection';

export default function FaqPageClient({ initialGeneralFaqData, initialPricingFaqData }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGeneralFaqs, setFilteredGeneralFaqs] = useState(initialGeneralFaqData);
  const [filteredPricingFaqs, setFilteredPricingFaqs] = useState(initialPricingFaqData);
  const [combinedSearchResults, setCombinedSearchResults] = useState([]); // New state variable

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    if (lowerCaseQuery === '') {
      setFilteredGeneralFaqs(initialGeneralFaqData);
      setFilteredPricingFaqs(initialPricingFaqData);
      setCombinedSearchResults([]); // Clear combined results
    } else {
      const generalResults = initialGeneralFaqData.filter(faq =>
        faq.question.toLowerCase().includes(lowerCaseQuery) ||
        faq.answer.toLowerCase().includes(lowerCaseQuery)
      );
      // Still update individual filtered lists
      setFilteredGeneralFaqs(generalResults);

      const pricingResults = initialPricingFaqData.filter(faq =>
        faq.question.toLowerCase().includes(lowerCaseQuery) ||
        faq.answer.toLowerCase().includes(lowerCaseQuery)
      );
      // Still update individual filtered lists
      setFilteredPricingFaqs(pricingResults);

      setCombinedSearchResults([...generalResults, ...pricingResults]); // Combine results
    }
  }, [searchQuery, initialGeneralFaqData, initialPricingFaqData]);

  return (
    <>
      <div className="mb-12"> {/* Updated class for the container div */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search FAQs..."
          className="w-full px-5 py-4 text-base sm:text-lg border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition-all duration-300 ease-in-out" // Updated classes for the input
        />
      </div>

      {searchQuery.trim() !== '' ? (
        // Search is active
        combinedSearchResults.length > 0 ? (
          <FaqSection title="Search Results" faqData={combinedSearchResults} showContactCard={true} />
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 my-10">
            No results found for your search.
          </p>
        )
      ) : (
        // Default view: No search query
        <>
          {/* General FAQs Section - relies on default showContactCard=true */}
          <FaqSection title="General Questions" faqData={filteredGeneralFaqs} />

          {/* Pricing FAQs Section - explicitly hide contact card */}
          <FaqSection title="Pricing & Subscription" faqData={filteredPricingFaqs} showContactCard={false} />
        </>
      )}
    </>
  );
}
