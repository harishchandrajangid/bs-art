import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Paintbrush } from "lucide-react";
import logo from "@/assets/logo.png";
import productFigurines from "@/assets/product-figurines.jpeg";
import productNandi from "@/assets/product-nandi.jpeg";
import productHorse from "@/assets/product-horse.jpeg";
import productElephant from "@/assets/product-elephant.jpeg";

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

const productImages = [
  { src: productElephant, alt: "Hand-painted wooden elephant figurines", label: "Elephant Figurines" },
  { src: productHorse, alt: "Hand-painted wooden horse head sculpture", label: "Horse Sculptures" },
  { src: productFigurines, alt: "Colorful Rajasthani wooden musician figurines", label: "Musician Figurines" },
  { src: productNandi, alt: "Hand-painted wooden Nandi bull figurine", label: "Nandi Bull" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />

        <div className="relative z-10 text-center px-6 max-w-3xl py-32">
          <motion.img
            src={logo}
            alt="BSA Emblem"
            className="h-20 w-auto mx-auto mb-6 brightness-0 invert"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-primary-foreground tracking-wider mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BLACK STONE ART
          </motion.h1>
          <motion.p
            className="font-body text-primary-foreground/80 text-lg md:text-xl mb-8 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Manufacturer &amp; Exporter of Wooden Handicrafts — Jodhpur, Rajasthan
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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

      {/* Product Showcase Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Finest Creations
          </motion.h2>
          <motion.p
            className="font-body text-muted-foreground text-center mb-14 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Each piece is a testament to the artistry and tradition of Jodhpur's master craftsmen.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {productImages.map((img, i) => (
              <motion.div
                key={img.label}
                className={`relative group overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? "h-full min-h-[400px]" : "h-64 md:h-72"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-display text-sm md:text-base font-semibold text-primary-foreground">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* CTA */}
      <section className="py-20 px-6 bg-card">
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
