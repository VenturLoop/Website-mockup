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

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": generalFaqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const metadata = {
  title: "VenturLoop FAQs | Connect with Co-Founders & Investors",
  description: "Get answers to common questions about using VenturLoop to find co-founders, investors, and grow your startup.",
};

export default function GeneralFaqPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
        />
      </Head>
      <FaqSection title="VenturLoop FAQs" faqData={generalFaqData} />
      {/* You might want to add Navigation and Footer components here if they are not part of a global layout */}
      {/* For example: */}
      {/* <Navigation /> */}
      {/* <FaqSection title="VenturLoop FAQs" faqData={generalFaqData} /> */}
      {/* <Footer /> */}
    </>
  );
}
