import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { UserProvider } from "@/context/UserContext"; // Import UserProvider
import { Toaster } from 'sonner'; // Import Toaster

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://venturloop.com/";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | VenturLoop",
    default: "VenturLoop - Find Startup Co-founders, Investors & AI Copilot for Startups",
  },
  description: "Connect with co-founders, pitch to investors, and grow faster with our AI Copilot for Startups at VenturLoop — India’s startup matchmaking platform.",
  generator: "VenturLoop",
  alternates: {
    canonical: "https://venturloop.com/",
  },
  openGraph: {
    title: "VenturLoop - Find Startup Co-founders, Investors & AI Copilot for Startups",
    description: "Connect with co-founders, pitch to investors, and grow faster with our AI Copilot for Startups at VenturLoop — India’s startup matchmaking platform.",
    type: "website",
    url: "https://venturloop.com/",
    images: [
      {
        url: "/placeholder.jpg", // Default OG image
        width: 1200,
        height: 630,
        alt: "VenturLoop Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VenturLoop", // Replace with actual Twitter handle if different
    title: "Find Startup Co-founders, Investors & AI Copilot for Startups | VenturLoop",
    description: "Connect with co-founders, pitch to investors, and grow faster with our AI Copilot for Startups at VenturLoop — India’s startup matchmaking platform.",
    image: "https://venturloop.com/placeholder.jpg", // Default Twitter image
  },
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VenturLoop",
    url: "https://venturloop.com/",
    logo: "https://venturloop.com/appLogoT.png",
    sameAs: ["https://twitter.com/VenturLoop"], // Add other social media links if available
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VenturLoop Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "WebPlatform", // Or "Online"
    description: "A platform for startup founders to connect with co-founders, investors, and collaborators, featuring AI-driven matchmaking and advice.",
    url: "https://venturloop.com/",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <UserProvider> {/* Wrap children with UserProvider */}
            {children}
            <Toaster richColors closeButton theme='system' />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
