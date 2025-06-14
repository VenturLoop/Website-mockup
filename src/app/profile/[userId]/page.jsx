// src/app/profile/[userId]/page.jsx
"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Briefcase, Users, Eye, Edit, Share2, UserPlus, Image as ImageIcon } from 'lucide-react';
import { Navigation } from "@/components/navigation";
import { useUser } from "@/context/UserContext.js";
import LoginModal from "@/components/LoginModal.jsx";
import { EditProfileModal } from "@/components/EditProfileModal.jsx";
import { ShareProfileModal } from "@/components/ShareProfileModal.jsx";
import { MyConnectionsModal } from "@/components/MyConnectionsModal.jsx";
import Footer from '@/components/Footer.jsx';

// Mock data - will be replaced or fetched based on userId
const mockUserProfile = {
    "success": true,
    "message": "User profile fetched successfully.",
    "user": {
        "userId": "682de28d858fff4521c35b29", // Example other user ID
        "email": "otheruser@example.com",
        "name": "Other User",
        "userChatStatus": "offline",
        "lastSeen": "2025-05-21T14:32:49.932Z",
        "profile": {
            "_id": "682de2d1858fff4521c35b31", // Different profile ID
            "profilePhoto": "https://avatar.iran.liara.run/public/girl",
            "birthday": "01/01/1990",
            "location": "San Francisco, USA",
            "skillSet": ["Product Management", "UX Design", "Growth Hacking"],
            "industries": ["Tech", "SaaS"],
            "otherWebsiteUrls": {},
            "createdAt": "2025-01-01T10:00:00.000Z",
            "updatedAt": "2025-01-01T10:00:00.000Z",
            "__v": 0,
            "commitmentLevel": "Open to opportunities",
            "equityExpectation": "Negotiable",
            "priorStartupExperience": "Worked at a startup",
            "status": "Active",
            "bio": "Passionate about building innovative products."
        },
        "totalConnections": 150,
        "viewCount": 500,
        "isPremium": true,
        "profileComplete": true,
        "profileIncompleteReason": [],
        "isStartupDetails": true,
        "limits": {
            "investorContactingLimit": 5,
            "founderConnectingLimit": 10,
            "founderDirectMessageLimit": 5,
            "investorSaveLimit": 20,
            "founderSaveLimit": 20
        }
    }
};


export default function UserProfilePage() {
  const params = useParams();
  const { currentUser, isLoading, isLoggedIn } = useUser();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isMyConnectionsModalOpen, setIsMyConnectionsModalOpen] = useState(false);
  const [connectionsData, setConnectionsData] = useState({ list: [], total: 0 });
  const [profileUrl, setProfileUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setProfileUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      setIsLoginModalOpen(true);
    } else {
      setIsLoginModalOpen(false);
    }
  }, [isLoading, isLoggedIn]);

  if (isLoading) {
    return (
      <>
        <Navigation />
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <p>Loading profile...</p>
        </div>
        <Footer />
      </>
    );
  }

  const profileUserId = params.userId;
  const isOwnProfile = currentUser?.userId === profileUserId;
  const userProfileData = isOwnProfile ? currentUser : mockUserProfile.user; // Use mock for others for now

  if (!userProfileData && !isOwnProfile) { // Only show "User not found" if it's not the current user's (potentially loading) profile
    return (
      <>
        <Navigation />
        {/* Adjusted container for "User not found" - it also needs to respect navbar height */}
        <div className="flex justify-center items-center h-[calc(100vh-4rem)] bg-gray-100 dark:bg-gray-900 overflow-y-auto hide-scrollbar">
          <p className="text-2xl text-gray-700 dark:text-gray-300 p-10">User not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  // If it's own profile and userProfileData is not yet loaded (currentUser might be loading initially)
  // but isLoading is false and isLoggedIn is true, show a slightly different loading or minimal view.
  // For this iteration, we assume currentUser is populated if isLoading is false and isLoggedIn is true.
  // A more robust solution might involve checking if currentUser.userId matches params.userId
  // and if currentUser has all necessary fields.

  const { name, email, profile, totalConnections, viewCount } = userProfileData || {};
  const {
    profilePhoto,
    location,
    skillSet,
    industries,
    bio,
    commitmentLevel,
    equityExpectation,
    priorStartupExperience
  } = profile || {}; // Add fallback for profile if userProfileData is null/undefined initially

  const handleConnectRequest = () => {
    // Placeholder for future implementation
    // For now, it does nothing or could open a confirmation modal
    alert("Connect request functionality not yet implemented.");
  };

  const handleOpenConnectionsModal = () => {
    const displayedTotalConnections = totalConnections || 0; // from userProfileData or currentUser

    if (isOwnProfile && currentUser) {
      // For own profile, use a specific mock list. The total should match currentUser.totalConnections.
      const ownMockList = [
        { userId: 'connUser1', name: 'My Connection Alpha', profilePhotoUrl: '/placeholder.jpg', bio: 'Alpha bio - connected to me.' },
        { userId: 'connUser2', name: 'My Connection Beta', profilePhotoUrl: '/placeholder.jpg', bio: 'Beta bio - also connected.' },
        { userId: 'connUser3', name: 'My Connection Gamma', profilePhotoUrl: '/placeholder.jpg', bio: 'Gamma - another connection.' },
      ];
      // Adjust list to not exceed actual total, though ideally mock list length matches total
      setConnectionsData({ list: ownMockList.slice(0, displayedTotalConnections), total: displayedTotalConnections });
    } else {
      // For viewing another user's profile, use a different mock set.
      // The total should match userProfileData.totalConnections for the viewed user.
      const otherUserMockList = [
        { userId: 'otherConnA', name: 'Other User Connection A', profilePhotoUrl: '/placeholder.jpg', bio: 'Viewing another profile\'s connection A.' },
        { userId: 'otherConnB', name: 'Other User Connection B', profilePhotoUrl: '/placeholder.jpg', bio: 'Viewing another profile\'s connection B.' },
      ];
      setConnectionsData({ list: otherUserMockList.slice(0, displayedTotalConnections), total: displayedTotalConnections });
    }
    setIsMyConnectionsModalOpen(true);
  };

  return (
    <>
      <Navigation />
      {/* Main content wrapper: adjusted height, overflow, and padding */}
      <div className="bg-gray-100 dark:bg-gray-950 h-[calc(100vh-4rem)] overflow-y-auto px-2 py-4 sm:p-6 md:p-8 transition-colors duration-300 hide-scrollbar">
        <div className="container mx-auto px-0"> {/* Adjusted px-0 as parent now has p-8. */}
          <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Left Column: Adjusted md:top-8 */}
              <div className="md:col-span-1 flex flex-col items-center space-y-6 md:sticky md:top-8 md:self-start">
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
                  {isOwnProfile ? (
                    <>
                      <Button onClick={() => setIsEditModalOpen(true)} className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                        <Edit size={18} className="mr-2" /> Edit Profile
                      </Button>
                      <Button onClick={() => setIsShareModalOpen(true)} variant="outline" className="w-full">
                        <Share2 size={18} className="mr-2" /> Share Profile
                      </Button>
                    </>
                  ) : (
                    <Button onClick={handleConnectRequest} variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800">
                      <UserPlus size={18} className="mr-2" /> Send Connection Request
                    </Button>
                  )}
                </div>
              <div className="w-full text-center md:text-left pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                 <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Stats</h3>
                  <button
                    onClick={(totalConnections || 0) > 0 ? handleOpenConnectionsModal : undefined}
                    disabled={!((totalConnections || 0) > 0)}
                    className={`flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-400 mb-2 w-full text-left ${(totalConnections || 0) > 0 ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
                    aria-label={(totalConnections || 0) > 0 ? "View connections" : "No connections"}
                  >
                    <Users size={18} className="mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    <span>{totalConnections || 0} Connection{(totalConnections || 0) !== 1 ? 's' : ''}</span>
                  </button>
                 <div className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-400">
                   <Eye size={18} className="mr-2 text-blue-500 dark:text-blue-400" />
                   <span>{viewCount || 0} Profile Views</span>
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

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      {isOwnProfile && (
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          currentUser={currentUser}
        />
      )}
      <ShareProfileModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        profileUrl={profileUrl}
      />
      <MyConnectionsModal
        isOpen={isMyConnectionsModalOpen}
        onClose={() => setIsMyConnectionsModalOpen(false)}
        connectionsList={connectionsData.list}
        totalConnections={connectionsData.total}
      />
      <Footer />
    </>
  );
}
