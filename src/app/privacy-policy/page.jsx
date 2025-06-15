import PrivacyPolicyCompo from "@/components/PrivacyPolicyCompo";

export const metadata = {
  title: "Privacy Policy | VenturLoop Data Protection | SaaS Startup",
  description: "Understand how VenturLoop protects your data. Our SaaS startup privacy policy details data usage, user rights, and compliance for our cofounder matching platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicyCompo title="Privacy Policy" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalNotice",
            "name": "VenturLoop Privacy Policy",
            "url": "https://venturloop.com/privacy-policy",
            "description": "Understand how VenturLoop protects your data. Our SaaS startup privacy policy details data usage, user rights, and compliance for our cofounder matching platform.",
            "provider": {
              "@type": "Organization",
              "name": "VenturLoop",
              "url": "https://venturloop.com"
            }
          })
        }}
      />
    </>
  );
}
