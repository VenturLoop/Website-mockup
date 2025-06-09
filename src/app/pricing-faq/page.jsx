import FaqSection from "@/components/FaqSection";
import Head from 'next/head'; // For JSON-LD

const pricingFaqData = [
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

const pricingFaqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": pricingFaqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const metadata = {
  title: "VenturLoop Pricing FAQs | Founder Pass & Micro-Transactions",
  description: "Find out how VenturLoop’s pricing works. Learn about the free plan, Founder Pass, and flexible pay-as-you-go options for founders and investors.",
};

export default function PricingFaqPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqPageJsonLd) }}
        />
      </Head>
      <FaqSection title="Pricing FAQs" faqData={pricingFaqData} />
      {/* Assuming Navigation and Footer are handled by a global layout */}
    </>
  );
}
