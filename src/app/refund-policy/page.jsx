import { Navigation } from "@/components/navigation";
import Footer from '@/components/Footer';

export const metadata = {
  title: "Refund Policy",
  description: "Read our Refund Policy to understand the terms for refunds.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 pt-16">
        <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Refund Policy</h1>
          <div className="prose dark:prose-invert max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2>Section 1: General Refund Conditions</h2>
            <p>We want you to be satisfied with our services. This Refund Policy outlines the conditions under which refunds may be granted. Please read it carefully.</p>
            <p>Our refund policy applies to services purchased directly through our website. If you purchased services through a third-party vendor, their refund policy may apply, and you should contact them directly.</p>

            <h2>Section 2: Eligibility for a Refund</h2>
            <p>To be eligible for a refund, you generally must request it within a specific timeframe from the purchase date, typically 14 or 30 days, depending on the service. Specific eligibility criteria may vary by service and will be outlined at the time of purchase or in service-specific terms.</p>
            <p>Services that have been substantially used or consumed may not be eligible for a full refund. We reserve the right to assess the level of service usage when considering a refund request.</p>

            <h3>Subsection 2.1: Non-Refundable Services</h3>
            <p>Certain services may be explicitly non-refundable. This will be clearly indicated at the time of purchase. Examples might include:</p>
            <ul>
              <li>One-time setup fees.</li>
              <li>Custom development or consultation services.</li>
              <li>Services purchased at a significant discount or during special promotional periods.</li>
            </ul>

            <h2>Section 3: How to Request a Refund</h2>
            <p>To request a refund, please contact our support team at support@example.com with the following information:</p>
            <ul>
              <li>Your full name and email address associated with the account.</li>
              <li>The name of the service for which you are requesting a refund.</li>
              <li>The date of purchase.</li>
              <li>The reason for your refund request.</li>
            </ul>
            <p>We aim to process refund requests within 7-10 business days. Approved refunds will be issued to the original payment method.</p>

            <h2>Section 4: Subscription Services</h2>
            <p>For subscription-based services, you can cancel your subscription at any time. If you cancel, your subscription will remain active until the end of the current billing period, and you will not be charged for subsequent periods.</p>
            <p>Refunds for subscription services are typically not provided for partial billing periods. However, exceptions may be made on a case-by-case basis, for example, if there were technical issues preventing you from using the service.</p>

            <h2>Section 5: Service Issues or Defects</h2>
            <p>If you experience significant issues with a service that prevent you from using it as intended, please contact our support team immediately. We will work with you to resolve the issue.</p>
            <p>If we are unable to resolve the issue to your satisfaction, you may be eligible for a partial or full refund, at our discretion. We may require documentation or evidence of the service issue.</p>

            <h2>Section 6: Changes to This Policy</h2>
            <p>We reserve the right to modify this Refund Policy at any time. Any changes will be effective immediately upon posting the updated policy on our website. Your continued use of our services after any such changes constitutes your acceptance of the new Refund Policy.</p>

            <h2>Section 7: Contact Information</h2>
            <p>If you have any questions about our Refund Policy, please contact us at: refunds@example.com</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.</p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
