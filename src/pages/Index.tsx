import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Paintbrush } from "lucide-react";
import heroImage from "@/assets/hero-artifact.jpg";
import logo from "@/assets/logo.png";
import recentFigurines from "@/assets/recent-figurines.jpg";
import recentNandi from "@/assets/recent-nandi.jpg";
import recentHorse from "@/assets/recent-horse.jpg";
import recentElephant from "@/assets/recent-elephant.jpg";

const features = [
  {
    icon: Paintbrush,
    title: "Handcrafted Excellence",
    description: "Each piece is meticulously hand-carved by skilled Jodhpur artisans with generations of expertise.",
  },
  {
    icon: Globe,
    title: "Global Exports",
    description: "Trusted exporter delivering premium wooden handicrafts to clients across the world.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest wood and materials are selected for our figurines, artifacts, and gift items.",
  },
];

const recentWork = [
  { src: recentFigurines, alt: "Handpainted Rajasthani musician figurines", title: "Rajasthani Musicians" },
  { src: recentNandi, alt: "Hand-carved painted Nandi bull figurine", title: "Sacred Nandi" },
  { src: recentHorse, alt: "Blue hand-painted horse head sculpture", title: "Royal Horse" },
  { src: recentElephant, alt: "Black gold hand-painted wooden elephant", title: "Decorative Elephant" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Handcrafted wooden elephant figurine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.img
            src={logo}
            alt="BSA Emblem"
            className="h-24 w-auto mx-auto mb-8 brightness-0 invert"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="font-body text-primary-foreground/80 text-lg md:text-xl mb-8 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Manufacturer &amp; Exporter of Wooden Handicrafts — Jodhpur, Rajasthan
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-body font-medium tracking-wide hover:bg-accent/90 transition-colors duration-300"
            >
              View Collection
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Art of Jodhpur Craftsmanship
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-card hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                  <feature.icon size={26} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recent Work
          </motion.h2>
          <motion.p
            className="font-body text-muted-foreground text-center mb-14 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A glimpse of our latest handcrafted creations from Jodhpur
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {recentWork.map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative rounded-2xl overflow-hidden aspect-square"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-500 flex items-end">
                  <span className="font-display text-sm font-semibold text-primary-foreground px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.h2
            className="font-display text-3xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Interested in Our Handicrafts?
          </motion.h2>
          <motion.p
            className="font-body text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether you're looking for bulk exports or unique pieces, we'd love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-body font-medium tracking-wide hover:bg-accent/90 transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
