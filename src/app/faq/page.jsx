import FaqSection from "@/components/FaqSection";
import Head from 'next/head'; // For JSON-LD

// Data can be imported from a shared location if it grows, for now, define it here
const generalFaqData = [
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

const allFaqData = [...generalFaqData, ...pricingFaqData];

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": allFaqData.map(faq => ({
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

export default function FaqPage() { // Renamed from GeneralFaqPage
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions – VenturLoop
        </h1>
        <FaqSection title="General Questions" faqData={generalFaqData} />
        <FaqSection title="Pricing & Subscription" faqData={pricingFaqData} />
      </div>
      {/* You might want to add Navigation and Footer components here if they are not part of a global layout */}
      {/* For example: */}
      {/* <Navigation /> */}
      {/* <Footer /> */}
    </>
  );
}
