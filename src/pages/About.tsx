import { motion } from "framer-motion";
import { Gem, Globe, Users, Clock } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const stats = [
  { icon: Clock, label: "Years of Heritage", value: "Decades" },
  { icon: Globe, label: "Countries Exported", value: "20+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Gem, label: "Unique Designs", value: "1000+" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Rooted in Jodhpur's legendary craftsmanship, bringing wooden art to the world.
          </p>
        </motion.div>

        {/* Split section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            className="overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={workshopImage}
              alt="Artisan crafting wooden figurines in Jodhpur workshop"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground">
              Crafting Stories in Wood
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Black Stone Art</strong> is a premier manufacturer and exporter of wooden handicrafts based in Jodhpur, Rajasthan — India's renowned hub for artisan craftsmanship.
              </p>
              <p>
                Our product range includes intricately carved <strong className="text-foreground">figurines, artifacts, wooden frames, paintings, and gift items</strong>, all crafted with the finest materials and time-honoured techniques passed down through generations.
              </p>
              <p>
                We specialize in export-quality handicrafts, serving clients and retailers across the globe. Every piece leaving our workshop carries the essence of Jodhpur's rich artistic heritage.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card hover-lift"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                <stat.icon size={22} />
              </div>
              <div className="font-display text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
