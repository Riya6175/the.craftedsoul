import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Instagram } from "lucide-react";
import {  getWhatsAppProductLink, INSTAGRAM_LINK } from "../data/product";

// Image imports map
import blackOg from "../assets/resininsta/black_og.jpg";
import necklace from "../assets/resininsta/necklace.jpeg";
import productBracelet1 from "../assets/resininsta/bracelet_floaral.jpeg";
import whiteFlower from "../assets/resininsta/white.jpeg";
import peacock from "../assets/resininsta/peacock.jpg";
import daisyEarrings from "../assets/resininsta/pink_flower.jpg";
import rubyEarrings from "../assets/resininsta/pink_whitefloral.jpg";
import yellow_pinkflower from "../assets/resininsta/yello_pinkflower.jpg";
import greenGlass from "../assets/resininsta/green_glass.jpeg";
import greenMarron from "../assets/resininsta/green_marron.jpg";
import pinkBracelet from "../assets/resininsta/pink_bracelet.jpg";
import redFloral from "../assets/resininsta/red_floral.jpg";
import roseEarrings from "../assets/resininsta/rose_earrings.jpg";
import black_earrings from "../assets/resininsta/black.jpeg";
import blue_bells from "../assets/resininsta/blue_bells.jpg";
import greenBracelet from "../assets/resininsta/green_bracelet.jpg";



export const imageMap= {
  "black_og": blackOg,
  "initial-pendant": necklace,
  "bracelet-floral": productBracelet1,
  "white-flower":whiteFlower,
  "peacock": peacock,
  "pink_flower":daisyEarrings,
  "pink_whitefloral": rubyEarrings ,
  "yello_pinkflower": yellow_pinkflower,
  "green_glass": greenGlass,
  "green_marron":greenMarron,
  "pink_bracelet":pinkBracelet,
  "red_floral":redFloral,
  "rose_earrings":roseEarrings,
  "black": black_earrings,
  "blue_bells": blue_bells,
  "green_bracelet":greenBracelet,

};


const ProductCard = ({ product }) => {
  const imgSrc = imageMap[product.images[0]] || blackOg;

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
