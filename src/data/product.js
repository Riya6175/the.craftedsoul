

export const WHATSAPP_NUMBER = "+917016896834"; // Replace with actual number
export const INSTAGRAM_HANDLE = "the.craftedsoul"; // Replace with actual handle
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const getWhatsAppProductLink = (productName) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in "${productName}" from The Crafted Soul. Can you share more details?`)}`;

export const categories = [
  { id: "earrings", name: "Earrings", slug: "resin-earrings" },
  { id: "pendants", name: "Pendants", slug: "resin-pendants" },
  { id: "bracelets", name: "Bracelets", slug: "resin-bracelets" },
  // { id: "keychains", name: "Keychains", slug: "resin-keychains" },
  // { id: "hair-accessories", name: "Hair Accessories", slug: "resin-hair-accessories" },
  // { id: "custom", name: "Custom Orders", slug: "custom-orders" },
];

export const products = [
  {
    id: "black-flower-earrings",
    name: "Black Flower Earrings",
    price: "₹449",
    description: "Delicate pressed flower resin earrings with Pink and white blooms.",
    longDescription: "These stunning drop earrings feature real pressed flowers carefully preserved in crystal-clear resin. Each pair is one-of-a-kind, with natural pink and white blooms that catch the light beautifully. Finished with hypoallergenic hooks, these are perfect for everyday elegance.",
    category: "earrings",
    images: ["black_og"],
    customizable: true,
    careInstructions: [
      "Avoid direct contact with water and perfume",
      "Store in a cool, dry place away from sunlight",
      "Handle with care — resin is lightweight but can chip if dropped",
      "Clean gently with a soft, dry cloth",
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp. All orders are carefully packaged with love.",
  },
  {
    id: "initial-resin-pendants",
    name: "Initial Pendant Necklace",
    price: "₹649",
    description: "Gold-accented resin pendant with real flowers and gold flakes and your initial. Customizable with your choice of flower and initial.",
    longDescription: "A delicate and breathtaking round pendant featuring real cherry blossom petals and shimmering gold flakes, suspended on a delicate gold chain. This piece is a celebration of nature's beauty preserved forever in resin.",
    category: "pendants",
    images: ["initial-pendant"],
    customizable: true,
    careInstructions: [
      "Keep away from harsh chemicals",
      "Store flat to prevent tangling",
      "Avoid prolonged sun exposure",
      "Wipe with a dry microfibre cloth",
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp.",
  },
  {
    id: "garden-resin-bracelets",
    name: "Garden Cuff Bracelet",
    price: "₹399",
    description: "Resin cuff bracelet with tiny wildflowers and gold chain detail.",
    longDescription: "This unique cuff bracelet features a garden of tiny wildflowers frozen in time within clear resin. The gold chain adds a touch of elegance, making it the perfect statement piece for nature lovers.",
    category: "bracelets",
    images: ["bracelet-floral"],
    customizable: true,
    careInstructions: [
      "Remove before washing hands or swimming",
      "Store separately to avoid scratches",
      "Keep away from extreme heat",
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp.",
  },
  {
    id: "white-flower-resin-earrings",
    name: "White Flower Resin Earrings",
    price: "₹199",
    description: "Delicate pressed flower resin earrings with pink blooms.",
    longDescription: "These stunning drop earrings feature real pressed pink flowers carefully preserved in crystal-clear resin. Each pair is one-of-a-kind, with natural white blooms that catch the light beautifully. Finished with hypoallergenic hooks, these are perfect for everyday elegance.",
    category: "earrings",
    images: ["white-flower"],
    customizable: true,
    careInstructions: [
      "Remove before washing hands or swimming",
      "Store separately to avoid scratches",
      "Keep away from extreme heat",
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp.",
  },
  {
    id: "peacock-resin-earrings",
    name: "Peacock Resin Earrings",
    price: "₹199",
    description: "Delicate pressed flower resin earrings with peacock feather details.",
    longDescription: "These stunning stud earrings feature  peacock feathers carefully preserved in crystal-clear resin. Each pair is one-of-a-kind, with natural details that catch the light beautifully. Finished with hypoallergenic hooks, these are perfect for everyday elegance.",
    category: "earrings",
    images: ["peacock"],
    customizable: true,
    careInstructions: [   
      "Remove before washing hands or swimming",
      "Store separately to avoid scratches",
      "Keep away from extreme heat",
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp.",
  },
  {
    id: "pink-daisy-oxidised-earrings",
    name: "Pink Daisy Oxidised Earrings",
    price: "₹349",
    description: "Oxidised silver drop earrings with vibrant pink daisy preserved in clear resin.",
    longDescription: "These statement oxidised earrings feature a bold pink daisy beautifully preserved inside a crystal-clear resin frame. The intricate silver detailing and delicate ghungroo-style drops add a traditional touch, making them perfect for festive wear or ethnic outfits. Each pair is handcrafted and one-of-a-kind, celebrating nature in its purest form.",
    category: "earrings",
    images: ["pink_flower"],
    customizable: true,
    careInstructions: [
      "Avoid contact with water and perfume",
      "Store in an airtight box to prevent tarnish",
      "Keep away from direct sunlight",
      "Clean gently with a soft dry cloth"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp. Carefully packed to ensure safe delivery."
  },
  {
    id: "ruby-pressed-flower-oxidised-earrings",
    name: "Ruby Pressed Flower Earrings",
    price: "₹449",
    description: "Square oxidised silver earrings with delicate pressed flowers in deep ruby resin.",
    longDescription: "These elegant square-shaped oxidised earrings feature tiny real pressed flowers preserved in a rich ruby-toned resin base. The detailed silver frame and dangling bead accents add movement and charm. Lightweight yet eye-catching, they pair beautifully with both ethnic and contemporary outfits.",
    category: "earrings",
    images: ["pink_whitefloral"],
    customizable: true,
    careInstructions: [
      "Avoid exposure to moisture",
      "Store separately to prevent scratches",
      "Keep away from harsh chemicals",
      "Wipe gently after use"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp."
  },
  {
    id: "sunset-bloom-round-earrings",
    name: "Sunset Bloom Round Earrings",
    price: "₹349",
    description: "Round gold-framed resin earrings with bright pink flower in warm amber base.",
    longDescription: "Inspired by sunset hues, these round resin earrings feature a vivid pink bloom suspended in a warm amber-toned base. Finished with a gold frame and soft peach bead drops, they bring a fresh and cheerful vibe to your look. Perfect for brunch dates, festive mornings, or gifting someone special.",
    category: "earrings",
    images: ["yello_pinkflower"],
    customizable: true,
    careInstructions: [
      "Remove before washing hands or swimming",
      "Store in a cool, dry place",
      "Avoid prolonged sun exposure",
      "Clean with a soft microfiber cloth"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp."
  },
  {
    id: "midnight-shimmer-stud-earrings",
    name: "Midnight Shimmer Stud Earrings",
    price: "₹299",
    description: "Deep green shimmer resin studs with textured gold accent tops.",
    longDescription: "These modern statement studs feature a deep emerald shimmer resin base paired with textured gold accents. Minimal yet bold, they are designed for effortless styling — whether you're dressing up for an evening event or adding a touch of elegance to everyday wear. Lightweight and comfortable for long hours.",
    category: "earrings",
    images: ["green_glass"],
    customizable: false,
    careInstructions: [
      "Avoid direct contact with water",
      "Store separately to prevent scratches",
      "Keep away from extreme heat",
      "Wipe gently after use"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp."
  },
  {
    id: "forest-dual-tone-resin-earrings",
    name: "Forest Dual Tone Earrings",
    price: "₹329",
    description: "Round gold-framed resin earrings with green and maroon botanical detailing.",
    longDescription: "These handcrafted round earrings feature a unique blend of deep green and maroon resin, delicately highlighting botanical elements within. Finished with small green bead drops and a gold frame, they create a rich, earthy look perfect for traditional and fusion styling.",
    category: "earrings",
    images: ["green_marron"],
    customizable: true,
    careInstructions: [
      "Keep away from water and perfumes",
      "Store in a dry place",
      "Avoid dropping to prevent resin damage",
      "Clean with a soft cloth"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp."
  },
  {
    id: "rose-petal-resin-cuff-bracelet",
    name: "Rose Petal Resin Cuff Bracelet",
    price: "₹379",
    description: "Minimal open cuff bracelet with preserved pink petals in resin.",
    longDescription: "This delicate open cuff bracelet features two round resin settings filled with real pink petals, creating a soft and romantic aesthetic. Lightweight and adjustable, it’s perfect for stacking or wearing alone as a subtle statement piece. A timeless design for everyday elegance.",
    category: "bracelets",
    images: ["pink_bracelet"],
    customizable: true,
    careInstructions: [
      "Remove before washing hands",
      "Store separately to avoid scratches",
      "Keep away from prolonged sunlight",
      "Clean gently with a dry cloth"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp."
  },
  {
    id: "cherry-blossom-mini-drops",
    name: "Cherry Blossom Mini Drop Earrings",
    price: "₹299",
    description: "Minimal round resin earrings with delicate white blossoms in deep red base.",
    longDescription: "These elegant mini drop earrings feature tiny white blossoms preserved in a rich red resin base. The subtle gold frame enhances their warmth, making them perfect for everyday wear or intimate festive gatherings. Lightweight and timeless, each pair carries the charm of real flowers frozen in time.",
    category: "earrings",
    images: ["red_floral"],
    customizable: true,
    careInstructions: [
      "Avoid direct contact with water and perfume",
      "Store in a dry place away from sunlight",
      "Handle gently to prevent scratches",
      "Clean with a soft dry cloth"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp. Carefully packed for safe delivery."
  },
  {
    id: "rose-garden-oxidised-earrings",
    name: "Rose Garden Oxidised Earrings",
    price: "₹449",
    description: "Statement square oxidised earrings filled with crushed pink rose petals.",
    longDescription: "These bold oxidised silver earrings feature beautifully crushed pink rose petals preserved inside clear resin. The intricate frame detailing and dangling ghungroo accents give them a classic traditional appeal. Designed for festive outfits and special occasions, they make a striking yet elegant statement.",
    category: "earrings",
    images: ["rose_earrings"],
    customizable: true,
    careInstructions: [
      "Keep away from moisture and harsh chemicals",
      "Store in an airtight box to prevent tarnishing",
      "Avoid dropping to protect resin surface",
      "Wipe gently after use"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp."
  },
  {
    id: "midnight-bloom-round-earrings",
    name: "Midnight Bloom Round Earrings",
    price: "₹349",
    description: "Round gold-toned earrings with white pressed flowers on deep black resin.",
    longDescription: "These round earrings showcase delicate white pressed flowers set against a deep midnight-black resin base. Finished with gold detailing and soft bead drops, they bring together elegance and contrast beautifully. Perfect for evening wear or adding a dramatic touch to simple outfits.",
    category: "earrings",
    images: ["black"],
    customizable: true,
    careInstructions: [
      "Remove before washing hands or swimming",
      "Store separately to prevent scratches",
      "Keep away from extreme heat",
      "Clean gently with a microfiber cloth"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp."
  },
  {
    id: "royal-blue-coin-earrings",
    name: "Royal Blue Coin Earrings",
    price: "₹349",
    description: "Bold blue resin coin earrings with gold flakes and antique bell drops.",
    longDescription: "Inspired by royal hues, these coin-shaped earrings feature a vibrant blue resin base accented with subtle gold flakes. The antique-style frame and bell drops add a festive charm, making them ideal for celebrations and traditional ensembles. Lightweight yet eye-catching, they’re designed to stand out.",
    category: "earrings",
    images: ["blue_bells"],
    customizable: false,
    careInstructions: [
      "Avoid contact with water and perfumes",
      "Store in a cool, dry place",
      "Handle with care to avoid resin damage",
      "Clean gently with a dry cloth"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp."
  },
  {
    id: "emerald-gold-resin-bracelet",
    name: "Emerald Gold Resin Bracelet",
    price: "₹349",
    description: "Minimal round resin bracelet with emerald shimmer and gold flakes.",
    longDescription: "This sleek double-band bracelet features a round emerald-toned resin centerpiece with delicate gold flakes embedded within. The subtle shimmer and minimal design make it perfect for daily wear or layering with other pieces. Lightweight and elegant, it adds a refined touch to any outfit.",
    category: "bracelets",
    images: ["green_bracelet"],
    customizable: true,
    careInstructions: [
      "Remove before washing hands",
      "Avoid prolonged sun exposure",
      "Store separately to prevent scratches",
      "Wipe gently with a soft dry cloth"
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp."
  }


];
