import React from "react";
import { MessageCircle, Instagram } from "lucide-react";
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "../data/product";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border">
      <div className="flex">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 whatsapp-gradient text-primary-foreground flex items-center justify-center gap-2 py-3 text-sm font-body font-semibold"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 instagram-gradient text-primary-foreground flex items-center justify-center gap-2 py-3 text-sm font-body font-semibold"
        >
          <Instagram size={18} />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
