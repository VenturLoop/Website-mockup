"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FaqSection({ title, faqData, showContactCard = true }) { // Changed default to true
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  if (!faqData || faqData.length === 0) {
    return null; // Don't render anything if there's no FAQ data
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left side - FAQ List */}
          {/* Adjusted width class based on showContactCard */}
          <div className={`w-full ${showContactCard ? 'lg:w-2/3' : 'lg:w-full'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              {title}
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover-lift animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="font-medium text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-300" />
                    )}
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
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

          {/* Right side - Contact Card: Conditionally rendered */}
          {showContactCard && (
            <div className="w-full lg:w-1/3">
              <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-6 sm:p-8 text-white sticky top-8 hover-lift">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 animate-pulse-slow">
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
                    Can't find the answer you're looking for? Please chat to our friendly team.
                  </p>
                </div>
                <button className="w-full bg-white text-blue-600 dark:text-blue-700 hover:bg-gray-100 font-semibold py-3 rounded-lg transition-colors btn-hover">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
