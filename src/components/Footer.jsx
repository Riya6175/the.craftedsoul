import React from "react";
import { Link } from "react-router-dom";
import { Heart, Instagram } from "lucide-react";
import { INSTAGRAM_LINK, WHATSAPP_LINK } from "../data/product";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pb-24 md:pb-8">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              The Crafted Soul
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Handmade resin jewellery — each piece unique like you. Crafted with love, flowers, and a little bit of magic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Collections", path: "/collections" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-gradient text-primary-foreground px-4 py-2 rounded-full text-sm font-body font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-gradient text-primary-foreground px-4 py-2 rounded-full text-sm font-body font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Instagram size={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-primary fill-primary" /> by The Crafted Soul © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
