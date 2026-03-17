import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3 max-w-xs">
            <img src={logo} alt="BSA Logo" className="h-12 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/60 text-xs leading-relaxed font-body text-center md:text-left">
              Manufacturer &amp; Exporter of premium wooden handicrafts from Jodhpur, Rajasthan.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 font-body text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Products", path: "/products" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap justify-center md:justify-end gap-5 text-xs text-primary-foreground/60 font-body">
            <a href="mailto:blackstoneart@gmail.com" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
              <Mail size={13} className="text-accent" /> blackstoneart@gmail.com
            </a>
            <a href="tel:+919649907021" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
              <Phone size={13} className="text-accent" /> +91 96499 07021
            </a>
            <a href="https://instagram.com/blackstoneart_jodhpur" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
              <Instagram size={13} className="text-accent" /> @blackstoneart_jodhpur
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40 font-body">
          © {new Date().getFullYear()} Black Stone Art. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
