// src/app/profile/[userId]/page.jsx
"use client";

import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button"; // Import the button
import { Mail, MapPin, Briefcase, Users, Eye, Save, UserPlus, Image as ImageIcon } from 'lucide-react'; // Import icons
import { Navigation } from "@/components/navigation"; // Import Navigation

// Mock data - will be replaced or fetched based on userId
const mockUserProfile = {
    "success": true,
    "message": "User profile fetched successfully.",
    "user": {
        "userId": "682de28d858fff4521c35b29",
        "email": "iazgarmohammed@gmail.com",
        "name": "Mohammed Azgar",
        "userChatStatus": "offline",
        "lastSeen": "2025-05-21T14:32:49.932Z",
        "profile": {
            "_id": "682de2d1858fff4521c35b30",
            "profilePhoto": "",
            "birthday": "05/02/2007",
            "location": " Tamil Nadu India",
            "skillSet": [
                "App Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer",
                "Android Developer", "iOS Developer", "Node.js Developer", "React Native Developer",
                "React Developer", "Python Developer", "Java Developer", "Blockchain",
                "IoT Developer", "Embedded Systems", "Machine Learning", "Deep Learning",
                "Networking", "Database Management", "Automation Testing", "Quality Assurance",
                "Product Manager", "Product", "Technical Product Manager", "UI/UX Design",
                "Product Design", "Design Thinking", "Figma", "Prototyping",
                "Wireframing", "No-code Developer", "Business Development", "Marketing",
                "Sales", "Growth Marketing", "Digital Marketing", "Venture Capital",
                "Angel Investing", "Fundraising", "Brand Strategy", "Performance Marketing",
                "Go-to-Market Strategy", "Finance", "Financial Modeling", "Startup CFO",
                "Equity Management", "Pitch Deck Expert", "Legal", "Startup Law",
                "Cap Table Management", "Business Strategy", "B2B Sales", "Startup Mentor",
                "Compliance", "Regulations", "Corporate Partnerships", "B2C Strategy",
                "Marketplace Strategy", "Founder", "Resilience", "Time Management",
                "Storytelling", "Public Speaking", "Leadership", "Incubator Coach",
                "Startup Evangelist", "Startup Generalist", "Early Stage Specialist",
                "Accelerator Lead", "Pitching", "Negotiation", "Empathy"
            ],
            "industries": ["Social Impact"],
            "otherWebsiteUrls": {},
            "createdAt": "2025-05-21T14:27:29.136Z",
            "updatedAt": "2025-05-21T14:31:44.827Z",
            "__v": 1,
            "commitmentLevel": "Already full time in a startup",
            "equityExpectation": "Fully Negotiable",
            "priorStartupExperience": "Founded/Co-founded a company",
            "status": "Network",
            "bio": "Mindset is everything "
        },
        "totalConnections": 0,
        "viewCount": 0,
        "isPremium": false,
        "profileComplete": false,
        "profileIncompleteReason": ["profilePhoto"],
        "isStartupDetails": false,
        "limits": {
            "investorContactingLimit": 0,
            "founderConnectingLimit": 0,
            "founderDirectMessageLimit": 0,
            "investorSaveLimit": 0,
            "founderSaveLimit": 0
        }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmRlMjhkODU4ZmZmNDUyMWMzNWIyOSIsImVtYWlsIjoiaWF6Z2FybW9oYW1tZWRAZ21haWwuY29tIiwiaWF0IjoxNzQ5NzA3OTQ5LCJleHAiOjE3NDk3OTQzNDl9.OH-ZuEda4sjqz3VP3ibuxOfyZxccbGLFvt2jM4D1DPo"
};

export default function UserProfilePage() {
  const params = useParams();
  const userId = params.userId;
  const userProfileData = mockUserProfile.user.userId === userId ? mockUserProfile.user : null;

  if (!userProfileData) {
    return (
      <>
        <Navigation /> {/* Add Navigation here */}
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 pt-16"> {/* Added pt-16 for navbar height */}
          <p className="text-2xl text-gray-700 dark:text-gray-300 p-10">User not found.</p>
        </div>
      </>
    );
  }

  const { name, email, profile, totalConnections, viewCount } = userProfileData;
  const {
    profilePhoto,
    location,
    skillSet,
    industries,
    bio,
    commitmentLevel,
    equityExpectation,
    priorStartupExperience
  } = profile;

  const handleSaveProfile = () => console.log("Save Profile clicked for user:", userId);
  const handleConnectRequest = () => console.log("Send Connection Request clicked for user:", userId);

  return (
    <>
      <Navigation /> {/* Add Navigation here */}
      <div className="bg-gray-100 dark:bg-gray-950 min-h-screen py-8 pt-24 transition-colors duration-300"> {/* Adjusted pt-24 for navbar height + some padding */}
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-6 md:p-8">
            {/* This is the grid container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Increased gap slightly for better visual separation */}

              {/* Left Column (Profile Pic, Actions, Stats) - Make this sticky */}
              <div className="md:col-span-1 flex flex-col items-center space-y-6 md:sticky md:top-28 md:self-start"> {/* Adjusted md:top-28 (7rem) to give a bit more space from navbar */}
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                  alt={name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 dark:border-blue-400"
                />
              ) : (
                <div className="w-40 h-40 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-4 border-blue-500 dark:border-blue-400">
                  <ImageIcon size={64} className="text-gray-400 dark:text-gray-500" />
                </div>
              )}
              <div className="w-full space-y-3">
                <Button onClick={handleSaveProfile} className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                  <Save size={18} className="mr-2" /> Save Profile
                </Button>
                <Button onClick={handleConnectRequest} variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800">
                  <UserPlus size={18} className="mr-2" /> Send Connection Request
                </Button>
              </div>
              <div className="w-full text-center md:text-left pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                 <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Stats</h3>
                 <div className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-400 mb-2">
                   <Users size={18} className="mr-2 text-blue-500 dark:text-blue-400" />
                   <span>{totalConnections} Connections</span>
                 </div>
                 <div className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-400">
                   <Eye size={18} className="mr-2 text-blue-500 dark:text-blue-400" />
                   <span>{viewCount} Profile Views</span>
                 </div>
              </div>
            </div>

            {/* Right Column (Details) */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">{name}</h1>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <Mail size={16} className="mr-2" /> {email}
                </div>
                {location && (
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin size={16} className="mr-2" /> {location}
                  </div>
                )}
              </div>

              {bio && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Bio</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{bio}</p>
                </div>
              )}

              {skillSet && skillSet.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {industries && industries.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Industries</h2>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry, index) => (
                      <span key={index} className="bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Professional Details</h2>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  {commitmentLevel && <p><Briefcase size={16} className="inline mr-2" /><strong>Commitment:</strong> {commitmentLevel}</p>}
                  {equityExpectation && <p><Briefcase size={16} className="inline mr-2" /><strong>Equity:</strong> {equityExpectation}</p>}
                  {priorStartupExperience && <p><Briefcase size={16} className="inline mr-2" /><strong>Experience:</strong> {priorStartupExperience}</p>}
                </div>
              </div>
            </div> {/* End of Right Column */}
            </div> {/* End of Div4 (Grid Container) */}
          </div> {/* End of Div3 (White Background Container) */}
        </div> {/* End of Div2 (Container mx-auto) */}
      </div> {/* End of Div1 (Main Background Div) */}
    </>
  );
}
