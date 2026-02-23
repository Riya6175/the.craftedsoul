

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
    price: "₹599",
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
    id: "garden-resin-bracelets",
    name: "Garden Cuff Bracelet",
    price: "₹599",
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
];
