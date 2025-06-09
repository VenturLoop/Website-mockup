"use client";

import { useState, useEffect } from 'react';
import FaqSection from '@/components/FaqSection';

export default function FaqPageClient({ initialGeneralFaqData, initialPricingFaqData }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGeneralFaqs, setFilteredGeneralFaqs] = useState(initialGeneralFaqData);
  const [filteredPricingFaqs, setFilteredPricingFaqs] = useState(initialPricingFaqData);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    if (lowerCaseQuery === '') {
      setFilteredGeneralFaqs(initialGeneralFaqData);
      setFilteredPricingFaqs(initialPricingFaqData);
    } else {
      const generalResults = initialGeneralFaqData.filter(faq =>
        faq.question.toLowerCase().includes(lowerCaseQuery) ||
        faq.answer.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredGeneralFaqs(generalResults);

      const pricingResults = initialPricingFaqData.filter(faq =>
        faq.question.toLowerCase().includes(lowerCaseQuery) ||
        faq.answer.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredPricingFaqs(pricingResults);
    }
  }, [searchQuery, initialGeneralFaqData, initialPricingFaqData]); // Added props to dependency array

  return (
    <>
      <div className="mb-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search FAQs..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
      </div>

      {searchQuery && filteredGeneralFaqs.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          No general questions match your search.
        </p>
      )}
      {/* showContactCard={true} removed, as true is now the default in FaqSection */}
      <FaqSection title="General Questions" faqData={filteredGeneralFaqs} />

      {searchQuery && filteredPricingFaqs.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-400 mt-10 mb-6">
          No pricing questions match your search.
        </p>
      )}
      {/* Explicitly set showContactCard to false to override the new default */}
      <FaqSection title="Pricing & Subscription" faqData={filteredPricingFaqs} showContactCard={false} />
    </>
  );
}
