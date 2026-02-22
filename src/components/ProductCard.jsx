import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Instagram } from "lucide-react";
import {  getWhatsAppProductLink, INSTAGRAM_LINK } from "../data/product";

// Image imports map
import productEarrings1 from "../assets/product-earrings-1.jpg";
import productPendant1 from "../assets/product-pendant-1.jpg";
import productBracelet1 from "../assets/product-bracelet-1.jpg";
import productKeychain1 from "../assets/product-keychain-1.jpg";
import productHairclip1 from "../assets/product-hairclip-1.jpg";
import productCustomEarrings from "../assets/product-custom-earrings.jpg";

export const imageMap= {
  "product-earrings-1": productEarrings1,
  "product-pendant-1": productPendant1,
  "product-bracelet-1": productBracelet1,
  "product-keychain-1": productKeychain1,
  "product-hairclip-1": productHairclip1,
  "product-custom-earrings": productCustomEarrings,
};


const ProductCard = ({ product }) => {
  const imgSrc = imageMap[product.images[0]] || productEarrings1;

  return (
    <div className="group card-hover bg-card rounded-xl overflow-hidden border border-border/50">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={imgSrc}
            alt={`${product.name} - Handmade resin jewellery by The Crafted Soul`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-primary font-body font-semibold text-base mt-1">{product.price}</p>
        <p className="text-sm text-muted-foreground font-body mt-2 line-clamp-2">{product.description}</p>

        <div className="flex gap-2 mt-4">
          <a
            href={getWhatsAppProductLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 whatsapp-gradient text-primary-foreground text-xs font-body font-semibold py-2 px-3 rounded-full flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={14} />
            Ask on WhatsApp
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-gradient text-primary-foreground text-xs font-body font-semibold py-2 px-3 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <Instagram size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
