import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Shield, Users, ArrowRight, Phone } from "lucide-react"
import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"

export const metadata = generateMeta({
  title: "Professional Liquid Floor Screed Installation Ireland",
  description:
    "Expert liquid floor screed installation for residential and commercial properties across Ireland. Fast, efficient screeding services with underfloor heating compatibility. Get a free quote today.",
  keywords:
    "liquid floor screed Ireland, floor screed installation, liquid screed contractors, RF Concrete Construction, screeding services, underfloor heating screed, floor leveling Ireland, residential screeding, commercial screeding",
  path: "/",
})

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="hero-section" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover brightness-125 opacity-30"
              poster="/concrete-floor-screed-installation.jpg"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20video2-9yitNtht9vPeVFAqrATPOMTtneysg5.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-primary/40 to-black/55" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground pt-24 md:pt-0">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance drop-shadow-lg">
                Professional Liquid Floor Screed Installation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/95 text-pretty leading-relaxed drop-shadow-md">
                Expert screeding services for residential and commercial properties across Ireland. Fast, efficient, and
                built to last.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary/10 text-primary-foreground hover:bg-primary/20 text-lg px-8 py-6 shadow-xl font-semibold border-2 border-primary-foreground"
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 shadow-xl backdrop-blur-sm"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "500+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <div key={index} className="text-center backdrop-blur-sm bg-primary/20 rounded-lg p-4">
                    <div className="font-serif text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{stat.number}</div>
                    <div className="text-sm md:text-base text-primary-foreground/90 drop-shadow-md">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
              <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Why Choose RF Concrete Construction?
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                We combine years of expertise with modern techniques to deliver exceptional results for every project,
                big or small.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Shield,
                  title: "Quality Guaranteed",
                  description: "We stand behind our work with comprehensive warranties and quality assurance.",
                },
                {
                  icon: Clock,
                  title: "Fast Installation",
                  description: "Efficient processes mean your project is completed on time, every time.",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Highly trained professionals with years of specialized experience.",
                },
                {
                  icon: CheckCircle2,
                  title: "Certified & Insured",
                  description: "Fully licensed, insured, and compliant with all industry standards.",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Services</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Comprehensive liquid floor screed solutions tailored to your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Residential Screeding",
                  description:
                    "Perfect for new builds, extensions, and renovations. Compatible with underfloor heating systems.",
                  image: "/modern-residential-floor-screed-installation.jpg",
                  link: "/services#residential",
                },
                {
                  title: "Commercial Projects",
                  description:
                    "Large-scale screeding for offices, retail spaces, and industrial facilities with fast turnaround.",
                  image: "/commercial-concrete-floor-installation.jpg",
                  link: "/services#commercial",
                },
                {
                  title: "Underfloor Heating",
                  description:
                    "Specialized screeding designed to maximize heat transfer efficiency for underfloor heating systems.",
                  image: "/underfloor-heating-installation-with-screed.jpg",
                  link: "/services#underfloor-heating",
                },
              ].map((service, index) => (
                <Card key={index} className="overflow-hidden border-border hover:shadow-xl transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{service.description}</p>
                    <Button asChild variant="link" className="p-0 h-auto text-primary">
                      <Link href={service.link} className="flex items-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
                Get in touch today for a free, no-obligation quote. Our team is ready to help bring your flooring
                project to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6 shadow-xl font-semibold border-2 border-primary-foreground"
                >
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
                >
                  <a href="tel:+3530877642515" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
