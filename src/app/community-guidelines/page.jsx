import { Navigation } from "@/components/navigation";
import Footer from '@/components/Footer';

export const metadata = {
  title: "Community Guidelines",
  description: "Read our Community Guidelines to understand the rules of conduct.",
};

export default function CommunityGuidelinesPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 pt-16">
        <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Community Guidelines</h1>
          <div className="prose dark:prose-invert max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2>Section 1: Our Philosophy</h2>
            <p>We believe in creating a positive, respectful, and inclusive environment where everyone feels welcome and safe to share their ideas and experiences. These Community Guidelines are designed to help foster such an environment.</p>
            <p>By participating in our community, you agree to abide by these guidelines. Violations may result in content removal, account suspension, or other actions as deemed appropriate by our moderation team.</p>

            <h2>Section 2: Respect and Kindness</h2>
            <p>Treat all members of the community with respect. Do not engage in harassment, bullying, hate speech, or any form of discrimination. This includes, but is not limited to, attacks based on race, ethnicity, religion, gender, sexual orientation, disability, or age.</p>
            <p>Be kind and considerate in your interactions. Constructive criticism is welcome, but personal attacks or inflammatory language will not be tolerated. Think before you post, and aim to contribute positively to discussions.</p>

            <h3>Subsection 2.1: No Harassment</h3>
            <p>Harassment includes offensive verbal comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p>

            <h2>Section 3: Content Standards</h2>
            <p>Ensure that any content you share is appropriate and relevant to the community. Do not post:</p>
            <ul>
              <li>Illegal content or activities.</li>
              <li>Spam, unsolicited advertisements, or self-promotion that is not relevant to the community topics.</li>
              <li>Sexually explicit material or content that is gratuitously violent.</li>
              <li>Misinformation or content that is knowingly false or misleading.</li>
              <li>Content that infringes on the intellectual property rights of others.</li>
            </ul>
            <p>We reserve the right to remove any content that we deem to be in violation of these guidelines or otherwise harmful to the community.</p>

            <h2>Section 4: Safety and Privacy</h2>
            <p>Do not share personal information about others without their explicit consent. Respect the privacy of fellow community members.</p>
            <p>Do not engage in activities that could compromise the security or safety of the community or its members, such as sharing malicious links or software.</p>

            <h2>Section 5: Moderation and Enforcement</h2>
            <p>Our moderation team is responsible for enforcing these guidelines. If you see content or behavior that violates these guidelines, please report it to us.</p>
            <p>We will review all reports and take appropriate action, which may include issuing warnings, removing content, or suspending or banning accounts. Our decisions are made at our sole discretion but are aimed at maintaining a healthy and welcoming community.</p>

            <h3>Subsection 5.1: Appeals</h3>
            <p>If you believe an action taken against your account or content was in error, you may appeal the decision by contacting our support team. We will review your appeal and respond in a timely manner.</p>

            <h2>Section 6: Be a Positive Contributor</h2>
            <p>We encourage you to:</p>
            <ul>
              <li>Share your knowledge and expertise.</li>
              <li>Ask thoughtful questions.</li>
              <li>Provide constructive feedback.</li>
              <li>Help create a welcoming atmosphere for new members.</li>
              <li>Support and uplift fellow community members.</li>
            </ul>

            <h2>Section 7: Changes to Guidelines</h2>
            <p>We may update these Community Guidelines from time to time. We will notify the community of any significant changes. Your continued participation in the community after such changes constitutes your acceptance of the new guidelines.</p>

            <h2>Section 8: Questions</h2>
            <p>If you have any questions about these Community Guidelines, please contact us at: community@example.com</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
