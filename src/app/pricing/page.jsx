import PricingClient from "@/components/pricing-client" // Import the new client component

export const metadata = {
  title: "Pricing Plans",
  description: "Explore our flexible pricing plans designed for startups of all sizes. Choose the perfect plan to fuel your growth.",
  openGraph: {
    title: "Pricing Plans | Startup Landing Page",
    description: "Explore our flexible pricing plans designed for startups of all sizes. Choose the perfect plan to fuel your growth.",
    url: "/pricing",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Pricing Page Open Graph Image",
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingClient />
    </>
  )
}
