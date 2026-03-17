import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Paintbrush, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-artifact.jpg";
import logo from "@/assets/logo.png";
import recentFigurines from "@/assets/recent-figurines.jpg";
import recentNandi from "@/assets/recent-nandi.jpg";
import recentHorse from "@/assets/recent-horse.jpg";
import recentElephant from "@/assets/recent-elephant.jpg";

const recentWork = [
  { src: recentFigurines, alt: "Handpainted Rajasthani musician figurines", title: "Rajasthani Musicians" },
  { src: recentNandi, alt: "Hand-carved painted Nandi bull figurine", title: "Sacred Nandi" },
  { src: recentHorse, alt: "Blue hand-painted horse head sculpture", title: "Royal Horse" },
  { src: recentElephant, alt: "Black gold hand-painted wooden elephant", title: "Decorative Elephant" },
];

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

const Index = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero - Split card layout */}
      <section className="px-6 py-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="bg-card rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={heroImage}
                  alt="Handcrafted wooden artifacts from Jodhpur"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-10 md:p-14">
                <motion.h1
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Crafting Tradition, Exporting Beauty
                </motion.h1>
                <motion.p
                  className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  Welcome to Black Stone Art: Manufacturer &amp; Exporter of premium wooden handicrafts from the heart of Jodhpur, Rajasthan. Where artistry meets heritage.
                </motion.p>
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-body font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    View Collection
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://instagram.com/blackstoneart_jodhpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statement section */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            className="font-display text-3xl md:text-5xl font-bold leading-snug text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Black Stone Art is a space for preserving tradition, celebrating craftsmanship, and sharing the beauty of Jodhpur's wooden artistry with the world.
          </motion.h2>
          <motion.p
            className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From hand-painted figurines to intricate artifacts and elegant gift items, we bring the rich heritage of Rajasthani woodcraft to homes and spaces across the globe.
          </motion.p>
        </div>
      </section>

      {/* Recent Work */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-10">
            <motion.h3
              className="font-display text-2xl md:text-3xl font-bold text-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Recent Work
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/products"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                View all <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentWork.map((item, i) => (
              <motion.div
                key={item.title}
                className="group rounded-2xl overflow-hidden bg-card border border-border/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-sm font-semibold text-foreground">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-5xl">
          <motion.h3
            className="font-display text-2xl md:text-3xl font-bold text-center mb-14 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-background border border-border/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-5">
                  <feature.icon size={22} />
                </div>
                <h4 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground"
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
