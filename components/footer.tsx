import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60 border-t border-border/50">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Company Info - Takes more space for visual prominence */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 transition-opacity hover:opacity-80">
              <Image src="/logo.png" alt="RF Concrete Construction" width={302} height={101} className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Ireland's trusted liquid floor screed specialists. Professional installation for residential and
              commercial properties nationwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/3530877642515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium text-sm transition-all hover:scale-105"
                aria-label="Contact us on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-foreground text-base mb-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/advantages"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Advantages</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-foreground text-base mb-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-8 after:h-0.5 after:bg-primary">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground/70 mb-0.5">Phone</p>
                  <a
                    href="tel:+3530877642515"
                    className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    +353 087 764 2515
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground/70 mb-0.5">Email</p>
                  <a
                    href="mailto:info@rfconcrete.ie"
                    className="text-foreground hover:text-primary transition-colors text-sm font-medium break-all"
                  >
                    info@rfconcrete.ie
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground/70 mb-0.5">Follow Us</p>
                  <a
                    href="https://www.instagram.com/rf_concrete_construction_?igsh=aGUyNGJtMWR2M2Fx&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    @rf_concrete_construction_
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs text-center md:text-left order-2 md:order-1">
              © {currentYear} RF Concrete Construction. All rights reserved.
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline mt-1 sm:mt-0">
                Website by{" "}
                <a
                  href="https://clarityweb.ie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  clarityweb.ie
                </a>
              </span>
            </p>
            <div className="flex items-center gap-6 order-1 md:order-2">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
