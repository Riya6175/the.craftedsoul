import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, ArrowLeft, Sparkles, Truck, ShieldCheck } from "lucide-react";
import Layout from "../components/Layout";
import { imageMap } from "../components/ProductCard";
import { products, getWhatsAppProductLink, INSTAGRAM_LINK } from "../data/product";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/collections" className="text-primary font-body hover:underline">
            ← Back to Collections
          </Link>
        </div>
      </Layout>
    );
  }

  const imgSrc = imageMap[product.images[0]];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Collections
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-square rounded-2xl overflow-hidden bg-card"
            >
              <img
                src={imgSrc}
                alt={`${product.name} - Handmade resin jewellery by The Crafted Soul`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-body font-semibold">
                {product.category.replace("-", " ")}
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-2">
                {product.name}
              </h1>
              <p className="font-display text-2xl text-primary font-semibold mb-6">{product.price}</p>

              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {product.longDescription}
              </p>

              {product.customizable && (
                <div className="flex items-center gap-2 text-gold font-body text-sm mb-6 bg-gold/10 px-4 py-2 rounded-lg">
                  <Sparkles size={16} />
                  <span>Customization available — tell us your preferences!</span>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={getWhatsAppProductLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-gradient text-primary-foreground font-body font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-gradient text-primary-foreground font-body font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Instagram size={18} />
                  Open Instagram DM
                </a>
              </div>

              {/* Care Instructions */}
              <div className="border-t border-border pt-6 mb-6">
                <h2 className="font-display text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-primary" />
                  Care Instructions
                </h2>
                <ul className="space-y-2">
                  {product.careInstructions.map((instruction) => (
                    <li key={instruction} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery */}
              <div className="border-t border-border pt-6">
                <h2 className="font-display text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Truck size={18} className="text-primary" />
                  Delivery Information
                </h2>
                <p className="font-body text-sm text-muted-foreground">{product.deliveryInfo}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
