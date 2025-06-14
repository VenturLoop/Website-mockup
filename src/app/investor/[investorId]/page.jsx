"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Briefcase, DollarSign, Target, Building, Users, Eye, ImageIcon, Link as LinkIcon } from 'lucide-react';
import { Navigation } from "@/components/navigation";
import Footer from '@/components/Footer'; // Import Footer
import LoginModal from '@/components/LoginModal';

const mockInvestorProfiles = [
  {
    _id: "1", // Was investorId
    name: "Bessie Cooper (Updated)",
    website: "https://bessieventures.com",
    image: "https://i.pravatar.cc/150?u=BessieCooper", // Was profilePhoto
    portfolioCompanies: [
      { name: "Innovatech Ltd.", description: "AI-driven analytics platform.", url: "https://innovatech.example.com" },
      { name: "FinCore Inc.", description: "Next-gen mobile banking solutions.", url: "https://fincore.example.com" },
    ],
    description: "Seasoned angel investor with a focus on SaaS and fintech. Looking for disruptive ideas and strong teams. (Updated Bio)", // Was bio
    geography: "USA",
    investmentStages: "Seed, Pre-Series A", // Was preferredStage
    businessModel: ["SaaS", "B2B Marketplace"],
    investorType: "Angel Investor",
    sectorInterested: ["SaaS", "Fintech", "AI/ML", "Marketplaces"], // Was investmentInterests
    checkSize: "$50K - $250K", // Was fundingRange
    headquarter: "New York, USA", // Will be used as location
    contactLink: "mailto:bessie.cooper@example.com",
    email: "bessie.cooper@example.com" // Kept for display under name
  },
  {
    _id: "2",
    name: "Jenny Wilson (Updated)",
    website: "https://wilsonvc.com",
    image: "https://i.pravatar.cc/150?u=JennyWilson",
    portfolioCompanies: [
      { name: "QuantumLeap", description: "Developing quantum computing processors." },
      { name: "RoboWorks", description: "Advanced robotics for manufacturing." },
    ],
    description: "VC partner specializing in deep tech and hardware startups. Passionate about groundbreaking innovations. (Updated Bio)",
    geography: "USA",
    investmentStages: "Series A, Series B",
    businessModel: ["Deep Tech", "Hardware"],
    investorType: "Venture Capitalist",
    sectorInterested: ["Deep Tech", "Hardware", "Robotics", "Quantum Computing"],
    checkSize: "$500K - $5M",
    headquarter: "San Francisco, USA",
    contactLink: "https://wilsonvc.com/contact",
    email: "jenny.wilson@example.com"
  },
  {
    _id: "3",
    name: "Robert Fox (Updated)",
    website: "https://fox.investments",
    image: "https://i.pravatar.cc/150?u=RobertFox",
    portfolioCompanies: [
      { name: "ShopEasy", description: "E-commerce platform for local businesses." },
    ],
    description: "Former founder, now investing in consumer tech and e-commerce. (Updated Bio)",
    geography: "UK",
    investmentStages: "Seed, Series A",
    businessModel: ["B2C", "E-commerce"],
    investorType: "Angel Investor",
    sectorInterested: ["Consumer Tech", "E-commerce", "Mobile Apps"],
    checkSize: "$100K - $1M",
    headquarter: "London, UK",
    contactLink: "mailto:robert.fox@example.com",
    email: "robert.fox@example.com"
  },
   {
    _id: "4",
    name: "Jacob Jones",
    email: "jacob.jones@example.com",
    image: "https://i.pravatar.cc/150?u=JacobJones",
    headquarter: "Berlin, Germany",
    description: "Impact investor focusing on sustainable and social ventures. Driving positive change through capital.",
    sectorInterested: ["Sustainability", "Social Impact", "EdTech", "HealthTech"],
    portfolioCompanies: [
      { name: "GreenFuture", description: "Renewable energy solutions." },
      { name: "EduForAll", description: "Accessible online education platform." },
    ],
    checkSize: "$25K - $200K",
    investmentStages: "Pre-Seed, Seed",
    investorType: "Impact Investor",
    businessModel: ["Social Enterprise"],
    website: "https://jacobjones.invest.example.com",
    contactLink: "mailto:jacob.jones@example.com"
  },
  {
    _id: "5",
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    image: "https://i.pravatar.cc/150?u=KristinWatson",
    headquarter: "Paris, France",
    description: "Corporate venture arm, looking for strategic investments in enterprise software and cybersecurity.",
    sectorInterested: ["Enterprise Software", "Cybersecurity", "Cloud Infrastructure"],
    portfolioCompanies: [
      { name: "SecureNet", description: "Cybersecurity for large enterprises." },
      { name: "CloudCore", description: "Scalable cloud infrastructure services." },
    ],
    checkSize: "$1M - $10M",
    investmentStages: "Series A, Growth Stage",
    investorType: "CVC",
    businessModel: ["B2B", "Enterprise"],
    website: "https://kristinwatson.corp.example.com",
    contactLink: "mailto:kristin.watson@example.com"
  },
  // Added Investor 6 through 15
  {
    _id: "6",
    name: "Investor Six",
    email: "investor.six@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorSix",
    headquarter: "Singapore",
    description: "Focused on early-stage SEA startups.",
    sectorInterested: ["Marketplaces", "Logistics"],
    portfolioCompanies: [{ name: "LogiAsia", description: "Regional logistics network." }],
    checkSize: "$50K - $150K",
    investmentStages: "Seed",
    investorType: "Angel Investor",
    businessModel: ["B2B", "B2C"],
    website: "https://investorsix.example.com",
    contactLink: "mailto:investor.six@example.com"
  },
  {
    _id: "7",
    name: "Investor Seven",
    email: "investor.seven@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorSeven",
    headquarter: "Tokyo, Japan",
    description: "Investing in robotics and IoT.",
    sectorInterested: ["Robotics", "IoT", "Manufacturing"],
    portfolioCompanies: [{ name: "RoboNext", description: "Next-gen robotics." }],
    checkSize: "$100K - $500K",
    investmentStages: "Seed, Series A",
    investorType: "Venture Capitalist",
    businessModel: ["Hardware"],
    website: "https://investorseven.example.com",
    contactLink: "mailto:investor.seven@example.com"
  },
  {
    _id: "8",
    name: "Investor Eight",
    email: "investor.eight@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorEight",
    headquarter: "Sydney, Australia",
    description: "Focus on Australian and NZ startups.",
    sectorInterested: ["AgriTech", "CleanTech"],
    portfolioCompanies: [{ name: "AgriGrow", description: "Sustainable farming tech." }],
    checkSize: "$75K - $250K",
    investmentStages: "Seed",
    investorType: "Angel Investor",
    businessModel: ["B2B"],
    website: "https://investoreight.example.com",
    contactLink: "mailto:investor.eight@example.com"
  },
  {
    _id: "9",
    name: "Investor Nine",
    email: "investor.nine@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorNine",
    headquarter: "Toronto, Canada",
    description: "Canadian focused fund for AI and ML.",
    sectorInterested: ["AI/ML", "SaaS"],
    portfolioCompanies: [{ name: "AICan", description: "AI solutions for enterprise." }],
    checkSize: "$200K - $1M",
    investmentStages: "Seed, Series A",
    investorType: "Venture Capitalist",
    businessModel: ["SaaS"],
    website: "https://investornine.example.com",
    contactLink: "mailto:investor.nine@example.com"
  },
  {
    _id: "10",
    name: "Investor Ten",
    email: "investor.ten@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorTen",
    headquarter: "Mumbai, India",
    description: "Early-stage investments in Indian market.",
    sectorInterested: ["Fintech", "EdTech", "Consumer"],
    portfolioCompanies: [{ name: "BharatPay", description: "Digital payments solution." }],
    checkSize: "$50K - $200K",
    investmentStages: "Pre-Seed, Seed",
    investorType: "Angel Investor",
    businessModel: ["B2C"],
    website: "https://investorten.example.com",
    contactLink: "mailto:investor.ten@example.com"
  },
  {
    _id: "11",
    name: "Investor Eleven",
    email: "investor.eleven@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorEleven",
    headquarter: "Stockholm, Sweden",
    description: "Nordic gaming and entertainment fund.",
    sectorInterested: ["Gaming", "Entertainment", "VR/AR"],
    portfolioCompanies: [{ name: "GameVerse", description: "Immersive gaming experiences." }],
    checkSize: "$100K - $750K",
    investmentStages: "Seed, Series A",
    investorType: "Venture Capitalist",
    businessModel: ["B2C"],
    website: "https://investoreleven.example.com",
    contactLink: "mailto:investor.eleven@example.com"
  },
  {
    _id: "12",
    name: "Investor Twelve",
    email: "investor.twelve@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorTwelve",
    headquarter: "Sao Paulo, Brazil",
    description: "LATAM focused investments in logistics and e-commerce.",
    sectorInterested: ["Logistics", "E-commerce", "Fintech"],
    portfolioCompanies: [{ name: "LatAmDeliver", description: "E-commerce logistics." }],
    checkSize: "$50K - $300K",
    investmentStages: "Seed",
    investorType: "Angel Investor",
    businessModel: ["B2B", "B2C"],
    website: "https://investortwelve.example.com",
    contactLink: "mailto:investor.twelve@example.com"
  },
  {
    _id: "13",
    name: "Investor Thirteen",
    email: "investor.thirteen@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorThirteen",
    headquarter: "Dubai, UAE",
    description: "MENA region investments, tech focus.",
    sectorInterested: ["Tech", "Real Estate", "Logistics"],
    portfolioCompanies: [{ name: "DesertTech", description: "Innovative tech for arid climates." }],
    checkSize: "$250K - $1.5M",
    investmentStages: "Series A",
    investorType: "Venture Capitalist",
    businessModel: ["B2B", "Enterprise"],
    website: "https://investorthirteen.example.com",
    contactLink: "mailto:investor.thirteen@example.com"
  },
  {
    _id: "14",
    name: "Investor Fourteen",
    email: "investor.fourteen@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorFourteen",
    headquarter: "Johannesburg, South Africa",
    description: "African startups, mobile-first solutions.",
    sectorInterested: ["Mobile", "Fintech", "Logistics"],
    portfolioCompanies: [{ name: "AfriMobile", description: "Mobile payment solutions." }],
    checkSize: "$50K - $250K",
    investmentStages: "Seed",
    investorType: "Angel Investor",
    businessModel: ["B2C"],
    website: "https://investorfourteen.example.com",
    contactLink: "mailto:investor.fourteen@example.com"
  },
  {
    _id: "15",
    name: "Investor Fifteen",
    email: "investor.fifteen@example.com",
    image: "https://i.pravatar.cc/150?u=InvestorFifteen",
    headquarter: "Zurich, Switzerland",
    description: "Swiss precision in deep tech and biotech.",
    sectorInterested: ["Deep Tech", "Biotech", "HealthTech"],
    portfolioCompanies: [{ name: "BioFuture", description: "Biotech research." }],
    checkSize: "$500K - $3M",
    investmentStages: "Seed, Series A",
    investorType: "Venture Capitalist",
    businessModel: ["B2B", "Research"],
    website: "https://investorfifteen.example.com",
    contactLink: "mailto:investor.fifteen@example.com"
  }
];

export default function InvestorProfilePage() {
  const params = useParams();
  const investorId = params.investorId;
  const investorProfileData = mockInvestorProfiles.find(p => p._id === investorId);

  if (!investorProfileData) {
    return (
      <>
        <Navigation />
        <div className="flex justify-center items-center h-[calc(100vh-4rem)] bg-gray-100 dark:bg-gray-900 overflow-y-auto hide-scrollbar">
          <p className="text-2xl text-gray-700 dark:text-gray-300 p-10">Investor not found.</p>
        </div>
      </>
    );
  }

  const { _id, name, email, image, headquarter, website, description, sectorInterested, portfolioCompanies, checkSize, investmentStages, investorType, businessModel, contactLink } = investorProfileData;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Placeholder actions for potential future buttons
  const handleSaveInvestor = () => console.log("Save Investor clicked for investor:", _id);


  return (
    <>
      <Navigation />
      <div className="bg-gray-100 dark:bg-gray-950 h-[calc(100vh-4rem)] overflow-y-auto px-1 py-4 sm:p-4 md:p-8 transition-colors duration-300 hide-scrollbar">
        <div className="container mx-auto max-w-screen-lg">
          <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Left Column */}
              <div className="md:col-span-1 flex flex-col items-center space-y-6 md:sticky md:top-8 md:self-start">
                {image ? (
                  <img
                    src={image}
                    alt={name} referrerPolicy="no-referrer"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400"
                  />
                ) : (
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-4 border-indigo-500 dark:border-indigo-400">
                    <ImageIcon size={64} className="text-gray-400 dark:text-gray-500" />
                  </div>
                )}
                <div className="w-full space-y-3">
                  {/* Example buttons - can be expanded or modified */}
                  <Button onClick={() => setIsLoginModalOpen(true)} className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white">
                    <Briefcase size={18} className="mr-2" /> Pitch Now
                  </Button>
                  <Button onClick={handleSaveInvestor} variant="outline" className="w-full text-indigo-600 border-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-800">
                    <Users size={18} className="mr-2" /> Save Investor {/* Changed icon to Users for 'Save' as an example */}
                  </Button>
                </div>
                {/* Optional: Placeholder for stats if relevant for investors later */}
                {/* <div className="w-full text-center md:text-left pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                   <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Stats</h3>
                   <div className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-400 mb-2">
                     <Eye size={18} className="mr-2 text-indigo-500 dark:text-indigo-400" />
                     <span>Profile Views Placeholder</span>
                   </div>
                </div> */}
              </div>

              {/* Right Column (Details) */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">{name}</h1>
                  {email && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <Mail size={16} className="mr-2 text-gray-500" /> {email}
                    </div>
                  )}
                  {headquarter && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin size={16} className="mr-2 text-gray-500" /> {headquarter}
                    </div>
                  )}
                  {website && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <LinkIcon size={16} className="mr-2 text-gray-500" />
                      <a href={website} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-indigo-500">{website}</a>
                    </div>
                  )}
                </div>

                {description && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">About</h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{description}</p>
                  </div>
                )}

                {sectorInterested && sectorInterested.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Sectors of Interest</h2>
                    <div className="flex flex-wrap gap-2">
                      {sectorInterested.map((interest, index) => (
                        <span key={index} className="bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-200 px-3 py-1.5 rounded-full text-sm font-medium">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Investment Focus</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                    {checkSize && <div className="flex items-center"><DollarSign size={18} className="mr-2 text-green-500" /><div><strong>Typical Check Size:</strong><p>{checkSize}</p></div></div>}
                    {investmentStages && <div className="flex items-center"><Target size={18} className="mr-2 text-blue-500" /><div><strong>Preferred Investment Stages:</strong><p>{investmentStages}</p></div></div>}
                  </div> {/* End of Investment Focus div */}
                </div>
                {investorType && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Investor Type</h2>
                    <p className="text-gray-700 dark:text-gray-300">{investorType}</p>
                  </div>
                )}
                {businessModel && businessModel.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Business Models of Interest</h2>
                    <div className="flex flex-wrap gap-2">
                      {businessModel.map((model, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-purple-200 px-3 py-1.5 rounded-full text-sm font-medium">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {portfolioCompanies && portfolioCompanies.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Portfolio Companies</h2>
                    <div className="space-y-4">
                      {portfolioCompanies.map((company, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-1">{company.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{company.description}</p>
                          {company.url && <a href={company.url} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-500 hover:underline inline-flex items-center mt-1">Visit Website <LinkIcon size={14} className="ml-1"/></a>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div> {/* End of Right Column */}
            </div> {/* End of Grid Container */}
          </div> {/* End of White Background Container */}
        </div> {/* End of Container mx-auto */}
      </div> {/* End of Main Background Div */}
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
}
