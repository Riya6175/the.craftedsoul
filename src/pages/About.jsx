import React from "react";
import { motion } from "framer-motion";
import { Heart, Palette, Star, Flower2 } from "lucide-react";
import Layout from "../components/Layout"
import aboutImage from "../assets/resininsta/about-crafting.png";
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "../data/product";
import { MessageCircle, Instagram } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding gradient-hero">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground max-w-lg mx-auto"
          >
            Behind every piece is a story of passion, patience, and a love for handmade art.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={aboutImage}
                alt="Artist crafting handmade resin jewellery at The Crafted Soul workshop"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                The Journey of The Crafted Soul
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  It all began with a simple love for flowers and a curiosity about resin art. What started as a hobby in a tiny corner of my room soon turned into a passion that I couldn't contain.
                </p>
                <p>
                  Every piece at The Crafted Soul is born from hours of careful work — selecting the perfect dried flowers, mixing resin with precision, and waiting patiently for each creation to cure. No two pieces are ever the same, because nature itself is our co-artist.
                </p>
                <p>
                  We believe jewellery should tell a story. Whether it's a pair of earrings holding your birth month flowers or a pendant made from petals of a bouquet that held sentimental value — we turn memories into wearable art.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding gradient-blush">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            What Makes Us Special
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Flower2,
                title: "Real Flowers",
                desc: "We use real dried and pressed flowers, preserved forever in crystal-clear resin.",
              },
              {
                icon: Palette,
                title: "Custom Designs",
                desc: "Want something unique? We create bespoke pieces tailored to your vision.",
              },
              {
                icon: Heart,
                title: "Small Business Love",
                desc: "Every order supports a small, independent artist and maker.",
              },
              {
                icon: Star,
                title: "Premium Quality",
                desc: "UV-resistant resin, hypoallergenic metals, and careful craftsmanship in every piece.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blush/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Let's Create Something Beautiful Together
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
            Have a custom idea? Want to personalize a gift? Reach out and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-gradient text-primary-foreground font-body font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-gradient text-primary-foreground font-body font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Instagram size={20} />
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
