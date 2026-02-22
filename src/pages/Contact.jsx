import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Instagram, MapPin, Send } from "lucide-react";
import Layout from "../components/Layout"
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "../data/product"
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to WhatsApp with the message
    const whatsappMessage = `Hi! I'm ${name}. ${message}`;
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Your message will be sent via WhatsApp.",
    });
    setName("");
    setMessage("");
  };

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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground max-w-lg mx-auto"
          >
            Have a question or want to place a custom order? We'd love to hear from you!
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Reach Us Directly
              </h2>

              <div className="space-y-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-gradient text-primary-foreground font-body font-semibold px-6 py-4 rounded-xl flex items-center gap-3 hover:opacity-90 transition-opacity w-full"
                >
                  <MessageCircle size={24} />
                  <div>
                    <div className="text-base">WhatsApp Us</div>
                    <div className="text-xs opacity-80">Fastest way to reach us</div>
                  </div>
                </a>

                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-gradient text-primary-foreground font-body font-semibold px-6 py-4 rounded-xl flex items-center gap-3 hover:opacity-90 transition-opacity w-full"
                >
                  <Instagram size={24} />
                  <div>
                    <div className="text-base">Instagram DM</div>
                    <div className="text-xs opacity-80">@thecraftedsoul</div>
                  </div>
                </a>

                <div className="bg-card text-foreground font-body px-6 py-4 rounded-xl flex items-center gap-3 border border-border/50">
                  <MapPin size={24} className="text-primary" />
                  <div>
                    <div className="text-base font-semibold">Based in India</div>
                    <div className="text-xs text-muted-foreground">We ship pan-India with love 💕</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send a Quick Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="font-body text-sm text-foreground font-medium block mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-body text-sm text-foreground font-medium block mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tell us what you're looking for..."
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send size={18} />
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
