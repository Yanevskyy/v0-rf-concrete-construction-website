import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Thermometer, Warehouse, Wrench, CheckCircle2, Clock, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"

export const metadata = generateMeta({
  title: "Liquid Floor Screed Services Ireland – Residential & Commercial",
  description:
    "Professional liquid floor screed installation services for residential, commercial, and industrial projects across Ireland. Underfloor heating compatible. Fast installation, superior finish. Get a free quote.",
  keywords:
    "liquid screed services Ireland, residential screeding, commercial floor screed, underfloor heating screed, industrial flooring, floor leveling services, screed installation Ireland",
  path: "/services",
})

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Our Services</h1>
              <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
                Comprehensive liquid floor screed solutions for every type of project across Ireland.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Residential Screeding */}
              <div id="residential" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-32">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Home className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">Residential Screeding</h2>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Transform your home with our professional liquid floor screed installation services. Perfect for new
                    builds, home extensions, and renovation projects, our residential screeding solutions provide a
                    smooth, level surface that's ideal for all types of floor finishes including tiles, wood, carpet,
                    and vinyl.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our liquid screed flows easily into every corner and around obstacles, creating a perfectly flat
                    surface with minimal effort. With faster drying times than traditional sand and cement screeds, you
                    can move forward with your project sooner. We specialize in working with underfloor heating systems,
                    ensuring optimal heat distribution and energy efficiency throughout your home.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Compatible with underfloor heating systems",
                      "Fast drying times for quicker project completion",
                      "Self-leveling for a perfectly flat finish",
                      "Suitable for all floor coverings",
                      "Minimal shrinkage and cracking",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact" className="flex items-center gap-2">
                      Get a Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/modern-home-interior-with-floor-screed.jpg"
                    alt="Residential floor screed installation"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Commercial Projects */}
              <div id="commercial" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-32">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/commercial-building-floor-construction.jpg"
                    alt="Commercial floor screed project"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">Commercial Projects</h2>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    We deliver large-scale screeding solutions for commercial and industrial properties across Ireland.
                    Whether you're developing a new office building, retail space, warehouse, or industrial facility,
                    our team has the expertise and equipment to handle projects of any size with efficiency and
                    precision.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our high-volume pumping capabilities allow us to cover vast areas quickly, significantly reducing
                    installation time and minimizing disruption to your project timeline. The liquid screed creates a
                    durable, hard-wearing finish that's perfect for high-traffic commercial environments. We work
                    closely with contractors and project managers to ensure seamless integration with your construction
                    schedule, offering flexible timing including evening and weekend installations when required.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "High-volume pumping capabilities",
                      "Fast installation to minimize downtime",
                      "Durable finish for high-traffic areas",
                      "Flexible scheduling to suit your timeline",
                      "Experienced team for complex projects",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact" className="flex items-center gap-2">
                      Get a Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Underfloor Heating */}
              <div id="underfloor-heating" className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-32">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Thermometer className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">Underfloor Heating Screed</h2>
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Maximize the efficiency of your underfloor heating system with our specialized liquid screed
                    installation. Our screed is specifically formulated to work in perfect harmony with underfloor
                    heating, providing superior thermal conductivity that ensures even heat distribution across your
                    entire floor surface.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    The liquid consistency allows the screed to flow completely around heating pipes, eliminating air
                    pockets and ensuring maximum contact for optimal heat transfer. This results in faster heating
                    response times, more consistent temperatures throughout your space, and reduced energy consumption -
                    saving you money on heating bills year after year. Our screed also provides excellent acoustic
                    insulation and a stable, crack-resistant base for any floor covering you choose.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Excellent thermal conductivity",
                      "Encapsulates heating pipes completely",
                      "Even heat distribution across the floor",
                      "Reduces heating response times",
                      "Lower energy consumption",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link href="/contact" className="flex items-center gap-2">
                      Get a Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/underfloor-heating-pipes-installation.jpg"
                    alt="Underfloor heating screed installation"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Additional Services</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                We offer a complete range of services to support your flooring project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Warehouse,
                  title: "Industrial Flooring",
                  description: "Heavy-duty screeding solutions for warehouses, factories, and industrial facilities.",
                },
                {
                  icon: Wrench,
                  title: "Floor Repairs",
                  description: "Expert repair and restoration services for damaged or uneven existing floors.",
                },
                {
                  icon: Shield,
                  title: "Moisture Testing",
                  description: "Professional moisture testing to ensure your floor is ready for final finishes.",
                },
              ].map((service, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Process</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                A streamlined approach to ensure quality results every time.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Consultation",
                  description: "We discuss your project requirements and provide expert advice.",
                },
                {
                  number: "02",
                  title: "Site Survey",
                  description: "Our team visits your site to assess the area and take measurements.",
                },
                {
                  number: "03",
                  title: "Installation",
                  description: "Professional installation using modern equipment and techniques.",
                },
                {
                  number: "04",
                  title: "Quality Check",
                  description: "Final inspection to ensure everything meets our high standards.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="font-serif text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Benefits of Liquid Floor Screed
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Clock,
                  title: "Fast Installation",
                  description: "Large areas can be covered quickly, reducing project timelines significantly.",
                },
                {
                  icon: CheckCircle2,
                  title: "Superior Finish",
                  description: "Self-leveling properties ensure a perfectly flat and smooth surface.",
                },
                {
                  icon: Shield,
                  title: "Long-Lasting",
                  description: "Durable and resistant to cracking, providing a stable base for decades.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
                Contact us today for a free consultation and detailed quote tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
                >
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
                >
                  <Link href="/gallery">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
