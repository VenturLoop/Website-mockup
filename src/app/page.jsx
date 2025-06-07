import { Navigation } from "@/components/navigation" // Keep this if Navigation is a Server Component or used in Server Context here
import HomeClient from "@/components/home-client"   // Import the new client component

export const metadata = {
  title: "Home",
  description: "Discover the future of startup innovation. Connect with investors, explore resources, and launch your journey to success.",
  openGraph: {
    title: "Home | Startup Landing Page",
    description: "Discover the future of startup innovation. Connect with investors, explore resources, and launch your journey to success.",
    url: "/",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Home Page Open Graph Image",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Navigation can be here if it's a server component or doesn't need to be inside HomeClient */}
      {/* <Navigation /> */}
      <HomeClient />
    </>
  )
}
