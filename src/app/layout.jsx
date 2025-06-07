import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Startup Landing Page",
    default: "Startup Landing Page",
  },
  description: "A modern startup landing page with dark mode support",
  generator: "v0.dev",
  openGraph: {
    title: "Startup Landing Page",
    description: "A modern startup landing page with dark mode support",
    type: "website",
    url: "/",
    images: [
      {
        url: "/placeholder-og.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Startup Landing Page Open Graph Image",
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
