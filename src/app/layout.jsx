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
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
