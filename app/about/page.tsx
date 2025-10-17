import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"
import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"

export const metadata = generateMeta({
  title: "About RF Concrete Construction – Our Story",
  description:
    "Learn about RF Concrete Construction's mission, values, and expertise in liquid floor screed installation across Ireland. Over 15 years of experience delivering quality results.",
  keywords:
    "about RF Concrete Construction, liquid screed company Ireland, floor screeding experts, professional screeding team, Irish construction company",
  path: "/about",
})

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
                About RF Concrete Construction
              </h1>
              <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
                Your trusted partner for professional liquid floor screed installation across Ireland.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold mb-6 text-foreground">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    RF Concrete Construction was founded with a simple mission: to provide the highest quality liquid
                    floor screed installation services across Ireland. With over 15 years of experience in the industry,
                    we've built our reputation on reliability, expertise, and exceptional customer service.
                  </p>
                  <p>
                    What started as a small family business has grown into one of Ireland's most trusted names in floor
                    screeding. Our success is built on the foundation of quality workmanship, attention to detail, and a
                    commitment to exceeding our clients' expectations on every project.
                  </p>
                  <p>
                    Today, we serve both residential and commercial clients throughout Ireland, bringing modern
                    techniques and traditional values to every job we undertake. Our team of skilled professionals is
                    dedicated to delivering results that stand the test of time.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/construction-team-working-on-floor-screed.jpg"
                  alt="RF Concrete Construction team at work"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Core Values</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We strive for perfection in every project, no matter the size or complexity.",
                },
                {
                  icon: Target,
                  title: "Precision",
                  description: "Attention to detail and accuracy in every aspect of our work.",
                },
                {
                  icon: Heart,
                  title: "Integrity",
                  description: "Honest communication and transparent pricing with all our clients.",
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description: "Staying ahead with the latest techniques and industry best practices.",
                },
              ].map((value, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Work With Us?</h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                  We combine experience, expertise, and dedication to deliver outstanding results.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Experienced Professionals",
                    description:
                      "Our team consists of highly trained specialists with years of hands-on experience in liquid floor screed installation.",
                  },
                  {
                    title: "Quality Materials",
                    description:
                      "We use only premium-grade materials from trusted suppliers to ensure long-lasting, durable results.",
                  },
                  {
                    title: "Modern Equipment",
                    description:
                      "State-of-the-art pumping and mixing equipment allows us to complete projects efficiently and to the highest standards.",
                  },
                  {
                    title: "Competitive Pricing",
                    description:
                      "Fair, transparent pricing with detailed quotes and no hidden costs. Great value without compromising on quality.",
                  },
                  {
                    title: "Fast Turnaround",
                    description:
                      "Efficient processes and experienced teams mean we can complete most projects quickly without sacrificing quality.",
                  },
                  {
                    title: "Comprehensive Service",
                    description:
                      "From initial consultation to final inspection, we handle every aspect of your floor screed project.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
                Contact us today to discuss your project and receive a free, no-obligation quote.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
              >
                <Link href="/contact">Get Your Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
