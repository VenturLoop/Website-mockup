import HomeClient from "@/components/home-client"   // Import the new client component

export const metadata = {
  title: "Find Startup Co-founders, Investors & AI Copilot for Startups | VenturLoop",
  description: "Connect with co-founders, pitch to investors, and grow faster with our AI Copilot for Startups at VenturLoop — India’s startup matchmaking platform. Get started free.",
  openGraph: {
    title: "Find Startup Co-founders, Investors & AI Copilot for Startups | VenturLoop",
    description: "Connect with co-founders, pitch to investors, and grow faster with our AI Copilot for Startups at VenturLoop — India’s startup matchmaking platform. Get started free.",
    url: "https://venturloop.com/",
    images: [
      {
        url: "/placeholder.jpg", // Assuming this is the correct path
        width: 1200,
        height: 630,
        alt: "VenturLoop - Startup matchmaking platform for co-founders and investors",
      },
    ],
  },
};

// Define FAQ data directly in page.jsx for schema generation
const generalFaqData = [
  {
    question: "What is VenturLoop and how does it work?",
    answer:
      "VenturLoop is a platform that helps founders connect with potential co-founders, investors, and collaborators. Simply create your profile, set your preferences, and start discovering like-minded people to build your startup with.",
  },
  {
    question: "Is VenturLoop free to use?",
    answer:
      "Yes, VenturLoop offers a free plan for founders to explore and connect. We also offer premium features for those who want advanced tools and visibility.",
  },
  {
    question: "Can I find investors or incubators on VenturLoop?",
    answer:
      "Absolutely. You can search and filter investors, incubators, and accelerators based on your startup’s stage, industry, and funding needs.",
  },
  {
    question: "Do I need a startup idea to join VenturLoop?",
    answer:
      "Not at all! Whether you're looking to join a startup, have an idea, or are already building one, VenturLoop helps you find the right people to collaborate with.",
  },
  {
    question: "How does VenturLoop ensure safe and genuine connections?",
    answer:
      "We verify profiles, monitor user activity, and offer reporting tools to ensure a safe, founder-friendly space. Community moderation helps keep the ecosystem productive and positive.",
  },
  {
    question: "Can I use VenturLoop if I’m not based in India?",
    answer:
      "Yes, VenturLoop is open to founders and investors globally. However, our initial focus is on the Indian startup ecosystem, with expanding global support.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaqData.map((faqItem) => ({
      "@type": "Question",
      name: faqItem.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqItem.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  )
}
