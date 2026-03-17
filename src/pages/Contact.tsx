import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "B-41, Industrial Estate, New Powerhouse Rd, Sector H, Shastri Nagar, Jodhpur, Rajasthan 342001",
    href: "https://maps.google.com/?q=B+41+Industrial+Estate+New+Powerhouse+Rd+Shastri+Nagar+Jodhpur+Rajasthan+342001",
    external: true,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "blackstoneart@gmail.com",
    href: "mailto:blackstoneart@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 96499 07021",
    href: "tel:+919649907021",
    external: false,
  },
  {
    icon: Instagram,
    label: "Follow Us",
    value: "@blackstoneart_jodhpur",
    href: "https://instagram.com/blackstoneart_jodhpur",
    external: true,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            We'd love to hear from you — reach out for orders, inquiries, or collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactInfo.map((info, i) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.external ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <info.icon size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display text-base font-semibold text-foreground">
                    {info.label}
                  </span>
                  {info.external && (
                    <ExternalLink size={13} className="text-muted-foreground" />
                  )}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Business Hours */}
        <motion.div
          className="mt-16 text-center p-10 rounded-2xl bg-card border border-border/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Business Hours
          </h2>
          <p className="font-body text-muted-foreground text-sm">
            Monday – Saturday: 10:00 AM – 7:00 PM IST
          </p>
          <p className="font-body text-muted-foreground text-sm">
            Sunday: Closed
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
