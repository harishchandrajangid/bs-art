import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

const INSTAGRAM_HANDLE = "blackstoneart_jodhpur";

const categories = [
  "Wooden Figurines",
  "Artifacts & Sculptures",
  "Wooden Frames",
  "Paintings",
  "Gift Items",
  "Custom Orders",
];

const Products = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Collection
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Explore our range of handcrafted wooden handicrafts, each piece telling a story of Jodhpur's rich artisan heritage.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-5 py-2 rounded-full bg-card border border-border text-sm font-body font-medium text-foreground"
            >
              {cat}
            </span>
          ))}
        </motion.div>

        {/* Instagram Feed Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 text-accent mb-6">
            <Instagram size={24} />
            <span className="font-display text-xl font-semibold">Follow Our Journey</span>
          </div>
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
            See our latest creations and behind-the-scenes craftsmanship on Instagram.
          </p>

          {/* Instagram Embed */}
          <div className="rounded-2xl overflow-hidden bg-card p-8 max-w-2xl mx-auto">
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-body font-medium text-lg hover:bg-accent/90 transition-colors mb-8"
            >
              <Instagram size={22} />
              @{INSTAGRAM_HANDLE}
              <ExternalLink size={18} />
            </a>

            <div className="mt-8">
              <iframe
                src={`https://www.instagram.com/${INSTAGRAM_HANDLE}/embed`}
                className="w-full border-0 rounded-xl"
                height="600"
                allowTransparency
                scrolling="no"
                title="Black Stone Art Instagram Feed"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
