"use client";

import { Button } from "@/components/ui/button";
import {
  Check,
  Star,
  Users,
  Briefcase,
  GitFork,
  Brain,
  Link,
  Rocket,
} from "lucide-react"; // Add new icons
import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection"; // Import the new component
import LoginModal from "@/components/LoginModal";
import { AppDownloadModal } from "@/components/AppDownloadModal";
import { useUser } from "@/context/UserContext"; // Import useUser
import PhoneMockup1 from "@/components/phone-mockups/PhoneMockup1"; // Import the new component
import PhoneMockup2 from "@/components/phone-mockups/PhoneMockup2"; // Import the new component
import PhoneMockup3 from "@/components/phone-mockups/PhoneMockup3"; // Import the new component
import PhoneMockup4 from "@/components/phone-mockups/PhoneMockup4"; // Import the new component

export default function HomeClient() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAppDownloadModalOpen, setIsAppDownloadModalOpen] = useState(false);
  const { currentUser, isLoggedIn, isLoading } = useUser(); // Get user state
  // openFaq, toggleFaq, and old faqData removed

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, TechStart",
      rating: 5,
      text: "This platform has been instrumental in connecting us with the right investors. The process was smooth and the results exceeded our expectations.",
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      rating: 5,
      text: "Amazing experience! Found the perfect investor match within weeks. The AI-powered matching system is incredibly accurate.",
    },
    {
      name: "Emily Davis",
      role: "Founder, GreenTech",
      rating: 5,
      text: "The one-click pitching feature saved us countless hours. We were able to reach multiple investors simultaneously.",
    },
    {
      name: "David Wilson",
      role: "CEO, DataFlow",
      rating: 5,
      text: "Outstanding platform with excellent support. The investor network is truly verified and high-quality.",
    },
    {
      name: "Lisa Anderson",
      role: "Founder, HealthApp",
      rating: 5,
      text: "Game-changer for our startup journey. The resources and connections provided are invaluable.",
    },
    {
      name: "James Brown",
      role: "CEO, FinanceAI",
      rating: 5,
      text: "Professional, efficient, and results-driven. Highly recommend to any serious entrepreneur.",
    },
  ];

  const investorLogos = [
    "Y Combinator",
    "Sequoia",
    "Accel",
    "Andreessen",
    "Kleiner",
    "Founders",
    "Greylock",
    "Index",
    "Tiger",
    "Benchmark",
    "First Round",
    "NEA",
    "GV",
    "Insight",
    "Lightspeed",
  ];

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openAppDownloadModal = () => setIsAppDownloadModalOpen(true);
  const closeAppDownloadModal = () => setIsAppDownloadModalOpen(false);

  const handleGetStartedClick = () => {
    if (isLoggedIn) {
      openAppDownloadModal();
    } else {
      openLoginModal();
    }
  };

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.dataset.animation;
            if (animationClass) {
              entry.target.classList.add(animationClass);
              // Optionally, add a class to prevent re-triggering if not relying on 'forwards'
              // entry.target.classList.add("has-animated");
            } else {
              entry.target.classList.add("animate"); // Fallback for elements without data-animation
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Count-up animation observer
  useEffect(() => {
    const animateNumbers = () => {
      const counters = [
        { id: "foundersCount", value: "10000+" },
        { id: "investorsCount", value: "500+" },
        { id: "matchesCount", value: "1500+" },
        { id: "pitchedCount", value: "2k" },
      ];

      counters.forEach((counter) => {
        const element = document.getElementById(counter.id);
        if (!element) return;

        let targetValue = counter.value;
        if (targetValue.endsWith("+")) {
          targetValue = targetValue.slice(0, -1);
        }
        if (targetValue.endsWith("k")) {
          targetValue = parseFloat(targetValue.slice(0, -1)) * 1000;
        } else {
          targetValue = parseInt(targetValue.replace(/,/g, ""), 10);
        }

        let currentValue = 0;
        const duration = 4000; // Animation duration in ms
        const startTime = performance.now();

        const step = (timestamp) => {
          const elapsedTime = timestamp - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          currentValue = Math.floor(progress * targetValue);

          if (counter.id === "pitchedCount" && targetValue >= 1000) {
            element.textContent =
              (currentValue / 1000).toFixed(currentValue % 1000 !== 0 ? 1 : 0) +
              "k";
          } else if (targetValue >= 10000 && counter.id === "foundersCount") {
            element.textContent = currentValue.toLocaleString() + "+";
          } else if (targetValue >= 1000 && counter.id === "matchesCount") {
            element.textContent = currentValue.toLocaleString() + "+";
          } else if (targetValue >= 500 && counter.id === "investorsCount") {
            element.textContent = currentValue.toLocaleString() + "+";
          } else {
            element.textContent = currentValue.toLocaleString();
          }

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            // Ensure final value is set accurately, especially with k formatting
            if (counter.id === "pitchedCount" && targetValue >= 1000) {
              element.textContent =
                (targetValue / 1000).toFixed(targetValue % 1000 !== 0 ? 1 : 0) +
                "k";
            } else if (targetValue >= 10000 && counter.id === "foundersCount") {
              element.textContent = targetValue.toLocaleString() + "+";
            } else if (targetValue >= 1000 && counter.id === "matchesCount") {
              element.textContent = targetValue.toLocaleString() + "+";
            } else if (targetValue >= 500 && counter.id === "investorsCount") {
              element.textContent = targetValue.toLocaleString() + "+";
            } else {
              element.textContent = targetValue.toLocaleString();
            }
          }
        };
        requestAnimationFrame(step);
      });
    };

    const aboutUsSection = document.getElementById("about-us");
    if (!aboutUsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target); // Disconnect observer after animation starts
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    observer.observe(aboutUsSection);

    return () => {
      if (aboutUsSection) {
        observer.unobserve(aboutUsSection);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 overflow-hidden animated-background-hero">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row lg:flex-row items-center">
            <div className="w-full md:w-1/2 lg:w-[65%] mb-8 lg:mb-0 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black dark:text-white animate-on-scroll animate-fade-in-up animate-delay-100">
                Your{" "}
                <span className="text-blue-600 dark:text-blue-300">
                  Startup
                </span>
                <br />
                Journey Starts Here
              </h1>
              <p className="text-gray-700 dark:text-gray-100 text-lg md:text-xl mb-8 max-w-md leading-relaxed animate-on-scroll animate-fade-in-up animate-delay-200">
                VenturLoop connects you with co-founders, investors, and
                collaborators — so you can focus on building, not searching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-on-scroll animate-fade-in-up animate-delay-300">
                <Button
                  onClick={openAppDownloadModal}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-brand-blue dark:hover:bg-brand-blue-dark text-white px-8 py-3 rounded-lg font-medium text-lg btn-hover hover-lift dark:border dark:border-white/75"
                >
                  Download Now
                </Button>
                {!isLoggedIn && (
                  <Button
                    onClick={openLoginModal}
                    variant="outline"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg btn-hover hover-lift dark:border-gray-200 dark:text-gray-100 dark:hover:bg-gray-700"
                  >
                    Start for Free
                  </Button>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-[35%] flex justify-center md:justify-end lg:justify-end animate-on-scroll animate-delay-200">
              <PhoneMockup1 />
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings - Enhanced */}
      <section
        id="services"
        className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Offerings
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Explore VenturLoop's core features, designed to empower your
              startup journey, from finding the right partners to securing
              investment and getting expert advice.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Phone Mockup */}
            <div className="hidden md:flex justify-center mb-8 lg:mb-0 animate-on-scroll animate-delay-200">
              <PhoneMockup2 />
            </div>

            {/* Feature Cards - Positioned around phone */}
            <div className="lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:w-full lg:h-full lg:relative justify-items-center">
                {/* Quick Transfer - Top Left */}
                <div className="lg:absolute lg:top-8 lg:left-8 xl:left-16 animate-on-scroll animate-delay-300">
                  <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 p-6 rounded-2xl shadow-lg max-w-xs hover-lift">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Find a Co-Founder
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      🔄 Discover like-minded co-founders based on goals,
                      skills, and interests to build your dream startup team.
                      Use our platform to find a co-founder who complements your
                      vision.
                    </p>
                  </div>
                </div>

                {/* Easy Management - Top Right */}
                <div className="lg:absolute lg:top-8 lg:right-8 xl:right-16 animate-on-scroll animate-delay-400">
                  <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 p-6 rounded-2xl shadow-lg max-w-xs hover-lift">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4">
                      <Briefcase className="w-6 h-6 text-green-600 dark:text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Connect with Investors
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      📈 Pitch your idea directly to curated investors and
                      incubators who align with your startup’s mission. Easily
                      connect with investors to fund your venture.
                    </p>
                  </div>
                </div>

                {/* Expense Tracking - Bottom Left */}
                <div className="lg:absolute lg:bottom-8 lg:left-8 xl:left-16 animate-on-scroll animate-delay-500">
                  <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 p-6 rounded-2xl shadow-lg max-w-xs hover-lift">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                      <GitFork className="w-6 h-6 text-purple-600 dark:text-purple-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Collaborate on Projects
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      🤝 Join or start real-time projects with other founders
                      for startup collaboration to gain traction, feedback, and
                      visibility.
                    </p>
                  </div>
                </div>

                {/* Track Your Investment - Bottom Right */}
                <div className="lg:absolute lg:bottom-8 lg:right-8 xl:right-16 animate-on-scroll animate-delay-600">
                  <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 p-6 rounded-2xl shadow-lg max-w-xs hover-lift">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-orange-600 dark:text-orange-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Get Startup Advice (AI)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      🧠 Leverage our AI startup advisor, Loop, to get instant
                      answers, strategies, and mentorship tailored to your
                      startup journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works - Enhanced */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              We personalize every interaction so you can focus on building,
              collaborating, and scaling.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:gap-x-8 relative">
              {/* Connecting Lines */}
              <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-[2px] border-t-2 border-dashed border-blue-500 dark:border-blue-400 z-0"></div>

              {/* Step 1 */}
              <div className="w-full md:w-1/3 flex flex-col items-center mb-12 md:mb-0 relative z-10 animate-on-scroll animate-delay-200">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                  Create Your Profile
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-xs">
                  Tell us about your startup goals, skills, and what you're
                  looking for—whether it’s a co-founder, investor, or
                  collaborators.
                </p>
              </div>

              {/* Step 2 */}
              <div className="w-full md:w-1/3 flex flex-col items-center mb-12 md:mb-0 relative z-10 animate-on-scroll animate-delay-300">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                  Get Matched Intelligently
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-xs">
                  Our smart algorithm and AI advisor Loop match you with
                  like-minded founders, relevant investors, and real-time
                  opportunities.
                </p>
              </div>

              {/* Step 3 */}
              <div className="w-full md:w-1/3 flex flex-col items-center relative z-10 animate-on-scroll animate-delay-400">
                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                  Build & Scale Together
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-xs">
                  Start meaningful conversations, collaborate on live projects,
                  pitch your startup, and grow your venture—all in one platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Founders Meet Their Future Section */}
      <section
        id="about-us"
        className="pt-16 pb-24 sm:pt-20 sm:pb-32 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
                Where{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Founders
                </span>{" "}
                Meet
                <br />
                Their Future
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed text-center lg:text-left">
                VenturLoop is where founders link up with co-founders,
                investors, and collaborators to turn ideas into real
                startups—fast and hassle-free.
              </p>

              {/* Statistical Highlights */}
              <div className="mt-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
                <div className="flex flex-col items-center text-center">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <span
                    id="foundersCount"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    10,000+
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Founders
                  </span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <span
                    id="investorsCount"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    500+
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Investors
                  </span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Link className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <span
                    id="matchesCount"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    1500+
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Total Matches
                  </span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                  <span
                    id="pitchedCount"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    2k
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Startup Pitched
                  </span>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  onClick={isLoggedIn ? openAppDownloadModal : openLoginModal}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium text-lg btn-hover hover-lift"
                >
                  {isLoggedIn ? "Download Now" : "Get Started"}
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center animate-on-scroll animate-delay-200">
              <PhoneMockup3 onGetStartedClick={handleGetStartedClick} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10 animate-on-scroll"
                data-animation="animate-slide-in-left"
              >
                Some{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Excellent Features
                </span>{" "}
                For You
              </h2>

              <div className="space-y-6">
                <div
                  className="flex items-start animate-on-scroll animate-delay-200"
                  data-animation="animate-slide-in-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      1.
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-left mb-3">
                      AI Matchmaking Dashboard
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Connect instantly with like-minded co-founders, investors,
                      and collaborators. Intelligent filters make discovery
                      effortless.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start animate-on-scroll animate-delay-400"
                  data-animation="animate-slide-in-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      2.
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-left mb-3">
                      One-Click Investor Pitching
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Upload your deck, tap your vertical, and instantly pitch
                      to relevant investors. Built-in tracking and feedback
                      tools included.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start animate-on-scroll animate-delay-600"
                  data-animation="animate-slide-in-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">
                      3.
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-left mb-3">
                      Incubator Access Gateway
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Apply to top-tier incubators and accelerators in one
                      place. No more endless forms and scattered applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center animate-on-scroll animate-delay-200"
              data-animation="animate-slide-in-right"
            >
              <PhoneMockup4 />
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section with Auto-Sliding Animation */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Connect With Verified Investors On The Platform
            </h2>
          </div>

          {/* Auto-sliding investor logos */}
          <div className="relative">
            <div className="flex space-x-8 animate-scroll-left">
              {/* First set of logos */}
              {investorLogos.map((name, index) => (
                <div
                  key={`first-${index}`}
                  className="bg-white dark:bg-gray-800 px-8 py-4 rounded-lg shadow-sm flex-shrink-0 hover-lift"
                >
                  <div className="h-8 flex items-center justify-center whitespace-nowrap">
                    <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {investorLogos.map((name, index) => (
                <div
                  key={`second-${index}`}
                  className="bg-white dark:bg-gray-800 px-8 py-4 rounded-lg shadow-sm flex-shrink-0 hover-lift"
                >
                  <div className="h-8 flex items-center justify-center whitespace-nowrap">
                    <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row sliding in opposite direction */}
          <div className="relative mt-8">
            <div className="flex space-x-8 animate-scroll-right">
              {/* First set of logos (reversed) */}
              {[...investorLogos].reverse().map((name, index) => (
                <div
                  key={`third-${index}`}
                  className="bg-white dark:bg-gray-800 px-8 py-4 rounded-lg shadow-sm flex-shrink-0 hover-lift"
                >
                  <div className="h-8 flex items-center justify-center whitespace-nowrap">
                    <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[...investorLogos].reverse().map((name, index) => (
                <div
                  key={`fourth-${index}`}
                  className="bg-white dark:bg-gray-800 px-8 py-4 rounded-lg shadow-sm flex-shrink-0 hover-lift"
                >
                  <div className="h-8 flex items-center justify-center whitespace-nowrap">
                    <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Auto-Carousel */}
      <section id="testimonial" className="py-16 bg-white dark:bg-gray-950">
        {/* Title with standard padding */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our People Think About Us
            </h2>
          </div>
        </div>

        {/* Testimonial slider container - now full-width relative to section */}
        <div className="testimonial-container mt-8">
          {" "}
          {/* Consider adjusting mt-8 if mb-12 on title is too much/little */}
          <div className="testimonial-row flex overflow-x-auto pb-4">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`row1-${index}`}
                className="testimonial-card flex-shrink-0 w-80 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star
                        key={`empty-${i}`}
                        className="w-4 h-4 text-gray-300 dark:text-gray-600 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    {testimonial.rating}.0
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
          <div className="testimonial-row flex overflow-x-auto pt-4 pb-4">
            {[
              ...testimonials.slice(Math.ceil(testimonials.length / 2)),
              ...testimonials.slice(0, Math.ceil(testimonials.length / 2)),
              ...testimonials.slice(Math.ceil(testimonials.length / 2)),
              ...testimonials.slice(0, Math.ceil(testimonials.length / 2)),
            ].map((testimonial, index) => (
              <div
                key={`row2-${index}`}
                className="testimonial-card flex-shrink-0 w-80 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover-lift"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 mr-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star
                        key={`empty-${i}`}
                        className="w-4 h-4 text-gray-300 dark:text-gray-600 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                    {testimonial.rating}.0
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* The extraneous div and its comment are removed here. */}
      </section>

      {/* FAQ Section - Replaced with new component */}
      <FaqSection title="Frequently asked questions" faqData={generalFaqData} />

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
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center animate-on-scroll">
              <div className="relative">
                {/* 3D Laptop/Computer Illustration */}
                <div className="relative transform perspective-1000 rotate-y-12">
                  {/* Laptop Base */}
                  <div className="w-80 h-48 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 rounded-2xl shadow-2xl transform rotate-x-12 animate-pulse-slow">
                    {/* Laptop Screen */}
                    <div className="absolute -top-10 left-4 right-4 h-48 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black rounded-t-2xl border-4 border-gray-700 dark:border-gray-800">
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
                  <div className="absolute -top-5 -left-2 w-12 h-12 bg-white dark:bg-gray-100 rounded-lg shadow-lg flex items-center justify-center animate-float">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="absolute -top-4 -right-3 w-10 h-10 bg-yellow-400 rounded-lg shadow-lg flex items-center justify-center animate-float-delayed">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -left-1 w-8 h-8 bg-green-400 rounded-full shadow-lg flex items-center justify-center animate-float">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
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
            <div className="w-full lg:w-1/2 lg:pl-12 text-center lg:text-left animate-on-scroll animate-delay-200">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Subscribe to our newsletter for the latest updates and insights
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Stay updated with the latest startup trends, investor insights,
                and platform updates delivered directly to your inbox.
              </p>

              {/* Email Subscription Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors btn-hover">
                  Subscribe
                </Button>
              </div>

              <p className="text-blue-200 text-sm mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onOpenAppDownloadModal={openAppDownloadModal}
      />
      <AppDownloadModal
        isOpen={isAppDownloadModalOpen}
        onClose={closeAppDownloadModal}
      />
    </div>
  );
}
