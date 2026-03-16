import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "B-41, Industrial Estate, New Powerhouse Rd, Sector H, Shastri Nagar, Jodhpur, Rajasthan 342001",
    href: "https://maps.google.com/?q=B+41+Industrial+Estate+New+Powerhouse+Rd+Shastri+Nagar+Jodhpur+Rajasthan+342001",
  },
  {
    icon: Mail,
    label: "Email",
    value: "blackstoneart@gmail.com",
    href: "mailto:blackstoneart@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96499 07021",
    href: "tel:+919649907021",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@blackstoneart_jodhpur",
    href: "https://instagram.com/blackstoneart_jodhpur",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            We'd love to hear from you. Reach out for orders, inquiries, or collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Get in Touch
            </h2>
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === "Address" || info.label === "Instagram" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <info.icon size={18} />
                </div>
                <div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {info.label}
                  </div>
                  <div className="font-body text-sm text-foreground">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0!2d73.02!3d26.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE3JzAwLjAiTiA3M8KwMDEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Black Stone Art Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-body font-medium tracking-wide hover:bg-accent/90 transition-colors w-full justify-center"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
