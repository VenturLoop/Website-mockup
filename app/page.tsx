"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "What is startup and how does it help businesses?",
      answer:
        "Startup is a comprehensive platform that connects entrepreneurs with verified investors, providing tools and resources to help startups grow and scale their businesses effectively.",
    },
    {
      question: "How do I find my Startup on marketplace?",
      answer:
        "You can easily find and showcase your startup on our marketplace by creating a detailed profile, highlighting your unique value proposition, and connecting with relevant investors in your industry.",
    },
    {
      question: "How do I find my Startup on marketplace?",
      answer:
        "Navigate to the marketplace section, use our advanced search filters to find startups by industry, stage, or location, and browse through verified startup profiles.",
    },
    {
      question: "What happens if I need to change my startup name?",
      answer:
        "You can update your startup name through your account settings. Our support team will review the change and update your profile accordingly within 24-48 hours.",
    },
    {
      question: "Is my startup ready for sale?",
      answer:
        "Our platform provides assessment tools and expert guidance to help you determine if your startup is ready for investment or acquisition opportunities.",
    },
    {
      question: "Can I use Startup on my client? How to setup them up?",
      answer:
        "Yes, you can set up client accounts through our enterprise dashboard. Contact our support team for detailed setup instructions and client management tools.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
                Your <span className="text-blue-600 dark:text-blue-400">Startup</span>
                <br />
                starts Here!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar dapibus leo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium text-lg">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 px-8 py-3 rounded-lg font-medium text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 sm:w-80 h-[500px] sm:h-[600px] bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-[3rem] p-2">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden">
                    <div className="h-full w-full bg-gray-50 dark:bg-gray-800 relative">
                      {/* Phone mockup content */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black dark:bg-gray-700 rounded-full"></div>
                      <div className="pt-12 px-6">
                        <div className="bg-blue-600 dark:bg-blue-700 h-20 rounded-xl mb-4"></div>
                        <div className="space-y-3">
                          <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-3/4"></div>
                          <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-1/2"></div>
                          <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-2/3"></div>
                        </div>
                        <div className="mt-8 space-y-4">
                          <div className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-4">
                            <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-1/2 mb-2"></div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-3/4"></div>
                          </div>
                          <div className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-4">
                            <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-1/2 mb-2"></div>
                            <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings - Enhanced */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Offerings</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Discover powerful features designed to help your startup succeed and grow in today's competitive market.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Phone Mockup */}
            <div className="flex justify-center mb-8 lg:mb-0">
              <div className="relative z-10">
                <div className="w-72 sm:w-80 h-[500px] sm:h-[600px] bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden">
                    <div className="h-full w-full bg-gray-50 dark:bg-gray-800 relative">
                      {/* Phone UI */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black dark:bg-gray-700 rounded-full"></div>
                      <div className="pt-12 px-6">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                          <div className="bg-gray-200 dark:bg-gray-700 h-8 w-24 rounded"></div>
                          <div className="bg-gray-200 dark:bg-gray-700 h-8 w-8 rounded-full"></div>
                        </div>

                        {/* Balance Card */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-6 mb-6 text-white">
                          <div className="bg-white/20 h-4 w-20 rounded mb-2"></div>
                          <div className="bg-white/30 h-8 w-32 rounded mb-4"></div>
                          <div className="flex justify-between">
                            <div className="bg-white/20 h-3 w-16 rounded"></div>
                            <div className="bg-white/20 h-3 w-12 rounded"></div>
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-4 gap-4 mb-6">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-3 shadow-sm">
                              <div className="bg-blue-100 dark:bg-blue-900 h-8 w-8 rounded-lg mb-2 mx-auto"></div>
                              <div className="bg-gray-200 dark:bg-gray-700 h-2 w-full rounded"></div>
                            </div>
                          ))}
                        </div>

                        {/* Transaction List */}
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm flex items-center"
                            >
                              <div className="bg-gray-200 dark:bg-gray-700 h-10 w-10 rounded-full mr-3"></div>
                              <div className="flex-1">
                                <div className="bg-gray-200 dark:bg-gray-700 h-3 w-20 rounded mb-1"></div>
                                <div className="bg-gray-200 dark:bg-gray-700 h-2 w-16 rounded"></div>
                              </div>
                              <div className="bg-gray-200 dark:bg-gray-700 h-4 w-12 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards - Positioned around phone */}
            <div className="lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:w-full lg:h-full lg:relative">
                {/* Quick Transfer - Top Left */}
                <div className="lg:absolute lg:top-16 lg:left-8 xl:left-16">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg max-w-xs hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded"></div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Quick Transfer</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Send money instantly to anyone, anywhere with just a few taps on your device.
                    </p>
                  </div>
                </div>

                {/* Easy Management - Top Right */}
                <div className="lg:absolute lg:top-16 lg:right-8 xl:right-16">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg max-w-xs hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-green-600 dark:bg-green-500 rounded"></div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Easy Management</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Manage all your finances in one place with our intuitive dashboard and tools.
                    </p>
                  </div>
                </div>

                {/* Expense Tracking - Bottom Left */}
                <div className="lg:absolute lg:bottom-16 lg:left-8 xl:left-16">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg max-w-xs hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-purple-600 dark:bg-purple-500 rounded"></div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Expense Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Track your spending patterns and get insights to make better financial decisions.
                    </p>
                  </div>
                </div>

                {/* Track Your Investment - Bottom Right */}
                <div className="lg:absolute lg:bottom-16 lg:right-8 xl:right-16">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg max-w-xs hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-4">
                      <div className="w-6 h-6 bg-orange-600 dark:bg-orange-500 rounded"></div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Track Your Investment</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Monitor your portfolio performance and make informed investment choices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same but with responsive padding adjustments */}
      {/* How it Works - Enhanced */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              We personalize every interaction so you can focus on building, collaborating, and scaling.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between relative">
              {/* Connecting Lines */}
              <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-dashed border-gray-300 dark:border-gray-700 z-0"></div>

              {/* Step 1 */}
              <div className="w-full md:w-1/3 flex flex-col items-center mb-12 md:mb-0 relative z-10">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Install The App</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nisl, amet pretium pellentesque. Orci in
                  elit.
                </p>
              </div>

              {/* Step 2 */}
              <div className="w-full md:w-1/3 flex flex-col items-center mb-12 md:mb-0 relative z-10">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Smart Onboarding</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nisl, amet pretium pellentesque. Orci in
                  elit.
                </p>
              </div>

              {/* Step 3 */}
              <div className="w-full md:w-1/3 flex flex-col items-center relative z-10">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">You Are All Set!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-xs">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla nisl, amet pretium pellentesque. Orci in
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with other sections... */}
      {/* For brevity, I'll include the key sections. The rest follow the same responsive pattern */}

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left side - FAQ List */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    >
                      <span className="font-medium text-gray-900 dark:text-white pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-4 sm:px-6 pb-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Contact Card */}
            <div className="w-full lg:w-1/3">
              <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-6 sm:p-8 text-white sticky top-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Do you have any questions?</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                  </p>
                </div>
                <Button className="w-full bg-white text-blue-600 dark:text-blue-700 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-colors">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section with 3D Effect */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-blue-800 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-lg transform rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-20 w-12 h-12 bg-white/10 rounded-lg transform -rotate-12 animate-float"></div>
          <div className="absolute bottom-20 right-32 w-24 h-24 bg-white/10 rounded-full animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left side - 3D Illustration */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center">
              <div className="relative">
                {/* 3D Laptop/Computer Illustration */}
                <div className="relative transform perspective-1000 rotate-y-12">
                  {/* Laptop Base */}
                  <div className="w-80 h-48 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-2xl shadow-2xl transform rotate-x-12">
                    {/* Laptop Screen */}
                    <div className="absolute -top-40 left-4 right-4 h-48 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-t-2xl border-4 border-gray-700 dark:border-gray-800">
                      {/* Screen Content */}
                      <div className="p-6 h-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-t-xl">
                        <div className="bg-white/20 h-4 w-3/4 rounded mb-4"></div>
                        <div className="bg-white/20 h-3 w-1/2 rounded mb-6"></div>
                        <div className="space-y-3">
                          <div className="bg-white/30 h-8 rounded-lg"></div>
                          <div className="bg-white/30 h-8 rounded-lg"></div>
                          <div className="bg-white/30 h-8 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Email Icons */}
                  <div className="absolute -top-20 -left-8 w-12 h-12 bg-white dark:bg-gray-100 rounded-lg shadow-lg flex items-center justify-center animate-float">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="absolute -top-16 -right-12 w-10 h-10 bg-yellow-400 rounded-lg shadow-lg flex items-center justify-center animate-float-delayed">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-8 -left-6 w-8 h-8 bg-green-400 rounded-full shadow-lg flex items-center justify-center animate-float">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Newsletter Content */}
            <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Subscribe to our newsletter for the latest updates and insights
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Stay updated with the latest startup trends, investor insights, and platform updates delivered directly
                to your inbox.
              </p>

              {/* Email Subscription Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors">
                  Subscribe
                </Button>
              </div>

              <p className="text-blue-200 text-sm mt-4">No spam, unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 pt-12 sm:pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">Venturloop</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-md">
                Connecting entrepreneurs with verified investors to build the future of innovation. Join thousands of
                startups already growing with our platform.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Company Links */}
            <div>
              <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">Our Company</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    For Startups
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    For Investors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold mb-6 text-gray-900 dark:text-white">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">© 2024 Venturloop. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
