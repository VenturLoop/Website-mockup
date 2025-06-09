"use client"; // Convert to Client Component
import { useState, useEffect } from 'react'; // Import hooks
import FaqSection from "@/components/FaqSection";
import Head from 'next/head'; // For JSON-LD

// Data can be imported from a shared location if it grows, for now, define it here
// These are now initial data, state will hold the filtered versions
const initialGeneralFaqData = [
  {
    question: "What is VenturLoop and how does it work?",
    answer: "VenturLoop is a platform that helps founders connect with potential co-founders, investors, and collaborators. Simply create your profile, set your preferences, and start discovering like-minded people to build your startup with."
  },
  {
    question: "Is VenturLoop free to use?",
    answer: "Yes, VenturLoop offers a free plan for founders to explore and connect. We also offer premium features for those who want advanced tools and visibility."
  },
  {
    question: "Can I find investors or incubators on VenturLoop?",
    answer: "Absolutely. You can search and filter investors, incubators, and accelerators based on your startup’s stage, industry, and funding needs."
  },
  {
    question: "Do I need a startup idea to join VenturLoop?",
    answer: "Not at all! Whether you're looking to join a startup, have an idea, or are already building one, VenturLoop helps you find the right people to collaborate with."
  },
  {
    question: "How does VenturLoop ensure safe and genuine connections?",
    answer: "We verify profiles, monitor user activity, and offer reporting tools to ensure a safe, founder-friendly space. Community moderation helps keep the ecosystem productive and positive."
  },
  {
    question: "Can I use VenturLoop if I’m not based in India?",
    answer: "Yes, VenturLoop is open to founders and investors globally. However, our initial focus is on the Indian startup ecosystem, with expanding global support."
  }
];

const initialPricingFaqData = [
  {
    question: "What is included in the free plan on VenturLoop?",
    answer: "The free plan allows users to create a profile, explore the community, and send a limited number of connection requests to founders and investors. Micro-transactions are available for additional actions."
  },
  {
    question: "What is the Founder Pass and what do I get with it?",
    answer: "The Founder Pass is our premium subscription that unlocks unlimited connections, priority visibility, advanced filters, and exclusive access to premium features like featured listings and investor outreach boosts."
  },
  {
    question: "Can I still connect with founders or pitch to investors without the Founder Pass?",
    answer: "Yes! Free users can connect or pitch using our pay-as-you-go micro-transaction system, which allows flexible access to key features without a full subscription."
  },
  {
    question: "What are micro-transactions on VenturLoop?",
    answer: "Micro-transactions let you pay a small fee for specific actions, like sending extra pitch requests to investors, unlocking premium founder profiles, or featuring your startup temporarily."
  },
  {
    question: "Is payment required to get started on VenturLoop?",
    answer: "No. You can sign up and use the basic features for free. You only pay if you choose to upgrade to the Founder Pass or use micro-transactions for specific actions."
  },
  {
    question: "How do I pay for a subscription or micro-transactions?",
    answer: "VenturLoop supports multiple payment methods including UPI, credit/debit cards, and net banking. International payments are also accepted for global users."
  }
];

// Update JSON-LD to use initial data as it's static metadata
const allInitialFaqData = [...initialGeneralFaqData, ...initialPricingFaqData];

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": allInitialFaqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const metadata = {
  title: "VenturLoop FAQs | Find Co-Founders, Investors & Learn About Pricing",
  description: "Explore answers to frequently asked questions about VenturLoop. Learn how to connect with co-founders and investors, and understand our pricing, Founder Pass, and micro-transactions.",
  alternates: {
    canonical: "https://venturloop.com/faq",
  },
};

export default function FaqPage() {
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
  }, [searchQuery]);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8"> {/* Reduced margin bottom for h1 */}
          Frequently Asked Questions – VenturLoop
        </h1>
        <div className="mb-10"> {/* Increased margin bottom for search input container */}
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
        <FaqSection title="General Questions" faqData={filteredGeneralFaqs} />

        {searchQuery && filteredPricingFaqs.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-10 mb-6"> {/* Added margin top for separation */}
            No pricing questions match your search.
          </p>
        )}
        <FaqSection title="Pricing & Subscription" faqData={filteredPricingFaqs} />
      </div>
      {/* You might want to add Navigation and Footer components here if they are not part of a global layout */}
    </>
  );
}
