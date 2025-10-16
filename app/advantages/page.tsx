import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, TrendingDown, Droplets, Ruler, Layers, ThermometerSun, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import { generateMetadata as generateMeta, generateBreadcrumbSchema } from "@/lib/metadata"
import { StructuredData } from "@/components/structured-data"

export const metadata = generateMeta({
  title: "Advantages of Liquid Floor Screed – Why Choose Liquid Screed",
  description:
    "Explore the key benefits of liquid floor screed over traditional methods: 10x faster installation, superior thermal conductivity for underfloor heating, thinner application (35mm vs 75mm), minimal cracking, and seamless finish. Learn why professionals choose liquid screed.",
  keywords:
    "liquid screed advantages, benefits of liquid screed, liquid vs traditional screed, floor screed benefits, underfloor heating screed advantages, why choose liquid screed",
  path: "/advantages",
})

export default function AdvantagesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Advantages", url: "/advantages" },
  ])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
                Advantages of Liquid Floor Screed
              </h1>
              <p className="text-xl text-primary-foreground/90 text-pretty leading-relaxed">
                Discover why liquid screed is the superior choice for modern flooring projects.
              </p>
            </div>
          </div>
        </section>

        {/* Key Advantages Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Faster Installation",
                  description:
                    "Liquid screed can be pumped and laid much faster than traditional sand and cement screed, covering up to 2000m² per day.",
                },
                {
                  icon: Ruler,
                  title: "Superior Levelness",
                  description:
                    "Self-leveling properties ensure a perfectly flat surface with minimal effort, ideal for all floor finishes.",
                },
                {
                  icon: ThermometerSun,
                  title: "Better Heat Conductivity",
                  description:
                    "Excellent thermal properties make it perfect for underfloor heating, reducing energy costs by up to 15%.",
                },
                {
                  icon: TrendingDown,
                  title: "Thinner Application",
                  description:
                    "Can be applied at just 35mm depth compared to 75mm for traditional screed, reducing weight and material costs.",
                },
                {
                  icon: Droplets,
                  title: "Reduced Shrinkage",
                  description:
                    "Minimal cracking and shrinkage compared to traditional methods, ensuring a more durable finish.",
                },
                {
                  icon: Layers,
                  title: "Seamless Finish",
                  description:
                    "Creates a smooth, joint-free surface over large areas without the need for expansion joints.",
                },
              ].map((advantage, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <advantage.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{advantage.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Liquid Screed vs Traditional Screed
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                See how liquid screed outperforms traditional methods in key areas.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Liquid Screed Column */}
                <Card className="border-2 border-primary">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-bold mb-6 text-center text-primary">Liquid Screed</h3>
                    <ul className="space-y-4">
                      {[
                        "Up to 2000m² coverage per day",
                        "Self-leveling for perfect flatness",
                        "35mm minimum thickness",
                        "Ready for foot traffic in 24-48 hours",
                        "Excellent for underfloor heating",
                        "Minimal cracking and shrinkage",
                        "Pumped application - less labor",
                        "Smooth, seamless finish",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Traditional Screed Column */}
                <Card className="border-border">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-bold mb-6 text-center text-muted-foreground">
                      Traditional Screed
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "150-200m² coverage per day",
                        "Manual leveling required",
                        "75mm minimum thickness",
                        "7 days before foot traffic",
                        "Less efficient heat transfer",
                        "Higher risk of cracking",
                        "Labor-intensive installation",
                        "May require additional leveling",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Technical Benefits</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                The science behind why liquid screed performs better.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: "Enhanced Thermal Performance",
                  description:
                    "Liquid screed has superior thermal conductivity compared to traditional screed. This means heat from underfloor heating systems transfers more efficiently through the floor, resulting in faster warm-up times and lower energy consumption. Studies show energy savings of up to 15% compared to traditional methods.",
                },
                {
                  title: "Reduced Structural Load",
                  description:
                    "Because liquid screed can be applied at much thinner depths (35mm vs 75mm), it significantly reduces the overall weight on the building structure. This is particularly beneficial in multi-story buildings and renovations where load-bearing capacity may be limited.",
                },
                {
                  title: "Improved Acoustic Properties",
                  description:
                    "The dense, uniform composition of liquid screed provides excellent sound insulation properties. It effectively reduces impact noise transmission between floors, making it ideal for apartments and commercial buildings where noise control is important.",
                },
                {
                  title: "Better Moisture Resistance",
                  description:
                    "Liquid screed has lower permeability than traditional screed, making it more resistant to moisture penetration. This helps protect underfloor heating systems and provides a more stable base for floor finishes, particularly in areas prone to moisture.",
                },
              ].map((benefit, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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
                Experience the Advantages Yourself
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90 text-pretty leading-relaxed">
                Contact us today to learn more about how liquid screed can benefit your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
