import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"

export const metadata = generateMeta({
  title: "Terms of Service – RF Concrete Construction",
  description:
    "Read RF Concrete Construction's terms of service. Understand our service agreements, quotes, pricing, and website usage policies.",
  keywords: "terms of service, service agreement, terms and conditions, RF Concrete terms",
  path: "/terms-of-service",
})

export default function TermsOfServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms of Service", url: "/terms-of-service" },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">Terms of Service</h1>
            <div className="prose prose-slate max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Last Updated:</strong> January 2025
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using the RF Concrete Construction website, you accept and agree to be bound by these
                Terms of Service and our Privacy Policy.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RF Concrete Construction provides liquid floor screed installation services for residential and
                commercial properties across Ireland. All services are subject to availability and our standard terms
                and conditions.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">3. Quotes and Pricing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All quotes provided are estimates based on the information provided. Final pricing may vary based on
                site conditions and project requirements. Quotes are valid for 30 days unless otherwise stated.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">4. Website Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of
                others or restrict their use of the website.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of RF Concrete
                Construction and is protected by copyright laws.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RF Concrete Construction shall not be liable for any indirect, incidental, or consequential damages
                arising from the use of our website or services.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Continued use of the website after changes
                constitutes acceptance of the modified terms.
              </p>

              <h2 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us at:
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
