import { MapPin, Mail, Phone, Instagram, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0" />

      <div className="bg-primary text-primary-foreground">
        {/* Main footer content */}
        <div className="container mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <img src={logo} alt="BSA Logo" className="h-14 w-auto brightness-0 invert" />
                <div>
                  <h3 className="font-display text-xl font-bold tracking-wider">
                    BLACK STONE ART
                  </h3>
                  <p className="font-body text-xs text-primary-foreground/50 tracking-widest uppercase">
                    Jodhpur, Rajasthan
                  </p>
                </div>
              </div>
              <p className="text-primary-foreground/60 text-sm leading-relaxed font-body max-w-sm">
                Crafting premium wooden handicrafts with generations of artisan expertise. 
                From our workshop in the heart of Jodhpur to homes and galleries worldwide.
              </p>
              {/* Social */}
              <a
                href="https://instagram.com/blackstoneart_jodhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-foreground/20 text-sm font-body hover:bg-primary-foreground/10 transition-colors"
              >
                <Instagram size={16} />
                @blackstoneart_jodhpur
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h4 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
                Navigate
              </h4>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 transition-all font-body inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
                      <ArrowUpRight size={12} />
                    </span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h4 className="font-display text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/40 mb-6">
                Contact
              </h4>
              <div className="space-y-4 text-sm font-body">
                <a
                  href="https://maps.google.com/?q=B+41+Industrial+Estate+New+Powerhouse+Rd+Shastri+Nagar+Jodhpur+Rajasthan+342001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>B-41, Industrial Estate, New Powerhouse Rd, Shastri Nagar, Jodhpur 342001</span>
                </a>
                <a
                  href="mailto:blackstoneart@gmail.com"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} className="shrink-0 text-accent" />
                  blackstoneart@gmail.com
                </a>
                <a
                  href="tel:+919649907021"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={16} className="shrink-0 text-accent" />
                  +91 96499 07021
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-primary-foreground/40 font-body">
              © {new Date().getFullYear()} Black Stone Art. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/30 font-body">
              Handcrafted with ♥ in Jodhpur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
