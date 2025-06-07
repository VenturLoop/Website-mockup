"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Check, X } from "lucide-react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly")

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

  const pricingFeatures = [
    {
      feature: "Access to investor network",
      free: false,
      premium: true,
      enterprise: true,
    },
    {
      feature: "Basic profile creation",
      free: true,
      premium: true,
      enterprise: true,
    },
    {
      feature: "Advanced analytics",
      free: false,
      premium: true,
      enterprise: true,
    },
    {
      feature: "Priority support",
      free: false,
      premium: false,
      enterprise: true,
    },
    {
      feature: "Custom integrations",
      free: false,
      premium: false,
      enterprise: true,
    },
    {
      feature: "Team collaboration",
      free: false,
      premium: true,
      enterprise: true,
    },
    {
      feature: "API access",
      free: false,
      premium: false,
      enterprise: true,
    },
    {
      feature: "White-label solution",
      free: false,
      premium: false,
      enterprise: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <Navigation />

      {/* Pricing Hero Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Transparent Pricing</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">Pricing built for people just like you.</p>

            {/* Billing Toggle */}
            <div className="inline-flex bg-gray-200 dark:bg-gray-800 rounded-lg p-1 mb-12">
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-all ${
                  billingPeriod === "yearly"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Yearly
              </button>
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-800 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 text-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-2">$0</div>
                <p className="text-gray-300">pricing for 1 year (for 1 user)</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Feature label goes here</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Feature label goes here</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Feature label goes here</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg">
                Sign up for free
              </Button>
            </div>

            {/* Founder's Pass - Featured */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Recommended</span>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Founder's Pass</h3>
                <p className="text-blue-100 mb-6">Everything you need to grow</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span>Feature label goes here</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span>Feature label goes here</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span>Feature label goes here</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span>Feature label goes here</span>
                </li>
              </ul>

              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-lg mb-4">
                Choose plan ($49)
              </Button>

              {/* Illustration */}
              <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-32 sm:h-40 opacity-80">
                <div className="relative w-full h-full">
                  {/* Simple person illustration */}
                  <div className="absolute bottom-0 right-4">
                    {/* Head */}
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-orange-300 rounded-full mb-1 mx-auto"></div>
                    {/* Body */}
                    <div className="w-8 sm:w-12 h-12 sm:h-16 bg-blue-300 rounded-t-lg relative">
                      {/* Arms */}
                      <div className="absolute -left-1 sm:-left-2 top-2 w-3 sm:w-4 h-6 sm:h-8 bg-orange-300 rounded-full transform -rotate-12"></div>
                      <div className="absolute -right-1 sm:-right-2 top-2 w-3 sm:w-4 h-6 sm:h-8 bg-orange-300 rounded-full transform rotate-12"></div>
                    </div>
                    {/* Legs */}
                    <div className="flex justify-center space-x-1">
                      <div className="w-2 sm:w-3 h-8 sm:h-12 bg-blue-400 rounded-b-lg"></div>
                      <div className="w-2 sm:w-3 h-8 sm:h-12 bg-blue-400 rounded-b-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections with responsive improvements */}
      {/* Detailed Pricing Comparison */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Detailed Pricing Comparison
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Compare all features across our plans to find what works best for you
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Features</div>
                <div className="text-center font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Free</div>
                <div className="text-center font-semibold text-blue-600 dark:text-blue-400 text-sm sm:text-base">
                  Premium
                </div>
                <div className="text-center font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  Enterprise
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {pricingFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                  >
                    <div className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{item.feature}</div>
                    <div className="text-center">
                      {item.free ? (
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mx-auto" />
                      )}
                    </div>
                    <div className="text-center">
                      {item.premium ? (
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mx-auto" />
                      )}
                    </div>
                    <div className="text-center">
                      {item.enterprise ? (
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mx-auto" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    >
                      <span className="font-medium text-gray-900 dark:text-white pr-4 text-sm sm:text-base">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-4 sm:px-6 pb-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
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
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">Do you have any questions?</h3>
                  <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                  </p>
                </div>
                <Button className="w-full bg-white text-blue-600 dark:text-blue-700 hover:bg-gray-100 font-semibold py-3 rounded-lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section with 3D Effect */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-blue-800 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-lg transform rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-12 sm:w-16 h-12 sm:h-16 bg-white/10 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-20 w-8 sm:w-12 h-8 sm:h-12 bg-white/10 rounded-lg transform -rotate-12 animate-float"></div>
          <div className="absolute bottom-20 right-32 w-20 sm:w-24 h-20 sm:h-24 bg-white/10 rounded-full animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left side - 3D Illustration */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
              <div className="relative">
                <div className="relative transform perspective-1000 rotate-y-12">
                  <div className="w-64 sm:w-80 h-40 sm:h-48 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-2xl shadow-2xl transform rotate-x-12">
                    <div className="absolute -top-32 sm:-top-40 left-4 right-4 h-40 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-t-2xl border-4 border-gray-700 dark:border-gray-800">
                      <div className="p-4 sm:p-6 h-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-t-xl">
                        <div className="bg-white/20 h-3 sm:h-4 w-2/3 sm:w-3/4 rounded mb-3 sm:mb-4"></div>
                        <div className="bg-white/20 h-2 sm:h-3 w-1/3 sm:w-1/2 rounded mb-4 sm:mb-6"></div>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="bg-white/30 h-6 sm:h-8 rounded-lg"></div>
                          <div className="bg-white/30 h-6 sm:h-8 rounded-lg"></div>
                          <div className="bg-white/30 h-6 sm:h-8 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Email Icons */}
                  <div className="absolute -top-16 sm:-top-20 -left-6 sm:-left-8 w-8 sm:w-12 h-8 sm:h-12 bg-white dark:bg-gray-100 rounded-lg shadow-lg flex items-center justify-center animate-float">
                    <svg className="w-4 sm:w-6 h-4 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="absolute -top-12 sm:-top-16 -right-8 sm:-right-12 w-6 sm:w-10 h-6 sm:h-10 bg-yellow-400 rounded-lg shadow-lg flex items-center justify-center animate-float-delayed">
                    <svg className="w-3 sm:w-5 h-3 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-6 w-6 sm:w-8 h-6 sm:h-8 bg-green-400 rounded-full shadow-lg flex items-center justify-center animate-float">
                    <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Subscribe to our newsletter for the latest updates and insights
              </h2>
              <p className="text-blue-100 text-base sm:text-lg mb-8 leading-relaxed">
                Stay updated with the latest startup trends, investor insights, and platform updates delivered directly
                to your inbox.
              </p>

              {/* Email Subscription Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold">
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
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600"
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
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
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
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    For Startups
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    For Investors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
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
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0 text-sm sm:text-base">
              © 2024 Venturloop. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
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
