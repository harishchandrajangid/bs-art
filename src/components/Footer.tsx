import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="BSA Logo" className="h-10 w-auto brightness-0 invert" />
              <span className="font-display text-lg font-bold tracking-wider">
                BLACK STONE ART
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed font-body">
              Manufacturer &amp; Exporter of premium wooden handicrafts from the heart of Jodhpur, Rajasthan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Products", path: "/products" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/70 font-body">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>B-41, Industrial Estate, New Powerhouse Rd, Sector H, Shastri Nagar, Jodhpur, Rajasthan 342001</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-accent" />
                <a href="mailto:blackstoneart@gmail.com" className="hover:text-primary-foreground transition-colors">
                  blackstoneart@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href="tel:+919649907021" className="hover:text-primary-foreground transition-colors">
                  +91 96499 07021
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={16} className="shrink-0 text-accent" />
                <a
                  href="https://instagram.com/blackstoneart_jodhpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  @blackstoneart_jodhpur
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50 font-body">
          © {new Date().getFullYear()} Black Stone Art. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
