import { Navigation } from "@/components/navigation";
import Footer from '@/components/Footer';

export const metadata = {
  title: "Privacy Policy",
  description: "Read our Privacy Policy to understand how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 pt-16">
        <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Privacy Policy</h1>
          <div className="prose dark:prose-invert max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2>Section 1: Introduction</h2>
            <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. We respect your privacy and are committed to protecting it through our compliance with this policy.</p>
            <p>Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy.</p>

            <h2>Section 2: Information We Collect</h2>
            <p>We may collect several types of information from and about users of our Website, including information:</p>
            <ul>
              <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
              <li>That is about you but individually does not identify you, such as traffic data, location data, logs, and other communication data and the resources that you access and use on the Website; and/or</li>
              <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>

            <h3>Subsection 2.1: Information You Provide to Us</h3>
            <p>The information we collect on or through our Website may include:</p>
            <ul>
              <li>Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, subscribing to our service, posting material, or requesting further services.</li>
              <li>Records and copies of your correspondence (including email addresses), if you contact us.</li>
              <li>Your responses to surveys that we might ask you to complete for research purposes.</li>
              <li>Details of transactions you carry out through our Website and of the fulfillment of your orders.</li>
            </ul>

            <h2>Section 3: How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
            <ul>
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To provide you with notices about your account/subscription, including expiration and renewal notices.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide through it.</li>
            </ul>

            <h2>Section 4: Disclosure of Your Information</h2>
            <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.</p>
            <p>We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
            <ul>
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
            </ul>

            <h2>Section 5: Data Security</h2>
            <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls.</p>
            <p>The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.</p>

            <h2>Section 6: Changes to Our Privacy Policy</h2>
            <p>It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page.</p>
            <p>You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our Website and this privacy policy to check for any changes.</p>

            <h2>Section 7: Contact Information</h2>
            <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: privacy@example.com</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
