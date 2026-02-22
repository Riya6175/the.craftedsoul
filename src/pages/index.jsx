import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, Leaf, Palette, Heart, Sparkles, Star, Quote } from "lucide-react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { products, WHATSAPP_LINK, INSTAGRAM_LINK } from "../data/product";
// import heroImage from "@/assets/hero-jewellery.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const testimonials = [
  {
    name: "Priya S.",
    text: "Absolutely in love with my floral earrings! They're so delicate and unique. Everyone asks me where I got them!",
    rating: 5,
  },
  {
    name: "Ananya M.",
    text: "The custom pendant I ordered for my sister's birthday was perfect. The attention to detail is incredible.",
    rating: 5,
  },
  {
    name: "Riya K.",
    text: "Beautiful packaging and the bracelet looked even better in person. Will definitely order again!",
    rating: 5,
  },
];

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          {/* <img
            src={heroImage}
            alt="Handmade resin jewellery collection by The Crafted Soul featuring floral earrings and rings"
            className="w-full h-full object-cover opacity-30"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto text-center"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-sm tracking-[0.3em] uppercase text-primary font-body font-semibold mb-4"
            >
              Handmade with Love
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              The Crafted Soul
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Each piece of resin jewellery is handcrafted with real flowers, making every creation as unique as the soul who wears it.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-gradient text-primary-foreground font-body font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                <MessageCircle size={20} />
                Enquire on WhatsApp
              </a>
              <Link
                to="/collections"
                className="bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Sparkles size={20} />
                View Collections
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Featured Pieces
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Explore our most loved handmade resin jewellery — crafted with real flowers and endless love.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/collections"
              className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              View All Collections →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Handmade */}
      <section className="section-padding gradient-blush">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Why Handmade?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Eco-Friendly",
                desc: "We use real dried flowers and sustainable materials, giving nature a second life in beautiful jewellery.",
              },
              {
                icon: Palette,
                title: "Fully Customizable",
                desc: "Choose your flowers, colors, and shapes. Every piece can be made uniquely yours.",
              },
              {
                icon: Heart,
                title: "Made with Love",
                desc: "Each piece is carefully handcrafted — no machines, no mass production. Just passion and care.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 bg-background rounded-xl shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-blush/30 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <Quote size={24} className="text-blush mb-4" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="font-body text-sm font-semibold text-foreground">— {t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="section-padding gradient-blush">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Instagram size={40} className="mx-auto text-primary mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Follow Us on Instagram
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-md mx-auto">
              See our latest creations, behind-the-scenes crafting, and customer stories.
            </p>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 instagram-gradient text-primary-foreground font-body font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <Instagram size={20} />
              @thecraftedsoul
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
