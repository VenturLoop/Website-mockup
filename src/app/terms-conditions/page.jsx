import { Navigation } from "@/components/navigation";
import Footer from '@/components/Footer';

export const metadata = {
  title: "Terms & Conditions",
  description: "Read our Terms & Conditions before using our services.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 pt-16">
        <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Terms & Conditions</h1>
          <div className="prose dark:prose-invert max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg">
            <h2>Section 1: Agreement to Terms</h2>
            <p>By accessing or using our website and services, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, you may not use our services.</p>
            <p>These Terms apply to all visitors, users, and others who access or use the Service. We reserve the right to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>

            <h2>Section 2: Use of Services</h2>
            <p>You may use our services only if you can form a binding contract with us, and only in compliance with these Terms and all applicable local, state, national, and international laws, rules, and regulations.</p>
            <p>Any use or access by anyone under the age of 13 is strictly prohibited. If you are between 13 and 18 years old, you may only use the Services under the supervision of a parent or legal guardian who agrees to be bound by these Terms.</p>

            <h3>Subsection 2.1: User Accounts</h3>
            <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service. You agree not to disclose your password to any third party.</p>

            <h2>Section 3: Intellectual Property</h2>
            <p>The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of our company and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
            <p>Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of our company.</p>

            <h2>Section 4: User Content</h2>
            <p>Our Service allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.</p>
            <p>By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post, or display on or through the Service and you are responsible for protecting those rights.</p>

            <h2>Section 5: Prohibited Activities</h2>
            <p>You may not use the Service for any purpose that is illegal or prohibited by these Terms. You agree not to:</p>
            <ul>
              <li>Use the Service in any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm our company or users of the Service or expose them to liability.</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Service for any purpose, including monitoring or copying any of the material on the Service.</li>
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
            </ul>

            <h2>Section 6: Termination</h2>
            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
            <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>

            <h2>Section 7: Limitation of Liability</h2>
            <p>In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2>Section 8: Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of our jurisdiction, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>

            <h2>Section 9: Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: terms@example.com</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
