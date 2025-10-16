import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"

export const metadata = generateMeta({
  title: "Privacy Policy – RF Concrete Construction",
  description:
    "Read RF Concrete Construction's privacy policy. Learn how we collect, use, and protect your personal information in compliance with GDPR.",
  keywords: "privacy policy, data protection, GDPR compliance, RF Concrete privacy",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy-policy" },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last Updated:</strong> January 2025
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RF Concrete Construction ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Project details and service inquiries</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Process and fulfill your service requests</li>
                <li>Send you updates about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">4. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and hold certain
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                sent.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under GDPR, you have the right to access, correct, or delete your personal information. You may also
                object to or restrict certain processing of your data.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Email:</strong> info@rfconcrete.ie
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Phone:</strong> +353 087 764 2515
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
